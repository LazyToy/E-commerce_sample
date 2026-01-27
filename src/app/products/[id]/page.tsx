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
            name: '린넨 토트백 - 내츄럴',
            description: `프리미엄 이탈리아산 린넨으로 제작된 토트백입니다.

자연스러운 질감과 내구성이 뛰어나며, 사용할수록 부드러워지는 특성이 있습니다.
넉넉한 수납공간으로 일상과 여행 모두에 활용하기 좋습니다.

**소재 정보**
- 겉감: 이탈리아산 린넨 100%
- 안감: 면 100%
- 손잡이: 식물성 가죽

**사이즈**
- 가로: 40cm
- 세로: 35cm
- 폭: 15cm
- 손잡이 길이: 55cm`,
            price: 189000,
            originalPrice: 210000,
            images: [
                '/images/placeholder-bag-1.jpg',
                '/images/placeholder-bag-1-2.jpg',
                '/images/placeholder-bag-1-3.jpg',
            ],
            category: '토트백',
            stockQuantity: 2,
            maxQuantity: 5,
            isLimited: true,
            productionDays: 7,
            makerNote: '이번 가방은 특히 모서리 박음질에 신경 썼어요. 20년 경력으로도 한 땀 한 땀이 긴장되는 작업이었습니다.',
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
