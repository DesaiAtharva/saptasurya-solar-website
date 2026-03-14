import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import Layout from '@/components/Layout/Layout';
import JsonLd from '@/components/SEO/JsonLd';
import '@/index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://saptasuryasolar.com'),
  title: {
    default: 'Saptasurya Solar Energy | Solar Panel Installation in Maharashtra',
    template: '%s | Saptasurya Solar',
  },
  description:
    'Saptasurya Solar provides premium rooftop solar panel installation and renewable energy solutions across Maharashtra, including Nagpur, Pune, Nashik, and Mumbai. Save up to 80% on electricity bills.',
  keywords: [
    'Solar Panel Maharashtra',
    'Solar Installation Nagpur',
    'Solar Panel Pune',
    'Solar Rooftop Nashik',
    'Saptasurya Solar',
    'Solar Energy India',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Saptasurya Solar Energy Solutions',
    description: 'Powering Maharashtra with clean, affordable solar energy.',
    url: 'https://saptasuryasolar.com',
    siteName: 'Saptasurya Solar',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saptasurya Solar Panels',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saptasurya Solar Energy',
    description: 'Expert solar installation services in Maharashtra.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
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
