import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';

export const metadata: Metadata = {
  title: '유에스이노웨이브 | US INNOWAVE - 정책자금·미국진출·ISO인증',
  description: '정책자금부터 미국 진출까지, 기업의 성장을 위한 원스톱 솔루션. FDA 인증, U.S. Agent, ISO 인증 컨설팅 전문기업',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero full-bg">
        <div className="container">
          <div className="hero-content max-w-prose text-balance">
            <h1 className="hero-title">
              당신의 글로벌 비즈니스,<br />
              <span className="text-gradient">유에스이노웨이브</span>가<br />
              현실로 만듭니다
            </h1>
            <p className="hero-description">
              정책자금부터 미국 진출까지, 기업의 성장을 위한<br />
              원스톱 솔루션을 제공합니다
            </p>
            <div className="hero-buttons">
              <Link href="#services" className="btn btn-primary btn-lg">
                서비스 알아보기
              </Link>
              <Link href="/contact" className="btn btn-secondary btn-lg">
                무료 상담 신청
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Slider */}
        <HeroSlider />
      </section>

      {/* Services Section */}
      <section id="services" className="services pt-section pb-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">핵심 서비스</h2>
            <p className="section-subtitle">
              전문성과 경험을 바탕으로 최적의 솔루션을 제공합니다
            </p>
          </div>
          
          <div className="services-grid">
            {/* 정책자금 컨설팅 */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h3 className="service-title">정책자금 컨설팅</h3>
              <p className="service-description">
                기업 진단부터 사업계획서 작성, 대면평가까지 정부지원사업의 모든 과정을 지원합니다
              </p>
              <Link href="/policy-fund" className="service-link">
                자세히 보기 →
              </Link>
            </div>

            {/* 수출 지원 */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3 className="service-title">수출 지원</h3>
              <p className="service-description">
                FDA 인증, U.S. Agent 서비스 등 미국 시장 진출을 위한 토탈 솔루션을 제공합니다
              </p>
              <Link href="/services" className="service-link">
                자세히 보기 →
              </Link>
            </div>

            {/* ISO & 기업인증 */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11V6a3 3 0 1 1 6 0v5M3 13a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7z"/>
                  <path d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
                </svg>
              </div>
              <h3 className="service-title">ISO & 기업인증</h3>
              <p className="service-description">
                ISO 9001, 14001 등 국제인증과 벤처기업, 이노비즈 등 정부인증 취득을 지원합니다
              </p>
              <Link href="/certification" className="service-link">
                자세히 보기 →
              </Link>
            </div>

            {/* 미국 공급망 & 조달시장 */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="service-title">미국 공급망 & 조달시장</h3>
              <p className="service-description">
                SAM.gov 등록, GSA 스케줄 진입 등 미국 정부조달시장 진출을 체계적으로 지원합니다
              </p>
              <Link href="/us-market" className="service-link">
                자세히 보기 →
              </Link>
            </div>

            {/* 현지법인 설립 */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 21h18M3 10h18M5 6l7-3 7 3M12 6v15"/>
                </svg>
              </div>
              <h3 className="service-title">현지법인 설립</h3>
              <p className="service-description">
                미국 법인 설립부터 세무, 회계, 법률 자문까지 현지 진출의 모든 과정을 지원합니다
              </p>
              <Link href="/services" className="service-link">
                자세히 보기 →
              </Link>
            </div>

            {/* 마케팅 & 영업 */}
            <div className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>
                </svg>
              </div>
              <h3 className="service-title">마케팅 & 영업</h3>
              <p className="service-description">
                미국 시장 분석, 바이어 발굴, 전시회 참가 등 현지 마케팅 활동을 지원합니다
              </p>
              <Link href="/services" className="service-link">
                자세히 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta pt-section pb-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">
              지금 바로 시작하세요
            </h2>
            <p className="cta-description">
              기업 현황 진단부터 실행 로드맵 수립까지,<br />
              유에스이노웨이브가 함께합니다
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">
                무료 상담 신청
              </Link>
              <Link href="/company-intro" className="btn btn-secondary btn-lg">
                회사 소개
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}