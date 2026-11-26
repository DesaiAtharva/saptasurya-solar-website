import type { Metadata } from 'next';
import ContactView from '@/views/ContactView';

export const metadata: Metadata = {
  title: 'Contact Us | Free Solar Site Survey & Quote',
  description:
    'Request a free solar site survey and quote from Saptasurya Solar. Call or WhatsApp +91 70583 62510. Serving all 36 districts of Maharashtra.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | Free Solar Site Survey & Quote | Saptasurya Solar',
    description:
      'Request a free solar site survey and quote from Saptasurya Solar. Call or WhatsApp +91 70583 62510. Serving all 36 districts of Maharashtra.',
    url: '/contact',
  },
};

export default function Page() {
  return <ContactView />;
}
