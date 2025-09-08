'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './certification.module.css';

// Note: Metadata export would be in a layout.tsx or handled differently in client components
// For SEO, you might want to create this as a Server Component or handle metadata differently

export default function CertificationPage() {
  const [activeTab, setActiveTab] = useState('cert1');

  const showCertTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">ISO & 기업인증</h1>
          <p className="page-subtitle">국제 표준 인증과 정부 기업인증으로 경쟁력을 높입니다</p>
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span>ISO & 기업인증</span>
          </div>
        </div>
      </section>

      {/* ISO Types Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ISO 인증 종류</h2>
            <p className="section-subtitle">기업의 필요에 맞는 최적의 인증 솔루션을 제공합니다</p>
          </div>
          <div className="cards-grid">
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
              </div>
              <h3 className="service-title">ISO 9001</h3>
              <h4 style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}>품질경영시스템</h4>
              <p className="service-description">
                고객 만족과 품질 향상을 위한 체계적인 경영시스템 구축
              </p>
              <ul className="feature-list">
                <li>프로세스 개선</li>
                <li>고객만족도 향상</li>
                <li>품질관리 체계화</li>
                <li>지속적 개선</li>
              </ul>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="service-title">ISO 14001</h3>
              <h4 style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}>환경경영시스템</h4>
              <p className="service-description">
                환경 보호와 지속가능한 경영을 위한 국제 표준 인증
              </p>
              <ul className="feature-list">
                <li>환경 리스크 관리</li>
                <li>법규 준수</li>
                <li>자원 효율성</li>
                <li>친환경 이미지</li>
              </ul>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                </svg>
              </div>
              <h3 className="service-title">ISO 45001</h3>
              <h4 style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}>안전보건경영시스템</h4>
              <p className="service-description">
                안전하고 건강한 작업 환경 조성을 위한 관리 시스템
              </p>
              <ul className="feature-list">
                <li>산업재해 예방</li>
                <li>법적 책임 최소화</li>
                <li>근로자 안전</li>
                <li>생산성 향상</li>
              </ul>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M2 12h20"/>
                  <path d="M4 4l16 16M20 4L4 20"/>
                </svg>
              </div>
              <h3 className="service-title">ISO 27001</h3>
              <h4 style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}>정보보안경영시스템</h4>
              <p className="service-description">
                정보자산 보호와 사이버 보안을 위한 국제 표준 인증
              </p>
              <ul className="feature-list">
                <li>정보보안 강화</li>
                <li>데이터 보호</li>
                <li>사이버 위협 대응</li>
                <li>고객 신뢰 확보</li>
              </ul>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3h18v18H3zM9 3v18M15 3v18M3 9h18M3 15h18"/>
                </svg>
              </div>
              <h3 className="service-title">ISO 22000</h3>
              <h4 style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}>식품안전경영시스템</h4>
              <p className="service-description">
                식품 생산·유통 전 과정의 안전성을 보장하는 인증
              </p>
              <ul className="feature-list">
                <li>식품 안전성 확보</li>
                <li>HACCP 통합</li>
                <li>법규 준수</li>
                <li>소비자 신뢰</li>
              </ul>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="9" x2="15" y2="9"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
              </div>
              <h3 className="service-title">ISO 13485</h3>
              <h4 style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}>의료기기품질경영시스템</h4>
              <p className="service-description">
                의료기기 제조 및 품질관리를 위한 특화된 인증
              </p>
              <ul className="feature-list">
                <li>의료기기 품질보증</li>
                <li>규제 요구사항 충족</li>
                <li>제품 안전성</li>
                <li>글로벌 시장 진출</li>
              </ul>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z"/>
                  <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                  <path d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"/>
                  <path d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
                </svg>
              </div>
              <h3 className="service-title">ISO 50001</h3>
              <h4 style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}>에너지경영시스템</h4>
              <p className="service-description">
                에너지 효율 개선과 비용 절감을 위한 체계적 관리
              </p>
              <ul className="feature-list">
                <li>에너지 비용 절감</li>
                <li>탄소 배출 감소</li>
                <li>에너지 효율 향상</li>
                <li>지속가능 경영</li>
              </ul>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 20h20"/>
                  <path d="M7 20V10l5-6 5 6v10"/>
                  <path d="M10 20v-6h4v6"/>
                </svg>
              </div>
              <h3 className="service-title">ISO 22301</h3>
              <h4 style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}>비즈니스연속성경영시스템</h4>
              <p className="service-description">
                재해·재난 상황에서도 비즈니스 연속성을 보장
              </p>
              <ul className="feature-list">
                <li>위기 대응 능력</li>
                <li>사업 중단 최소화</li>
                <li>복구 시간 단축</li>
                <li>리스크 관리</li>
              </ul>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <h3 className="service-title">ISO 37001</h3>
              <h4 style={{ color: 'var(--brand-secondary)', marginBottom: '1rem' }}>부패방지경영시스템</h4>
              <p className="service-description">
                기업 윤리와 투명성 확보를 위한 반부패 관리 시스템
              </p>
              <ul className="feature-list">
                <li>부패 리스크 예방</li>
                <li>컴플라이언스 강화</li>
                <li>기업 신뢰도 향상</li>
                <li>투명경영 실현</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="content-section" style={{ backgroundColor: 'var(--background-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ISO 인증 프로세스</h2>
            <p className="section-subtitle">체계적인 프로세스로 빠르고 확실한 인증 취득을 지원합니다</p>
          </div>
          <div className={styles.processTimeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>1</div>
              <div className={styles.timelineContent}>
                <h3>현황 진단</h3>
                <p>기업 현황 분석 및 Gap 분석</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>2</div>
              <div className={styles.timelineContent}>
                <h3>문서화</h3>
                <p>매뉴얼 및 절차서 작성</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>3</div>
              <div className={styles.timelineContent}>
                <h3>교육</h3>
                <p>내부심사원 교육 및 전사 교육</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>4</div>
              <div className={styles.timelineContent}>
                <h3>내부심사</h3>
                <p>시스템 운영 및 개선사항 도출</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>5</div>
              <div className={styles.timelineContent}>
                <h3>인증심사</h3>
                <p>인증기관 심사 및 시정조치</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}>6</div>
              <div className={styles.timelineContent}>
                <h3>인증취득</h3>
                <p>인증서 발급 및 사후관리</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">인증 취득 효과</h2>
            <p className="section-subtitle">ISO 인증으로 얻을 수 있는 다양한 비즈니스 가치</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>01</div>
              <div>
                <h4 className={styles.featureTitle}>대외 신뢰도 향상</h4>
                <p className={styles.featureDescription}>국제 표준 인증으로 기업 이미지와 브랜드 가치 상승</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>02</div>
              <div>
                <h4 className={styles.featureTitle}>경쟁 우위 확보</h4>
                <p className={styles.featureDescription}>입찰 가점 및 우선협상대상자 선정 시 유리</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>03</div>
              <div>
                <h4 className={styles.featureTitle}>업무 효율성 증대</h4>
                <p className={styles.featureDescription}>체계적인 프로세스로 생산성 향상 및 비용 절감</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>04</div>
              <div>
                <h4 className={styles.featureTitle}>리스크 관리</h4>
                <p className={styles.featureDescription}>예방 중심의 관리로 사고 예방 및 손실 최소화</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>05</div>
              <div>
                <h4 className={styles.featureTitle}>글로벌 진출 기반</h4>
                <p className={styles.featureDescription}>해외 거래처 요구사항 충족 및 수출 경쟁력 강화</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureNumber}>06</div>
              <div>
                <h4 className={styles.featureTitle}>지속적 개선</h4>
                <p className={styles.featureDescription}>PDCA 사이클을 통한 지속적인 성장과 발전</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Certifications Section */}
      <section className={styles.enterpriseSection}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title" style={{ color: 'white' }}>정부 기업인증</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.9)' }}>
              정부가 인정하는 우수기업 인증으로 각종 혜택과 지원을 받으세요
            </p>
          </div>
          
          {/* Certification Tabs */}
          <div className={styles.certTabs}>
            <div className={styles.certTabButtons}>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert1' ? styles.active : ''}`}
                onClick={() => showCertTab('cert1')}
              >
                기업부설연구소
              </button>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert2' ? styles.active : ''}`}
                onClick={() => showCertTab('cert2')}
              >
                벤처기업
              </button>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert3' ? styles.active : ''}`}
                onClick={() => showCertTab('cert3')}
              >
                이노비즈
              </button>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert4' ? styles.active : ''}`}
                onClick={() => showCertTab('cert4')}
              >
                메인비즈
              </button>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert5' ? styles.active : ''}`}
                onClick={() => showCertTab('cert5')}
              >
                사회적기업
              </button>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert6' ? styles.active : ''}`}
                onClick={() => showCertTab('cert6')}
              >
                강소기업
              </button>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert7' ? styles.active : ''}`}
                onClick={() => showCertTab('cert7')}
              >
                가족친화기업
              </button>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert8' ? styles.active : ''}`}
                onClick={() => showCertTab('cert8')}
              >
                청년친화강소기업
              </button>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert9' ? styles.active : ''}`}
                onClick={() => showCertTab('cert9')}
              >
                녹색기업
              </button>
              <button 
                className={`${styles.certTabBtn} ${activeTab === 'cert10' ? styles.active : ''}`}
                onClick={() => showCertTab('cert10')}
              >
                여성기업
              </button>
            </div>
            
            {/* Tab Contents */}
            <div className={`${styles.certTabContent} ${activeTab === 'cert1' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>기업부설연구소</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>기업이 자체 R&D 역량을 갖추고 체계적인 연구개발 활동을 수행하는 조직을 보유한 경우 한국산업기술진흥협회(KOITA)에서 인정하는 인증</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 연구개발비 세액공제 확대 (최대 50%)</li>
                      <li>✓ 연구전담요원 병역특례 지정</li>
                      <li>✓ 정부 R&D 과제 가점</li>
                      <li>✓ 기술개발 자금 지원 우대</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>설립 요건 검토 (연구원 3명 이상, 독립공간)</li>
                      <li>연구소 설립 준비 (정관, 운영규정)</li>
                      <li>온라인 신청서 작성</li>
                      <li>서류 심사 및 현장실사</li>
                      <li>인증서 발급 (약 2-3주)</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
            
            <div className={`${styles.certTabContent} ${activeTab === 'cert2' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>벤처기업 인증</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>기술성과 성장성이 우수한 중소기업을 벤처기업으로 확인하여 각종 지원혜택을 제공하는 제도</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 법인세·소득세 50% 감면 (5년간)</li>
                      <li>✓ 증권거래세 면제</li>
                      <li>✓ 스톡옵션 부여 범위 확대</li>
                      <li>✓ 정부 지원사업 우대</li>
                      <li>✓ 특허 우선심사</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>유형 선택 (기술평가보증, 연구개발, 투자)</li>
                      <li>자격 요건 확인</li>
                      <li>온라인 신청 (벤처인)</li>
                      <li>평가 및 심사</li>
                      <li>벤처확인서 발급 (약 2-4주)</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
            
            <div className={`${styles.certTabContent} ${activeTab === 'cert3' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>이노비즈 (INNOBIZ)</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>기술혁신형 중소기업(Innovation+Business)으로 기술 우위를 바탕으로 경쟁력을 확보한 기업 인증</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 정책자금 금리 우대 (0.3%p)</li>
                      <li>✓ 보증한도 우대 (최대 70억원)</li>
                      <li>✓ R&D 지원사업 가점</li>
                      <li>✓ 조달청 물품구매 적격심사 가점</li>
                      <li>✓ 병역특례 추천 우대</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>자가진단 (온라인 시스템)</li>
                      <li>온라인 신청 및 기술평가</li>
                      <li>현장평가 (기술·경영혁신)</li>
                      <li>종합평가 (650점 이상)</li>
                      <li>인증서 발급 (약 4-6주)</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
            
            <div className={`${styles.certTabContent} ${activeTab === 'cert4' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>메인비즈 (MAINBIZ)</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>경영혁신형 중소기업(Management Innovation)으로 경영혁신 활동과 성과가 우수한 기업 인증</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 신용보증 한도 우대</li>
                      <li>✓ 정책자금 지원 우대</li>
                      <li>✓ 수출지원사업 우선 선정</li>
                      <li>✓ 공공입찰 가점</li>
                      <li>✓ 광고비 세액공제</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>자가진단 실시</li>
                      <li>온라인 신청</li>
                      <li>경영혁신능력 평가</li>
                      <li>현장평가 실시</li>
                      <li>인증서 발급 (약 4-6주)</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
            
            <div className={`${styles.certTabContent} ${activeTab === 'cert5' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>사회적기업</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>사회적 목적을 추구하면서 영업활동을 수행하는 기업으로, 취약계층 일자리 창출과 사회서비스 제공</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 인건비 지원 (최대 3년)</li>
                      <li>✓ 사업개발비 지원 (연 1억원)</li>
                      <li>✓ 법인세·소득세 50% 감면</li>
                      <li>✓ 공공기관 우선구매</li>
                      <li>✓ 시설비 지원</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>인증 요건 확인 (조직형태, 유급근로자)</li>
                      <li>인증 신청서 제출</li>
                      <li>신청기관 검토 및 현장실사</li>
                      <li>인증심사위원회 심의</li>
                      <li>고용노동부 인증 (약 3-4개월)</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
            
            <div className={`${styles.certTabContent} ${activeTab === 'cert6' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>강소기업</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>규모는 작지만 우수한 기술력과 성장 잠재력을 보유한 강한 중소기업으로 고용노동부에서 선정</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 청년 채용 인건비 지원</li>
                      <li>✓ 직무능력개발 훈련비 지원</li>
                      <li>✓ 일자리 창출 지원금</li>
                      <li>✓ 근무환경 개선 자금</li>
                      <li>✓ 정부 지원사업 우대</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>기업 자격요건 확인</li>
                      <li>온라인 신청서 제출</li>
                      <li>서류 심사 (재무, 고용 지표)</li>
                      <li>현장 실사 및 평가</li>
                      <li>선정위원회 심의 및 발표</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
            
            <div className={`${styles.certTabContent} ${activeTab === 'cert7' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>가족친화기업</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>일과 가정의 양립을 지원하는 가족친화제도를 모범적으로 운영하는 기업·기관에 대한 여성가족부 인증</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 정부·지자체 입찰 가점</li>
                      <li>✓ 중소기업 지원자금 금리 우대</li>
                      <li>✓ 인증마크 사용권</li>
                      <li>✓ 가족친화 컨설팅 지원</li>
                      <li>✓ 우수기업 정부 포상</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>가족친화제도 도입 및 운영</li>
                      <li>온라인 신청 (가족친화지원사업)</li>
                      <li>서류심사 및 현장심사</li>
                      <li>인증위원회 심의</li>
                      <li>인증서 발급 (유효기간 3년)</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
            
            <div className={`${styles.certTabContent} ${activeTab === 'cert8' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>청년친화강소기업</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>청년들이 선호하는 양질의 일자리를 제공하고 청년 고용 창출에 기여하는 우수 중소기업</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 청년 신규채용 인건비 지원</li>
                      <li>✓ 청년 근속장려금 지원</li>
                      <li>✓ 기업 홍보 및 채용 지원</li>
                      <li>✓ 직무교육 프로그램 제공</li>
                      <li>✓ 청년 고용 컨설팅</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>기업 요건 확인 (고용증가율, 임금수준)</li>
                      <li>워크넷 온라인 신청</li>
                      <li>정량·정성 평가</li>
                      <li>선정위원회 최종 심의</li>
                      <li>선정 결과 발표</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
            
            <div className={`${styles.certTabContent} ${activeTab === 'cert9' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>녹색기업</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>환경친화적 경영체제를 구축하고 환경개선에 크게 기여하는 기업으로 환경부에서 지정</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 환경개선 자금 융자 우대</li>
                      <li>✓ 배출시설 지도·점검 면제</li>
                      <li>✓ 환경 관련 행정처분 경감</li>
                      <li>✓ 녹색제품 공공구매 우대</li>
                      <li>✓ 환경 기술지원 우선 제공</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>환경경영시스템 구축 (ISO 14001)</li>
                      <li>지정 신청서 제출</li>
                      <li>서류심사 및 현장평가</li>
                      <li>녹색기업 지정심사</li>
                      <li>지정서 교부 (유효기간 5년)</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
            
            <div className={`${styles.certTabContent} ${activeTab === 'cert10' ? styles.active : ''}`}>
              <div className={styles.certCard}>
                <h3>여성기업</h3>
                <div className={styles.certInfo}>
                  <div className={styles.certSummary}>
                    <h4>인증 개요</h4>
                    <p>여성이 소유하고 경영하는 기업으로 중소벤처기업부와 한국여성경제인협회에서 확인·지원</p>
                    <ul className={styles.certBenefits}>
                      <li>✓ 공공기관 구매 목표제 (5%)</li>
                      <li>✓ 정책자금 우대 지원</li>
                      <li>✓ 신용보증 우대</li>
                      <li>✓ 수출 및 판로 지원</li>
                      <li>✓ 여성기업 전용 지원사업</li>
                    </ul>
                  </div>
                  <div className={styles.certProcess}>
                    <h4>인증 절차</h4>
                    <ol>
                      <li>자격요건 확인 (여성 지분 50% 이상)</li>
                      <li>온라인 신청 (여성기업확인서)</li>
                      <li>서류 심사</li>
                      <li>현장 실태조사 (필요시)</li>
                      <li>확인서 발급 (유효기간 2년)</li>
                    </ol>
                  </div>
                </div>
                <a href="#contact-form" className={styles.btnWhite}>무료 상담 신청</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="content-section" style={{ backgroundColor: 'var(--background-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">컨설팅 패키지</h2>
            <p className="section-subtitle">기업 규모와 상황에 맞는 맞춤형 컨설팅</p>
          </div>
          <div className="cards-grid">
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTitle}>스타트업 패키지</h3>
              <p className={styles.pricingSubtitle}>소규모 기업</p>
              <ul className="feature-list">
                <li>기본 문서화 지원</li>
                <li>핵심 프로세스 구축</li>
                <li>내부심사원 1명 교육</li>
                <li>인증심사 대응</li>
                <li>3개월 사후관리</li>
              </ul>
              <a href="#contact-form" className="btn btn-primary btn-block" style={{ marginTop: '2rem' }}>상담 신청</a>
            </div>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTitle}>스탠다드 패키지</h3>
              <p className={styles.pricingSubtitle}>중견 기업</p>
              <ul className="feature-list">
                <li>전체 문서화 지원</li>
                <li>전 부서 프로세스 구축</li>
                <li>내부심사원 3명 교육</li>
                <li>모의심사 실시</li>
                <li>인증심사 대응</li>
                <li>6개월 사후관리</li>
              </ul>
              <a href="#contact-form" className="btn btn-primary btn-block" style={{ marginTop: '2rem' }}>상담 신청</a>
            </div>
            <div className={styles.pricingCard}>
              <h3 className={styles.pricingTitle}>프리미엄 패키지</h3>
              <p className={styles.pricingSubtitle}>대기업</p>
              <ul className="feature-list">
                <li>통합경영시스템 구축</li>
                <li>전사 프로세스 최적화</li>
                <li>내부심사원 5명 교육</li>
                <li>경영검토 지원</li>
                <li>인증심사 전과정 대응</li>
                <li>12개월 사후관리</li>
              </ul>
              <a href="#contact-form" className="btn btn-primary btn-block" style={{ marginTop: '2rem' }}>상담 신청</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-form" className="cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">ISO 인증 상담 신청</h2>
            <p className="cta-description">
              전문가의 무료 상담을 받아보세요
            </p>
            <div className="cta-form">
              <input type="text" placeholder="기업명" className="cta-input" />
              <input type="text" placeholder="담당자명" className="cta-input" />
              <input type="tel" placeholder="연락처" className="cta-input" />
              <input type="email" placeholder="이메일" className="cta-input" />
              <select className="cta-input" style={{ gridColumn: 'span 2' }}>
                <option value="">희망 인증 종류를 선택하세요</option>
                <option value="iso9001">ISO 9001 (품질경영시스템)</option>
                <option value="iso14001">ISO 14001 (환경경영시스템)</option>
                <option value="iso45001">ISO 45001 (안전보건경영시스템)</option>
                <option value="multiple">복수 인증 (통합경영시스템)</option>
                <option value="other">기타 ISO 인증</option>
              </select>
              <button className="btn btn-primary btn-lg cta-button">무료 상담 신청</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}