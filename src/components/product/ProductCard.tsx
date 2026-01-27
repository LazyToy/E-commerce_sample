import Link from 'next/link';
import Image from 'next/image';
import {
    Card,
    Text,
    Badge,
    Group,
    Stack,
    Progress,
} from '@mantine/core';
import { IconClock } from '@tabler/icons-react';

/**
 * 제품 데이터 타입
 */
export interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageUrl: string;
    category?: string;
    stockQuantity: number;
    maxQuantity?: number;
    isLimited?: boolean;
    productionDays?: number;
}

/**
 * 가격 포맷팅 함수
 */
function formatPrice(price: number): string {
    return new Intl.NumberFormat('ko-KR').format(price);
}

/**
 * 제품 카드 컴포넌트
 * 한정판 표시, 재고 현황, 가격 할인 표시 기능 포함
 */
export function ProductCard({
    id,
    name,
    price,
    originalPrice,
    imageUrl,
    category,
    stockQuantity,
    maxQuantity,
    isLimited,
    productionDays,
}: ProductCardProps) {
    const isSoldOut = stockQuantity === 0;
    const stockPercentage = maxQuantity ? (stockQuantity / maxQuantity) * 100 : 100;
    const hasDiscount = originalPrice && originalPrice > price;
    const discountRate = hasDiscount
        ? Math.round(((originalPrice - price) / originalPrice) * 100)
        : 0;

    return (
        <Card
            component={Link}
            href={`/products/${id}`}
            padding="md"
            radius="lg"
            className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            withBorder
        >
            {/* 이미지 영역 */}
            <Card.Section className="relative overflow-hidden">
                <div className="aspect-square relative bg-gray-100">
                    <Image
                        src={imageUrl}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* 품절 오버레이 */}
                    {isSoldOut && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Text size="lg" fw={700} c="white">
                                품절
                            </Text>
                        </div>
                    )}
                </div>

                {/* 배지들 */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                    {isLimited && (
                        <Badge color="red" variant="filled" size="sm">
                            한정판
                        </Badge>
                    )}
                    {hasDiscount && (
                        <Badge color="pink" variant="filled" size="sm">
                            {discountRate}% OFF
                        </Badge>
                    )}
                </div>

                {/* 카테고리 */}
                {category && (
                    <Badge
                        color="brown"
                        variant="light"
                        size="xs"
                        className="absolute top-2 right-2"
                    >
                        {category}
                    </Badge>
                )}
            </Card.Section>

            {/* 제품 정보 */}
            <Stack gap="xs" mt="md">
                <Text fw={600} lineClamp={2} className="leading-snug">
                    {name}
                </Text>

                {/* 가격 */}
                <Group gap="xs" align="baseline">
                    <Text size="lg" fw={700} className="text-[#b08968]">
                        {formatPrice(price)}원
                    </Text>
                    {hasDiscount && (
                        <Text size="sm" c="dimmed" td="line-through">
                            {formatPrice(originalPrice)}원
                        </Text>
                    )}
                </Group>

                {/* 재고 현황 (한정판일 경우) */}
                {isLimited && maxQuantity && !isSoldOut && (
                    <Stack gap={4}>
                        <Group justify="space-between">
                            <Text size="xs" c="dimmed">
                                남은 수량
                            </Text>
                            <Text size="xs" fw={600} className="text-[#b08968]">
                                {stockQuantity} / {maxQuantity}개
                            </Text>
                        </Group>
                        <Progress
                            value={stockPercentage}
                            color={stockPercentage <= 20 ? 'red' : 'brown'}
                            size="xs"
                            radius="xl"
                        />
                    </Stack>
                )}

                {/* 제작 기간 */}
                {productionDays && !isSoldOut && (
                    <Group gap={4}>
                        <IconClock size={14} className="text-gray-400" />
                        <Text size="xs" c="dimmed">
                            제작 기간 약 {productionDays}일
                        </Text>
                    </Group>
                )}
            </Stack>
        </Card>
    );
}
