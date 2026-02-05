'use client';

import { useEffect, useState } from 'react';
import { Header, Footer } from '@/components/layout';
import { PagePlaceholder } from '../_components/PagePlaceholder';
import { Badge, Card, Container, Group, Loader, Stack, Text, Title } from '@mantine/core';
import { useSession } from '@/lib/hooks/useSession';

type CartItem = { id: string; name: string; quantity: number; price: number };
type OrderItem = { id: string; title: string; amount: number; status: string; placedAt: string };

export default function CartPage() {
  const { user, loading: sessionLoading, isAuthenticated } = useSession();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const load = async () => {
      if (!isAuthenticated) {
        if (active) {
          setCart([]);
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
        if (!active) return;
        setCart(data.cart || []);
        setOrders(data.orders || []);
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
          badge="CART"
          title="로그인이 필요합니다"
          description="로그인 후 장바구니와 주문내역을 확인할 수 있습니다."
          cta={{ label: '로그인하기', href: '/auth/login' }}
        />
        <Footer />
      </>
    );
  }

  const hasData = cart.length > 0 || orders.length > 0;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 py-16">
        <Container size="md">
          <Stack gap="lg">
            <Group justify="space-between" align="center">
              <div>
                <Badge color="brown" variant="light">
                  CART & ORDERS
                </Badge>
                <Title order={2} mt="xs">
                  {user.name || user.email}님의 장바구니와 주문내역
                </Title>
                <Text c="dimmed" size="sm">
                  로그인한 사용자 정보에 맞게 개인화된 데이터를 표시합니다.
                </Text>
              </div>
            </Group>

            {loading && (
              <Group justify="center">
                <Loader color="brown" />
              </Group>
            )}

            {!hasData && !loading && (
              <Card withBorder shadow="sm" radius="lg">
                <Stack gap="xs">
                  <Text fw={600}>아직 담긴 상품이 없습니다.</Text>
                  <Text c="dimmed" size="sm">
                    원하는 제품을 선택해 장바구니에 추가해 보세요.
                  </Text>
                </Stack>
              </Card>
            )}

            {cart.length > 0 && (
              <Card withBorder shadow="sm" radius="lg">
                <Stack gap="sm">
                  <Group justify="space-between" align="center">
                    <Title order={4}>장바구니</Title>
                    <Badge color="brown" variant="light">
                      {cart.length}개
                    </Badge>
                  </Group>
                  {cart.map((item) => (
                    <Group key={item.id} justify="space-between">
                      <div>
                        <Text fw={600}>{item.name}</Text>
                        <Text size="sm" c="dimmed">
                          수량 {item.quantity}개
                        </Text>
                      </div>
                      <Text fw={700}>₩{(item.price * item.quantity).toLocaleString()}</Text>
                    </Group>
                  ))}
                </Stack>
              </Card>
            )}

            {orders.length > 0 && (
              <Card withBorder shadow="sm" radius="lg">
                <Stack gap="sm">
                  <Group justify="space-between" align="center">
                    <Title order={4}>구매내역</Title>
                    <Badge color="brown" variant="light">
                      {orders.length}건
                    </Badge>
                  </Group>
                  {orders.map((order) => (
                    <Group key={order.id} justify="space-between" align="center">
                      <div>
                        <Text fw={600}>{order.title}</Text>
                        <Text size="sm" c="dimmed">
                          주문번호 {order.id} • {order.placedAt}
                        </Text>
                      </div>
                      <div className="text-right">
                        <Text fw={700}>₩{order.amount.toLocaleString()}</Text>
                        <Text size="sm" c="dimmed">
                          {order.status}
                        </Text>
                      </div>
                    </Group>
                  ))}
                </Stack>
              </Card>
            )}
          </Stack>
        </Container>
      </main>
      <Footer />
    </>
  );
}
