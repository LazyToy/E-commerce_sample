import type { Metadata } from "next";
import { ColorSchemeScript } from "@mantine/core";
import { MantineProviderWrapper } from "@/components/providers";
import "./globals.css";

/**
 * 바늘이야기 - 프리미엄 핸드메이드 쇼핑몰
 * SEO 메타데이터 설정
 */
export const metadata: Metadata = {
  title: {
    default: "바늘이야기 | 프리미엄 핸드메이드",
    template: "%s | 바늘이야기",
  },
  description: "20년 경력 장인이 한 땀 한 땀 정성껏 만드는 프리미엄 핸드메이드 가방과 소품. 세상에 단 하나뿐인 당신만의 아이템을 만나보세요.",
  keywords: ["핸드메이드", "수제가방", "바느질", "장인", "프리미엄", "맞춤제작", "커스텀"],
  authors: [{ name: "바늘이야기" }],
  openGraph: {
    title: "바늘이야기 | 프리미엄 핸드메이드",
    description: "20년 경력 장인이 만드는 프리미엄 핸드메이드 가방과 소품",
    type: "website",
    locale: "ko_KR",
    siteName: "바늘이야기",
  },
};

/**
 * 루트 레이아웃
 * Mantine Provider로 전체 앱을 감쌉니다.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Mantine 색상 스키마 스크립트 (깜빡임 방지) */}
        <ColorSchemeScript defaultColorScheme="light" />
        {/* Pretendard 폰트 */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body>
        <MantineProviderWrapper>
          {children}
        </MantineProviderWrapper>
      </body>
    </html>
  );
}
