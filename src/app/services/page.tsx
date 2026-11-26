import type { Metadata } from 'next';
import ServicesView from '@/views/ServicesView';

export const metadata: Metadata = {
  title: 'Solar Services | Installation, Net Metering, AMC',
  description:
    'End-to-end solar services in Maharashtra: site survey, design, installation, net metering with MSEDCL/BEST/Adani/Tata, subsidy filing and maintenance.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Solar Services | Installation, Net Metering, AMC | Saptasurya Solar',
    description:
      'End-to-end solar services in Maharashtra: site survey, design, installation, net metering with MSEDCL/BEST/Adani/Tata, subsidy filing and maintenance.',
    url: '/services',
  },
};

export default function Page() {
  return <ServicesView />;
}
