import type { Metadata, Viewport } from 'next';
import '../styles/style.css';
import '../styles/overrides.css';
import { Providers } from '@/components/Providers';
import { UiProvider } from '@/components/ui-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import CertModal from '@/components/CertModal';
import MobileMenu from '@/components/MobileMenu';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://rks.polibatam.ac.id'),
  title: {
    default: 'D4 Rekayasa Keamanan Siber | Politeknik Negeri Batam',
    template: '%s | Politeknik Negeri Batam',
  },
  description:
    'Program Studi Sarjana Terapan (D4) Rekayasa Keamanan Siber Polibatam. Mendidik spesialis keamanan siber, SOC analyst, dan pen-tester berstandar internasional dengan Akreditasi Perdana BAIK SEKALI dari LAM INFOKOM.',
  keywords:
    'Rekayasa Keamanan Siber, Cyber Security Engineering, Polibatam, D4 RKS, Ethical Hacking, SOC, Penetration Testing, Keamanan Jaringan, IABEE, LAM INFOKOM',
  applicationName: 'RKS Polibatam',
  authors: [{ name: 'Program Studi D4 Rekayasa Keamanan Siber - Politeknik Negeri Batam' }],
  category: 'education',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/images/logo/rks.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://rks.polibatam.ac.id/',
    siteName: 'D4 Rekayasa Keamanan Siber Polibatam',
    title: 'D4 Rekayasa Keamanan Siber | Politeknik Negeri Batam',
    description:
      'Program Studi D4 Rekayasa Keamanan Siber Polibatam. Mendidik talenta siber kelas dunia dengan Akreditasi Perdana BAIK SEKALI LAM INFOKOM & 20+ sertifikasi internasional.',
    images: [
      {
        url: '/images/bg/rks_overview_lab.jpg',
        alt: 'Gambaran Laboratorium Program Studi D4 Rekayasa Keamanan Siber Polibatam',
      },
    ],
    locale: 'id_ID',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'D4 Rekayasa Keamanan Siber | Politeknik Negeri Batam',
    description:
      'Program Studi D4 Rekayasa Keamanan Siber Polibatam. Mendidik talenta siber kelas dunia dengan Akreditasi BAIK SEKALI LAM INFOKOM & 20+ sertifikasi internasional.',
    images: ['/images/bg/rks_overview_lab.jpg'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#040812',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300..700;1,9..40,300..700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark-theme">
        <Providers>
          <UiProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CommandPalette />
            <CertModal />
            <MobileMenu />
            <BackToTop />
          </UiProvider>
        </Providers>
      </body>
    </html>
  );
}
