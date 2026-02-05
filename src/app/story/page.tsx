import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "브랜드 스토리",
  description: "브랜드 히스토리와 철학을 곧 공개합니다.",
};

export default function StoryPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="STORY"
        title="브랜드 스토리"
        description="브랜드 히스토리와 디자인 철학을 정리해 곧 공개할 예정입니다."
        cta={{ label: "홈으로", href: "/" }}
      />
      <Footer />
    </>
  );
}
