import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "자주 묻는 질문",
  description: "FAQ를 정리해 곧 게시합니다.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="FAQ"
        title="자주 묻는 질문"
        description="교환/배송/세탁 관련 질문을 정리하는 중입니다. 필요한 내용은 고객지원 메일로 문의해 주세요."
        cta={{ label: "고객지원 메일", href: "mailto:hello@baneul-iyagi.com" }}
      />
      <Footer />
    </>
  );
}
