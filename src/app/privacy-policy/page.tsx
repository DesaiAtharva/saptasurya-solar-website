import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Saptasurya Solar Energy collects, uses and protects your personal information.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="25 November 2026"
      intro="Saptasurya Solar Energy (“we”, “us”) respects your privacy. This policy explains what personal data we collect through www.saptasuryasolar.com, why we collect it and how we protect it, in line with India's Digital Personal Data Protection Act, 2023."
      sections={[
        {
          heading: '1. Information we collect',
          body: [
            'When you request a quote, use our solar calculator or contact us, we collect the details you provide: your name, mobile number, email (optional), city, approximate electricity bill, property type and any message you write.',
            'We also collect basic technical information automatically, such as pages visited, device and browser type, and the advertising campaign that brought you to our site (e.g. UTM parameters), through cookies and analytics tools such as Google Analytics and Meta Pixel.',
          ],
        },
        {
          heading: '2. How we use your information',
          body: [
            'To contact you about your solar enquiry, arrange a site survey, prepare a quotation and assist with government subsidy and net-metering applications.',
            'To measure and improve our website and advertising. We do not sell your personal data to anyone.',
          ],
        },
        {
          heading: '3. Consent',
          body: [
            'By submitting a form on this website you consent to us calling, messaging (including on WhatsApp) or emailing you about your enquiry. You can withdraw consent at any time by contacting us, after which we will stop contacting you.',
          ],
        },
        {
          heading: '4. Sharing',
          body: [
            'We share your information only where needed to deliver our service: with government portals and electricity distribution companies (e.g. MSEDCL, BEST, Tata Power, Adani Electricity) for subsidy and net-metering applications, with financing partners if you request a loan, and with service providers who host our website, database and communication tools under confidentiality obligations.',
          ],
        },
        {
          heading: '5. Storage & security',
          body: [
            'Your data is stored on secure cloud infrastructure with access limited to authorised staff. We keep enquiry data for as long as needed to serve you and meet legal obligations, and delete it when it is no longer required.',
          ],
        },
        {
          heading: '6. Your rights',
          body: [
            'You may request access to, correction of, or deletion of your personal data, and may raise a grievance, by emailing info@saptasuryasolar.com or calling +91 70583 62510. We will respond within a reasonable time.',
          ],
        },
        {
          heading: '7. Cookies',
          body: [
            'We use cookies for analytics and advertising measurement. You can block or delete cookies in your browser settings; the website will continue to work.',
          ],
        },
        {
          heading: '8. Contact',
          body: [
            'Saptasurya Solar Energy, Alankapuri Complex, Laxmi Colony, Hadapsar, Pune – 411028, Maharashtra. Email: info@saptasuryasolar.com · Phone: +91 70583 62510.',
          ],
        },
      ]}
    />
  );
}
