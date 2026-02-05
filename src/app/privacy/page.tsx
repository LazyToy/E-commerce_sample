import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "개인정보처리방침",
  description: "서비스 오픈과 함께 최신 개인정보 처리방침을 게시합니다.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="LEGAL"
        title="개인정보처리방침"
        description="서비스 오픈과 함께 최신 개인정보 처리방침을 게시할 예정입니다."
        cta={{ label: "홈으로", href: "/" }}
      />
      <Footer />
    </>
  );
}
