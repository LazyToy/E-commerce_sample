import { NextResponse } from 'next/server';
import { DEMO_USER_EMAIL, hashPassword } from '@/lib/auth/constants';
import { createSession } from '@/lib/auth/session';
import { createUser, findUser } from '@/lib/auth/users';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => null);
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';
    const password = typeof body?.password === 'string' ? body.password : '';

    if (!email || !password) {
      return NextResponse.json({ error: '이메일과 비밀번호를 입력해 주세요.' }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: '올바른 이메일 형식이 아닙니다.' }, { status: 400 });
    }

    if (password.length < 8) {
      return NextResponse.json({ error: '비밀번호는 8자 이상이어야 합니다.' }, { status: 400 });
    }

    if (email === DEMO_USER_EMAIL || findUser(email)) {
      return NextResponse.json({ error: '이미 가입된 이메일입니다.' }, { status: 409 });
    }

    const passwordHash = hashPassword(password);
    const user = createUser(email, passwordHash);

    if (!user) {
      return NextResponse.json({ error: '이미 가입된 이메일입니다.' }, { status: 409 });
    }

    await createSession(user.email);
    return NextResponse.json({ ok: true, user: { email: user.email, name: user.name } }, { status: 201 });
  } catch (error) {
    console.error('Signup error', error);
    return NextResponse.json({ error: '회원가입 처리 중 오류가 발생했습니다.' }, { status: 500 });
  }
}
