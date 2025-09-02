🔧 마이그레이션 전략 (Next.js + Vercel)

0) 목표 요약
	•	SEO 극대화: App Router의 metadata API, 동적 sitemap/robots, 정적 최적화
	•	콘텐츠 관리 확장성: 초반엔 정적 JSX → 이후 MDX/Headless CMS로 자연 전환
	•	유지보수성: 레이아웃 공통화, 컴포넌트화, “작은 클라이언트 섬(아일랜드)” 패턴

⸻

1) 프로젝트 셋업

npx create-next-app@latest us-innowave --ts --eslint
cd us-innowave
# 기존 정적 사이트의 /images, /assets는 /public으로 복사

구조(요지):

app/
  layout.tsx         # 공통 레이아웃(헤더/푸터, body data-page)
  page.tsx           # /
  company-intro/page.tsx
  policy-fund/page.tsx
  certification/page.tsx
  us-market/page.tsx
  services/page.tsx
  contact/page.tsx
  not-found.tsx      # 404
  sitemap.ts         # 동적 sitemap
  robots.ts          # 동적 robots
  (api/...)          # 필요 시 폼 핸들러
styles/
  globals.css        # 기존 style.css 이식(토큰/레이어 유지)
components/
  Header.tsx Footer.tsx
  HeroSlider.tsx (client)
  MobileNav.tsx (client)
  ModalProvider.tsx (client)
  Card.tsx, Section.tsx ...
public/
  images/ ...


⸻

2) CSS/디자인 토큰 이식
	•	기존 style.css를 그대로 app/globals.css로 옮깁니다.
	•	이미 적용한 @layer base/components/utilities/overrides, 토큰/스케일, pt/pb-section, 앵커 오프셋은 유지.
	•	페이지 스코프는 레이아웃에서 data-page로 계속 사용합니다.

// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'US INNOWAVE',
  description: '정책자금·미국진출·ISO 인증 원스톱 컨설팅',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      {/* page-xxx 스코프 유지 (홈일 때 page-home) */}
      <body className="page-home" data-page="home">
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

다른 페이지는 해당 파일에서 최상위 래퍼에 className="page-policy"같이 부여해도 되고, body에 동적으로 넣고 싶으면 layout.tsx에서 usePathname()로 분기해도 됩니다(선택).

⸻

3) 라우팅 매핑 (정적 HTML → 파일 라우팅)
	•	index.html → app/page.tsx
	•	company-intro.html → app/company-intro/page.tsx
	•	policy-fund.html → app/policy-fund/page.tsx
	•	certification.html → app/certification/page.tsx
	•	us-market.html → app/us-market/page.tsx
	•	services.html → app/services/page.tsx
	•	contact.html → app/contact/page.tsx
	•	404.html → app/not-found.tsx

각 페이지 상단에 개별 metadata를 둡니다.

// app/policy-fund/page.tsx
export const metadata = {
  title: '정책자금 컨설팅 | US INNOWAVE',
  description: '창업/운전/시설자금 맞춤 컨설팅. 기업진단~대면평가까지 지원.',
};

export default function Page() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">정책자금 컨설팅</h1>
          <p className="page-subtitle prose">성장의 기회를 잡는 첫걸음…</p>
        </div>
      </section>
      <section className="pt-section pb-section">
        <div className="container">{/* 기존 그리드/카드 JSX 변환 */}</div>
      </section>
    </>
  );
}


⸻

4) 전역 JS → “작은 클라이언트 섬”으로 분리

기존 main.js의 기능을 목적별로 컴포넌트화합니다.
	•	모바일 메뉴/헤더 그림자/드롭다운 → <Header> 내부에서 'use client' + useEffect
	•	모달 → <ModalProvider> (Portal/Context)
	•	히어로 슬라이더 → <HeroSlider> (prefers-reduced-motion 가드 유지)

// components/HeroSlider.tsx
'use client';
import { useEffect } from 'react';

export default function HeroSlider(){
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // 가드
    // 기존 initHeroSlider 로직 포팅
  }, []);
  return (
    <div className="hero full-bg">
      {/* background layers or slides */}
    </div>
  );
}

