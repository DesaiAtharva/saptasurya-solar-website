import type { Metadata } from 'next';
import SubsidyView from '@/views/SubsidyView';

export const metadata: Metadata = {
  title: 'PM Surya Ghar Subsidy Maharashtra 2026 | Up to ₹78,000 + Calculator',
  description:
    'Check your PM Surya Ghar Muft Bijli Yojana subsidy (up to ₹78,000) with our free calculator. Saptasurya Solar files the subsidy and net metering for you.',
  alternates: { canonical: '/subsidy' },
  openGraph: {
    title: 'PM Surya Ghar Subsidy Maharashtra 2026 | Up to ₹78,000 + Calculator | Saptasurya Solar',
    description:
      'Check your PM Surya Ghar Muft Bijli Yojana subsidy (up to ₹78,000) with our free calculator. Saptasurya Solar files the subsidy and net metering for you.',
    url: '/subsidy',
  },
};

export default function Page() {
  return <SubsidyView />;
}
