/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://saptasuryasolar.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://saptasuryasolar.com/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
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
