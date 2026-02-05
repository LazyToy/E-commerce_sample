import crypto from 'crypto';

// 데모용 단일 계정. 비밀번호: P@ssw0rd!
export const DEMO_USER_EMAIL = 'demo@baneul-iyagi.com';
export const DEMO_USER_PASSWORD_HASH = '0e44ce7308af2b3de5232e4616403ce7d49ba2aec83f79c196409556422a4927';

export function hashPassword(password: string) {
  return crypto.createHash('sha256').update(password, 'utf8').digest('hex');
}
