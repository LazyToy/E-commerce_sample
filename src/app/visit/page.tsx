import { Header, Footer } from "@/components/layout";
import { PagePlaceholder } from "../_components/PagePlaceholder";

export const metadata = {
  title: "작업실 방문",
  description: "성수동 작업실 방문 예약 시스템을 준비 중입니다.",
};

export default function VisitPage() {
  return (
    <>
      <Header />
      <PagePlaceholder
        badge="VISIT"
        title="작업실 방문"
        description="성수동 작업실 방문 예약을 준비 중입니다. 이메일로 방문 희망 일정을 남겨주세요."
        cta={{ label: "메일 보내기", href: "mailto:hello@baneul-iyagi.com" }}
      />
      <Footer />
    </>
  );
}
