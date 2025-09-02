운영 가이드: 단일 전역 파일 + 페이지 스코프 + 컴포넌트/아일랜드 패턴

이 문서는 “간단한 홈페이지 작업이 점점 복잡해지는 문제”를 구조적으로 예방하기 위한 최종 운영 규칙입니다.
핵심은 전역 파일 한 벌(style.css, main.js) 유지 + 페이지별 스코프 오버라이드 + 컴포넌트(아일랜드) 장착입니다.

⸻

0. 원칙 요약
	•	파일 구조: CSS/JS는 전역 한 벌 유지 (추가 파일 생성 금지)
	•	스코프: 페이지별 영향은 <body data-page="..."> 로 한정
	•	특이성: :where()로 낮은 특이성, 나중에 덮어쓰기 쉬움
	•	레이어: @layer base → components → utilities → overrides 순
	•	접근성/반응형: 공통 간격/앵커 오프셋/그리드/미디어 비율 유틸로 일관성 확보

⸻

1. HTML 규칙

1) 페이지 스코프 키

<body class="page-policy" data-page="policy-fund">

2) 섹션 추가 시(레이아웃 + 애니메이션 장착)

<section class="pt-section pb-section reveal-ready" data-controller="reveal">
  <!-- 섹션 내용 -->
</section>

	•	pt-section pb-section: 상·하 여백 통일
	•	reveal-ready + data-controller="reveal": 스크롤 진입 시 자동 등장

⸻

2. CSS 운영 규칙

2-1) 레이어 선언 (파일 최상단)

@layer base, components, utilities, overrides;

2-2) 기본 토큰/리셋 (base)

@layer base {
  :root{
    --brand-primary:#009DAE;
    --section-y: clamp(56px, 6vw, 112px);
    --header-h: 80px; /* 앵커 오프셋에 사용 */
  }
  *,*::before,*::after{ box-sizing:border-box }
  body{ margin:0 }
  img,svg,video{ max-width:100%; height:auto; display:block }
}

2-3) 공통 유틸리티 (utilities)

@layer utilities {
  /* 간격/앵커 오프셋 */
  .pt-section { padding-top: var(--section-y) }
  .pb-section { padding-bottom: var(--section-y) }
  [id] { scroll-margin-top: var(--header-h) }

  /* 그리드/컨테이너 */
  .container{ width:min(1200px, 92vw); margin-inline:auto }
  .grid{ display:grid; gap: clamp(16px, 2vw, 28px) }
  .grid-3{ grid-template-columns: repeat(auto-fit, minmax(min(100%,320px),1fr)); }

  /* 이미지/비디오 비율 */
  .ratio{ position:relative; overflow:hidden }
  .ratio::before{ content:""; display:block; padding-top: var(--ratio,56.25%) } /* 16:9 */
  .ratio > *{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover }

  .ratio-16x9{ --ratio:56.25% } .ratio-4x3{ --ratio:75% }
  .ratio-1x1{ --ratio:100% }    .ratio-3x2{ --ratio:66.66% }

  /* 한글/긴 단어 가독성 */
  body{ line-break: loose; }
  p,li{ overflow-wrap:anywhere; word-break: keep-all }

  /* 개발용 디버그(필요 시만 켜기) */
  /* .debug-spacing section { outline:1px dashed rgba(0,0,0,.15); outline-offset:6px } */
}

2-4) 애니메이션 유틸리티 (utilities)

@layer utilities {
  .reveal-ready{ opacity:0; transform: translateY(20px) }
  .reveal-in{ opacity:1; transform: translateY(0); transition: opacity .5s ease, transform .5s ease }
  @media (prefers-reduced-motion: reduce){
    .reveal-ready,.reveal-in{ opacity:1; transform:none; transition:none }
  }
}

2-5) 페이지 오버라이드 (overrides)

