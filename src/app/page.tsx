import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import PersonaSection from '@/components/home/PersonaSection';
import UspsSection from '@/components/home/UspsSection';
import SvSection from '@/components/home/SvSection';
import PeoSection from '@/components/home/PeoSection';
import KompetensiSection from '@/components/home/KompetensiSection';
import KarirSection from '@/components/home/KarirSection';
import SertifikasiSection from '@/components/home/SertifikasiSection';
import FasilitasSection from '@/components/home/FasilitasSection';
import DosenSection from '@/components/home/DosenSection';
import PmbSection from '@/components/home/PmbSection';
import MobileBottomNav from '@/components/home/MobileBottomNav';

export const metadata: Metadata = {
  title: 'DIV Rekayasa Keamanan Siber | Politeknik Negeri Batam',
  description:
    'Program Studi Sarjana Terapan (D4) Rekayasa Keamanan Siber Polibatam. Mendidik spesialis keamanan siber, SOC analyst, dan pen-tester berstandar internasional dengan Akreditasi Perdana BAIK SEKALI dari LAM INFOKOM.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'D4 Rekayasa Keamanan Siber - Politeknik Negeri Batam',
            alternateName: 'Cyber Security Engineering Polibatam',
            url: 'https://rks.polibatam.ac.id',
            logo: 'https://rks.polibatam.ac.id/images/logo/rks.png',
            sameAs: ['https://www.polibatam.ac.id'],
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Jl. Ahmad Yani, Batam Kota',
              addressLocality: 'Batam',
              addressRegion: 'Kepulauan Riau',
              postalCode: '29461',
              addressCountry: 'ID',
            },
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'degree',
                name: 'Sarjana Terapan Komputer (S.Tr.Kom)',
              },
            ],
          }),
        }}
      />
      <HeroSection />
      <PersonaSection />
      <UspsSection />
      <SvSection />
      <PeoSection />
      <KompetensiSection />
      <KarirSection />
      <SertifikasiSection />
      <FasilitasSection />
      <DosenSection />
      <PmbSection />
      <MobileBottomNav />
    </>
  );
}
