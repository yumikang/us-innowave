import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './policy-fund.module.css';

export const metadata: Metadata = {
  title: '정책자금 컨설팅 | 유에스이노웨이브 - US INNOWAVE',
  description: '정책자금 컨설팅 전문 - 창업자금, 운전자금, 시설자금 등 정부지원사업 통합 컨설팅. 기업진단부터 사업계획서 작성, 대면평가까지 95% 선정률로 성공을 보장합니다.',
};

export default function PolicyFundPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">정책자금 컨설팅</h1>
          <p className="page-subtitle">성장의 기회를 잡는 첫걸음, 최적의 정책자금 로드맵을 설계합니다</p>
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span>정책자금 컨설팅</span>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="content-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="content-title">어떤 정책자금이 우리 회사에 맞을까?</h2>
              <p className="content-description">
                정부와 지자체에서는 매년 수조원 규모의 정책자금을 지원하고 있습니다.
                하지만 복잡한 절차와 까다로운 조건으로 많은 기업들이 기회를 놓치고 있습니다.
              </p>
              <p className="content-description">
                유에스이노웨이브는 기업의 현재 상황과 성장 단계를 정확히 진단하고,
                가장 적합한 정책자금을 매칭하여 성공적인 자금 유치를 지원합니다.
              </p>
              <div className="hero-buttons btn-row">
                <Link href="#process" className="btn btn-primary">컨설팅 프로세스</Link>
                <Link href="#contact" className="btn btn-secondary">무료 상담 신청</Link>
              </div>
            </div>
            <div className="content-image">
              <div className="content-image-placeholder">
                <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="500" height="400" fill="#f3f4f6"/>
                  <text x="50%" y="50%" textAnchor="middle" fill="#9ca3af" fontSize="18">Government Funding Image</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Types */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">지원 가능한 정책자금</h2>
            <p className="section-subtitle">기업 상황에 맞는 다양한 정책자금을 안내해 드립니다</p>
          </div>
          
          {/* Primary 3 Funding Types */}
          <div className="services-grid grid-stretch">
            <div className="base-card card-service" style={{ border: '2px solid var(--brand-primary)' }}>
              <div className="service-icon icon-12" style={{ background: 'var(--brand-primary)', color: 'white' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="service-title card-title">창업자금</h3>
              <p className="service-description card-text">
                • 예비창업패키지 (최대 1억원)<br/>
                • 초기창업패키지 (최대 1억원)<br/>
                • 창업도약패키지 (최대 3억원)<br/>
                • TIPS 프로그램 (최대 5억원)<br/>
                • 청년창업사관학교 (최대 1억원)
              </p>
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                  <strong>지원대상:</strong> 예비창업자, 3년 미만 창업기업
                </p>
              </div>
            </div>

            <div className="base-card card-service" style={{ border: '2px solid var(--brand-secondary)' }}>
              <div className="service-icon icon-12" style={{ background: 'var(--brand-secondary)', color: 'white' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                </svg>
              </div>
              <h3 className="service-title card-title">운전자금</h3>
              <p className="service-description card-text">
                • 중소기업 정책자금 (최대 10억원)<br/>
                • 소상공인 정책자금 (최대 7천만원)<br/>
                • 긴급경영안정자금 (최대 3억원)<br/>
                • 수출금융 지원 (최대 5억원)<br/>
                • 기술보증 대출 (최대 30억원)
              </p>
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                  <strong>지원대상:</strong> 운영자금이 필요한 중소기업
                </p>
              </div>
            </div>

            <div className="base-card card-service" style={{ border: '2px solid var(--brand-accent)' }}>
              <div className="service-icon icon-12" style={{ background: 'var(--brand-accent)', color: 'white' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18"/>
                  <path d="M5 21V7l8-4v18"/>
                  <path d="M19 21V11l-6-3"/>
                  <rect x="9" y="9" width="4" height="4"/>
                  <rect x="9" y="14" width="4" height="4"/>
                </svg>
              </div>
              <h3 className="service-title card-title">시설자금</h3>
              <p className="service-description card-text">
                • 시설자금 대출 (최대 100억원)<br/>
                • 스마트공장 구축 (최대 2억원)<br/>
                • 클린팩토리 구축 (최대 5천만원)<br/>
                • 생산성향상 시설 (최대 10억원)<br/>
                • 신재생에너지 시설 (최대 30억원)
              </p>
              <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #e5e7eb' }}>
                <p style={{ color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                  <strong>지원대상:</strong> 시설 투자 계획이 있는 제조기업
                </p>
              </div>
            </div>
          </div>

          {/* Additional Funding Types */}
          <div className="content-grid" style={{ marginTop: '32px' }}>
            <div className="base-card">
              <h3 className="card-title">R&D 자금</h3>
              <ul className="content-list">
                <li>중소기업 기술혁신 (최대 5억원)</li>
                <li>산학연 협력기술개발 (최대 10억원)</li>
                <li>소재부품장비 개발 (최대 20억원)</li>
                <li>그린뉴딜 기술개발 (최대 30억원)</li>
              </ul>
            </div>
            <div className="base-card">
              <h3 className="card-title">수출지원금</h3>
              <ul className="content-list">
                <li>수출바우처 (최대 5천만원)</li>
                <li>글로벌 강소기업 육성 (최대 2억원)</li>
                <li>해외마케팅 지원 (최대 1억원)</li>
                <li>무역보험 지원 (보험료 50% 지원)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section id="process" className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">컨설팅 프로세스</h2>
            <p className="section-subtitle">체계적인 5단계 프로세스로 성공적인 자금 유치를 지원합니다</p>
          </div>
          
          <div className={styles.processTimeline}>
            <div className={styles.processLine}></div>
            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>1</div>
                <div>
                  <h4 className={styles.processTitle}>기업 진단</h4>
                  <p className={styles.processDesc}>현재 상황 분석 및 자금 필요성 파악</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>2</div>
                <div>
                  <h4 className={styles.processTitle}>자금 매칭</h4>
                  <p className={styles.processDesc}>최적 정책자금 발굴 및 지원 가능성 검토</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>3</div>
                <div>
                  <h4 className={styles.processTitle}>사업계획서</h4>
                  <p className={styles.processDesc}>평가위원 관점의 전문 사업계획서 작성</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>4</div>
                <div>
                  <h4 className={styles.processTitle}>대면평가</h4>
                  <p className={styles.processDesc}>모의 PT 및 예상 질문 대응 훈련</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.processNumber}>5</div>
                <div>
                  <h4 className={styles.processTitle}>사후관리</h4>
                  <p className={styles.processDesc}>협약 체결 및 정산 관리 지원</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Organizations */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">주요 지원기관</h2>
            <p className="section-subtitle">정책자금을 운영하는 정부 및 공공기관</p>
          </div>
          
          <div className="services-grid grid-stretch" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            <div className="base-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--brand-primary)" strokeWidth="2">
                  <path d="M2 12h20M16 6h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6m-8 0H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <path d="M12 2v4m0 14v4"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>중소벤처기업부</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                창업지원, R&D, 정책자금
              </p>
            </div>
            <div className="base-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                  <rect x="3" y="8" width="18" height="12" rx="2" ry="2"/>
                  <path d="M8 8V6a4 4 0 0 1 8 0v2"/>
                  <circle cx="12" cy="14" r="2"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>신용보증기금</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                신용보증, 컨설팅
              </p>
            </div>
            <div className="base-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>기술보증기금</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                기술평가, 기술보증
              </p>
            </div>
            <div className="base-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>창업진흥원</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                창업교육, 사업화
              </p>
            </div>
            <div className="base-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>중진공</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                정책자금 대출
              </p>
            </div>
            <div className="base-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                  <line x1="9" y1="9" x2="9.01" y2="9"/>
                  <line x1="15" y1="9" x2="15.01" y2="9"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>소진공</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                소상공인 지원
              </p>
            </div>
            <div className="base-card" style={{ textAlign: 'center' }}>
              <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#84cc16" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '8px' }}>산업은행</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>
                대규모 시설투자
              </p>
            </div>
          </div>

          <div className="base-card" style={{ marginTop: '32px', background: 'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%)', border: '1px solid #bfdbfe' }}>
            <h3 className="card-title">지원기관별 주요 프로그램</h3>
            <div className="content-grid">
              <ul className="content-list">
                <li><strong>중소벤처기업부</strong> - 창업패키지, TIPS, 스마트공장</li>
                <li><strong>신용보증기금</strong> - 창업기업보증, 수출기업보증</li>
                <li><strong>기술보증기금</strong> - IP보증, 벤처보증, R&D보증</li>
                <li><strong>창업진흥원</strong> - 창업사관학교, 실전창업교육</li>
              </ul>
              <ul className="content-list">
                <li><strong>중진공</strong> - 정책자금 직접대출, 온렌딩</li>
                <li><strong>소진공</strong> - 소상공인 정책자금, 컨설팅</li>
                <li><strong>산업은행</strong> - 시설자금, 산업구조조정</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">정책자금 유치 사례</h2>
            <p className="section-subtitle">유에스이노웨이브와 함께 정책자금을 성공적으로 유치한 기업들</p>
          </div>
          <div className="services-grid grid-stretch">
            <div className="base-card">
              <h3 className="card-title">A사 - IT 스타트업</h3>
              <p className="card-content">
                <strong>지원 프로그램:</strong> TIPS 프로그램<br/>
                <strong>지원 금액:</strong> 5억원<br/>
                <strong>성과:</strong> 글로벌 진출 및 시리즈A 투자 유치
              </p>
            </div>
            <div className="base-card">
              <h3 className="card-title">B사 - 제조업</h3>
              <p className="card-content">
                <strong>지원 프로그램:</strong> 소재부품장비 기술개발<br/>
                <strong>지원 금액:</strong> 8억원<br/>
                <strong>성과:</strong> 국산화 성공 및 매출 200% 성장
              </p>
            </div>
            <div className="base-card">
              <h3 className="card-title">C사 - 바이오</h3>
              <p className="card-content">
                <strong>지원 프로그램:</strong> 혁신형 제약기업<br/>
                <strong>지원 금액:</strong> 12억원<br/>
                <strong>성과:</strong> 임상 2상 진입 및 기술수출
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">자주 묻는 질문</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="base-card" style={{ marginBottom: '16px' }}>
              <h3 className="card-title">Q. 컨설팅 비용은 어떻게 되나요?</h3>
              <p className="card-content">
                기본 상담은 무료이며, 본격적인 컨설팅은 성공보수 방식으로 운영됩니다.
                선수금 없이 자금 수주 성공 시에만 수수료를 받고 있어 부담 없이 시작하실 수 있습니다.
              </p>
            </div>
            <div className="base-card" style={{ marginBottom: '16px' }}>
              <h3 className="card-title">Q. 어떤 기업이 지원 가능한가요?</h3>
              <p className="card-content">
                예비창업자부터 중견기업까지 폭넓게 지원 가능합니다.
                기업의 규모, 업종, 성장 단계에 따라 적합한 프로그램을 매칭해 드립니다.
              </p>
            </div>
            <div className="base-card" style={{ marginBottom: '16px' }}>
              <h3 className="card-title">Q. 준비 기간은 얼마나 걸리나요?</h3>
              <p className="card-content">
                프로그램에 따라 다르지만 평균적으로 2-3개월의 준비 기간이 필요합니다.
                공고 마감일을 고려하여 충분한 시간을 가지고 준비하는 것을 권장합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">정책자금 무료 진단 받기</h2>
            <p className="cta-description">
              우리 기업에 맞는 정책자금이 무엇인지 전문가가 무료로 진단해 드립니다
            </p>
            <div className="cta-form">
              <input type="text" placeholder="회사명" className="cta-input"/>
              <input type="text" placeholder="담당자명" className="cta-input"/>
              <input type="tel" placeholder="연락처" className="cta-input"/>
              <input type="email" placeholder="이메일" className="cta-input"/>
              <select className="cta-input" style={{ gridColumn: 'span 2' }}>
                <option value="">관심있는 정책자금을 선택하세요</option>
                <option value="startup">창업자금</option>
                <option value="rnd">R&D 자금</option>
                <option value="export">수출지원금</option>
                <option value="other">기타/잘 모르겠음</option>
              </select>
              <button className="btn btn-primary btn-lg cta-button">무료 진단 신청</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}