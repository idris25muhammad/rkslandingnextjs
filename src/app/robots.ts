import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://rks.polibatam.ac.id/sitemap.xml',
    host: 'https://rks.polibatam.ac.id',
  };
}
