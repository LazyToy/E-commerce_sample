import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "배송 안내",
  description: "배송 정책을 정리 중입니다.",
};

export default function ShippingPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="SHIPPING"
        title="배송 안내"
        description="제작 완료 후 1-2일 내 발송됩니다. 상세 배송 정책을 정리해 게시할 예정입니다."
        cta={{ label: "제품 둘러보기", href: "/products" }}
      />
      <Footer />
    </>
  );
}
