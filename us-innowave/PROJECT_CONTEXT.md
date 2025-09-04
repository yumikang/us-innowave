# 📁 US INNOWAVE Next.js 프로젝트 컨텍스트

## 🏗️ 프로젝트 구조

```
us-innowave-next/
├── app/                         # Next.js 15 App Router
│   ├── layout.tsx              # 루트 레이아웃
│   ├── page.tsx               # 홈페이지
│   ├── globals.css            # 전역 스타일 (3000+ 라인)
│   ├── certification/         # 인증 서비스 페이지
│   ├── company-intro/         # 회사 소개 페이지
│   ├── contact/              # 연락처 페이지
│   ├── policy-fund/          # 정책자금 페이지
│   ├── services/             # 서비스 페이지
│   └── us-market/            # 미국시장진출 페이지
│
├── components/                  # 재사용 가능한 컴포넌트
│   ├── Header.tsx             # 헤더 내비게이션
│   ├── Footer.tsx             # 푸터
│   ├── MobileNav.tsx          # 모바일 내비게이션
│   ├── HeroSlider.tsx         # 히어로 이미지 슬라이더
│   └── BodyClass.tsx          # 동적 body 클래스 관리
│
├── public/                      # 정적 자산
│   ├── images/               # 이미지 (2.9MB)
│   ├── icon.svg              # 파비콘
│   └── favicon.ico           # 파비콘 (대체)
│
└── 설정 파일들
    ├── next.config.ts         # Next.js 설정
    ├── tsconfig.json         # TypeScript 설정
    ├── package.json          # 프로젝트 의존성
    ├── .gitignore           # Git 제외 파일
    └── .eslintrc.json       # ESLint 설정
```

## 📦 의존성 정보

### 핵심 의존성
```json
{
  "next": "15.5.2",        // 최신 Next.js
  "react": "19.1.0",       // React 19 (최신)
  "react-dom": "19.1.0"    // React DOM
}
```

### 개발 의존성
```json
{
  "typescript": "^5",           // TypeScript 5
  "@types/node": "^20",        // Node.js 타입
  "@types/react": "^19",       // React 타입
  "@types/react-dom": "^19",   // React DOM 타입
  "eslint": "^9",              // ESLint 9
  "eslint-config-next": "15.5.2"  // Next.js ESLint 설정
}
```

## 🔧 프로젝트 설정

### Next.js 설정 (`next.config.ts`)
- TypeScript 기반 설정
- App Router 사용
- 정적 생성 최적화

### TypeScript 설정 (`tsconfig.json`)
- Strict 모드 활성화
- Path alias: `@/*` → `/*`
- Next.js 플러그인 포함

### 스크립트 명령어
```bash
npm run dev    # 개발 서버 (localhost:3000)
npm run build  # 프로덕션 빌드
npm run start  # 프로덕션 서버
npm run lint   # ESLint 검사
```

## 📊 프로젝트 통계

### 파일 통계
- **TypeScript 파일**: 2,790개 (node_modules 포함)
- **주요 페이지**: 7개
- **컴포넌트**: 5개
- **이미지 자산**: 2.9MB

### 코드 규모
- **globals.css**: 1,800+ 라인
- **컴포넌트 평균**: 100-150 라인
- **페이지 평균**: 200-300 라인

## 🎨 스타일링 시스템

### CSS 아키텍처
```css
/* 4개 레이어 시스템 */
@layer base       /* 리셋, 기본 스타일 */
@layer components /* UI 컴포넌트 */
@layer utilities  /* 유틸리티 클래스 */
@layer overrides  /* 특수 오버라이드 */
```

### 디자인 토큰
- **색상**: CSS 변수 기반 (`--brand-primary`, `--gray-*`)
- **타이포그래피**: 스케일 시스템 (`text-xs` ~ `text-6xl`)
- **간격**: 일관된 spacing 시스템
- **반응형**: 768px, 1024px 브레이크포인트

## 🚀 최근 변경사항

### 최근 커밋 (최신순)
1. `c2895fe` - UI/UX 개선 및 모바일 내비게이션 시스템 구현
2. `ee23d73` - contact 페이지 이식 완료 및 전체 마이그레이션 완성
3. `e923de5` - company-intro 페이지 완전 이식 완료
4. `fe8f449` - certification 페이지 완전 이식 완료
5. `5c957d1` - services 페이지 완전 이식 완료
6. `6af8ab8` - us-market 페이지 완전 이식 완료
7. `cdaedcd` - Next.js 14 마이그레이션 - 홈페이지 완성

### 주요 개선사항
- ✅ 모바일 내비게이션 Off-canvas 드로어 구현
- ✅ SSR Hydration 오류 해결
- ✅ 서비스 카드 반응형 그리드 (1→2→3열)
- ✅ 히어로 텍스트 가독성 개선 (text-shadow)
- ✅ 아이콘 크기 표준화 (icon-12)

## 🔐 보안 & 최적화

### 보안 고려사항
- CSP 헤더 준비
- 환경변수 분리 (.env)
- 민감 정보 git 제외

### 성능 최적화
- 정적 생성 (SSG)
- 이미지 최적화 준비
- 번들 크기 최적화
- 코드 스플리팅

## 📋 개발 상태

### 완료된 작업
- ✅ 7개 페이지 완전 마이그레이션
- ✅ 반응형 디자인 구현
- ✅ 모바일 내비게이션 시스템
- ✅ 접근성 WCAG 2.1 AA 준수
- ✅ SEO 메타데이터 최적화

### 진행 중/계획
- 🔄 성능 모니터링 설정
- 📅 CMS 통합 검토
- 📅 다국어 지원 (i18n)
- 📅 PWA 기능 추가

## 🛠️ 개발 환경

### 권장 개발 환경
- Node.js 18+ 
- npm 9+ 또는 yarn 1.22+
- VS Code + TypeScript 확장
- React Developer Tools

### 로컬 개발 시작
```bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 빌드 테스트
npm run build
```

## 📚 관련 문서

- [MIGRATION_REPORT.md](./MIGRATION_REPORT.md) - 마이그레이션 상세 보고서
- [Next.js 문서](https://nextjs.org/docs) - 프레임워크 참조
- [React 19 문서](https://react.dev) - React 최신 문서

## 🔗 빠른 링크

### 주요 파일 위치
- 홈페이지: `app/page.tsx`
- 전역 스타일: `app/globals.css`
- 헤더: `components/Header.tsx`
- 모바일 메뉴: `components/MobileNav.tsx`
- 레이아웃: `app/layout.tsx`

### 페이지 라우트
- `/` - 홈페이지
- `/company-intro` - 회사소개
- `/services` - 서비스
- `/policy-fund` - 정책자금
- `/us-market` - 미국시장진출
- `/certification` - 인증서비스
- `/contact` - 연락처

---

**마지막 업데이트**: 2024년  
**프로젝트 상태**: Production Ready  
**브랜치**: feature/nextjs-migration (6 commits ahead)