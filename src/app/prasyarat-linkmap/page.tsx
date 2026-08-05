import type { Metadata } from 'next';
import PrasyaratClient from '@/components/prasyarat/PrasyaratClient';

export const metadata: Metadata = {
  title: 'Peta Alur & Prasyarat Mata Kuliah',
  description:
    'Visualisasi Interaktif Peta Alur & Prasyarat Mata Kuliah Sarjana Terapan (D4) Rekayasa Keamanan Siber Polibatam.',
  alternates: {
    canonical: '/prasyarat-linkmap',
  },
};

export default function PrasyaratLinkmapPage() {
  return <PrasyaratClient />;
}
