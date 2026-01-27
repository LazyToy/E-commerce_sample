# 바늘이야기

이 프로젝트는 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)으로 생성된 [Next.js](https://nextjs.org) 프로젝트입니다.

## 시작하기

### 1. 프로젝트 디렉토리로 이동

```bash
cd d:\HY\develop_Project\E-commerce_sample\baneul-iyagi
```

### 2. 의존성 설치 (최초 1회 또는 package.json 변경 시)

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 브라우저에서 확인

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

> **💡 참고**: yarn, pnpm, bun 등 다른 패키지 매니저를 사용하시려면 먼저 해당 패키지 매니저를 설치해야 합니다.

`app/page.tsx` 파일을 수정하여 페이지 편집을 시작할 수 있습니다. 파일을 편집하면 페이지가 자동으로 업데이트됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 사용하여 Vercel의 새로운 폰트 패밀리인 [Geist](https://vercel.com/font)를 자동으로 최적화하고 로드합니다.

## 프로젝트 구조

```
baneul-iyagi/
├── public/                    # 정적 파일 (이미지, 아이콘 등)
├── src/
│   ├── app/                   # Next.js App Router 페이지
│   │   ├── components/        # 홈페이지 전용 컴포넌트
│   │   │   ├── HeroSection.tsx      # 히어로 섹션 (메인 배너)
│   │   │   ├── ProductsSection.tsx  # 제품 미리보기 섹션
│   │   │   ├── ProcessSection.tsx   # 제작 과정 소개 섹션
│   │   │   └── MakerSection.tsx     # 제작자 소개 섹션
│   │   ├── admin/             # 관리자 페이지
│   │   │   ├── layout.tsx           # 관리자 레이아웃
│   │   │   ├── page.tsx             # 관리자 대시보드
│   │   │   ├── orders/              # 주문 관리
│   │   │   └── products/            # 제품 관리
│   │   ├── products/          # 제품 관련 페이지
│   │   │   ├── page.tsx             # 제품 목록 페이지
│   │   │   ├── components/          # 제품 페이지 전용 컴포넌트
│   │   │   └── [id]/                # 제품 상세 페이지 (동적 라우팅)
│   │   ├── globals.css        # 전역 스타일 (CSS 변수, 리셋 등)
│   │   ├── layout.tsx         # 루트 레이아웃 (Providers 포함)
│   │   └── page.tsx           # 홈페이지
│   ├── components/            # 공통 재사용 컴포넌트
│   │   ├── layout/            # 레이아웃 컴포넌트
│   │   │   ├── Header.tsx           # 헤더/네비게이션
│   │   │   ├── Footer.tsx           # 푸터
│   │   │   └── index.ts             # 배럴 export
│   │   ├── product/           # 제품 관련 컴포넌트
│   │   │   ├── ProductCard.tsx      # 제품 카드 컴포넌트
│   │   │   └── index.ts             # 배럴 export
│   │   └── providers/         # Context Providers
│   │       └── index.ts             # MantineProvider 등
│   ├── lib/                   # 유틸리티 및 외부 서비스
│   │   └── supabase/          # Supabase 클라이언트
│   │       ├── client.ts            # 클라이언트 사이드 Supabase
│   │       ├── server.ts            # 서버 사이드 Supabase
│   │       └── index.ts             # 배럴 export
│   └── types/                 # TypeScript 타입 정의
│       ├── database.ts              # Supabase DB 타입
│       └── index.ts                 # 배럴 export
├── .env.local                 # 환경변수 (Supabase 키 등)
├── next.config.ts             # Next.js 설정
├── postcss.config.cjs         # PostCSS 설정
├── tsconfig.json              # TypeScript 설정
└── package.json               # 의존성 및 스크립트
```

### 주요 기술 스택

| 기술 | 용도 |
|------|------|
| **Next.js 15** | React 기반 풀스택 프레임워크 |
| **React 19** | UI 라이브러리 |
| **TypeScript** | 정적 타입 지원 |
| **Mantine UI** | UI 컴포넌트 라이브러리 |
| **Tailwind CSS** | 유틸리티 기반 CSS |
| **Supabase** | 백엔드 (DB, Auth, Storage) |
| **Tabler Icons** | 아이콘 라이브러리 |

### 페이지 구조

| 경로 | 설명 |
|------|------|
| `/` | 홈페이지 (히어로, 제품, 과정, 제작자 소개) |
| `/products` | 제품 목록 (필터링, 정렬 기능) |
| `/products/[id]` | 제품 상세 페이지 |
| `/admin` | 관리자 대시보드 |
| `/admin/products` | 제품 관리 |
| `/admin/orders` | 주문 관리 |

## 더 알아보기

Next.js에 대해 더 알아보려면 다음 자료를 참조하세요:

- [Next.js 공식 문서](https://nextjs.org/docs) - Next.js의 기능 및 API에 대해 알아보세요.
- [Next.js 튜토리얼](https://nextjs.org/learn) - 인터랙티브 Next.js 튜토리얼입니다.

[Next.js GitHub 저장소](https://github.com/vercel/next.js)에서 여러분의 피드백과 기여를 환영합니다!

## Vercel에 배포하기

Next.js 앱을 배포하는 가장 쉬운 방법은 Next.js 제작자들이 만든 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.
