'use client';

import { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { PagePlaceholder } from '../_components/PagePlaceholder';
import { Badge, Card, Container, Group, Loader, Stack, Text, Title } from '@mantine/core';
import { useSession } from '@/lib/hooks/useSession';

type OrderItem = { id: string; title: string; amount: number; status: string; placedAt: string };

export default function OrdersPage() {
  const { user, loading: sessionLoading, isAuthenticated } = useSession();
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      if (!isAuthenticated) {
        if (active) {
          setOrders([]);
          setLoading(false);
        }
        return;
      }

      try {
        setLoading(true);
        const res = await fetch('/api/user/overview');
        if (!res.ok) return;
        const data = await res.json();
        if (active) setOrders(data.orders || []);
      } finally {
        if (active) setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [isAuthenticated]);

  if (sessionLoading) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center">
          <Loader color="brown" />
        </main>
        <Footer />
      </>
    );
  }

  if (!user) {
    return (
      <>
        <Header />
        <PagePlaceholder
          badge="ORDERS"
          title="로그인이 필요합니다"
          description="로그인 후 주문내역을 확인할 수 있습니다."
          cta={{ label: '로그인하기', href: '/auth/login' }}
        />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <Container size="md">
          <Stack gap="lg">
            <div>
              <Badge color="brown" variant="light">
                ORDERS
              </Badge>
              <Title order={2} mt="xs">
                {user.name || user.email}님의 주문내역
              </Title>
              <Text c="dimmed" size="sm">
                로그인한 사용자 정보에 맞춰 주문이 표시됩니다.
              </Text>
            </div>

            {loading && (
              <Group justify="center">
                <Loader color="brown" />
              </Group>
            )}

            {!loading && orders.length === 0 && (
              <Card withBorder shadow="sm" radius="lg">
                <Stack gap="xs">
                  <Text fw={600}>표시할 주문이 없습니다.</Text>
                  <Text c="dimmed" size="sm">최근 주문이 여기에 나타납니다.</Text>
                </Stack>
              </Card>
            )}

            {orders.map((order) => (
              <Card key={order.id} withBorder shadow="sm" radius="lg">
                <Group justify="space-between" align="center">
                  <div>
                    <Text fw={700}>{order.title}</Text>
                    <Text size="sm" c="dimmed">
                      주문번호 {order.id} • {order.placedAt}
                    </Text>
                  </div>
                  <div className="text-right">
                    <Text fw={700}>₩{order.amount.toLocaleString()}</Text>
                    <Text size="sm" c="dimmed">{order.status}</Text>
                  </div>
                </Group>
              </Card>
            ))}
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
