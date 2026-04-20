import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import Layout from '@/components/Layout/Layout';
import JsonLd from '@/components/SEO/JsonLd';
import '@/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://saptasuryasolar.com'),
  title: {
    default: 'Solar Panel Installation in Maharashtra | Serving All 36 Districts | Saptasurya Solar',
    template: '%s | Saptasurya Solar',
  },
  description:
    'Saptasurya Solar provides premium rooftop solar panel installation and renewable energy solutions across all 36 districts of Maharashtra. Save up to 80% on electricity bills with government subsidy support.',
  keywords: [
    'Solar Panel Maharashtra',
    'Solar Installation Mumbai',
    'Solar Panel Pune',
    'Solar Rooftop Thane',
    'Solar Company Kalyan',
    'Solar Energy Nagpur',
    'Solar Subsidy Maharashtra',
    'Saptasurya Solar',
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Saptasurya Solar Energy Solutions | Best Solar in Maharashtra',
    description: 'Save up to 80% on electricity bills with Maharashtra\'s leading solar installation team. All 36 districts served.',
    url: 'https://saptasuryasolar.com',
    siteName: 'Saptasurya Solar',
    images: [
      {
        url: 'https://saptasuryasolar.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saptasurya Solar Panels Installation Maharashtra',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saptasurya Solar Energy | Maharashtra',
    description: 'Expert solar installation services with government subsidy support.',
    images: ['https://saptasuryasolar.com/og-image.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd />
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
