import type { Metadata } from 'next';
import ProductsView from '@/views/ProductsView';

export const metadata: Metadata = {
  title: 'Solar Products | Rooftop Systems, Water Heaters & Pumps',
  description:
    'On-grid, off-grid and hybrid rooftop solar systems, solar water heaters and solar pumps from Saptasurya Solar, with subsidy support in Maharashtra.',
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Solar Products | Rooftop Systems, Water Heaters & Pumps | Saptasurya Solar',
    description:
      'On-grid, off-grid and hybrid rooftop solar systems, solar water heaters and solar pumps from Saptasurya Solar, with subsidy support in Maharashtra.',
    url: '/products',
  },
};

export default function Page() {
  return <ProductsView />;
}
