# US INNOWAVE 웹사이트 개편 실행 계획서
> 최종 확정일: 2024년 12월
> 스타일 가이드: shadcn/ui 디자인 시스템

## 📋 프로젝트 개요

### 목적
- 국내 기업에게 정책자금/인증 컨설팅 제공
- 한국 기업의 미국 공급망·조달시장 진출 지원
- U.S. Agent로서의 전문 서비스 강조

### 핵심 메시지
**"정책자금부터 미국 진출까지, 기업 성장의 모든 단계를 함께하는 글로벌 파트너"**

---

## 🌳 최종 메뉴 구조

```
🏠 US INNOWAVE
│
├── 1️⃣ 회사소개 (company-intro.html)
│   ├── CEO 인사말
│   ├── 회사개요
│   ├── 법률자문 네트워크
│   └── 미션/비전
│
├── 2️⃣ 정책자금 컨설팅 (policy-fund.html)
│   ├── 창업자금
│   ├── 운전자금
│   ├── 시설자금
│   ├── 지원기관 소개
│   └── 정책자금 유치 사례
│
├── 3️⃣ ISO & 기업인증 (certification.html) ⭐NEW
│   ├── ISO 인증
│   ├── 기업부설연구소
│   ├── 벤처기업 인증
│   ├── 이노비즈/메인비즈
│   └── 사회적기업 인증
│
├── 4️⃣ 미국 공급망 & 조달시장 (us-market.html) ⭐NEW
│   ├── 미국 조달시장 (B2G)
│   ├── 유통망 진입 (아마존/월마트)
│   └── Fulfillment/규제 대응
│
├── 5️⃣ 수출 지원 (services.html)
│   ├── U.S. Agent
│   ├── FDA 시설등록
│   ├── SAM/GSA 등록
│   ├── 현지화 & 인증
│   └── 법률/행정 지원
│
└── 6️⃣ 문의하기 (contact.html)
    ├── 상담신청 폼
    ├── 연락처
    └── 오시는 길
```

---

## 🎨 shadcn/ui 디자인 시스템

### 디자인 토큰
```css
/* shadcn/ui 기반 디자인 토큰 */
:root {
  /* Colors - shadcn/ui 스타일 */
  --background: 0 0% 100%;        /* white */
  --foreground: 222.2 84% 4.9%;   /* almost black */
  
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  
  --primary: 188 100% 32%;        /* #009DAE 청록 */
  --primary-foreground: 0 0% 100%;
  
  --secondary: 223 90% 40%;       /* #1e40af 신뢰 블루 */
  --secondary-foreground: 0 0% 100%;
  
  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%;
  
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 188 100% 32%;
  
  /* Radius - shadcn/ui 기본값 */
  --radius: 0.5rem;
}

/* 섹션별 색상 차별화 */
.policy-section { background: #f0f9ff; } /* 연한 파랑 - 신뢰감 */
.us-section { background: #f0fdfa; }     /* 연한 청록 - 글로벌 */
.cert-section { background: #fef3c7; }   /* 연한 노랑 - 공인 */
```

### 컴포넌트 스타일
```css
/* shadcn/ui 카드 스타일 */
.card {
  border-radius: var(--radius);
  border: 1px solid hsl(var(--border));
  background: hsl(var(--card));
  color: hsl(var(--card-foreground));
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: all 0.2s ease;
}

.card:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  transform: translateY(-2px);
}

/* shadcn/ui 버튼 스타일 */
.btn {
  border-radius: calc(var(--radius) - 2px);
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.btn-primary {
  background: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

.btn-primary:hover {
  background: hsl(var(--primary) / 0.9);
}
```

---

## ✅ 피드백 반영 사항

### 1. 성공사례 하이라이트 (메인 페이지)
```html
<!-- index.html에 추가 -->
<section class="success-highlight">
  <div class="container">
    <h2 class="section-title">대표 성공사례</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card p-6">
        <div class="badge badge-blue mb-4">정책자금</div>
        <h3 class="text-lg font-semibold">A사 - 50억 유치</h3>
        <p class="text-muted-foreground">창업자금 지원으로 스케일업 성공</p>
      </div>
      <div class="card p-6">
        <div class="badge badge-teal mb-4">미국진출</div>
        <h3 class="text-lg font-semibold">B사 - FDA 승인</h3>
        <p class="text-muted-foreground">의료기기 미국 수출 성공</p>
      </div>
      <div class="card p-6">
        <div class="badge badge-yellow mb-4">기업인증</div>
        <h3 class="text-lg font-semibold">C사 - 벤처인증</h3>
        <p class="text-muted-foreground">벤처기업 인증으로 투자 유치</p>
      </div>
    </div>
  </div>
</section>
```

### 2. 모바일 네비게이션 - 아코디언 스타일
```javascript
// main.js 수정
function initMobileMenu() {
  const menuItems = document.querySelectorAll('.mobile-nav-item');
  
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      // 아코디언 토글
      item.classList.toggle('expanded');
      
      // 애니메이션
      const content = item.querySelector('.nav-content');
      if (content) {
        content.style.maxHeight = item.classList.contains('expanded') 
          ? content.scrollHeight + 'px' 
          : '0';
      }
    });
  });
}
```

### 3. 법률자문 섹션 재배치
```html
<!-- company-intro.html 내 탭 구조 -->
<div class="tabs">
  <div class="tab-list">
    <button class="tab-trigger active" data-tab="overview">회사개요</button>
    <button class="tab-trigger" data-tab="legal">법률자문 네트워크</button>
    <button class="tab-trigger" data-tab="mission">미션/비전</button>
  </div>
  <div class="tab-content">
    <!-- 각 탭 내용 -->
  </div>
</div>
```

