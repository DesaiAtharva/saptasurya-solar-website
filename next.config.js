/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
      {
        source: '/solar-panel-installation-:city',
        destination: '/solar-installation-:city',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
