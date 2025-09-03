'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavItem {
  href: string;
  label: string;
  isActive?: boolean;
}

interface MobileNavProps {
  navItems: NavItem[];
}

const MobileNav = ({ navItems }: MobileNavProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for header shadow
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
      
      // Update header class
      const header = document.querySelector('.header');
      if (header) {
        if (scrolled) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('menu-open', !isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-btn') && !target.closest('.nav-menu')) {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
      document.body.classList.remove('menu-open');
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="nav-trigger"
        onClick={toggleMenu}
        aria-label="모바일 메뉴 열기"
        aria-expanded={isMenuOpen}
        aria-controls="mobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'is-open' : ''}`}
        onClick={() => toggleMenu()}
        aria-hidden={!isMenuOpen}
      />

      {/* Mobile Menu Drawer */}
      <aside
        id="mobileMenu"
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMenuOpen}
      >
        {/* Close Button */}
        <button
          className="mobile-close-btn"
          aria-label="모바일 메뉴 닫기"
          onClick={() => toggleMenu()}
        >
          ✕
        </button>

        {/* Mobile Navigation */}
        <nav aria-label="모바일 내비게이션">
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={item.href} className="mobile-nav-item">
                <Link 
                  href={item.href} 
                  className={`mobile-nav-link ${item.isActive ? 'active' : ''}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.body.classList.remove('menu-open');
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default MobileNav;