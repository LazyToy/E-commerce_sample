import { Header, Footer } from '@/components/layout';
import { HeroSection } from './components/HeroSection';
import { ProductsSection } from './components/ProductsSection';
import { MakerSection } from './components/MakerSection';
import { ProcessSection } from './components/ProcessSection';

/**
 * 바늘이야기 홈페이지
 * Hero 섹션, 제품 그리드, 제작자 소개, 제작 과정 섹션으로 구성
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* 히어로 섹션 */}
        <HeroSection />

        {/* 현재 제작중 / 한정판 제품 */}
        <ProductsSection />

        {/* 제작 과정 소개 */}
        <ProcessSection />

        {/* 제작자 소개 미리보기 */}
        <MakerSection />
      </main>
      <Footer />
    </>
  );
}
