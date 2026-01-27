'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Title,
    Text,
    Card,
    Group,
    Button,
    Table,
    Badge,
    ActionIcon,
    TextInput,
    Menu,
    Modal,
    Stack,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
    IconPlus,
    IconSearch,
    IconEdit,
    IconTrash,
    IconDotsVertical,
    IconEye,
} from '@tabler/icons-react';

/**
 * 더미 제품 데이터
 */
const products = [
    {
        id: '1',
        name: '린넨 토트백 - 내츄럴',
        category: '가방',
        price: 189000,
        stock: 2,
        maxStock: 5,
        isLimited: true,
        isActive: true,
    },
    {
        id: '2',
        name: '가죽 크로스백 - 브라운',
        category: '가방',
        price: 285000,
        stock: 3,
        maxStock: 5,
        isLimited: true,
        isActive: true,
    },
    {
        id: '3',
        name: '캔버스 파우치 세트',
        category: '파우치',
        price: 78000,
        stock: 8,
        maxStock: 10,
        isLimited: false,
        isActive: true,
    },
    {
        id: '4',
        name: '미니 숄더백 - 베이지',
        category: '가방',
        price: 156000,
        stock: 0,
        maxStock: 3,
        isLimited: true,
        isActive: true,
    },
    {
        id: '5',
        name: '가죽 카드지갑',
        category: '소품',
        price: 45000,
        stock: 12,
        maxStock: 20,
        isLimited: false,
        isActive: true,
    },
];

/**
 * 관리자 제품 관리 페이지
 */
export default function AdminProductsPage() {
    const [search, setSearch] = useState('');
    const [deleteOpened, { open: openDelete, close: closeDelete }] =
        useDisclosure(false);
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

    const handleDelete = (id: string) => {
        setSelectedProduct(id);
        openDelete();
    };

    return (
        <div>
            {/* 페이지 헤더 */}
            <Group justify="space-between" align="flex-end" mb="xl">
                <div>
                    <Text size="sm" c="dimmed">
                        제품 관리
                    </Text>
                    <Title order={2}>제품 목록</Title>
                </div>
                <Button
                    leftSection={<IconPlus size={18} />}
                    color="brown"
                    radius="lg"
                >
                    제품 등록
                </Button>
            </Group>

            {/* 검색 및 필터 */}
            <Card padding="lg" radius="lg" withBorder mb="lg">
                <Group gap="md">
                    <TextInput
                        placeholder="제품명 검색..."
                        leftSection={<IconSearch size={16} />}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-1"
                    />
                </Group>
            </Card>

            {/* 제품 테이블 */}
            <Card padding="lg" radius="lg" withBorder>
                <Table>
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th>제품명</Table.Th>
                            <Table.Th>카테고리</Table.Th>
                            <Table.Th>가격</Table.Th>
                            <Table.Th>재고</Table.Th>
                            <Table.Th>상태</Table.Th>
                            <Table.Th>액션</Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {filteredProducts.map((product) => (
                            <Table.Tr key={product.id}>
                                <Table.Td>
                                    <Group gap="xs">
                                        <Text fw={500}>{product.name}</Text>
                                        {product.isLimited && (
                                            <Badge color="red" size="xs">
                                                한정판
                                            </Badge>
                                        )}
                                    </Group>
                                </Table.Td>
                                <Table.Td>
                                    <Badge color="gray" variant="light">
                                        {product.category}
                                    </Badge>
                                </Table.Td>
                                <Table.Td>
                                    <Text fw={500}>₩{product.price.toLocaleString()}</Text>
                                </Table.Td>
                                <Table.Td>
                                    <Text
                                        c={
                                            product.stock === 0
                                                ? 'red'
                                                : product.stock <= 2
                                                    ? 'orange'
                                                    : 'green'
                                        }
                                        fw={500}
                                    >
                                        {product.stock} / {product.maxStock}
                                    </Text>
                                </Table.Td>
                                <Table.Td>
                                    {product.stock === 0 ? (
                                        <Badge color="red">품절</Badge>
                                    ) : product.isActive ? (
                                        <Badge color="green">판매중</Badge>
                                    ) : (
                                        <Badge color="gray">비활성</Badge>
                                    )}
                                </Table.Td>
                                <Table.Td>
                                    <Group gap="xs">
                                        <ActionIcon
                                            variant="subtle"
                                            color="gray"
                                            component={Link}
                                            href={`/products/${product.id}`}
                                        >
                                            <IconEye size={16} />
                                        </ActionIcon>
                                        <Menu shadow="md" width={150}>
                                            <Menu.Target>
                                                <ActionIcon variant="subtle" color="gray">
                                                    <IconDotsVertical size={16} />
                                                </ActionIcon>
                                            </Menu.Target>
                                            <Menu.Dropdown>
                                                <Menu.Item leftSection={<IconEdit size={14} />}>
                                                    수정
                                                </Menu.Item>
                                                <Menu.Item
                                                    leftSection={<IconTrash size={14} />}
                                                    color="red"
                                                    onClick={() => handleDelete(product.id)}
                                                >
                                                    삭제
                                                </Menu.Item>
                                            </Menu.Dropdown>
                                        </Menu>
                                    </Group>
                                </Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </Card>

            {/* 삭제 확인 모달 */}
            <Modal
                opened={deleteOpened}
                onClose={closeDelete}
                title="제품 삭제"
                centered
            >
                <Stack gap="md">
                    <Text>정말로 이 제품을 삭제하시겠습니까?</Text>
                    <Text size="sm" c="dimmed">
                        이 작업은 되돌릴 수 없습니다.
                    </Text>
                    <Group justify="flex-end" gap="sm">
                        <Button variant="light" onClick={closeDelete}>
                            취소
                        </Button>
                        <Button color="red" onClick={closeDelete}>
                            삭제
                        </Button>
                    </Group>
                </Stack>
            </Modal>
        </div>
    );
}
