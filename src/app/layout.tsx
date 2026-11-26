import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Providers } from '@/components/Providers';
import Layout from '@/components/Layout/Layout';
import JsonLd from '@/components/SEO/JsonLd';
import Analytics from '@/components/Analytics/Analytics';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Fraunces } from 'next/font/google';
import SmoothScroll from '@/motion/SmoothScroll';
import '@/index.css';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const fontDisplay = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT'],
  variable: '--font-display',
  display: 'swap',
});

// Intro plays once per session, and only when the visit starts on the home page.
const INTRO_FLAG = `(function(){var d=document.documentElement;try{if(location.pathname!=='/'||sessionStorage.getItem('ss_intro')){d.setAttribute('data-intro','seen');return}sessionStorage.setItem('ss_intro','1');setTimeout(function(){d.setAttribute('data-intro','seen')},1600)}catch(e){d.setAttribute('data-intro','seen')}})();`;

export const metadata: Metadata = {
  metadataBase: new URL('https://www.saptasuryasolar.com'),
  title: {
    default:
      'Solar Panel Installation in Maharashtra | Serving All 36 Districts | Saptasurya Solar',
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
    description:
      "Save up to 80% on electricity bills with Maharashtra's leading solar installation team. All 36 districts served.",
    url: 'https://www.saptasuryasolar.com',
    siteName: 'Saptasurya Solar',
    images: [
      {
        url: 'https://www.saptasuryasolar.com/og-image.png',
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
    images: ['https://www.saptasuryasolar.com/og-image.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${fontSans.variable} ${fontDisplay.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script id="intro-flag" strategy="beforeInteractive">
          {INTRO_FLAG}
        </Script>
        <SmoothScroll />
        <JsonLd />
        <Analytics />
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
