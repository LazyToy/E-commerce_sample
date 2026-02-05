'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Container, Paper, Title, TextInput, PasswordInput, Button, Stack, Text, Anchor } from '@mantine/core';
import { notifications } from '@mantine/notifications';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      notifications.show({ title: '확인 필요', message: '비밀번호가 서로 다릅니다.', color: 'red' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        notifications.show({
          title: '회원가입 실패',
          message: data?.error || '입력 정보를 다시 확인해 주세요.',
          color: 'red',
        });
        return;
      }

      notifications.show({
        title: '회원가입 완료',
        message: '환영합니다! 바로 로그인되었습니다.',
        color: 'green',
      });
      router.push('/');
      router.refresh();
    } catch {
      notifications.show({ title: '오류', message: '회원가입 처리 중 문제가 발생했습니다.', color: 'red' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <Container size="xs">
          <Paper shadow="md" radius="lg" p="xl" withBorder>
            <Stack gap="md">
              <Title order={2}>회원가입</Title>
              <Text size="sm" c="dimmed">
                이메일과 비밀번호를 입력해 새 계정을 만들어 보세요.
              </Text>
              <TextInput
                label="이메일"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                required
              />
              <PasswordInput
                label="비밀번호"
                placeholder="8자 이상 입력"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
              />
              <PasswordInput
                label="비밀번호 확인"
                placeholder="다시 한 번 입력"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.currentTarget.value)}
                required
              />
              <Button onClick={handleSubmit} loading={loading} color="brown" radius="xl">
                회원가입
              </Button>
              <Text size="sm" c="dimmed">
                이미 계정이 있으신가요?{' '}
                <Anchor component={Link} href="/auth/login">
                  로그인하기
                </Anchor>
              </Text>
            </Stack>
          </Paper>
        </Container>
      </main>
      <Footer />
    </>
  );
}
