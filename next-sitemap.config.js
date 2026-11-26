/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.saptasuryasolar.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*', '/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/api/'],
      },
    ],
  },
  transform: async (config, path) => {
    // City pages are served publicly at /solar-installation-<city>
    const loc = path.replace(/^\/solar-installation\/([^/]+)$/, '/solar-installation-$1');
    const highPriority = ['/', '/subsidy', '/contact', '/services', '/products'];
    const isHigh = highPriority.includes(loc);
    const isCity = loc.startsWith('/solar-installation-');
    return {
      loc,
      changefreq: isHigh ? 'daily' : config.changefreq,
      priority: isHigh ? 1.0 : isCity ? 0.8 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
