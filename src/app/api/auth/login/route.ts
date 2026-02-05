import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { DEMO_USER_EMAIL, DEMO_USER_PASSWORD_HASH, hashPassword } from '@/lib/auth/constants';
import { createSession } from '@/lib/auth/session';
import { findUser } from '@/lib/auth/users';

function safeCompare(a: string, b: string) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    const password = typeof body?.password === 'string' ? body.password : '';

    if (!email || !password) {
      return NextResponse.json({ error: '이메일과 비밀번호를 입력해 주세요.' }, { status: 400 });
    }

    const passwordHash = hashPassword(password);
    const storedUser = findUser(email);

    const matches = storedUser
      ? safeCompare(passwordHash, storedUser.passwordHash)
      : safeCompare(email, DEMO_USER_EMAIL) && safeCompare(passwordHash, DEMO_USER_PASSWORD_HASH);

    if (!matches) {
      // 동일한 응답으로 타이밍 유출 최소화
      await new Promise((r) => setTimeout(r, 200));
      return NextResponse.json({ error: '이메일 또는 비밀번호가 올바르지 않습니다.' }, { status: 401 });
    }

    await createSession(storedUser?.email ?? DEMO_USER_EMAIL);
    return NextResponse.json({ ok: true, user: storedUser ? { email: storedUser.email, name: storedUser.name } : { email: DEMO_USER_EMAIL, name: '데모 사용자' } });
  } catch (error) {
    console.error('Login error', error);
    return NextResponse.json({ error: '로그인 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
