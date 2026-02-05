import { DEMO_USER_EMAIL, DEMO_USER_PASSWORD_HASH } from './constants';

type StoredUser = {
  email: string;
  passwordHash: string;
  name: string;
  createdAt: number;
};

type PublicUser = {
  email: string;
  name: string;
};

const userStore = new Map<string, StoredUser>();

export function seedDemoUser(email: string, passwordHash: string, name = '데모 사용자') {
  const normalized = email.trim().toLowerCase();
  if (!userStore.has(normalized)) {
    userStore.set(normalized, { email: normalized, passwordHash, name, createdAt: Date.now() });
  }
}

export function findUser(email: string) {
  const normalized = email.trim().toLowerCase();
  return userStore.get(normalized) ?? null;
}

export function createUser(email: string, passwordHash: string, name = '') {
  const normalized = email.trim().toLowerCase();
  if (userStore.has(normalized)) return null;
  const user: StoredUser = { email: normalized, passwordHash, name, createdAt: Date.now() };
  userStore.set(normalized, user);
  return user;
}

export function getPublicUser(email: string): PublicUser | null {
  const user = findUser(email);
  if (!user) return null;
  return { email: user.email, name: user.name };
}

// 데모 계정 등록
seedDemoUser(DEMO_USER_EMAIL, DEMO_USER_PASSWORD_HASH);
