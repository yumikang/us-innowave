토큰 전환 후 “잘 깨지는 5곳”을 한 번에 점검·수정할 수 있게 자동 점검 체크리스트 파일을 만들어왔어. 아래 내용을 checklist.md로 저장해서 개발·QA 때 참고하면 돼.

# UI 자동 점검 체크리스트 (Design Tokens 적용 이후)

## 0) 공통 전제
- 전역 토큰이 유효한지:
  - `:root`에 (A) PALETTE / (B) SEMANTIC / (C) SCALE 이 모두 선언되어 있는가? (예: `--text-primary`, `--background-subtle`, `--section-y`, `--h1` 등)
  - 전역 컴포넌트가 **의미 토큰**을 참조하는가? (예: `body{ color: var(--text-primary); background: var(--background-default) }`)   [oai_citation:0‡style.css](file-service://file-7nsek4u7Muu3Fn5DSSAJsS)

---

## 1) 고정 헤더(Sticky Header)
**대상 셀렉터**
- HTML: `.header` (고정 내비), `.nav-container`, `.nav-wrapper`, `.logo`, `.nav-menu`, `.mobile-menu-btn#mobileMenuBtn`  
  - 인덱스/서브 전 페이지 공통 구조 확인.   [oai_citation:1‡index.html](file-service://file-Gn7pjns47JsQDb9gQpSmGC)  [oai_citation:2‡portfolio.html](file-service://file-B7fhxKLkuiGwg1PbcwAVNA)
- CSS: `.header { position: fixed; top:0; left:0; right:0; background-color: white; z-index:1000; }`  
  - box-shadow 초기값 및 전환(transition) 존재 확인.   [oai_citation:3‡style.css](file-service://file-7nsek4u7Muu3Fn5DSSAJsS)
- JS: 스크롤 시 헤더 그림자 인라인 지정 (선택: `.header-scrolled` 클래스로 리팩토링 가능)   [oai_citation:4‡main.js](file-service://file-LnDCXCugkcm26v6XUeNEpd)

**체크 포인트**
- [ ] 헤더가 스크롤 시 상단에 붙어 있고 컨텐츠를 가리지 않도록 `.main-content` 상단 패딩(또는 `scroll-margin-top`)이 잡혀있는가?
- [ ] 스크롤 10px 초과 시 헤더 그림자 증가(가시성 OK), 0~10px 구간은 기본 얕은 그림자.   [oai_citation:5‡main.js](file-service://file-LnDCXCugkcm26v6XUeNEpd)
- [ ] 배경/텍스트 색이 토큰으로 표현되는가? (`background-color: var(--background-default)` 권장)

**빠른 픽스**
```css
/* 첫 섹션 앵커 점프 시 헤더에 가리지 않게 */
section[id] { scroll-margin-top: 90px; }
/* 선택: 인라인 box-shadow → 클래스 토글로 일원화 */
.header-scrolled{ box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1); }


⸻

2) 모바일 슬라이드 메뉴

대상 셀렉터
	•	HTML: #mobileMenuBtn, .nav-menu (열림 시 .active 토글)   ￼
	•	CSS: .nav-menu.active 상태에서의 표시/오프캔버스/오버레이 스타일(스타일시트 내 정의 확인).   ￼
	•	JS: initMobileMenu()가 버튼/메뉴에 .active 토글 + body.style.overflow='hidden' 적용.   ￼

체크 포인트
	•	768px 이하에서 햄버거 버튼 클릭 시 .nav-menu.active가 붙고, 스크롤 잠금 동작(바디 오버플로 hidden) 되는가?   ￼
	•	메뉴 외부 클릭 시 닫히는가? (document.addEventListener('click', ...))   ￼
	•	토큰 교체로 메뉴 배경/텍스트 대비가 충분한가? (--background-default, --text-primary)

빠른 픽스

/* 예: 모바일에서 .nav-menu 활성화 상태 시 전체 화면 오버레이/슬라이드 */
@media (max-width: 768px){
  .nav-menu{ position: fixed; inset: 0 0 0 auto; width: 80%; max-width: 320px; background: var(--background-default); transform: translateX(100%); transition: transform .3s; }
  .nav-menu.active{ transform: translateX(0); }
}


⸻

3) 드롭다운(모바일 전용 탭 펼침)

대상 셀렉터
	•	HTML: .nav-item.dropdown > .nav-link + .dropdown-menu 구조 (전 페이지 동일)   ￼  ￼  ￼
	•	JS: initDropdownMenus()가 모바일(<=768px) 에서만 .nav-item.dropdown.active 토글. 리사이즈 시 (>768px) .active 초기화.   ￼

체크 포인트
	•	모바일(<=768px)에서 드롭다운 링크 탭 시 e.preventDefault()가 적용되어 하위 메뉴가 펼쳐지는가?   ￼
	•	데스크톱(>768px)에서 hover 또는 클릭 기본 링크 동작이 방해받지 않는가?
	•	.dropdown-menu 배경/보더/텍스트가 의미 토큰(--background-default, --border, --text-primary) 사용 중인가?

빠른 픽스

/* 모바일에서 active 시 하위 메뉴 노출 */
@media (max-width: 768px){
  .nav-item.dropdown .dropdown-menu{ display: none; }
  .nav-item.dropdown.active .dropdown-menu{ display: block; background: var(--background-default); border:1px solid var(--border); }
}


⸻

4) 페이지 헤더 섹션 (Hero / Page Header)

대상 셀렉터
	•	HTML: .page-header, .page-title, .page-subtitle (포트폴리오 등 서브페이지 공통)   ￼  ￼
	•	CSS: 섹션 패딩/간격이 --section-y, 그리드 --section-gap, 제목 사이즈 --h1/--h2를 참조하는지 확인.   ￼

체크 포인트
	•	상단 여백이 헤더 높이와 충돌하지 않는가? (첫 섹션 top-offset 확보)
	•	모바일에서 --h1/--h2가 clamp로 부드럽게 축소되는가?
	•	배경/보더/보조 배경(--background-subtle)을 사용할 때 대비 OK?

빠른 픽스

.page-header{ padding: var(--section-y) 0; background: var(--background-subtle); }
.page-title{ font-size: var(--h1); color: var(--text-primary); }
.page-subtitle{ color: var(--text-secondary); }


⸻

5) 공지 리스트 Hover (Notice List)

대상 셀렉터
	•	HTML/CSS(공지 페이지 인라인 스타일): .notice-list, .notice-item, .notice-item:hover, .notice-badge(.event/.update), .notice-detail(.active)   ￼  ￼
	•	의미 토큰 사용: --text-primary, --text-secondary, --background-subtle, --border, 상태색 --success, --warning, --error

체크 포인트
	•	.notice-item:hover 시 배경이 --background-subtle로 바뀌고, 좌우 여백/패딩 보정 마진이 정상 적용되는가? (리스트 경계 흔들림 없는지)   ￼
	•	상태 배지 색상: .event → --success, .update → --warning, .new-badge → --error 매핑이 유지되는가?   ￼
	•	상세 열림: .notice-detail.active { display:block } 토글 시 외곽선/배경 토큰 유지?

빠른 픽스

.notice-item{ border-bottom:1px solid var(--border); transition: background .2s; }
.notice-item:hover{ background: var(--background-subtle); margin:0 -1rem; padding:1.25rem 1rem; }
.notice-badge.event{ background: var(--success); }
.notice-badge.update{ background: var(--warning); }
.notice-title .new-badge{ background: var(--error); }


⸻

부록) 공통 스모크 테스트 (수동/자동)
	1.	헤더 높이: 페이지 로드 직후 스크롤 Y=0 → 헤더 그림자 약함, 스크롤 20px → 그림자 강화.   ￼
	2.	모바일 메뉴: 375×812에서 햄버거 탭 → 메뉴 슬라이드인 + 바디 스크롤 잠금, 빈 영역 탭 → 닫힘.   ￼
	3.	드롭다운: 모바일에서 “회사소개” 탭 → 하위 메뉴 펼침, 다른 항목 탭 → 이전 닫힘. 데스크톱에선 링크 기본 동작 유지.   ￼
	4.	페이지 헤더 섹션: 타이틀 크기(clamp) 축소/확대, 섹션 상단 여백이 헤더에 가리지 않음.   ￼
	5.	공지 리스트: hover 시 행 배경 전환과 마진/패딩 보정이 자연스러움, 상태 배지 색 매핑 정확.   ￼

---

필요하면 위 내용을 실제 리포에 `checklist.md`로 바로 커밋하기 좋게 **.md 파일 형태**로도 만들어줄 수 있어. 추가로, 원하면 **Playwright용 간단 스모크 테스트 스크립트**(헤더 그림자/모바일 토글/드롭다운/공지 hover 스냅샷)도 제공해줄게.