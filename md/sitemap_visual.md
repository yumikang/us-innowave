# (주)유에스이노웨이브 사이트맵 도식화

## 전체 사이트 구조도

```
📦 유에스이노웨이브 웹사이트
│
├── 🏠 HOME (index.html)
│
├── 📂 회사소개
│   ├── 📄 유에스이노웨이브 (about.html)
│   ├── 📄 전문가 그룹 (team.html)
│   └── 📄 오시는 길 (location.html)
│
├── 📂 핵심 서비스
│   ├── 📄 정책자금 컨설팅 (service-funding.html)
│   ├── 📄 미국 수출 컨설팅 (service-export.html)
│   └── 📄 ISO 인증 (service-iso.html)
│
├── 📄 성공사례 (portfolio.html)
│
├── 📂 고객지원
│   ├── 📄 온라인 문의 (contact.html)
│   ├── 📄 자주 묻는 질문 (faq.html)
│   └── 📄 공지사항 (notice.html)
│
└── 📂 기타 페이지
    ├── 📄 개인정보처리방침 (privacy.html)
    ├── 📄 이용약관 (terms.html)
    └── 📄 사이트맵 (sitemap.html)
```

## 네비게이션 메뉴 구조

```
┌─────────────────────────────────────────────────────┐
│                    상단 네비게이션 바                    │
├─────────────────────────────────────────────────────┤
│                                                      │
│  HOME   회사소개▼   핵심서비스▼   성공사례   고객지원▼  │
│           │           │                      │       │
│           ├─ 유에스이노웨이브    ├─ 정책자금 컨설팅      ├─ 온라인 문의
│           ├─ 전문가 그룹        ├─ 미국 수출 컨설팅     ├─ 자주 묻는 질문
│           └─ 오시는 길         └─ ISO 인증          └─ 공지사항
│                                                      │
└─────────────────────────────────────────────────────┘
```

## 디렉토리 구조도

```
US_Innowave_Website/
│
├── 📄 index.html
│
├── 📁 about/
│   ├── about.html
│   ├── team.html
│   └── location.html
│
├── 📁 services/
│   ├── service-funding.html
│   ├── service-export.html
│   └── service-iso.html
│
├── 📄 portfolio.html
│
├── 📁 support/
│   ├── contact.html
│   ├── faq.html
│   └── notice.html
│
├── 📁 legal/
│   ├── privacy.html
│   └── terms.html
│
├── 📄 sitemap.html
│
├── 📁 css/
│   └── style.css
│
├── 📁 js/
│   └── main.js
│
└── 📁 assets/
    ├── 📁 images/
    ├── 📁 icons/
    └── 📁 documents/
```

## 페이지 계층 구조 (Depth)

```
Level 0 (Root)
    │
    └── Level 1 (Main Pages)
            │
            ├── HOME
            │
            ├── 회사소개 ─────┬── Level 2 (Sub Pages)
            │                 │
            │                 ├── 유에스이노웨이브
            │                 ├── 전문가 그룹
            │                 └── 오시는 길
            │
            ├── 핵심 서비스 ───┬── Level 2 (Sub Pages)
            │                 │
            │                 ├── 정책자금 컨설팅
            │                 ├── 미국 수출 컨설팅
            │                 └── ISO 인증
            │
            ├── 성공사례 (단일 페이지)
            │
            └── 고객지원 ─────┬── Level 2 (Sub Pages)
                             │
                             ├── 온라인 문의
                             ├── 자주 묻는 질문
                             └── 공지사항
```

## 사용자 플로우 (주요 경로)

```
방문자 진입
    │
    ├──→ HOME
    │     │
    │     ├──→ 핵심 서비스 소개 클릭
    │     │     └──→ 각 서비스 상세 페이지
    │     │
    │     └──→ 빠른 문의 클릭
    │           └──→ 온라인 문의 페이지
    │
    ├──→ 회사소개
    │     │
    │     ├──→ 유에스이노웨이브 (회사 정보 확인)
    │     ├──→ 전문가 그룹 (신뢰도 확인)
    │     └──→ 오시는 길 (방문 상담)
    │
    ├──→ 핵심 서비스
    │     │
    │     ├──→ 정책자금 컨설팅 ──→ 온라인 문의
    │     ├──→ 미국 수출 컨설팅 ──→ 온라인 문의
    │     └──→ ISO 인증 ────────→ 온라인 문의
    │
    └──→ 성공사례
          └──→ 신뢰도 확인 후 문의
```

## 페이지별 URL 구조

```
도메인: www.usinnowave.com

/                                   # HOME
├── /about/                        # 회사소개
│   ├── /about/company             # 유에스이노웨이브
│   ├── /about/team                # 전문가 그룹
│   └── /about/location            # 오시는 길
│
├── /services/                     # 핵심 서비스
│   ├── /services/funding          # 정책자금 컨설팅
│   ├── /services/export           # 미국 수출 컨설팅
│   └── /services/iso              # ISO 인증
│
├── /portfolio                     # 성공사례
│
├── /support/                      # 고객지원
│   ├── /support/contact           # 온라인 문의
│   ├── /support/faq               # 자주 묻는 질문
│   └── /support/notice            # 공지사항
│
├── /privacy                       # 개인정보처리방침
├── /terms                         # 이용약관
└── /sitemap                       # 사이트맵
```