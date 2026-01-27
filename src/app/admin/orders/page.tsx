'use client';

import { useState } from 'react';
import {
    Title,
    Text,
    Card,
    Group,
    Table,
    Badge,
    ActionIcon,
    TextInput,
    Select,
    Button,
    Menu,
    Modal,
    Stack,
    Textarea,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import {
    IconSearch,
    IconDotsVertical,
    IconTruck,
    IconCheck,
    IconX,
    IconPackage,
} from '@tabler/icons-react';

/**
 * 더미 주문 데이터
 */
const orders = [
    {
        id: 'ORD-20260126-001',
        customer: '김지현',
        email: 'jihyun@example.com',
        phone: '010-1234-5678',
        product: '린넨 토트백 - 내츄럴',
        quantity: 1,
        amount: 189000,
        status: 'producing',
        createdAt: '2026.01.26 14:30',
        address: '서울시 강남구 테헤란로 123',
    },
    {
        id: 'ORD-20260125-003',
        customer: '이수민',
        email: 'sumin@example.com',
        phone: '010-2345-6789',
        product: '가죽 크로스백 - 브라운',
        quantity: 1,
        amount: 285000,
        status: 'confirmed',
        createdAt: '2026.01.25 16:45',
        address: '서울시 마포구 월드컵로 456',
    },
    {
        id: 'ORD-20260125-002',
        customer: '박현우',
        email: 'hyunwoo@example.com',
        phone: '010-3456-7890',
        product: '캔버스 파우치 세트',
        quantity: 2,
        amount: 156000,
        status: 'shipping',
        createdAt: '2026.01.25 11:20',
        address: '경기도 성남시 분당구 정자동 789',
        trackingNumber: '123456789012',
    },
    {
        id: 'ORD-20260124-001',
        customer: '최은영',
        email: 'eunyoung@example.com',
        phone: '010-4567-8901',
        product: '미니 숄더백 - 베이지',
        quantity: 1,
        amount: 156000,
        status: 'delivered',
        createdAt: '2026.01.24 09:15',
        address: '부산시 해운대구 센텀로 101',
        trackingNumber: '987654321098',
    },
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
 * 관리자 주문 관리 페이지
 */
export default function AdminOrdersPage() {
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState<string | null>('all');
    const [trackingOpened, { open: openTracking, close: closeTracking }] =
        useDisclosure(false);
    const [selectedOrder, setSelectedOrder] = useState<string | null>(null);
    const [trackingNumber, setTrackingNumber] = useState('');

    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.id.toLowerCase().includes(search.toLowerCase()) ||
            order.customer.toLowerCase().includes(search.toLowerCase());
        const matchesStatus =
            statusFilter === 'all' || order.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const handleShipping = (orderId: string) => {
        setSelectedOrder(orderId);
        openTracking();
    };

    const submitTracking = () => {
        notifications.show({
            title: '송장 등록 완료',
            message: `주문 ${selectedOrder}의 송장이 등록되었습니다.`,
            color: 'green',
        });
        closeTracking();
        setTrackingNumber('');
    };

    const handleStatusChange = (orderId: string, newStatus: string) => {
        notifications.show({
            title: '상태 변경 완료',
            message: `주문 ${orderId}의 상태가 변경되었습니다.`,
            color: 'blue',
        });
    };

    return (
        <div>
            {/* 페이지 헤더 */}
            <Group justify="space-between" align="flex-end" mb="xl">
                <div>
                    <Text size="sm" c="dimmed">
                        주문 관리
                    </Text>
                    <Title order={2}>주문 목록</Title>
                </div>
                <Badge color="blue" size="lg" variant="light">
                    총 {orders.length}건
                </Badge>
            </Group>

            {/* 검색 및 필터 */}
            <Card padding="lg" radius="lg" withBorder mb="lg">
                <Group gap="md">
                    <TextInput
                        placeholder="주문번호 또는 고객명 검색..."
                        leftSection={<IconSearch size={16} />}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1"
                    />
                    <Select
                        placeholder="상태 필터"
                        value={statusFilter}
                        onChange={setStatusFilter}
                        data={[
                            { value: 'all', label: '전체' },
                            { value: 'pending', label: '대기중' },
                            { value: 'confirmed', label: '확인됨' },
                            { value: 'producing', label: '제작중' },
                            { value: 'shipping', label: '배송중' },
                            { value: 'delivered', label: '배송완료' },
                        ]}
                        w={150}
                    />
                </Group>
            </Card>

            {/* 주문 테이블 */}
            <Card padding="lg" radius="lg" withBorder>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>주문번호</Table.Th>
                            <Table.Th>고객</Table.Th>
                            <Table.Th>제품</Table.Th>
                            <Table.Th>금액</Table.Th>
                            <Table.Th>상태</Table.Th>
                            <Table.Th>주문일시</Table.Th>
                            <Table.Th>액션</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {filteredOrders.map((order) => (
                            <Table.Tr key={order.id}>
                                <Table.Td>
                                    <Text fw={500}>{order.id}</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm" fw={500}>
                                        {order.customer}
                                    </Text>
                                    <Text size="xs" c="dimmed">
                                        {order.phone}
                                    </Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">{order.product}</Text>
                                    <Text size="xs" c="dimmed">
                                        수량: {order.quantity}
                                    </Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text fw={500}>₩{order.amount.toLocaleString()}</Text>
                                </Table.Td>
                                <Table.Td>
                                    <StatusBadge status={order.status} />
                                </Table.Td>
                                <Table.Td>
                                    <Text size="sm">{order.createdAt}</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Menu shadow="md" width={180}>
                                        <Menu.Target>
                                            <ActionIcon variant="subtle" color="gray">
                                                <IconDotsVertical size={16} />
                                            </ActionIcon>
                                        </Menu.Target>
                                        <Menu.Dropdown>
                                            <Menu.Label>상태 변경</Menu.Label>
                                            <Menu.Item
                                                leftSection={<IconCheck size={14} />}
                                                onClick={() => handleStatusChange(order.id, 'confirmed')}
                                            >
                                                주문 확인
                                            </Menu.Item>
                                            <Menu.Item
                                                leftSection={<IconPackage size={14} />}
                                                onClick={() => handleStatusChange(order.id, 'producing')}
                                            >
                                                제작 시작
                                            </Menu.Item>
                                            <Menu.Item
                                                leftSection={<IconTruck size={14} />}
                                                onClick={() => handleShipping(order.id)}
                                            >
                                                송장 등록
                                            </Menu.Item>
                                            <Menu.Divider />
                                            <Menu.Item
                                                leftSection={<IconX size={14} />}
                                                color="red"
                                                onClick={() => handleStatusChange(order.id, 'cancelled')}
                                            >
                                                주문 취소
                                            </Menu.Item>
                                        </Menu.Dropdown>
                                    </Menu>
                                </Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </Card>

            {/* 송장 등록 모달 */}
            <Modal
                opened={trackingOpened}
                onClose={closeTracking}
                title="송장 등록"
                centered
            >
                <Stack gap="md">
                    <Text size="sm">주문번호: {selectedOrder}</Text>
                    <Textarea
                        label="운송장 번호"
                        placeholder="운송장 번호를 입력하세요"
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                    />
                    <Group justify="flex-end" gap="sm">
                        <Button variant="light" onClick={closeTracking}>
                            취소
                        </Button>
                        <Button color="brown" onClick={submitTracking}>
                            등록
                        </Button>
                    </Group>
                </Stack>
            </Modal>
        </div>
    );
}
