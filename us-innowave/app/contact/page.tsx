import { Metadata } from 'next';
import Link from 'next/link';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: '오시는 길 | 유에스이노웨이브 - US INNOWAVE',
  description: '유에스이노웨이브 문의하기 - 서울 강남구 위치. 정책자금, 미국 수출, ISO 인증 등 비즈니스 컨설팅 무료 상담. 전화, 이메일, 방문 상담 가능합니다.',
  keywords: '유에스이노웨이브, US INNOWAVE, 오시는 길, 강남구, 방문 상담, 무료 상담, 정책자금 컨설팅, FDA 인증',
  openGraph: {
    title: '오시는 길 | 유에스이노웨이브 - US INNOWAVE',
    description: '유에스이노웨이브 문의하기 - 서울 강남구 위치. 정책자금, 미국 수출, ISO 인증 등 비즈니스 컨설팅 무료 상담. 전화, 이메일, 방문 상담 가능합니다.',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">오시는 길</h1>
          <p className="page-subtitle">유에스이노웨이브를 방문해주셔서 감사합니다</p>
          <div className="breadcrumb">
            <Link href="/">HOME</Link>
            <span>/</span>
            <Link href="#">회사소개</Link>
            <span>/</span>
            <span>오시는 길</span>
          </div>
        </div>
      </section>

      {/* Location Content */}
      <div className={styles.locationContainer}>
        <div className="container">
          {/* Map Section */}
          <div className={styles.mapSection}>
            <div className={styles.mapPlaceholder}>
              <div style={{ textAlign: 'center' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto 16px' }}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p>지도 API 연동 영역</p>
                <p style={{ fontSize: '0.875rem', marginTop: '8px' }}>실제 구현 시 카카오맵 또는 네이버맵 API 연동</p>
              </div>
            </div>
          </div>

          {/* Location Info Grid */}
          <div className={styles.locationInfoGrid}>
            <div className={styles.infoCard}>
              <h3>
                <div className={styles.infoCardIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                주소 및 연락처
              </h3>
              <ul className={styles.infoList}>
                <li>
                  <strong>주소:</strong>
                  <span>서울특별시 강남구 테헤란로 123<br/>유에스이노웨이브 빌딩 5층</span>
                </li>
                <li>
                  <strong>전화:</strong>
                  <span>02-1234-5678</span>
                </li>
                <li>
                  <strong>팩스:</strong>
                  <span>02-1234-5679</span>
                </li>
                <li>
                  <strong>이메일:</strong>
                  <span>info@usinnowave.com</span>
                </li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <h3>
                <div className={styles.infoCardIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                업무 시간
              </h3>
              <ul className={styles.infoList}>
                <li>
                  <strong>평일:</strong>
                  <span>오전 9:00 - 오후 6:00</span>
                </li>
                <li>
                  <strong>점심시간:</strong>
                  <span>오후 12:00 - 오후 1:00</span>
                </li>
                <li>
                  <strong>주말/공휴일:</strong>
                  <span>휴무</span>
                </li>
                <li style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>
                  ※ 방문 상담은 사전 예약 필수
                </li>
              </ul>
            </div>
          </div>

          {/* Transportation Section */}
          <div className={styles.transportSection}>
            <div className="section-header">
              <h2 className="section-title">교통편 안내</h2>
              <p className="section-subtitle">다양한 교통수단으로 편리하게 방문하실 수 있습니다</p>
            </div>
            
            <div className={styles.transportGrid}>
              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="10" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <h4 className={styles.transportTitle}>지하철</h4>
                <p className={styles.transportDescription}>
                  2호선 강남역 3번 출구<br/>
                  도보 5분 거리
                </p>
              </div>

              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="3" width="22" height="18" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <h4 className={styles.transportTitle}>버스</h4>
                <p className={styles.transportDescription}>
                  간선: 146, 341, 360<br/>
                  지선: 3412, 4212
                </p>
              </div>

              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14c0 1.11-.89 2-2 2h-4l-3 3v-3H7c-1.11 0-2-.89-2-2V7c0-1.11.89-2 2-2h10c1.11 0 2 .89 2 2v7z"/>
                  </svg>
                </div>
                <h4 className={styles.transportTitle}>자가용</h4>
                <p className={styles.transportDescription}>
                  건물 지하 주차장 이용<br/>
                  방문객 2시간 무료 주차
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className={styles.additionalInfo}>
            <h3>
              <div className={styles.infoCardIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <line x1="9" y1="15" x2="15" y2="15"/>
                </svg>
              </div>
              방문 전 안내사항
            </h3>
            <ul className={styles.infoList}>
              <li>• 상담 예약은 전화 또는 이메일로 최소 하루 전에 신청해 주시기 바랍니다</li>
              <li>• 주차장 이용 시 차량번호를 접수처에 알려주시면 무료 처리해 드립니다</li>
              <li>• 신분증을 지참하시어 1층 로비에서 방문증을 수령 후 입장하실 수 있습니다</li>
              <li>• 코로나19 예방을 위해 마스크 착용 및 손소독제 사용을 권장합니다</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="cta cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">방문 상담 예약</h2>
            <p className="cta-description">
              전문 컨설턴트가 직접 만나 상세한 상담을 제공해 드립니다
            </p>
            <div className="btn-row" style={{ justifyContent: 'center' }}>
              <a href="tel:02-1234-5678" className="btn btn-primary btn-lg" style={{ background: 'white', color: 'var(--brand-primary)' }}>
                📞 전화 예약
              </a>
              <a href="mailto:info@usinnowave.com" className="btn btn-secondary btn-lg">
                📧 이메일 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}