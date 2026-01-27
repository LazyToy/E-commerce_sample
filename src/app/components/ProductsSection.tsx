'use client';

import Link from 'next/link';
import {
    Container,
    Title,
    Text,
    Button,
    SimpleGrid,
    Group,
    Badge,
    Progress,
} from '@mantine/core';
import { IconArrowRight, IconFlame } from '@tabler/icons-react';
import { ProductCard } from '@/components/product';

/**
 * 더미 제품 데이터
 * TODO: Supabase에서 실제 데이터 fetch로 교체
 */
const dummyProducts = [
    {
        id: '1',
        name: '린넨 토트백 - 내츄럴',
        price: 189000,
        originalPrice: 210000,
        imageUrl: '/images/placeholder-bag-1.jpg',
        category: '토트백',
        stockQuantity: 2,
        maxQuantity: 5,
        isLimited: true,
        productionDays: 7,
    },
    {
        id: '2',
        name: '가죽 크로스백 - 브라운',
        price: 285000,
        imageUrl: '/images/placeholder-bag-2.jpg',
        category: '크로스백',
        stockQuantity: 3,
        maxQuantity: 5,
        isLimited: true,
        productionDays: 10,
    },
    {
        id: '3',
        name: '캔버스 파우치 세트',
        price: 78000,
        imageUrl: '/images/placeholder-bag-3.jpg',
        category: '파우치',
        stockQuantity: 8,
        maxQuantity: 10,
        isLimited: false,
        productionDays: 5,
    },
    {
        id: '4',
        name: '미니 숄더백 - 베이지',
        price: 156000,
        imageUrl: '/images/placeholder-bag-4.jpg',
        category: '숄더백',
        stockQuantity: 0,
        maxQuantity: 3,
        isLimited: true,
        productionDays: 7,
    },
];

/**
 * 현재 제작 중인 제품 정보
 */
const currentProduction = {
    name: '린넨 토트백 #5',
    progress: 75,
    expectedDate: '2026.01.30',
};

/**
 * 제품 섹션 컴포넌트
 * 현재 제작 중 표시, 한정판 제품 그리드
 */
export function ProductsSection() {
    return (
        <section className="bg-white" style={{ paddingTop: '15px', paddingBottom: '75px' }}>
            <Container size="xl">
                {/* 현재 제작 중 배너 */}
                <div
                    className="bg-gradient-to-r from-[#f5ebe0] to-[#faf5f0] rounded-2xl p-6 border border-[#dbc9b5]/50"
                    style={{ marginBottom: '36px' }}
                >
                    <Group justify="space-between" align="center" wrap="wrap" gap="md">
                        <Group gap="md">
                            <div className="w-12 h-12 bg-[#b08968] rounded-full flex items-center justify-center">
                                <IconFlame size={24} className="text-white" />
                            </div>
                            <div>
                                <Group gap="xs" mb={4}>
                                    <Badge color="red" variant="filled" size="sm">
                                        LIVE
                                    </Badge>
                                    <Text size="sm" c="dimmed">
                                        지금 작업 중
                                    </Text>
                                </Group>
                                <Text fw={600} size="lg">
                                    {currentProduction.name}
                                </Text>
                            </div>
                        </Group>

                        <div className="flex-1 max-w-md min-w-[200px]">
                            <Group justify="space-between" mb={4}>
                                <Text size="sm" c="dimmed">
                                    진행률
                                </Text>
                                <Text size="sm" fw={600} className="text-[#b08968]">
                                    {currentProduction.progress}%
                                </Text>
                            </Group>
                            <Progress
                                value={currentProduction.progress}
                                color="brown"
                                size="lg"
                                radius="xl"
                                animated
                            />
                            <Text size="xs" c="dimmed" mt={4}>
                                예상 완성일: {currentProduction.expectedDate}
                            </Text>
                        </div>

                        <Button
                            component={Link}
                            href="/logs"
                            variant="light"
                            color="brown"
                            rightSection={<IconArrowRight size={16} />}
                        >
                            제작 과정 보기
                        </Button>
                    </Group>
                </div>

                {/* 섹션 헤더 */}
                <Group justify="space-between" align="flex-end" mb="xl">
                    <div>
                        <Text size="sm" fw={600} className="text-[#b08968] mb-2">
                            LIMITED EDITION
                        </Text>
                        <Title order={2} className="text-2xl md:text-3xl">
                            이번 달 한정 제작
                        </Title>
                        <Text c="dimmed" mt={8}>
                            매달 소량만 제작되는 특별한 아이템들
                        </Text>
                    </div>
                    <Button
                        component={Link}
                        href="/products"
                        variant="subtle"
                        color="brown"
                        rightSection={<IconArrowRight size={16} />}
                    >
                        전체 보기
                    </Button>
                </Group>

                {/* 제품 그리드 */}
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
                    {dummyProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            {...product}
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </section>
    );
}
