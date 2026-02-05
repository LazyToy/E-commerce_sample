import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "제작 일지",
  description: "한 땀 한 땀 제작 과정을 곧 공유합니다.",
};

export default function LogsPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="PROCESS"
        title="제작 일지"
        description="실시간 작업 현장과 진행 상황을 곧 업로드할 예정입니다. 조금만 기다려 주세요."
        cta={{ label: "제품 둘러보기", href: "/products" }}
      />
      <Footer />
    </>
  );
}
