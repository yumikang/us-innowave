import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './us-market.module.css';

export const metadata: Metadata = {
  title: '미국 공급망 & 조달시장 | 유에스이노웨이브 - US INNOWAVE',
  description: '미국 공급망 및 조달시장 진출 컨설팅 - 연간 700조원 규모의 미국 정부 조달시장, Amazon/Walmart 유통망 진입, SAM/GSA 등록까지 통합 지원합니다.',
};

export default function USMarketPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header pt-section pb-section">
        <div className="container">
          <h1 className="page-title">미국 공급망 & 조달시장</h1>
          <p className="page-subtitle">연간 700조원 규모의 미국 정부 조달시장, 전략적 진출을 지원합니다</p>
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span>미국 공급망 & 조달시장</span>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="content-section pt-section pb-section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text">
              <h2 className="content-title">미국 정부 조달시장의 기회</h2>
              <p className="content-description">
                미국 연방정부는 세계 최대의 단일 구매자로, 매년 700조원 이상을 
                물품과 서비스 구매에 사용합니다. 특히 중소기업에게 23% 이상의 
                계약을 의무적으로 할당하는 제도가 있어 한국 기업에게도 큰 기회가 됩니다.
              </p>
              <p className="content-description">
                유에스이노웨이브는 복잡한 미국 조달시장 진출 프로세스를 체계적으로 
                지원하여, 귀사의 성공적인 미국 정부 공급업체 등록을 돕습니다.
              </p>
              <div className="hero-buttons btn-row">
                <Link href="#process" className="btn btn-primary">진출 프로세스</Link>
                <Link href="#contact" className="btn btn-secondary">무료 상담 신청</Link>
              </div>
            </div>
            <div className="content-image">
              <div className="content-image-placeholder">
                <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="500" height="400" fill="#f3f4f6"/>
                  <text x="50%" y="50%" textAnchor="middle" fill="#9ca3af" fontSize="18">US Government Procurement</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="content-section pt-section pb-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">주요 조달 분야</h2>
            <p className="section-subtitle">미국 정부가 구매하는 주요 제품 및 서비스 카테고리</p>
          </div>
          <div className="services-grid grid-stretch">
            <div className="service-card card-flow">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="service-title card-title">IT & 소프트웨어</h3>
              <p className="service-description card-text">
                • 클라우드 서비스<br/>
                • 사이버 보안 솔루션<br/>
                • 데이터 분석 플랫폼<br/>
                • 인공지능 & 머신러닝
              </p>
              <p style={{ color: 'var(--brand-primary)', fontWeight: 600, marginTop: '12px' }}>
                연간 $90B+ 규모
              </p>
            </div>
            <div className="service-card card-flow">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="service-title card-title">방산 & 안보</h3>
              <p className="service-description card-text">
                • 군수 물자<br/>
                • 통신 장비<br/>
                • 감시 시스템<br/>
                • 특수 장비
              </p>
              <p style={{ color: 'var(--brand-primary)', fontWeight: 600, marginTop: '12px' }}>
                연간 $400B+ 규모
              </p>
            </div>
            <div className="service-card card-flow">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
                  <line x1="6" y1="1" x2="6" y2="4"/>
                  <line x1="10" y1="1" x2="10" y2="4"/>
                  <line x1="14" y1="1" x2="14" y2="4"/>
                </svg>
              </div>
              <h3 className="service-title card-title">의료 & 헬스케어</h3>
              <p className="service-description card-text">
                • 의료 기기<br/>
                • 제약 제품<br/>
                • 병원 용품<br/>
                • 원격 의료 솔루션
              </p>
              <p style={{ color: 'var(--brand-primary)', fontWeight: 600, marginTop: '12px' }}>
                연간 $50B+ 규모
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="content-section pt-section pb-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">조달시장 진출 프로세스</h2>
            <p className="section-subtitle">체계적인 6단계 프로세스로 미국 정부 공급업체가 됩니다</p>
          </div>
          
          <div className="process-timeline">
            <div className="process-card card-flow">
              <div className="process-number">1</div>
              <h4 className="process-title card-title">시장 분석</h4>
              <p className="process-description card-text">제품/서비스 적합성 평가 및 시장 기회 분석</p>
            </div>
            <div className="process-card card-flow">
              <div className="process-number">2</div>
              <h4 className="process-title card-title">자격 요건 검토</h4>
              <p className="process-description card-text">필수 인증 및 등록 요건 확인</p>
            </div>
            <div className="process-card card-flow">
              <div className="process-number">3</div>
              <h4 className="process-title card-title">SAM 등록</h4>
              <p className="process-description card-text">System for Award Management 등록 대행</p>
            </div>
            <div className="process-card card-flow">
              <div className="process-number">4</div>
              <h4 className="process-title card-title">인증 취득</h4>
              <p className="process-description card-text">필요 인증 획득 지원 (CMMC, ISO 등)</p>
            </div>
            <div className="process-card card-flow">
              <div className="process-number">5</div>
              <h4 className="process-title card-title">입찰 참여</h4>
              <p className="process-description card-text">입찰 기회 발굴 및 제안서 작성 지원</p>
            </div>
            <div className="process-card card-flow">
              <div className="process-number">6</div>
              <h4 className="process-title card-title">계약 관리</h4>
              <p className="process-description card-text">계약 이행 및 컴플라이언스 관리</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="content-section pt-section pb-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">핵심 지원 서비스</h2>
            <p className="section-subtitle">미국 조달시장 진출에 필요한 모든 서비스를 제공합니다</p>
          </div>
          <div className="content-grid">
            <div className="card card-flow">
              <h3 className="card-title">SAM.gov 등록 대행</h3>
              <p className="card-content">
                미국 정부와 거래하기 위한 필수 등록 시스템인 SAM(System for Award Management) 
                등록을 전문가가 대행합니다. CAGE 코드 발급부터 NAICS 코드 선정까지 
                모든 과정을 지원합니다.
              </p>
            </div>
            <div className="card card-flow">
              <h3 className="card-title">GSA Schedule 등록</h3>
              <p className="card-content">
                미국 정부 조달의 가장 효율적인 경로인 GSA Schedule 계약 체결을 
                지원합니다. 가격 협상부터 계약 관리까지 전 과정을 함께합니다.
              </p>
            </div>
            <div className="card card-flow">
              <h3 className="card-title">CMMC 인증 지원</h3>
              <p className="card-content">
                국방부 계약에 필수적인 Cybersecurity Maturity Model Certification 
                획득을 위한 컨설팅과 준비 과정을 지원합니다.
              </p>
            </div>
            <div className="card card-flow">
              <h3 className="card-title">제안서 작성 지원</h3>
              <p className="card-content">
                RFP/RFQ 분석부터 기술 제안서 작성, 가격 제안까지 
                미국 정부 입찰에 최적화된 제안서 작성을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="content-section pt-section pb-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">성공 요인</h2>
            <p className="section-subtitle">미국 조달시장에서 성공하기 위한 핵심 요소</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">01</div>
              <h4 className="feature-title">현지 파트너십</h4>
              <p className="feature-description">미국 현지 기업과의 전략적 제휴로 진입 장벽 극복</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">02</div>
              <h4 className="feature-title">규정 준수</h4>
              <p className="feature-description">FAR, DFARS 등 복잡한 조달 규정 완벽 이해 및 준수</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">03</div>
              <h4 className="feature-title">품질 인증</h4>
              <p className="feature-description">ISO, CMMC 등 필수 인증 취득으로 신뢰성 확보</p>
            </div>
            <div className="feature-item">
              <div className="feature-number">04</div>
              <h4 className="feature-title">장기 전략</h4>
              <p className="feature-description">단기 성과보다 장기적 관계 구축에 집중</p>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Distribution Strategy */}
      <section className="content-section pt-section pb-section" style={{ background: 'var(--background-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">미국 유통망 진입 전략</h2>
            <p className="section-subtitle">아마존, 월마트 등 대형 유통망 진출을 위한 전략적 솔루션</p>
          </div>
          
          <div className={styles.distributionGrid}>
            {/* Amazon Strategy */}
            <div className={styles.distCard}>
              <div className={styles.distHeader} style={{ background: 'linear-gradient(135deg, #FF9900 0%, #FF6138 100%)' }}>
                <h3>Amazon 진출 전략</h3>
                <p>연간 5,140억 달러 규모의 세계 최대 이커머스 플랫폼</p>
              </div>
              <div className={styles.distContent}>
                <h4>진출 프로세스</h4>
                <ul className={styles.distProcess}>
                  <li>✓ Seller Central 계정 생성 및 인증</li>
                  <li>✓ Brand Registry 등록 (브랜드 보호)</li>
                  <li>✓ FBA(Fulfillment by Amazon) 설정</li>
                  <li>✓ A+ Content 제작 및 최적화</li>
                  <li>✓ Amazon Advertising 캠페인 운영</li>
                </ul>
                
                <h4>핵심 성공 요인</h4>
                <div className={styles.successFactors}>
                  <span className={styles.factorBadge}>Buy Box 획득</span>
                  <span className={styles.factorBadge}>Prime 배송</span>
                  <span className={styles.factorBadge}>리뷰 관리</span>
                  <span className={styles.factorBadge}>SEO 최적화</span>
                </div>
              </div>
            </div>
            
            {/* Walmart Strategy */}
            <div className={styles.distCard}>
              <div className={styles.distHeader} style={{ background: 'linear-gradient(135deg, #0071CE 0%, #FFC220 100%)' }}>
                <h3>Walmart 진출 전략</h3>
                <p>미국 최대 오프라인 리테일러의 온라인 마켓플레이스</p>
              </div>
              <div className={styles.distContent}>
                <h4>진출 프로세스</h4>
                <ul className={styles.distProcess}>
                  <li>✓ Walmart Marketplace 신청 및 심사</li>
                  <li>✓ WFS(Walmart Fulfillment Service) 등록</li>
                  <li>✓ Product Catalog 최적화</li>
                  <li>✓ Competitive Pricing 전략 수립</li>
                  <li>✓ Performance Standards 충족</li>
                </ul>
                
                <h4>핵심 성공 요인</h4>
                <div className={styles.successFactors}>
                  <span className={styles.factorBadge}>2일 배송</span>
                  <span className={styles.factorBadge}>가격 경쟁력</span>
                  <span className={styles.factorBadge}>재고 관리</span>
                  <span className={styles.factorBadge}>고객 서비스</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Platforms */}
          <div className={styles.otherPlatforms}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>기타 주요 플랫폼</h3>
            <div className={styles.platformGrid}>
              <div className={styles.platformItem}>
                <h4>eBay</h4>
                <p>글로벌 C2C/B2C 마켓플레이스</p>
              </div>
              <div className={styles.platformItem}>
                <h4>Target Plus</h4>
                <p>프리미엄 리테일 마켓플레이스</p>
              </div>
              <div className={styles.platformItem}>
                <h4>Costco.com</h4>
                <p>멤버십 기반 도매 플랫폼</p>
              </div>
              <div className={styles.platformItem}>
                <h4>Home Depot</h4>
                <p>홈 임프루브먼트 전문</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fulfillment & Compliance Section */}
      <section className="content-section pt-section pb-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Fulfillment & 규제 대응</h2>
            <p className="section-subtitle">효율적인 물류 시스템과 규제 준수로 안정적인 미국 시장 운영</p>
          </div>
          
          <div className={styles.fulfillmentGrid}>
            {/* Fulfillment Solutions */}
            <div className={styles.fulfillSection}>
              <h3 className={styles.fulfillTitle}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                Fulfillment Solutions
              </h3>
              
              <div className={styles.fulfillCards}>
                <div className={styles.fulfillCard}>
                  <h4>3PL 파트너십</h4>
                  <ul>
                    <li>• 미국 전역 창고 네트워크 활용</li>
                    <li>• 실시간 재고 관리 시스템</li>
                    <li>• Pick, Pack, Ship 자동화</li>
                    <li>• Returns 처리 서비스</li>
                  </ul>
                </div>
                
                <div className={styles.fulfillCard}>
                  <h4>FBA/WFS 통합 관리</h4>
                  <ul>
                    <li>• 멀티채널 재고 최적화</li>
                    <li>• Prep Service 제공</li>
                    <li>• Label & Package 규정 준수</li>
                    <li>• Performance Metrics 관리</li>
                  </ul>
                </div>
                
                <div className={styles.fulfillCard}>
                  <h4>Last Mile Delivery</h4>
                  <ul>
                    <li>• Same-day/Next-day 배송</li>
                    <li>• White Glove Service</li>
                    <li>• Installation Service</li>
                    <li>• COD 서비스 지원</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Compliance & Regulations */}
            <div className={styles.fulfillSection}>
              <h3 className={styles.fulfillTitle}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ verticalAlign: 'middle', marginRight: '0.5rem' }}>
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
                규제 준수 & 인증
              </h3>
              
              <div className={styles.complianceGrid}>
                <div className={styles.complianceItem}>
                  <h4>제품 안전 규제</h4>
                  <p>• CPSC (소비자제품안전위원회)<br/>
                     • UL/ETL 인증<br/>
                     • FCC 전자파 인증<br/>
                     • Energy Star 인증</p>
                </div>
                
                <div className={styles.complianceItem}>
                  <h4>라벨링 & 표시</h4>
                  <p>• Country of Origin 표시<br/>
                     • Warning Labels<br/>
                     • Nutrition Facts (식품)<br/>
                     • Care Instructions (섬유)</p>
                </div>
                
                <div className={styles.complianceItem}>
                  <h4>수입 통관</h4>
                  <p>• FDA Prior Notice<br/>
                     • CBP Import Security<br/>
                     • USDA 검역<br/>
                     • Customs Bond</p>
                </div>
                
                <div className={styles.complianceItem}>
                  <h4>세금 & 법규</h4>
                  <p>• Sales Tax Nexus<br/>
                     • State Registration<br/>
                     • 1099-K Tax Form<br/>
                     • Product Liability Insurance</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Support Services */}
          <div className={styles.supportBanner}>
            <h3>통합 지원 서비스</h3>
            <div className={styles.supportItems}>
              <div className={styles.supportItem}>
                <strong>물류 컨설팅</strong>
                <p>최적 물류 경로 설계</p>
              </div>
              <div className={styles.supportItem}>
                <strong>규제 대응</strong>
                <p>제품별 규제 분석</p>
              </div>
              <div className={styles.supportItem}>
                <strong>인증 지원</strong>
                <p>필수 인증 취득 대행</p>
              </div>
              <div className={styles.supportItem}>
                <strong>리스크 관리</strong>
                <p>보험 및 법적 보호</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta pt-section pb-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">미국 조달시장 진출 상담</h2>
            <p className="cta-description">
              귀사의 제품과 서비스가 미국 정부 조달시장에 적합한지 무료로 진단해 드립니다
            </p>
            <div className="cta-form">
              <input type="text" placeholder="회사명" className="cta-input"/>
              <input type="text" placeholder="담당자명" className="cta-input"/>
              <input type="tel" placeholder="연락처" className="cta-input"/>
              <input type="email" placeholder="이메일" className="cta-input"/>
              <select className="cta-input" style={{ gridColumn: 'span 2' }}>
                <option value="">주요 제품/서비스 분야를 선택하세요</option>
                <option value="it">IT & 소프트웨어</option>
                <option value="defense">방산 & 안보</option>
                <option value="medical">의료 & 헬스케어</option>
                <option value="manufacturing">제조업</option>
                <option value="service">전문 서비스</option>
                <option value="other">기타</option>
              </select>
              <button className="btn btn-primary btn-lg cta-button">무료 진단 신청</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}