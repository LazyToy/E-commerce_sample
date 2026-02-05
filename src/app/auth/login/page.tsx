'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header, Footer } from '@/components/layout';
import { useRouter } from 'next/navigation';
import { Container, Paper, Title, TextInput, PasswordInput, Button, Stack, Text, Anchor } from '@mantine/core';
import { notifications } from '@mantine/notifications';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        notifications.show({
          title: '로그인 실패',
          message: data?.error || '이메일 또는 비밀번호를 확인해주세요.',
          color: 'red',
        });
        return;
      }

      notifications.show({
        title: '로그인 완료',
        message: '환영합니다! 홈으로 이동합니다.',
        color: 'green',
      });
      router.push('/');
      router.refresh();
    } catch (error) {
      notifications.show({
        title: '오류',
        message: '로그인 처리 중 문제가 발생했습니다.',
        color: 'red',
      });
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
              <Title order={2}>로그인</Title>
              <Text size="sm" c="dimmed">
                이메일과 비밀번호를 입력해 주세요. (데모 전용 화면입니다)
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                required
              />
              <Button onClick={handleSubmit} loading={loading} color="brown" radius="xl">
                로그인
              </Button>
              <Text size="sm" c="dimmed">
                계정이 없으신가요?{' '}
                <Anchor component={Link} href="/auth/signup">
                  지금 가입하기
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
