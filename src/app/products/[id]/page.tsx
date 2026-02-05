import { notFound } from 'next/navigation';
import { Header, Footer } from '@/components/layout';
import { ProductDetail } from './components/ProductDetail';
import { ProductionTimeline } from './components/ProductionTimeline';
import { Container, Tabs, Text } from '@mantine/core';
import { IconPhoto, IconHistory, IconShieldCheck, IconMessageCircle } from '@tabler/icons-react';

/**
 * 더미 제품 데이터
 * TODO: Supabase에서 실제 데이터 fetch로 교체
 */
const getProduct = (id: string) => {
    const products = [
        {
            id: '1',
            name: '핸드메이드 입체 인형 체크 토트백',
            description: `입체 인형 아플리케로 완성한, 빈티지 체크 데일리 토트백입니다.
한 땀 한 땀 정성스럽게 만든 포인트 토트로, 체크 원단의 차분한 무드에 컬러 플라워 스커트와 리본 디테일로 가볍게 들어도 룩이 살아나는 아이템이에요.

**구매 포인트**
1. 한눈에 포인트: 입체 인형 아플리케가 심플한 코디도 한 번에 포인트가 되어줍니다.
2. 탄탄한 원단감: 클래식한 결 + 퀼팅감 있는 볼륨으로 힘 있게 형태를 유지합니다.
3. 매일 들기 좋은 무드: 사계절 어느 룩에나 잘 어울리는 빈티지·프레피 무드입니다.`,
            price: 68000,
            originalPrice: 75000,
            images: [
                '/images/placeholder-bag-1.jpg',
                '/images/placeholder-bag-1-2.jpg',
                '/images/placeholder-bag-1-3.jpg',
            ],
            category: '토트백',
            stockQuantity: 5,
            maxQuantity: 20,
            isLimited: true,
            productionDays: 5,
            makerNote: '인형의 헤어와 리본 디테일 하나하나 손으로 매만져 입체감을 살렸습니다. 핸드메이드만의 따뜻한 감성을 느껴보세요.',
        },
    ];

    return products.find((p) => p.id === id);
};

/**
 * 더미 제작 일지
 */
const getProductionLogs = (productId: string) => {
    return [
        {
            id: '1',
            dayNumber: 1,
            title: '원단 선택 과정',
            content: '이탈리아산 린넨 원단을 선택했습니다. 자연스러운 질감과 내구성을 고려했어요.',
            mediaType: 'image',
            mediaUrl: '/images/log-1.jpg',
            progressPercentage: 15,
            createdAt: '2026-01-20',
        },
        {
            id: '2',
            dayNumber: 3,
            title: '패턴 재단 중',
            content: '정확한 치수로 원단을 재단합니다. 1mm의 오차도 허용하지 않아요.',
            mediaType: 'image',
            mediaUrl: '/images/log-2.jpg',
            progressPercentage: 40,
            createdAt: '2026-01-22',
        },
        {
            id: '3',
            dayNumber: 5,
            title: '핸드스티치 디테일 작업',
            content: '손바느질로 꼼꼼하게 마무리합니다. 이 과정이 가장 시간이 많이 걸려요.',
            mediaType: 'video',
            mediaUrl: 'https://youtube.com/shorts/example',
            progressPercentage: 75,
            createdAt: '2026-01-24',
        },
        {
            id: '4',
            dayNumber: 7,
            title: '완성! 검수 과정',
            content: '모든 봉제선과 마감을 꼼꼼히 검수합니다. 보증서와 함께 포장해드려요.',
            mediaType: 'image',
            mediaUrl: '/images/log-4.jpg',
            progressPercentage: 100,
            createdAt: '2026-01-26',
        },
    ];
};

interface PageProps {
    params: Promise<{ id: string }>;
}

/**
 * 제품 상세 페이지
 */
export default async function ProductDetailPage({ params }: PageProps) {
    const { id } = await params;
    const product = getProduct(id);

    if (!product) {
        notFound();
    }

    const productionLogs = getProductionLogs(id);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white">
                <Container size="xl" className="py-8">
                    {/* 제품 상세 정보 */}
                    <ProductDetail product={product} />

                    {/* 탭 섹션 */}
                    <ProductTabsSection
                        description={product.description}
                        makerNote={product.makerNote}
                        productionLogs={productionLogs}
                    />
                </Container>
            </main>
            <Footer />
        </>
    );
}

/**
 * 탭 섹션 컴포넌트 (클라이언트)
 */
function ProductTabsSection({
    description,
    makerNote,
    productionLogs,
}: {
    description: string;
    makerNote: string;
    productionLogs: ReturnType<typeof getProductionLogs>;
}) {
    return (
        <ProductTabsClient
            description={description}
            makerNote={makerNote}
            productionLogs={productionLogs}
        />
    );
}

// 클라이언트 컴포넌트로 분리
import { ProductTabsClient } from './components/ProductTabsClient';
