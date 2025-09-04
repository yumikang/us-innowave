'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const BodyClass = () => {
  const pathname = usePathname();
  
  useEffect(() => {
    // 경로에 따른 페이지 이름 매핑
    const getPageName = (path: string) => {
      if (path === '/') return 'home';
      if (path === '/company-intro') return 'company-intro';
      if (path === '/policy-fund') return 'policy-fund';
      if (path === '/certification') return 'certification';
      if (path === '/us-market') return 'us-market';
      if (path === '/services') return 'services';
      if (path === '/contact') return 'contact';
      return 'page';
    };

    const pageName = getPageName(pathname);
    
    // 클라이언트에서만 body 속성 업데이트 (hydration 이후)
    if (typeof window !== 'undefined') {
      // 기존 클래스 제거 (page-* 패턴)
      const existingClasses = document.body.className
        .split(' ')
        .filter(cls => !cls.startsWith('page-'))
        .join(' ');
      
      // 새 클래스 추가
      document.body.className = `${existingClasses} page-${pageName}`.trim();
      document.body.setAttribute('data-page', pageName);
    }
  }, [pathname]);

  return null;
};

export default BodyClass;