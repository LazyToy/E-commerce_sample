import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "A/S 안내",
  description: "A/S 정책 안내 페이지를 준비 중입니다.",
};

export default function AsPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="SERVICE"
        title="A/S 안내"
        description="1년 무상 봉제 수선 정책과 접수 절차 안내 페이지를 준비 중입니다."
        cta={{ label: "대표 제품 보기", href: "/products/1" }}
      />
      <Footer />
    </>
  );
}
