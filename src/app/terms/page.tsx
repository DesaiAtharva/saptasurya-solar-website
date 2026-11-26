import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms governing the use of the Saptasurya Solar Energy website.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="25 November 2026"
      intro="By using www.saptasuryasolar.com you agree to these terms. Please read them carefully."
      sections={[
        {
          heading: '1. Information on this website',
          body: [
            'Content on this website, including prices, savings, generation figures and subsidy amounts, is for general information only. Calculator results are indicative estimates based on typical assumptions and are not a quotation.',
            'Government subsidy amounts and eligibility are decided by the relevant government authorities and may change without notice. Final pricing is confirmed in a written quotation after a site survey.',
          ],
        },
        {
          heading: '2. Quotations & contracts',
          body: [
            'Any installation is governed by the written quotation / agreement signed between you and Saptasurya Solar Energy, which prevails over anything stated on this website.',
          ],
        },
        {
          heading: '3. Acceptable use',
          body: [
            'You agree not to submit false information, misuse our forms, or attempt to disrupt or gain unauthorised access to this website.',
          ],
        },
        {
          heading: '4. Intellectual property',
          body: [
            'The Saptasurya Solar name, logo and website content belong to Saptasurya Solar Energy and may not be copied without permission.',
          ],
        },
        {
          heading: '5. Limitation of liability',
          body: [
            'We are not liable for any loss arising from reliance on general information or estimates published on this website.',
          ],
        },
        {
          heading: '6. Governing law',
          body: [
            'These terms are governed by the laws of India, and courts in Pune, Maharashtra have exclusive jurisdiction.',
          ],
        },
        {
          heading: '7. Contact',
          body: ['Questions about these terms: info@saptasuryasolar.com · +91 70583 62510.'],
        },
      ]}
    />
  );
}
