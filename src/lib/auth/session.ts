import crypto from 'crypto';
import { cookies } from 'next/headers';

const sessionStore = new Map<string, { email: string; createdAt: number }>();
const SESSION_COOKIE = 'session_token';
const SESSION_MAX_AGE = 60 * 60 * 24; // 1 day

function randomToken() {
  return crypto.randomBytes(32).toString('hex');
}

const isProd = process.env.NODE_ENV === 'production';

export async function createSession(email: string) {
  const token = randomToken();
  sessionStore.set(token, { email, createdAt: Date.now() });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: isProd,
    path: '/',
    maxAge: SESSION_MAX_AGE,
  });
}

export async function deleteSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) {
    sessionStore.delete(token);
  }
  cookieStore.set(SESSION_COOKIE, '', {
    httpOnly: true,
    sameSite: 'lax',
    secure: isProd,
    path: '/',
    maxAge: 0,
  });
}

export async function getSession() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const session = sessionStore.get(token);
  if (!session) return null;
  // 만료 체크
  if (Date.now() - session.createdAt > SESSION_MAX_AGE * 1000) {
    sessionStore.delete(token);
    return null;
  }
  return session;
}
