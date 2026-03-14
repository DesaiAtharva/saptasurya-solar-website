import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import Layout from '@/components/Layout/Layout';
import '@/index.css';

export const metadata: Metadata = {
  title: 'Saptasurya Solar Energy Solutions',
  description: 'Premium solar business website for Saptasurya Solar Energy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
