import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "이용약관",
  description: "이용약관을 정비 중입니다.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="LEGAL"
        title="이용약관"
        description="이용약관을 정비 중입니다. 정책이 확정되면 즉시 공개하겠습니다."
        cta={{ label: "홈으로", href: "/" }}
      />
      <Footer />
    </>
  );
}
