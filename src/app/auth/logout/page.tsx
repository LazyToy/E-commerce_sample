'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { Container, Paper, Title, Button, Stack, Text } from '@mantine/core';
import { notifications } from '@mantine/notifications';

export default function LogoutPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/logout', { method: 'POST' });
      if (!res.ok) throw new Error('failed');
      notifications.show({ title: '로그아웃 완료', message: '정상적으로 로그아웃되었습니다.', color: 'green' });
      router.push('/');
      router.refresh();
    } catch {
      notifications.show({ title: '오류', message: '로그아웃 중 문제가 발생했습니다.', color: 'red' });
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
            <Stack gap="md" align="center">
              <Title order={2}>로그아웃</Title>
              <Text c="dimmed" size="sm">현재 세션을 종료합니다.</Text>
              <Button color="brown" radius="xl" onClick={handleLogout} loading={loading} fullWidth>
                로그아웃
              </Button>
            </Stack>
          </Paper>
        </Container>
      </main>
      <Footer />
    </>
  );
}
