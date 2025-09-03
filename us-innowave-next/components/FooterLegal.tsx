'use client';

const FooterLegal = () => {
  const handlePrivacyPolicy = () => {
    // TODO: 개인정보처리방침 모달 또는 페이지 구현
    console.log('개인정보처리방침 오픈');
    // 추후 모달 컴포넌트나 별도 페이지로 연결
  };

  const handleTerms = () => {
    // TODO: 이용약관 모달 또는 페이지 구현
    console.log('이용약관 오픈');
    // 추후 모달 컴포넌트나 별도 페이지로 연결
  };

  return (
    <div className="footer-legal">
      <button 
        onClick={handlePrivacyPolicy}
        className="link-button"
        type="button"
      >
        개인정보처리방침
      </button>
      <span className="separator">|</span>
      <button 
        onClick={handleTerms}
        className="link-button"
        type="button"
      >
        이용약관
      </button>
    </div>
  );
};

export default FooterLegal;