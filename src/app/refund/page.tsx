import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "교환/환불",
  description: "교환/환불 정책을 곧 게시합니다.",
};

export default function RefundPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="POLICY"
        title="교환/환불"
        description="핸드메이드 특성상 단순 변심 반품은 제한될 수 있습니다. 자세한 정책을 곧 안내드릴게요."
        cta={{ label: "문의하기", href: "mailto:hello@baneul-iyagi.com" }}
      />
      <Footer />
    </>
  );
}
