import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "제작자 소개",
  description: "바늘이야기의 장인과 브랜드 이야기를 준비 중입니다.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="ABOUT"
        title="제작자 소개"
        description="바늘이야기의 장인과 브랜드 이야기를 곧 공개합니다. 작업실 소식은 제작 일지에서 먼저 만나보세요."
        cta={{ label: "제작 일지 보기", href: "/logs" }}
      />
      <Footer />
    </>
  );
}
