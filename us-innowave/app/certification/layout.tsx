import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISO 인증 | 유에스이노웨이브 - US INNOWAVE',
  description: 'ISO 인증 및 기업인증 컨설팅 - ISO 9001, 14001, 45001과 기업부설연구소, 벤처기업, 이노비즈 등 정부 기업인증 취득을 체계적으로 지원합니다.',
  keywords: 'ISO 9001, ISO 14001, ISO 45001, 기업부설연구소, 벤처기업, 이노비즈, 메인비즈, 사회적기업, 품질경영, 환경경영, 안전보건',
  openGraph: {
    title: 'ISO 인증 | 유에스이노웨이브 - US INNOWAVE',
    description: 'ISO 인증 및 기업인증 컨설팅 - ISO 9001, 14001, 45001과 기업부설연구소, 벤처기업, 이노비즈 등 정부 기업인증 취득을 체계적으로 지원합니다.',
    type: 'website',
  },
};

export default function CertificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}