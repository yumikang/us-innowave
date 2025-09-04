import { Metadata } from 'next';
import Link from 'next/link';
import styles from './services.module.css';

export const metadata: Metadata = {
  title: '미국 수출 컨설팅 | 유에스이노웨이브 - US INNOWAVE',
  description: '미국 수출 지원 서비스 - FDA 인증, U.S. Agent, 시장분석, SAM/GSA 등록, 현지화 서비스까지. 500여 건의 FDA 등록 성공 경험으로 미국 시장 진출을 지원합니다.',
  keywords: 'FDA 인증, 미국 수출, U.S. Agent, 의료기기 FDA, 화장품 FDA, 식품 FDA, SAM GSA 등록, 현지화 서비스',
  openGraph: {
    title: '미국 수출 컨설팅 | 유에스이노웨이브 - US INNOWAVE',
    description: '미국 수출 지원 서비스 - FDA 인증, U.S. Agent, 시장분석, SAM/GSA 등록, 현지화 서비스까지. 500여 건의 FDA 등록 성공 경험으로 미국 시장 진출을 지원합니다.',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">수출 지원</h1>
          <p className="page-subtitle">FDA, U.S. Agent... 복잡한 규제와 절차, 전문가가 해결합니다</p>
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span>/</span>
            <span>수출 지원</span>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="content-section">
        <div className="container">
          <div className="grid-stretch">
            <div className="content-text">
              <h2 className="content-title">미국 시장 진출의 필수 관문, FDA</h2>
              <p className="content-description">
                세계 최대 시장인 미국으로의 진출은 모든 기업의 꿈입니다.
                하지만 FDA 규제, U.S. Agent 선임, 현지 유통망 구축 등
                넘어야 할 산이 많습니다.
              </p>
              <p className="content-description">
                유에스이노웨이브는 10년 이상의 미국 시장 진출 경험과
                현지 네트워크를 바탕으로 가장 빠르고 안전한 길을 안내합니다.
              </p>
              <ul className="content-list">
                <li>FDA 등록/승인 대행 500+ 건</li>
                <li>U.S. Agent 서비스 제공</li>
                <li>현지 파트너 네트워크 보유</li>
                <li>통관 및 물류 지원</li>
              </ul>
            </div>
            <div className="content-image">
              <div className="content-image-placeholder">
                <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="500" height="400" fill="#f3f4f6"/>
                  <text x="50%" y="50%" textAnchor="middle" fill="#9ca3af" fontSize="18">US Export Consulting Image</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FDA Services */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">FDA 인증 서비스</h2>
            <p className="section-subtitle">제품별 맞춤 FDA 등록 및 승인 서비스</p>
          </div>
          <div className="cards-grid">
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <h3 className="service-title">의료기기 FDA</h3>
              <p className="service-description">
                • Class I, II, III 분류 결정<br/>
                • 510(k) Premarket Notification<br/>
                • PMA (Premarket Approval)<br/>
                • De Novo Classification<br/>
                • MDR (Medical Device Report)
              </p>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 2L3 9v13h18V9l-6-7z"/>
                  <path d="M3 9h18"/>
                  <path d="M9 22V9"/>
                </svg>
              </div>
              <h3 className="service-title">화장품 FDA</h3>
              <p className="service-description">
                • VCRP (자발적 화장품 등록)<br/>
                • Facility Registration<br/>
                • Product Listing<br/>
                • 성분 안전성 검토<br/>
                • 라벨링 규정 준수
              </p>
            </div>
            <div className="base-card card-service">
              <div className="service-icon icon-12">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                </svg>
              </div>
              <h3 className="service-title">식품 FDA</h3>
              <p className="service-description">
                • Food Facility Registration<br/>
                • Prior Notice 제출<br/>
                • 영양성분표 작성<br/>
                • GRAS 인증<br/>
                • FSMA 규정 준수
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* U.S. Agent Service */}
      <section className="content-section">
        <div className="container">
          <div className="grid-stretch">
            <div className="content-text">
              <h2 className="content-title">U.S. Agent 서비스</h2>
              <p className="content-description">
                미국 외 기업이 FDA 등록을 위해서는 반드시 미국 내 대리인(U.S. Agent)이 필요합니다.
                유에스이노웨이브는 공식 U.S. Agent로서 다음의 서비스를 제공합니다.
              </p>
              <div className={styles.featuresGrid}>
                <div className={styles.featureItem}>
                  <div className={styles.featureNumber}>01</div>
                  <div>
                    <h4 className={styles.featureTitle}>FDA 소통 창구</h4>
                    <p className={styles.featureDescription}>FDA와의 모든 공식 커뮤니케이션을 대행합니다</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureNumber}>02</div>
                  <div>
                    <h4 className={styles.featureTitle}>긴급 대응</h4>
                    <p className={styles.featureDescription}>리콜, 경고장 등 긴급 상황 시 24시간 대응합니다</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureNumber}>03</div>
                  <div>
                    <h4 className={styles.featureTitle}>규제 업데이트</h4>
                    <p className={styles.featureDescription}>변경되는 FDA 규제를 실시간으로 모니터링합니다</p>
                  </div>
                </div>
                <div className={styles.featureItem}>
                  <div className={styles.featureNumber}>04</div>
                  <div>
                    <h4 className={styles.featureTitle}>현지 지원</h4>
                    <p className={styles.featureDescription}>통관, 물류, 유통 등 현지 비즈니스를 지원합니다</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-image">
              <div className="content-image-placeholder">
                <svg viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                  <rect width="500" height="400" fill="#f3f4f6"/>
                  <text x="50%" y="50%" textAnchor="middle" fill="#9ca3af" fontSize="18">U.S. Agent Service Image</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">진행 프로세스</h2>
            <p className="section-subtitle">체계적인 단계별 진행으로 빠르고 정확한 FDA 등록</p>
          </div>
          
          <div className={styles.processGrid}>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>1</div>
              <div>
                <h4>제품 분석</h4>
                <p>제품 특성 파악 및 FDA 규제 요구사항 분석</p>
              </div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>2</div>
              <div>
                <h4>서류 준비</h4>
                <p>필요 서류 작성 및 기술문서 준비</p>
              </div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>3</div>
              <div>
                <h4>FDA 제출</h4>
                <p>FDA 시스템 등록 및 서류 제출</p>
              </div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>4</div>
              <div>
                <h4>심사 대응</h4>
                <p>FDA 질의사항 대응 및 보완 조치</p>
              </div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>5</div>
              <div>
                <h4>등록 완료</h4>
                <p>FDA 등록번호 발급 및 인증서 제공</p>
              </div>
            </div>
            <div className={styles.processItem}>
              <div className={styles.processIcon}>6</div>
              <div>
                <h4>사후 관리</h4>
                <p>연간 갱신 및 규제 변경사항 관리</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">왜 유에스이노웨이브인가?</h2>
          </div>
          <div className="cards-grid">
            <div className="base-card">
              <h3 className="card-title">✅ 검증된 전문성</h3>
              <p className="card-content">
                500건 이상의 FDA 등록 경험과 98% 이상의 승인율을 자랑합니다.
                의료기기, 화장품, 식품 등 다양한 분야의 전문성을 보유하고 있습니다.
              </p>
            </div>
            <div className="base-card">
              <h3 className="card-title">⚡ 신속한 처리</h3>
              <p className="card-content">
                체계화된 프로세스와 FDA와의 원활한 소통으로 업계 최단 기간 내 
                등록을 완료합니다. 긴급 건의 경우 특급 서비스도 제공합니다.
              </p>
            </div>
            <div className="base-card">
              <h3 className="card-title">🌐 토탈 서비스</h3>
              <p className="card-content">
                FDA 등록뿐만 아니라 U.S. Agent, 통관, 물류, 현지 마케팅까지
                미국 시장 진출의 모든 과정을 원스톱으로 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Export Services */}
      <section className="content-section" style={{ backgroundColor: 'var(--background-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">종합 수출 지원 서비스</h2>
            <p className="section-subtitle">시장 분석부터 현지화까지 체계적인 미국 진출 지원</p>
          </div>
          
          <div className={styles.exportServicesGrid}>
            {/* Market Analysis Report */}
            <div className={styles.exportServiceCard}>
              <div className={styles.exportServiceHeader}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                <h3>시장 분석 보고서</h3>
              </div>
              <div className={styles.exportServiceContent}>
                <h4>제공 내용</h4>
                <ul>
                  <li>• 타겟 시장 규모 및 성장률 분석</li>
                  <li>• 경쟁사 현황 및 포지셔닝 맵</li>
                  <li>• 목표 고객층 분석 (Demographics)</li>
                  <li>• 가격 전략 및 진입 전략 제안</li>
                  <li>• 규제 환경 및 리스크 평가</li>
                </ul>
                <div className={styles.serviceHighlight}>
                  <strong>납기:</strong> 2-3주 | <strong>언어:</strong> 한/영 선택
                </div>
              </div>
            </div>
            
            {/* SAM/GSA Registration */}
            <div className={styles.exportServiceCard}>
              <div className={styles.exportServiceHeader}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
                <h3>SAM/GSA 등록</h3>
              </div>
              <div className={styles.exportServiceContent}>
                <h4>지원 서비스</h4>
                <ul>
                  <li>• SAM.gov 시스템 등록 대행</li>
                  <li>• UEI (Unique Entity ID) 발급</li>
                  <li>• CAGE Code 취득 지원</li>
                  <li>• GSA Schedule 계약 준비</li>
                  <li>• 연간 갱신 관리 서비스</li>
                </ul>
                <div className={styles.serviceHighlight}>
                  <strong>소요기간:</strong> 4-6주 | <strong>성공률:</strong> 98%
                </div>
              </div>
            </div>
            
            {/* Localization Services */}
            <div className={styles.exportServiceCard}>
              <div className={styles.exportServiceHeader}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <h3>현지화 서비스</h3>
              </div>
              <div className={styles.exportServiceContent}>
                <h4>현지화 범위</h4>
                <ul>
                  <li>• 제품명 및 브랜드 네이밍</li>
                  <li>• 마케팅 자료 번역 및 문화 적응</li>
                  <li>• 웹사이트 현지화 (SEO 최적화)</li>
                  <li>• 패키징 디자인 현지화</li>
                  <li>• 사용 설명서 및 기술 문서</li>
                </ul>
                <div className={styles.serviceHighlight}>
                  <strong>전문 분야:</strong> IT, 의료, 소비재, B2B
                </div>
              </div>
            </div>
            
            {/* Legal & Administrative */}
            <div className={styles.exportServiceCard}>
              <div className={styles.exportServiceHeader}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                <h3>법률/행정 지원</h3>
              </div>
              <div className={styles.exportServiceContent}>
                <h4>지원 내용</h4>
                <ul>
                  <li>• 현지 법인 설립 (LLC, C-Corp)</li>
                  <li>• EIN/ITIN 세금 번호 발급</li>
                  <li>• 비즈니스 라이선스 취득</li>
                  <li>• 계약서 검토 및 작성</li>
                  <li>• 지적재산권 보호 (특허/상표)</li>
                </ul>
                <div className={styles.serviceHighlight}>
                  <strong>파트너:</strong> 미국 현지 로펌 3곳
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Export Success Cases */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">수출 인증 성공 사례</h2>
            <p className="section-subtitle">유에스이노웨이브와 함께 미국 시장에 성공적으로 진출한 기업들</p>
          </div>
          
          <div className={styles.caseStudiesGrid}>
            {/* Case Study 1 */}
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyHeader}>
                <span className={styles.caseCategory}>의료기기</span>
                <span className={styles.caseYear}>2023</span>
              </div>
              <h3 className={styles.caseTitle}>A사 - 체외진단기기 FDA 510(k) 승인</h3>
              <div className={styles.caseContent}>
                <div className={styles.caseChallenge}>
                  <h4>도전 과제</h4>
                  <p>COVID-19 진단키트의 긴급사용승인(EUA) 후 정식 510(k) 전환 필요</p>
                </div>
                <div className={styles.caseSolution}>
                  <h4>솔루션</h4>
                  <p>• Pre-Submission Meeting 진행<br/>
                     • 임상시험 프로토콜 설계 지원<br/>
                     • 510(k) 문서 작성 및 제출</p>
                </div>
                <div className={styles.caseResult}>
                  <h4>결과</h4>
                  <p><strong>90일 만에 FDA 승인 획득</strong><br/>
                     연매출 300% 성장 달성</p>
                </div>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyHeader}>
                <span className={styles.caseCategory}>화장품</span>
                <span className={styles.caseYear}>2023</span>
              </div>
              <h3 className={styles.caseTitle}>B사 - K-Beauty 브랜드 아마존 진출</h3>
              <div className={styles.caseContent}>
                <div className={styles.caseChallenge}>
                  <h4>도전 과제</h4>
                  <p>FDA 화장품 규정 준수 및 아마존 Brand Registry 필요</p>
                </div>
                <div className={styles.caseSolution}>
                  <h4>솔루션</h4>
                  <p>• VCRP 등록 및 성분 검토<br/>
                     • 라벨링 규정 준수<br/>
                     • Amazon FBA 세팅 지원</p>
                </div>
                <div className={styles.caseResult}>
                  <h4>결과</h4>
                  <p><strong>6개월 만에 월 $500K 매출</strong><br/>
                     아마존 베스트셀러 등극</p>
                </div>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyHeader}>
                <span className={styles.caseCategory}>식품</span>
                <span className={styles.caseYear}>2024</span>
              </div>
              <h3 className={styles.caseTitle}>C사 - 건강기능식품 FDA NDI 신고</h3>
              <div className={styles.caseContent}>
                <div className={styles.caseChallenge}>
                  <h4>도전 과제</h4>
                  <p>신규 원료 사용으로 NDI (New Dietary Ingredient) 신고 필요</p>
                </div>
                <div className={styles.caseSolution}>
                  <h4>솔루션</h4>
                  <p>• 안전성 데이터 수집 및 정리<br/>
                     • NDI 신고서 작성<br/>
                     • FDA 피드백 대응</p>
                </div>
                <div className={styles.caseResult}>
                  <h4>결과</h4>
                  <p><strong>75일 만에 NDI 수리</strong><br/>
                     Whole Foods 입점 성공</p>
                </div>
              </div>
            </div>
            
            {/* Case Study 4 */}
            <div className={styles.caseStudyCard}>
              <div className={styles.caseStudyHeader}>
                <span className={styles.caseCategory}>전자제품</span>
                <span className={styles.caseYear}>2024</span>
              </div>
              <h3 className={styles.caseTitle}>D사 - IoT 디바이스 FCC 인증</h3>
              <div className={styles.caseContent}>
                <div className={styles.caseChallenge}>
                  <h4>도전 과제</h4>
                  <p>무선 통신 기능 탑재로 FCC Part 15 인증 필요</p>
                </div>
                <div className={styles.caseSolution}>
                  <h4>솔루션</h4>
                  <p>• EMC/EMI 테스트 진행<br/>
                     • FCC ID 발급 지원<br/>
                     • UL 안전 인증 병행</p>
                </div>
                <div className={styles.caseResult}>
                  <h4>결과</h4>
                  <p><strong>FCC 인증 및 UL 마크 획득</strong><br/>
                     Best Buy 납품 계약 체결</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Statistics Banner */}
          <div className={styles.statsBanner}>
            <div className={styles.statItem}>
              <h3>500+</h3>
              <p>FDA 등록 완료</p>
            </div>
            <div className={styles.statItem}>
              <h3>95%</h3>
              <p>승인 성공률</p>
            </div>
            <div className={styles.statItem}>
              <h3>60일</h3>
              <p>평균 처리 기간</p>
            </div>
            <div className={styles.statItem}>
              <h3>24/7</h3>
              <p>긴급 대응 체계</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">미국 시장 진출, 지금 시작하세요</h2>
            <p className="cta-description">
              FDA 전문가가 무료로 진출 전략을 제안해 드립니다
            </p>
            <div className="cta-form">
              <input type="text" placeholder="회사명" className="cta-input" />
              <input type="text" placeholder="담당자명" className="cta-input" />
              <input type="tel" placeholder="연락처" className="cta-input" />
              <input type="email" placeholder="이메일" className="cta-input" />
              <select className="cta-input" style={{ gridColumn: 'span 2' }}>
                <option value="">제품 카테고리를 선택하세요</option>
                <option value="medical">의료기기</option>
                <option value="cosmetic">화장품</option>
                <option value="food">식품/건강기능식품</option>
                <option value="other">기타</option>
              </select>
              <button className="btn btn-primary btn-lg cta-button">무료 상담 신청</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}