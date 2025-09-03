import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BodyClass from "@/components/BodyClass";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "유에스이노웨이브 | US INNOWAVE",
  description: "유에스이노웨이브 - 정책자금 컨설팅, 미국 수출 지원, ISO 인증까지. 기업의 성장과 글로벌 진출을 위한 원스톱 비즈니스 솔루션을 제공하는 전문 컨설팅 기업입니다.",
  keywords: "정책자금, 미국수출, FDA인증, ISO인증, 컨설팅",
  authors: [{ name: "US INNOWAVE" }],
  creator: "US INNOWAVE",
  publisher: "US INNOWAVE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "유에스이노웨이브 | US INNOWAVE",
    description: "정책자금 컨설팅, 미국 수출 지원, ISO 인증까지. 기업의 성장과 글로벌 진출을 위한 원스톱 비즈니스 솔루션",
    url: "https://www.usinnowave.com",
    siteName: "US INNOWAVE",
    locale: "ko_KR",
    type: "website",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={inter.variable}>
      <body>
        <BodyClass />
        
        {/* Skip to main content link for accessibility */}
        <a href="#main" className="skip-link">
          본문 바로가기
        </a>
        
        <Header />
        
        <main id="main" className="main-content">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
