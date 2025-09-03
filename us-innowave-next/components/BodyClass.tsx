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
    
    // body 클래스 및 data-page 속성 업데이트
    document.body.className = `page-${pageName}`;
    document.body.setAttribute('data-page', pageName);
  }, [pathname]);

  return null;
};

export default BodyClass;