### 4. FAQ 가시성 개선 (contact.html)
```html
<!-- contact.html - 탭 구조 -->
<section class="contact-section">
  <div class="container">
    <div class="tabs-container">
      <div class="tab-list border-b">
        <button class="tab-button active">문의하기</button>
        <button class="tab-button">자주 묻는 질문</button>
      </div>
      
      <div class="tab-panels">
        <!-- 문의하기 패널 -->
        <div class="tab-panel active">
          <form class="contact-form">
            <!-- 상담신청 폼 -->
          </form>
        </div>
        
        <!-- FAQ 패널 -->
        <div class="tab-panel">
          <div class="faq-accordion">
            <!-- FAQ 아코디언 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 5. main.js 불필요 로직 제거
```javascript
// 제거할 로직들
// ❌ 드롭다운 메뉴 관련 코드
// ❌ portfolio 페이지 관련 코드
// ❌ notice 페이지 관련 코드

// ✅ 유지/추가할 로직
function initNavigation() {
  // 단순화된 네비게이션
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;
  
  navLinks.forEach(link => {
    if (link.getAttribute('href').includes(currentPath)) {
      link.classList.add('active');
    }
  });
}
```

---

## 📊 shadcn/ui 컴포넌트 적용 계획

| 컴포넌트 | 적용 위치 | shadcn/ui 스타일 |
|---------|----------|------------------|
| **Card** | 서비스 카드, 성공사례 | border, shadow, hover 효과 |
| **Button** | CTA 버튼 | primary/secondary/ghost 변형 |
| **Tabs** | 회사소개, 문의하기 | border-bottom 스타일 |
| **Accordion** | FAQ, 모바일 메뉴 | 부드러운 expand 애니메이션 |
| **Badge** | 성공사례, 인증 타입 | 작고 둥근 라벨 |
| **Form** | 상담신청 | input border, focus ring |
| **Alert** | 공지, 안내 메시지 | 아이콘 + 메시지 조합 |

---

## 🚀 작업 실행 순서

### Phase 1: 준비 및 백업 (10분)
```bash
# 백업 생성
cp -r usinnowave usinnowave_backup_$(date +%Y%m%d)

# Git 브랜치 생성
git checkout -b feature/menu-restructure-shadcn
```

### Phase 2: shadcn/ui 스타일 CSS 추가 (30분)
- style.css에 shadcn/ui 디자인 토큰 추가
- 컴포넌트 기본 스타일 정의

### Phase 3: 파일 구조 재편 (20분)
```bash
# 파일명 변경
mv about.html company-intro.html
mv service-funding.html policy-fund.html  
mv service-export.html services.html
mv service-iso.html certification.html
mv location.html contact.html

# 신규 파일 생성
touch us-market.html

# 삭제
rm portfolio.html
rm faq.html
rm notice.html
```

### Phase 4: 네비게이션 업데이트 (1시간)
- 모든 페이지 헤더 메뉴 수정
- 모바일 아코디언 메뉴 구현

### Phase 5: 메인 페이지 성공사례 추가 (30분)
- 하이라이트 카드 3개 배치
- shadcn/ui 카드 스타일 적용

### Phase 6: contact.html 탭 구조 (30분)
- 문의하기 + FAQ 탭 구현
- 아코디언 FAQ 추가

### Phase 7: main.js 정리 (20분)
- 드롭다운 관련 코드 제거
- 불필요 페이지 로직 제거
- 새 기능 추가

### Phase 8: 각 페이지 콘텐츠 작업 (3시간)
- policy-fund.html: 정책자금 콘텐츠
- certification.html: 인증 콘텐츠
- us-market.html: 미국시장 콘텐츠
- services.html: 서비스 통합
- company-intro.html: 탭 구조 적용

### Phase 9: QA 및 테스트 (30분)
- 모든 링크 검증
- 반응형 테스트
- 브라우저 호환성 체크

**총 예상 시간: 약 6시간 30분**

---

## ✅ 최종 체크리스트

- [ ] 백업 완료
- [ ] Git 브랜치 생성
- [ ] shadcn/ui 디자인 토큰 적용
- [ ] 파일 구조 재편 완료
- [ ] 네비게이션 메뉴 업데이트
- [ ] 성공사례 메인 하이라이트 추가
- [ ] 모바일 아코디언 메뉴 구현
- [ ] 법률자문 탭 구조로 재배치
- [ ] FAQ 탭으로 가시성 개선
- [ ] main.js 불필요 코드 제거
- [ ] 모든 카드/버튼 shadcn/ui 스타일 적용
- [ ] QA 테스트 완료
- [ ] 최종 커밋 및 푸시

---

## 📝 주의사항

1. **성공사례 분산**: portfolio.html 삭제 후 각 페이지에 관련 사례 배치
2. **온라인스토어 제거**: 통신판매업 신고 불필요로 판단
3. **드롭다운 메뉴 제거**: 1-depth 단순 구조로 변경
4. **모바일 최적화**: 6개 메뉴가 적절히 표시되는지 확인
5. **JS 로직 정리**: 콘솔 에러 방지를 위한 불필요 코드 제거

---

## 🎯 핵심 변경 사항

1. **메뉴 수 변경**: 8개 → 6개 (단순화)
2. **신규 페이지**: certification.html, us-market.html
3. **통합 페이지**: contact.html (FAQ + location 통합)
4. **삭제 페이지**: portfolio, notice, 온라인스토어
5. **콘셉트 강화**: "정책자금 전문 + 미국 진출" 이중 포지셔닝
6. **디자인 시스템**: shadcn/ui 스타일 전면 적용

---

*문서 작성일: 2024년 12월*
*작성자: US INNOWAVE 개발팀*