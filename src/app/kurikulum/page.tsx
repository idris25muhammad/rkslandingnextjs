import type { Metadata } from 'next';
import KurikulumClient from '@/components/kurikulum/KurikulumClient';

export const metadata: Metadata = {
  title: 'Kurikulum 8 Semester D4 Rekayasa Keamanan Siber',
  description:
    'Mengintegrasikan standar akademik internasional dengan kerangka CDIO untuk melatih hard skill teknis dan soft skill abad ke-21 melalui pengerjaan proyek industri secara nyata.',
  alternates: {
    canonical: '/kurikulum',
  },
};

export default function KurikulumPage() {
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
                name: 'Kurikulum 8 Semester D4 Rekayasa Keamanan Siber',
                item: 'https://rks.polibatam.ac.id/kurikulum/',
              },
            ],
          }),
        }}
      />
      <KurikulumClient />
    </>
  );
}
