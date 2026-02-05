'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
    Grid,
    Stack,
    Group,
    Text,
    Title,
    Badge,
    Button,
    NumberInput,
    Card,
    Progress,
    Divider,
} from '@mantine/core';
import {
    IconShoppingCart,
    IconHeart,
    IconClock,
    IconShieldCheck,
    IconTruck,
} from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

interface ProductDetailProps {
    product: {
        id: string;
        name: string;
        description: string;
        price: number;
        originalPrice?: number;
        images: string[];
        category: string;
        stockQuantity: number;
        maxQuantity?: number;
        isLimited: boolean;
        productionDays: number;
        makerNote?: string;
    };
}

/**
 * 가격 포맷팅 함수
 */
function formatPrice(price: number): string {
    return new Intl.NumberFormat('ko-KR').format(price);
}

/**
 * 제품 상세 정보 컴포넌트
 */
export function ProductDetail({ product }: ProductDetailProps) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const isSoldOut = product.stockQuantity === 0;
    const stockPercentage = product.maxQuantity
        ? (product.stockQuantity / product.maxQuantity) * 100
        : 100;
    const hasDiscount = product.originalPrice && product.originalPrice > product.price;
    const discountRate = hasDiscount && product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    const handleAddToCart = () => {
        notifications.show({
            title: '장바구니에 추가되었습니다',
            message: `${product.name} ${quantity}개`,
            color: 'green',
        });
    };

    const handleToggleWishlist = () => {
        setIsWishlisted(!isWishlisted);
        notifications.show({
            title: isWishlisted ? '위시리스트에서 제거됨' : '위시리스트에 추가됨',
            message: product.name,
            color: isWishlisted ? 'gray' : 'pink',
        });
    };

    const handleNotifyRestock = () => {
        notifications.show({
            title: '재입고 알림 신청 완료',
            message: '다음 제작 일정이 잡히면 가장 먼저 알려드릴게요.',
            color: 'blue',
        });
    };

    return (
        <Grid gutter="xl">
            {/* 이미지 갤러리 */}
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="md">
                    {/* 메인 이미지 */}
                    <Card padding={0} radius="lg" className="overflow-hidden" withBorder>
                        <div className="aspect-square relative bg-gray-100">
                            <Image
                                src={product.images[selectedImage] || '/images/placeholder.jpg'}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {isSoldOut && (
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                    <Text size="xl" fw={700} c="white">
                                        품절
                                    </Text>
                                </div>
                            )}
                        </div>
                    </Card>

                    {/* 썸네일 */}
                    <Group gap="sm">
                        {product.images.map((img, idx) => (
                            <Card
                                key={idx}
                                padding={0}
                                radius="md"
                                className={`w-20 h-20 cursor-pointer overflow-hidden ${selectedImage === idx ? 'ring-2 ring-[#b08968]' : ''
                                    }`}
                                withBorder
                                onClick={() => setSelectedImage(idx)}
                            >
                                <Image
                                    src={img}
                                    alt={`${product.name} ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                />
                            </Card>
                        ))}
                    </Group>
                </Stack>
            </Grid.Col>

            {/* 제품 정보 */}
            <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="lg">
                    {/* 배지들 */}
                    <Group gap="xs">
                        {product.isLimited && (
                            <Badge color="red" variant="filled">
                                한정판
                            </Badge>
                        )}
                        {hasDiscount && (
                            <Badge color="pink" variant="filled">
                                {discountRate}% OFF
                            </Badge>
                        )}
                        <Badge color="brown" variant="light">
                            {product.category}
                        </Badge>
                    </Group>

                    {/* 제품명 */}
                    <Title order={1} className="text-2xl md:text-3xl">
                        {product.name}
                    </Title>

                    {/* 가격 */}
                    <Group gap="md" align="baseline">
                        <Text size="xl" fw={700} className="text-[#b08968] text-3xl">
                            {formatPrice(product.price)}원
                        </Text>
                        {hasDiscount && (
                            <Text size="lg" c="dimmed" td="line-through">
                                {formatPrice(product.originalPrice!)}원
                            </Text>
                        )}
                    </Group>

                    <Divider />

                    {/* 재고 현황 */}
                    {product.isLimited && product.maxQuantity && (
                        <Card padding="md" radius="md" className="bg-[#f5ebe0]">
                            <Group justify="space-between" mb="xs">
                                <Text size="sm" fw={600}>
                                    🏷️ 한정 수량
                                </Text>
                                <Text size="sm" fw={700} className="text-[#b08968]">
                                    {product.stockQuantity} / {product.maxQuantity}개 남음
                                </Text>
                            </Group>
                            <Progress
                                value={stockPercentage}
                                color={stockPercentage <= 20 ? 'red' : 'brown'}
                                size="md"
                                radius="xl"
                            />
                            {product.stockQuantity <= 2 && product.stockQuantity > 0 && (
                                <Text size="xs" c="red" mt="xs">
                                    ⚠️ 품절 임박! 서둘러 주문하세요.
                                </Text>
                            )}
                        </Card>
                    )}

                    {/* 배송/제작 정보 */}
                    <Stack gap="sm">
                        <Group gap="xs">
                            <IconClock size={18} className="text-[#b08968]" />
                            <Text size="sm">
                                제작 기간: 영업일 기준 <strong>{product.productionDays}일</strong>
                            </Text>
                        </Group>
                        <Group gap="xs">
                            <IconTruck size={18} className="text-[#b08968]" />
                            <Text size="sm">
                                배송: 제작 완료 후 <strong>1-2일 내 발송</strong>
                            </Text>
                        </Group>
                        <Group gap="xs">
                            <IconShieldCheck size={18} className="text-[#b08968]" />
                            <Text size="sm">
                                <strong>1년 무상 수선</strong> 보증 (봉제 하자 시)
                            </Text>
                        </Group>
                    </Stack>

                    <Divider />

                    {/* 수량 선택 */}
                    <Group gap="md" align="flex-end">
                        <NumberInput
                            label="수량"
                            value={quantity}
                            onChange={(v) => setQuantity(Number(v) || 1)}
                            min={1}
                            max={product.stockQuantity}
                            disabled={isSoldOut}
                            w={100}
                        />
                        <Text size="sm" c="dimmed">
                            총 금액:{' '}
                            <strong className="text-[#b08968]">
                                {formatPrice(product.price * quantity)}원
                            </strong>
                        </Text>
                    </Group>

                    {/* 버튼들 */}
                    <Group gap="md" grow>
                        <Button
                            size="lg"
                            color="brown"
                            radius="xl"
                            leftSection={<IconShoppingCart size={20} />}
                            onClick={handleAddToCart}
                            disabled={isSoldOut}
                        >
                            {isSoldOut ? '품절' : '장바구니 담기'}
                        </Button>
                        <Button
                            size="lg"
                            variant={isWishlisted ? 'filled' : 'outline'}
                            color={isWishlisted ? 'pink' : 'gray'}
                            radius="xl"
                            onClick={handleToggleWishlist}
                        >
                            <IconHeart size={20} fill={isWishlisted ? 'currentColor' : 'none'} />
                        </Button>
                    </Group>

                    {/* 품절 시 재입고 알림 */}
                    {isSoldOut && (
                        <Card padding="md" radius="md" className="bg-gray-50">
                            <Text size="sm" c="dimmed" className="text-center">
                                📧 다음 제작 시 알림받기
                                <br />
                                <strong className="text-[#b08968]">1,247명</strong>이 대기 중입니다.
                            </Text>
                            <Button
                                fullWidth
                                variant="light"
                                color="brown"
                                radius="xl"
                                mt="sm"
                                onClick={handleNotifyRestock}
                            >
                                재입고 알림 신청
                            </Button>
                        </Card>
                    )}
                </Stack>
            </Grid.Col>
        </Grid>
    );
}
