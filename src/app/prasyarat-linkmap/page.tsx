import type { Metadata } from 'next';
import PrasyaratClient from '@/components/prasyarat/PrasyaratClient';

export const metadata: Metadata = {
  title: 'Peta Alur & Prasyarat Mata Kuliah',
  description:
    'Visualisasi alur kurikulum yang terstruktur untuk membantu mahasiswa memahami tahapan belajar dan hubungan prasyarat antar-mata kuliah menuju kelulusan.',
  alternates: {
    canonical: '/prasyarat-linkmap',
  },
};

export default function PrasyaratLinkmapPage() {
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
                name: 'Peta Alur & Prasyarat Mata Kuliah',
                item: 'https://rks.polibatam.ac.id/prasyarat-linkmap/',
              },
            ],
          }),
        }}
      />
      <PrasyaratClient />
    </>
  );
}
