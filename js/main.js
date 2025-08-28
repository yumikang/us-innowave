/**
 * US INNOWAVE - Main JavaScript
 */

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initDropdownMenus();
    initScrollEffects();
    initFooterLinks();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Body scroll lock when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

/**
 * Dropdown Menus for Mobile
 */
function initDropdownMenus() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        if (link) {
            link.addEventListener('click', function(e) {
                // Only prevent default on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    // Close other dropdowns
                    dropdownItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    item.classList.toggle('active');
                }
            });
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });
}

/**
 * Header Scroll Effects
 */
function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    if (header) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow on scroll
            if (scrollTop > 10) {
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)';
            }
            
            // Hide/show header on scroll (optional)
            /*
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scroll down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scroll up
                header.style.transform = 'translateY(0)';
            }
            lastScrollTop = scrollTop;
            */
        });
    }
}

/**
 * Footer Links (Privacy Policy & Terms)
 */
function initFooterLinks() {
    // Privacy Policy Modal
    window.openPrivacyPolicy = function() {
        openModal('개인정보처리방침', getPrivacyPolicyContent());
    };
    
    // Terms of Service Modal
    window.openTerms = function() {
        openModal('이용약관', getTermsContent());
    };
}

/**
 * Modal Helper Functions
 */
function openModal(title, content) {
    // Remove existing modal if any
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal elements
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    
    // Modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
        <h2>${title}</h2>
        <button class="modal-close" onclick="closeModal()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
        </button>
    `;
    
    // Modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
    modalBody.innerHTML = content;
    
    // Assemble modal
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContainer.appendChild(modalContent);
    modalOverlay.appendChild(modalContainer);
    
    // Add to body
    document.body.appendChild(modalOverlay);
    document.body.style.overflow = 'hidden';
    
    // Add modal styles if not exists
    addModalStyles();
    
    // Close on overlay click
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function closeModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.remove();
        document.body.style.overflow = '';
    }
}

function addModalStyles() {
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = `
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                padding: 20px;
                animation: fadeIn 0.2s ease;
            }
            
            .modal-container {
                width: 100%;
                max-width: 800px;
                max-height: 90vh;
                animation: slideUp 0.3s ease;
            }
            
            .modal-content {
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            }
            
            .modal-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 24px;
                border-bottom: 1px solid #e5e7eb;
            }
            
            .modal-header h2 {
                font-size: 1.5rem;
                font-weight: 600;
                color: #111827;
            }
            
            .modal-close {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 40px;
                height: 40px;
                background: none;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: background-color 0.2s ease;
            }
            
            .modal-close:hover {
                background-color: #f3f4f6;
            }
            
            .modal-body {
                padding: 24px;
                max-height: calc(90vh - 100px);
                overflow-y: auto;
                font-size: 0.95rem;
                line-height: 1.7;
                color: #374151;
            }
            
            .modal-body h3 {
                font-size: 1.2rem;
                font-weight: 600;
                margin-top: 24px;
                margin-bottom: 12px;
                color: #111827;
            }
            
            .modal-body h3:first-child {
                margin-top: 0;
            }
            
            .modal-body p {
                margin-bottom: 16px;
            }
            
            .modal-body ul {
                list-style-type: disc;
                padding-left: 24px;
                margin-bottom: 16px;
            }
            
            .modal-body li {
                margin-bottom: 8px;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideUp {
                from {
                    transform: translateY(20px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            
            @media (max-width: 640px) {
                .modal-container {
                    max-height: 100vh;
                }
                
                .modal-content {
                    border-radius: 0;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                }
                
                .modal-body {
                    flex: 1;
                    max-height: none;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * Privacy Policy Content
 */
function getPrivacyPolicyContent() {
    return `
        <h3>1. 개인정보의 수집 및 이용목적</h3>
        <p>유에스이노웨이브는 다음의 목적을 위하여 개인정보를 수집 및 이용합니다. 수집된 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
        <ul>
            <li>컨설팅 서비스 제공 및 계약 이행</li>
            <li>고객 상담 및 문의 응대</li>
            <li>서비스 개선 및 신규 서비스 개발</li>
            <li>마케팅 및 광고에 활용</li>
        </ul>
        
        <h3>2. 수집하는 개인정보 항목</h3>
        <p>회사는 컨설팅 서비스 제공을 위해 아래와 같은 개인정보를 수집하고 있습니다.</p>
        <ul>
            <li>필수항목: 성명, 연락처(전화번호, 이메일), 회사명, 직책</li>
            <li>선택항목: 팩스번호, 회사주소, 사업자등록번호</li>
            <li>서비스 이용 과정에서 자동 수집되는 정보: IP주소, 쿠키, 방문기록</li>
        </ul>
        
        <h3>3. 개인정보의 보유 및 이용기간</h3>
        <p>회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>
        <ul>
            <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
            <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
            <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
        </ul>
        
        <h3>4. 개인정보의 파기절차 및 방법</h3>
        <p>회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.</p>
        
        <h3>5. 개인정보 제공</h3>
        <p>회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.</p>
        <ul>
            <li>이용자들이 사전에 동의한 경우</li>
            <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        </ul>
        
        <h3>6. 개인정보보호책임자</h3>
        <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.</p>
        <ul>
            <li>개인정보보호책임자: 홍길동</li>
            <li>연락처: privacy@usinnowave.com</li>
            <li>전화번호: 02-1234-5678</li>
        </ul>
        
        <p><strong>본 개인정보처리방침은 2024년 1월 1일부터 적용됩니다.</strong></p>
    `;
}

/**
 * Terms of Service Content
 */
function getTermsContent() {
    return `
        <h3>제1조 (목적)</h3>
        <p>본 약관은 유에스이노웨이브(이하 "회사"라 함)가 제공하는 컨설팅 서비스(이하 "서비스"라 함)의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
        
        <h3>제2조 (용어의 정의)</h3>
        <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
        <ul>
            <li>"서비스"라 함은 회사가 제공하는 정책자금 컨설팅, 미국 수출 컨설팅, ISO 인증 컨설팅 등 일체의 서비스를 의미합니다.</li>
            <li>"이용자"라 함은 본 약관에 따라 회사가 제공하는 서비스를 받는 자를 의미합니다.</li>
            <li>"계약"이라 함은 서비스 이용과 관련하여 회사와 이용자 간에 체결하는 계약을 의미합니다.</li>
        </ul>
        
        <h3>제3조 (약관의 효력 및 변경)</h3>
        <p>① 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</p>
        <p>② 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 공지사항을 통해 공지합니다.</p>
        
        <h3>제4조 (서비스의 제공)</h3>
        <p>① 회사는 다음과 같은 서비스를 제공합니다.</p>
        <ul>
            <li>정책자금 컨설팅: 기업진단, 사업계획서 작성, 대면평가 대응 등</li>
            <li>미국 수출 컨설팅: FDA 인증, U.S. Agent 서비스 등</li>
            <li>ISO 인증 컨설팅: ISO 9001, ISO 14001, ISO 45001 등</li>
            <li>기타 회사가 정하는 서비스</li>
        </ul>
        <p>② 서비스의 구체적인 내용은 개별 계약에 따라 정합니다.</p>
        
        <h3>제5조 (서비스 이용료)</h3>
        <p>① 서비스 이용료는 회사와 이용자 간의 개별 계약에 따라 정합니다.</p>
        <p>② 이용자는 약정된 서비스 이용료를 약정된 기일까지 지급하여야 합니다.</p>
        
        <h3>제6조 (이용자의 의무)</h3>
        <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
        <ul>
            <li>서비스 이용 시 허위 정보를 제공하는 행위</li>
            <li>회사의 서비스 운영을 고의로 방해하는 행위</li>
            <li>회사의 지적재산권을 침해하는 행위</li>
            <li>기타 관련 법령이나 회사가 정한 이용조건을 위반하는 행위</li>
        </ul>
        
        <h3>제7조 (회사의 의무)</h3>
        <p>① 회사는 관련 법령과 본 약관이 정하는 바에 따라 지속적이고 안정적으로 서비스를 제공하기 위해 최선을 다합니다.</p>
        <p>② 회사는 이용자의 개인정보를 보호하기 위해 개인정보처리방침을 수립하고 준수합니다.</p>
        
        <h3>제8조 (손해배상)</h3>
        <p>① 회사는 무료로 제공하는 서비스와 관련하여 이용자에게 발생한 손해에 대해서는 책임을 지지 않습니다.</p>
        <p>② 유료 서비스의 경우, 회사의 고의 또는 중과실로 인한 손해에 대해서만 책임을 집니다.</p>
        
        <h3>제9조 (면책조항)</h3>
        <p>회사는 다음 각 호의 경우에는 책임을 지지 않습니다.</p>
        <ul>
            <li>천재지변, 전쟁 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우</li>
            <li>이용자의 귀책사유로 인한 서비스 이용 장애</li>
            <li>기타 회사의 고의 또는 과실이 없는 사유로 인한 손해</li>
        </ul>
        
        <h3>제10조 (분쟁의 해결)</h3>
        <p>① 본 약관은 대한민국 법령에 의하여 규정되고 이행됩니다.</p>
        <p>② 서비스 이용과 관련하여 회사와 이용자 간에 발생한 분쟁은 원만하게 협의하여 해결함을 원칙으로 합니다.</p>
        <p>③ 협의가 이루어지지 않을 경우, 관련 법령에 정한 절차에 따른 법원을 관할법원으로 합니다.</p>
        
        <h3>부칙</h3>
        <p><strong>본 약관은 2024년 1월 1일부터 시행됩니다.</strong></p>
    `;
}

/**
 * Smooth Scroll for Anchor Links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});