import type { Metadata, Viewport } from 'next';
import {
  DM_Sans,
  JetBrains_Mono,
  Orbitron,
  Plus_Jakarta_Sans,
  Space_Grotesk,
} from 'next/font/google';
import '../styles/style.css';
import '../styles/overrides.css';

const fontHeading = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-heading',
  display: 'swap',
});

const fontDisplay = Space_Grotesk({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-display',
  display: 'swap',
});

const fontBody = DM_Sans({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-body',
  display: 'swap',
});

const fontCode = JetBrains_Mono({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-code',
  display: 'swap',
});

const fontOrbitron = Orbitron({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-orbitron',
  display: 'swap',
});
import { Providers } from '@/components/Providers';
import { UiProvider } from '@/components/ui-context';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CommandPaletteLoader from '@/components/CommandPaletteLoader';
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
        url: '/images/bgsoc.webp',
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
    images: ['/images/bgsoc.webp'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#040812',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      data-theme="light"
      className={`${fontHeading.variable} ${fontDisplay.variable} ${fontBody.variable} ${fontCode.variable} ${fontOrbitron.variable}`}
    >
      <head></head>
      <body className="light-theme">
        <Providers>
          <UiProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CommandPaletteLoader />
            <CertModal />
            <MobileMenu />
            <BackToTop />
          </UiProvider>
        </Providers>
      </body>
    </html>
  );
}