@layer overrides {
  /* policy-fund.html 전용 */
  .page-policy :where(.page-header){ background: var(--section-bg, #f0f9ff) }
  .page-policy :where(.fund-card){ border-radius:14px }
  .page-policy :where(.hero){ --section-y: clamp(64px, 7vw, 120px) }

  /* us-market.html 전용 */
  .page-us :where(.page-header){ background: var(--section-bg, #f0fdfa) }

  /* 예: 페이지별 애니메이션 강도 조절 */
  .page-us :where(.reveal-in){ transition-duration:.7s }
}

Tip: 오버라이드는 반드시 전역 CSS의 맨 아래 위치(레이어 미지원 브라우저에서도 덮어쓰기 보장).

⸻

3. JS 운영 규칙 (main.js 단일)

3-1) 부트스트랩

document.addEventListener('DOMContentLoaded', () => {
  initGlobal(); // 공통: 모바일 메뉴, 스크롤 섀도우 등
  initPage();   // 페이지별 초기화
});

3-2) 페이지 레지스트리 (data-page 매칭)

const PageInits = {
  'policy-fund': [initFundTabs, initRevealOnScroll],
  'company-intro': [initCounters, initRevealOnScroll],
  'us-market': [initChannelTabs, initRevealOnScroll],
  'certification': [initCertTabs, initRevealOnScroll],
  'services': [initServicesAccordions, initRevealOnScroll],
  'contact': []
};

function initPage(){
  const key = document.body.dataset.page;
  (PageInits[key] || []).forEach(fn => { try{ fn(); } catch(e){ console.warn(e); } });
}

3-3) 아일랜드(컴포넌트) 자동 장착

function initGlobal(){
  /* data-controller 기반 컴포넌트 장착 */
  const registry = { carousel: mountCarousel, reveal: mountReveal, tabs: mountTabs };
  document.querySelectorAll('[data-controller]').forEach(el => {
    const name = el.dataset.controller;
    if (registry[name]) registry[name](el);
  });
}

/* 공통 리빌(IntersectionObserver) */
function initRevealOnScroll(){
  const els = document.querySelectorAll('.reveal-ready');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('reveal-in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '80px' });
  els.forEach(el => io.observe(el));
}


⸻

4. 반응형/간격/앵커 안정화
	•	공통 간격: 모든 섹션에 pt-section pb-section
	•	앵커 오프셋: [id]{ scroll-margin-top: var(--header-h) }
→ 고정 헤더 변경 시 --header-h만 수정
	•	그리드 깨짐 방지: .grid-3의 auto-fit + minmax로 브레이크포인트 최소화
	•	미디어 비율: .ratio-*로 레이아웃 점프 방지
	•	iOS 안전영역/100vh 이슈(선택): 필요 시 --vh 보정

const setVh = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
window.addEventListener('resize', setVh); setVh();



⸻

5. 운영 수칙 체크리스트
	•	새 섹션: pt-section pb-section + 필요 시 data-controller
	•	페이지 스코프: <body data-page="...">가 PageInits 키와 일치
	•	페이지 전용 스타일: 전역 CSS **맨 아래 @layer overrides**로만 추가
	•	내부 앵커: id 부여 + scroll-margin-top: var(--header-h)
	•	애니메이션: reveal-ready 붙이면 자동 실행, 속도는 페이지 스코프에서만 변경

⸻

6. 왜 이 구조가 안 엉키나 (요약)
	1.	레이어 순서 고정로 충돌 원천 차단
	2.	낮은 특이성(:where) 로 페이지 오버라이드가 항상 우위
	3.	토큰/유틸 일관성으로 값 교체만으로 대규모 변경 가능
	4.	아일랜드 패턴으로 섹션 단위 초기화/해제 간단
	5.	파일 분리 금지로 로드 우선순위 고민 자체가 사라짐

⸻

결론

이 문서대로 운영하면 섹션 추가/디자인 변경/애니메이션이 잦아도,
전역 파일 한 벌로 깔끔하게 유지되고 충돌·우선순위·특이성 문제를 구조적으로 예방할 수 있습니다.


✅ 적용 범위
	•	정적 HTML 페이지 (index.html, about.html …)
	•	전역 style.css (하나의 전역 CSS 파일)
	•	전역 main.js (하나의 전역 JS 파일)
	•	반응형, 섹션 추가, 애니메이션 → 모두 위 구조에서 커버 가능

“워드프레스/리액트 같은 빌드 시스템”이 없어도 그대로 적용

*추가:
US INNOWAVE 사이트 스타일에 맞춰 폰트 + 컬러 토큰 세트를 깔끔하게 묶어드릴게요.
이 블록을 style.css의 @layer base 안에 넣으면, 이후 전체 사이트에서 값만 교체로 일괄 변경 가능합니다.

⸻

🎨 폰트 & 컬러 토큰 세트

@layer base {
  :root {
    /* === 폰트 === */
    --font-heading: "Noto Sans KR", "Pretendard", sans-serif;
    --font-body: "Pretendard", "Noto Sans KR", sans-serif;
    --font-mono: "Fira Code", monospace;

    /* === 컬러 팔레트 (원시 색상) === */
    --color-primary-50:  #f0fdfa;  /* 연한 청록 */
    --color-primary-100: #ccfbf1;
    --color-primary-200: #99f6e4;
    --color-primary-300: #5eead4;
    --color-primary-400: #2dd4bf;
    --color-primary-500: #14b8a6;  /* 메인 청록 */
    --color-primary-600: #0d9488;
    --color-primary-700: #0f766e;
    --color-primary-800: #115e59;
    --color-primary-900: #134e4a;

    --color-gray-50:  #f9fafb;
    --color-gray-100: #f3f4f6;
    --color-gray-200: #e5e7eb;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
    --color-gray-600: #4b5563;
    --color-gray-700: #374151;
    --color-gray-800: #1f2937;
    --color-gray-900: #111827;

    --color-accent-500: #1e40af; /* 파랑 - 정책자금 강조 */
    --color-accent-600: #1e3a8a;

    --color-warning: #facc15; /* 경고 */
    --color-error:   #dc2626; /* 오류 */
    --color-success: #16a34a; /* 성공 */

    /* === 의미론적 매핑 === */
    --brand-primary: var(--color-primary-500);
    --brand-secondary: var(--color-accent-500);
    --brand-accent: var(--color-primary-300);

    --background-default: #ffffff;
    --background-subtle: var(--color-gray-50);
    --background-muted: var(--color-gray-100);

    --text-primary: var(--color-gray-900);
    --text-secondary: var(--color-gray-600);
    --text-inverse: #ffffff;

    /* === 간격/반경/그림자 === */
    --section-y: clamp(56px, 6vw, 112px);
    --radius-sm: 6px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --shadow-sm: 0 1px 2px rgba(0,0,0,.05);
    --shadow-md: 0 4px 12px rgba(0,0,0,.08);
    --shadow-lg: 0 10px 25px rgba(0,0,0,.15);
  }

  /* 전역 적용 */
  body {
    font-family: var(--font-body);
    background: var(--background-default);
    color: var(--text-primary);
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.25;
  }
  code, pre {
    font-family: var(--font-mono);
  }
}


⸻

✅ 특징
	•	폰트 통일: 본문/헤딩/코드 전부 토큰으로 분리 → 한 줄 값 교체로 전체 변경
	•	컬러 팔레트: Tailwind 계열 톤으로 50~900 단계 → 밝은/어두운 배경 다 대응
	•	의미론적 토큰: --brand-primary, --text-primary 등으로 매핑 → 컴포넌트는 이 값만 참조
	•	UI 토큰: 간격, 반경, 그림자까지 포함

⸻

👉 이 세트만 넣어두면,
	•	브랜드 컬러 교체 = --brand-primary만 변경
	•	다크 모드 대응 = @media(prefers-color-scheme:dark)에서 변수 값만 바꾸기
	•	폰트 교체 = --font-heading, --font-body 교체

끝입니다 🎉
