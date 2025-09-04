import Link from 'next/link';
import FooterLegal from './FooterLegal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">US INNOWAVE</h3>
            <p className="footer-description">
              기업의 글로벌 여정을 함께 설계하는<br />
              전략 파트너
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/company-intro">회사소개</Link>
              </li>
              <li>
                <Link href="/policy-fund">정책자금 컨설팅</Link>
              </li>
              <li>
                <Link href="/services">수출 지원</Link>
              </li>
              <li>
                <Link href="/certification">ISO & 기업인증</Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">고객지원</h4>
            <ul className="footer-links">
              {/* 고객지원 링크는 추후 추가 */}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact">
              <p>📞 02-1234-5678</p>
              <p>📧 info@usinnowave.com</p>
              <p>🏢 서울특별시 강남구</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <FooterLegal />
          <div className="footer-copyright">
            <p>&copy; {currentYear} US INNOWAVE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;