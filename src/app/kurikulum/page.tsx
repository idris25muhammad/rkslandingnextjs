import type { Metadata } from 'next';
import KurikulumClient from '@/components/kurikulum/KurikulumClient';

export const metadata: Metadata = {
  title: 'Kurikulum 8 Semester D4 Rekayasa Keamanan Siber',
  description:
    'Struktur Kurikulum 8 Semester Sarjana Terapan (D4) Rekayasa Keamanan Siber Polibatam. 144 SKS, 70% Praktikum & PBL, Sertifikasi Internasional Cisco, EC-Council, AWS, serta Akreditasi BAIK SEKALI LAM INFOKOM & IABEE.',
  alternates: {
    canonical: '/kurikulum',
  },
};

export default function KurikulumPage() {
  return <KurikulumClient />;
}
