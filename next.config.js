/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      // Permanent (301/308) redirect from the bare domain to www.
      // Also set saptasuryasolar.com → www as a *permanent* redirect in Vercel → Domains.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'saptasuryasolar.com' }],
        destination: 'https://www.saptasuryasolar.com/:path*',
        permanent: true,
      },
      {
        source: '/solar-panel-installation-:city',
        destination: '/solar-installation-:city',
        permanent: true,
      },
      // Merged duplicate blog posts
      {
        source: '/blog/solar-subsidy-maharashtra',
        destination: '/blog/solar-subsidy-2026-guide',
        permanent: true,
      },
      {
        source: '/blog/rooftop-solar-benefits-maharashtra',
        destination: '/blog/benefits-solar-energy-maharashtra',
        permanent: true,
      },
      // Avoid duplicate URLs for the internal route
      {
        source: '/solar-installation/:city',
        destination: '/solar-installation-:city',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      // Public city URLs: /solar-installation-pune → app/solar-installation/[city]
      {
        source: '/solar-installation-:city',
        destination: '/solar-installation/:city',
      },
    ];
  },
};

module.exports = nextConfig;
