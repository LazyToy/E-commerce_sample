import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "커스텀 오더",
  description: "커스텀 상담을 위한 접수 페이지를 준비 중입니다.",
};

export default function CustomPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="CUSTOM"
        title="커스텀 오더"
        description="원하시는 소재와 사이즈를 알려주시면 상담을 도와드릴게요. 문의 기능을 곧 열어두겠습니다."
        cta={{ label: "이메일 문의하기", href: "mailto:hello@baneul-iyagi.com" }}
      />
      <Footer />
    </>
  );
}
