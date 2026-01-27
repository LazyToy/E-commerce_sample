'use client';

import { useState } from 'react';
import {
    Container,
    SimpleGrid,
    Group,
    Select,
    SegmentedControl,
    Text,
    Badge,
} from '@mantine/core';
import { ProductCard } from '@/components/product';

/**
 * 카테고리 목록
 */
const categories = [
    { value: 'all', label: '전체' },
    { value: 'bag', label: '가방' },
    { value: 'pouch', label: '파우치' },
    { value: 'accessory', label: '소품' },
];

/**
 * 정렬 옵션
 */
const sortOptions = [
    { value: 'newest', label: '최신순' },
    { value: 'price-low', label: '가격 낮은순' },
    { value: 'price-high', label: '가격 높은순' },
    { value: 'popular', label: '인기순' },
];

/**
 * 더미 제품 데이터 (전체)
 * TODO: Supabase에서 실제 데이터 fetch로 교체
 */
const allProducts = [
    {
        id: '1',
        name: '린넨 토트백 - 내츄럴',
        price: 189000,
        originalPrice: 210000,
        imageUrl: '/images/placeholder-bag-1.jpg',
        category: '가방',
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
        category: '가방',
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
        category: '가방',
        stockQuantity: 0,
        maxQuantity: 3,
        isLimited: true,
        productionDays: 7,
    },
    {
        id: '5',
        name: '가죽 카드지갑',
        price: 45000,
        imageUrl: '/images/placeholder-bag-5.jpg',
        category: '소품',
        stockQuantity: 12,
        maxQuantity: 20,
        isLimited: false,
        productionDays: 3,
    },
    {
        id: '6',
        name: '린넨 에코백 - 네이비',
        price: 68000,
        imageUrl: '/images/placeholder-bag-6.jpg',
        category: '가방',
        stockQuantity: 5,
        maxQuantity: 8,
        isLimited: false,
        productionDays: 5,
    },
    {
        id: '7',
        name: '미니 화장품 파우치',
        price: 38000,
        imageUrl: '/images/placeholder-bag-7.jpg',
        category: '파우치',
        stockQuantity: 15,
        maxQuantity: 20,
        isLimited: false,
        productionDays: 3,
    },
    {
        id: '8',
        name: '프리미엄 노트북 슬리브',
        price: 128000,
        originalPrice: 150000,
        imageUrl: '/images/placeholder-bag-8.jpg',
        category: '소품',
        stockQuantity: 4,
        maxQuantity: 5,
        isLimited: true,
        productionDays: 7,
    },
];

/**
 * 제품 그리드 컴포넌트
 * 카테고리 필터링 및 정렬 기능 포함
 */
export function ProductsGrid() {
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('newest');

    // 필터링된 제품 목록
    const filteredProducts = allProducts
        .filter((product) => {
            if (category === 'all') return true;
            const categoryMap: Record<string, string> = {
                bag: '가방',
                pouch: '파우치',
                accessory: '소품',
            };
            return product.category === categoryMap[category];
        })
        .sort((a, b) => {
            switch (sort) {
                case 'price-low':
                    return a.price - b.price;
                case 'price-high':
                    return b.price - a.price;
                case 'popular':
                    return (b.maxQuantity || 0) - (a.maxQuantity || 0);
                default:
                    return 0;
            }
        });

    return (
        <Container size="xl" className="py-8">
            {/* 필터 및 정렬 */}
            <Group justify="space-between" align="flex-end" mb="xl" wrap="wrap" gap="md">
                {/* 카테고리 필터 */}
                <SegmentedControl
                    value={category}
                    onChange={setCategory}
                    data={categories}
                    color="brown"
                    radius="xl"
                />

                <Group gap="md">
                    {/* 결과 수 */}
                    <Badge color="gray" variant="light" size="lg">
                        {filteredProducts.length}개 제품
                    </Badge>

                    {/* 정렬 */}
                    <Select
                        value={sort}
                        onChange={(v) => v && setSort(v)}
                        data={sortOptions}
                        size="sm"
                        w={140}
                        radius="md"
                    />
                </Group>
            </Group>

            {/* 제품 그리드 */}
            {filteredProducts.length > 0 ? (
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </SimpleGrid>
            ) : (
                <div className="text-center py-20">
                    <Text c="dimmed" size="lg">
                        해당 카테고리에 제품이 없습니다.
                    </Text>
                </div>
            )}
        </Container>
    );
}
