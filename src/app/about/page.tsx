import type { Metadata } from 'next';
import AboutView from '@/views/AboutView';

export const metadata: Metadata = {
  title: 'About Us | Trusted Solar Installer in Maharashtra',
  description:
    'Meet Saptasurya Solar — a Pune-based solar EPC company installing rooftop solar, solar pumps and water heaters across Maharashtra with full PM Surya Ghar subsidy support.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | Trusted Solar Installer in Maharashtra | Saptasurya Solar',
    description:
      'Meet Saptasurya Solar — a Pune-based solar EPC company installing rooftop solar, solar pumps and water heaters across Maharashtra with full PM Surya Ghar subsidy support.',
    url: '/about',
  },
};

export default function Page() {
  return <AboutView />;
}
