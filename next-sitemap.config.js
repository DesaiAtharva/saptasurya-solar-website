/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://saptasuryasolar.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404'],
      },
    ],
    additionalSitemaps: [
      'https://saptasuryasolar.com/sitemap.xml',
    ],
  },
  // Boost home and key service pages
  transform: async (config, path) => {
    const highPriorityPaths = ['/', '/about', '/products', '/services', '/contact'];
    const isHighPriority = highPriorityPaths.includes(path);
    return {
      loc: path,
      changefreq: isHighPriority ? 'daily' : config.changefreq,
      priority: isHighPriority ? 1.0 : config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
