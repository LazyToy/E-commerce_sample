'use client';

import {
    Title,
    Text,
    Card,
    SimpleGrid,
    Group,
    Stack,
    Progress,
    Badge,
    Table,
    Avatar,
    ThemeIcon,
} from '@mantine/core';
import {
    IconPackage,
    IconShoppingCart,
    IconUsers,
    IconCurrencyWon,
    IconTrendingUp,
    IconAlertCircle,
} from '@tabler/icons-react';

/**
 * 통계 카드 데이터
 */
const stats = [
    {
        title: '이번 달 매출',
        value: '₩4,520,000',
        change: '+12%',
        icon: IconCurrencyWon,
        color: 'green',
    },
    {
        title: '총 주문',
        value: '23건',
        change: '+5건',
        icon: IconShoppingCart,
        color: 'blue',
    },
    {
        title: '등록 제품',
        value: '18개',
        change: '3개 품절',
        icon: IconPackage,
        color: 'brown',
    },
    {
        title: '신규 고객',
        value: '47명',
        change: '+15%',
        icon: IconUsers,
        color: 'violet',
    },
];

/**
 * 최근 주문 데이터
 */
const recentOrders = [
    {
        id: 'ORD-20260126-001',
        customer: '김지현',
        product: '린넨 토트백 - 내츄럴',
        amount: 189000,
        status: 'producing',
    },
    {
        id: 'ORD-20260125-003',
        customer: '이수민',
        product: '가죽 크로스백 - 브라운',
        amount: 285000,
        status: 'confirmed',
    },
    {
        id: 'ORD-20260125-002',
        customer: '박현우',
        product: '캔버스 파우치 세트',
        amount: 78000,
        status: 'shipping',
    },
    {
        id: 'ORD-20260124-001',
        customer: '최은영',
        product: '미니 숄더백 - 베이지',
        amount: 156000,
        status: 'delivered',
    },
];

/**
 * 재고 알림 데이터
 */
const stockAlerts = [
    { name: '린넨 토트백 - 내츄럴', stock: 2, max: 5 },
    { name: '미니 숄더백 - 베이지', stock: 0, max: 3 },
    { name: '가죽 크로스백 - 브라운', stock: 3, max: 5 },
];

/**
 * 주문 상태 배지
 */
function StatusBadge({ status }: { status: string }) {
    const config: Record<string, { color: string; label: string }> = {
        pending: { color: 'gray', label: '대기중' },
        confirmed: { color: 'blue', label: '확인됨' },
        producing: { color: 'yellow', label: '제작중' },
        shipping: { color: 'cyan', label: '배송중' },
        delivered: { color: 'green', label: '배송완료' },
        cancelled: { color: 'red', label: '취소' },
    };
    const { color, label } = config[status] || { color: 'gray', label: status };
    return <Badge color={color}>{label}</Badge>;
}

/**
 * 관리자 대시보드 페이지
 */
export default function AdminDashboard() {
    return (
        <div>
            {/* 페이지 헤더 */}
            <Group justify="space-between" align="flex-end" mb="xl">
                <div>
                    <Text size="sm" c="dimmed">관리자 대시보드</Text>
                    <Title order={2}>안녕하세요, 장인님 👋</Title>
                </div>
                <Text size="sm" c="dimmed">
                    마지막 업데이트: 2026.01.26 21:00
                </Text>
            </Group>

            {/* 통계 카드 */}
            <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg" mb="xl">
                {stats.map((stat) => (
                    <Card key={stat.title} padding="lg" radius="lg" withBorder>
                        <Group justify="space-between" align="flex-start">
                            <div>
                                <Text size="sm" c="dimmed" mb={4}>
                                    {stat.title}
                                </Text>
                                <Text size="xl" fw={700}>
                                    {stat.value}
                                </Text>
                                <Group gap={4} mt={4}>
                                    <IconTrendingUp size={14} className="text-green-500" />
                                    <Text size="xs" c="green">
                                        {stat.change}
                                    </Text>
                                </Group>
                            </div>
                            <ThemeIcon size={48} radius="lg" color={stat.color} variant="light">
                                <stat.icon size={24} />
                            </ThemeIcon>
                        </Group>
                    </Card>
                ))}
            </SimpleGrid>

            <SimpleGrid cols={{ base: 1, lg: 2 }} spacing="lg">
                {/* 최근 주문 */}
                <Card padding="lg" radius="lg" withBorder>
                    <Group justify="space-between" mb="md">
                        <Text fw={600} size="lg">최근 주문</Text>
                        <Badge color="blue" variant="light">총 23건</Badge>
                    </Group>
                    <Table>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th>주문번호</Table.Th>
                                <Table.Th>고객</Table.Th>
                                <Table.Th>상태</Table.Th>
                                <Table.Th>금액</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {recentOrders.map((order) => (
                                <Table.Tr key={order.id}>
                                    <Table.Td>
                                        <Text size="sm" fw={500}>{order.id}</Text>
                                        <Text size="xs" c="dimmed">{order.product}</Text>
                                    </Table.Td>
                                    <Table.Td>
                                        <Group gap="xs">
                                            <Avatar size={24} radius="xl" color="brown">
                                                {order.customer[0]}
                                            </Avatar>
                                            <Text size="sm">{order.customer}</Text>
                                        </Group>
                                    </Table.Td>
                                    <Table.Td>
                                        <StatusBadge status={order.status} />
                                    </Table.Td>
                                    <Table.Td>
                                        <Text size="sm" fw={500}>
                                            ₩{order.amount.toLocaleString()}
                                        </Text>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Card>

                {/* 재고 알림 */}
                <Card padding="lg" radius="lg" withBorder>
                    <Group justify="space-between" mb="md">
                        <Group gap="xs">
                            <IconAlertCircle size={20} className="text-orange-500" />
                            <Text fw={600} size="lg">재고 알림</Text>
                        </Group>
                        <Badge color="orange" variant="light">3개 제품</Badge>
                    </Group>
                    <Stack gap="md">
                        {stockAlerts.map((item) => (
                            <div key={item.name}>
                                <Group justify="space-between" mb={4}>
                                    <Text size="sm" fw={500}>{item.name}</Text>
                                    <Text size="sm" c={item.stock === 0 ? 'red' : 'orange'} fw={600}>
                                        {item.stock} / {item.max}개
                                    </Text>
                                </Group>
                                <Progress
                                    value={(item.stock / item.max) * 100}
                                    color={item.stock === 0 ? 'red' : item.stock <= 2 ? 'orange' : 'green'}
                                    size="sm"
                                    radius="xl"
                                />
                            </div>
                        ))}
                    </Stack>
                </Card>
            </SimpleGrid>
        </div>
    );
}