기존 PageInits 레지스트리는 “컴포넌트 마운트”로 자연 대체됩니다. 필요한 섹션만 클라이언트 컴포넌트로 만들면 됩니다.

⸻

5) SEO/OG 및 sitemap/robots (동적 라우트)

이미 만든 정적 sitemap.xml/robots.txt는 Next에서 동적 함수로 대체하면 유지관리 쉬워져요.
(도메인 변경에도 자동 반영)

// app/sitemap.ts
import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.usinnowave.com'; // 도메인만 교체
  return [
    { url: `${base}/`, priority: 1.0, changeFrequency: 'daily' },
    { url: `${base}/company-intro`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/policy-fund`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/certification`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/us-market`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${base}/services`, priority: 0.8, changeFrequency: 'weekly' },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: 'monthly' },
  ];
}

// app/robots.ts
import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots {
  const base = 'https://www.usinnowave.com';
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/404'] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}

나중에 next-sitemap 패키지로 확장하거나, 동적 콘텐츠가 생기면 자동으로 URL을 생성하도록 바꿀 수 있어요.

⸻

6) 콘텐츠 관리 확장 로드맵

초기엔 정적 JSX로 가고, 확장 시 아래 중 하나로 점진 전환:
	•	MDX + Contentlayer: 마케팅/섹션 복사·붙여넣기 간단. PR 리뷰 기반 운영에 적합.
	•	Headless CMS: Sanity/Contentful/Strapi 등(폼·리치텍스트·이미지 자산 관리).
→ SEO 메타, OG, 페이지 섹션 구성(Blocks)을 CMS에서 관리하도록 확장.

둘 다 Next App Router와 궁합이 좋고, Vercel과 연동이 쉬워요.

⸻

7) 배포/운영
	•	Vercel 연결 → Git push마다 Preview URL 자동 생성(리뷰/QA 용이)
	•	환경 변수: 폼 핸들러/메일러 등 필요 시 VERCEL_ENV 기반 분기
	•	이미지 최적화: 차차 <Image>로 전환(처음엔 <img> 유지해도 OK)
	•	성능/접근성: Lighthouse 체크 → LCP/CLS 튜닝(히어로 이미지 프리로드, 폰트 최적화)

⸻

8) 리스크 & 방지책
	•	스타일 드리프트: 지금 레이어/토큰 체계를 그대로 유지 → 전역 globals.css 우선 사용, 페이지별 오버라이드는 최소.
	•	JS 동작차: 초기엔 슬라이더/모달/모바일메뉴만 클라이언트로 두고, 나머지는 정적. 점진적으로 분리.
	•	SEO 변동: 기존 메타를 metadata로 정확히 이전 + 동적 sitemap/robots로 보완.

⸻

⏱️ 실행 타임라인(현실적인 제안)

Day 1
	•	Next 프로젝트 생성, public/ 복사, globals.css 이식(토큰/레이어)
	•	layout.tsx에 Header/Footer 이식, Home(page.tsx) 포팅

Day 2
	•	나머지 6개 페이지 JSX 포팅(섹션 구조 그대로)
	•	not-found.tsx, sitemap.ts, robots.ts 구현

Day 3
	•	HeroSlider, MobileNav, ModalProvider를 클라이언트 컴포넌트화
	•	내부 앵커/라우팅/메타 검수, Vercel 프로덕션 배포

(선택) Day 4~
	•	MDX/Contentlayer 또는 CMS 연결(정책/미국시장/성공사례 등 업데이트가 잦은 영역부터)

⸻

결론
	•	Next.js(App Router) + Vercel로 이행하면,
	•	기존 토큰/레이어/스코프/유틸 철학은 그대로,
	•	SEO·배포·확장성이 대폭 올라갑니다.
	•	지금 구조가 깔끔하니 무리한 재작성 없이 “페이지→컴포넌트” 포팅만으로 빠르게 전환 가능해요.
	•	이후 MDX 또는 Headless CMS로 콘텐츠 관리 레벨을 올리면 장기 운영에 최적입니다.

