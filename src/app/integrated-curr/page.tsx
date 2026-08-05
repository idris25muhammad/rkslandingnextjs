import type { Metadata } from 'next';
import IntegratedCurrClient from '@/components/integrated/IntegratedCurrClient';

export const metadata: Metadata = {
  title: 'Kurikulum Terintegrasi',
  description:
    'Pemetaan kurikulum secara menyeluruh untuk memastikan keterkaitan yang harmonis antara capaian pembelajaran, mata kuliah, dan kebutuhan industri.',
  alternates: {
    canonical: '/integrated-curr',
  },
};

export default function IntegratedCurrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Beranda',
                item: 'https://rks.polibatam.ac.id/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Kurikulum Terintegrasi',
                item: 'https://rks.polibatam.ac.id/integrated-curr/',
              },
            ],
          }),
        }}
      />
      <IntegratedCurrClient />
    </>
  );
}
