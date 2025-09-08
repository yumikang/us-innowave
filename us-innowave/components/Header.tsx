import Link from 'next/link';
import MobileNav from './MobileNav';

const Header = () => {
  const navItems = [
    { href: '/company-intro', label: '회사소개' },
    { href: '/policy-fund', label: '정책자금 컨설팅' },
    { href: '/services', label: '수출 지원' },
    { href: '/certification', label: 'ISO & 기업인증' },
    { href: '/us-market', label: '미국 공급망 & 조달시장' },
    { href: '/contact', label: '문의하기' },
  ];

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="nav-wrapper">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <span className="logo-text">US INNOWAVE</span>
            </Link>
          </div>
          
          {/* Desktop Navigation Menu */}
          <nav className="nav-desktop" aria-label="주요 메뉴">
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.href} className={`nav-item ${item.isActive ? 'active' : ''}`}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Component */}
          <MobileNav navItems={navItems} />
        </div>
      </nav>
    </header>
  );
};

export default Header;