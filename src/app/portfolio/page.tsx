import type { Metadata } from 'next';
import PortfolioView from '@/views/PortfolioView';

export const metadata: Metadata = {
  title: 'Our Solar Projects | Installations Across Maharashtra',
  description:
    'See residential, housing society, commercial and agricultural solar installations completed by Saptasurya Solar across Maharashtra.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    title: 'Our Solar Projects | Installations Across Maharashtra | Saptasurya Solar',
    description:
      'See residential, housing society, commercial and agricultural solar installations completed by Saptasurya Solar across Maharashtra.',
    url: '/portfolio',
  },
};

export default function Page() {
  return <PortfolioView />;
}
