import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'D4 Rekayasa Keamanan Siber - Politeknik Negeri Batam',
    short_name: 'RKS Polibatam',
    description:
      'Program Studi Sarjana Terapan (D4) Rekayasa Keamanan Siber Politeknik Negeri Batam.',
    start_url: '/',
    display: 'standalone',
    background_color: '#040812',
    theme_color: '#040812',
    icons: [
      {
        src: '/images/logo/rks.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
