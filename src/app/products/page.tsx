import { Header, Footer } from '@/components/layout';
import { ProductsGrid } from './components/ProductsGrid';
import { Container, Title, Text } from '@mantine/core';

export const metadata = {
    title: '제품 목록',
    description: '바늘이야기의 프리미엄 핸드메이드 제품들을 만나보세요.',
};

/**
 * 제품 목록 페이지
 * 카테고리별 필터링, 정렬 기능 포함
 */
export default function ProductsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50">
                {/* 페이지 헤더 */}
                <section className="bg-gradient-to-b from-[#f5ebe0] to-white py-12">
                    <Container size="xl">
                        <Text size="sm" fw={600} className="text-[#b08968] mb-2">
                            ALL PRODUCTS
                        </Text>
                        <Title order={1} className="text-3xl md:text-4xl mb-4">
                            제품 둘러보기
                        </Title>
                        <Text c="dimmed" className="max-w-lg">
                            한 땀 한 땀 정성을 담아 만든 프리미엄 핸드메이드 제품들을 만나보세요.
                            모든 제품은 장인이 직접 손으로 제작합니다.
                        </Text>
                    </Container>
                </section>

                {/* 제품 그리드 */}
                <ProductsGrid />
            </main>
            <Footer />
        </>
    );
}
