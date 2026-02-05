import { NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';

type CartItem = { id: string; name: string; quantity: number; price: number };
type OrderItem = { id: string; title: string; amount: number; status: string; placedAt: string };

const demoData: Record<string, { cart: CartItem[]; orders: OrderItem[] }> = {
  'demo@baneul-iyagi.com': {
    cart: [
      { id: 'cart-1', name: '린넨 토트백 - 내추럴', quantity: 1, price: 189000 },
      { id: 'cart-2', name: '가죽 크로스백 - 브라운', quantity: 1, price: 285000 },
    ],
    orders: [
      { id: 'ORD-20260126-001', title: '린넨 토트백 - 내추럴', amount: 189000, status: 'producing', placedAt: '2026-01-26' },
      { id: 'ORD-20260125-003', title: '가죽 크로스백 - 브라운', amount: 285000, status: 'delivered', placedAt: '2026-01-25' },
    ],
  },
};

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
  }

  const data = demoData[session.email] ?? { cart: [], orders: [] };
  return NextResponse.json({
    userEmail: session.email,
    cart: data.cart,
    orders: data.orders,
  });
}
