import type { Metadata } from 'next';
import IntegratedCurrClient from '@/components/integrated/IntegratedCurrClient';

export const metadata: Metadata = {
  title: 'Kurikulum Terintegrasi & Skill Mapping',
  description:
    'Pemetaan Kurikulum Terintegrasi CDIO & Skill Matrix Sarjana Terapan (D4) Rekayasa Keamanan Siber Polibatam.',
  alternates: {
    canonical: '/integrated-curr',
  },
};

export default function IntegratedCurrPage() {
  return <IntegratedCurrClient />;
}
