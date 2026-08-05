'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from './Providers';
import CertTrigger from './CertTrigger';

export default function Footer() {
  const { t } = useLang();
  const pathname = usePathname();
  const variant: 'home' | 'kurikulum' | 'simple' =
    pathname === '/' ? 'home' : pathname === '/kurikulum' ? 'kurikulum' : 'simple';
  const isSubpage = variant !== 'home';
  const homeAnchor = (hash: string) => (isSubpage ? `/#${hash}` : `#${hash}`);

  const navLinks =
    variant === 'home'
      ? [
          { label: t.flProfil, href: homeAnchor('profil') },
          { label: 'Kurikulum 8 Semester', href: '/kurikulum' },
          { label: t.flPeo, href: homeAnchor('peo') },
          { label: t.flKompetensi, href: homeAnchor('kompetensi') },
          { label: t.flKarir, href: homeAnchor('karir') },
          { label: t.flSertifikasi, href: homeAnchor('sertifikasi') },
        ]
      : variant === 'kurikulum'
        ? [
            { label: t.flProfil, href: homeAnchor('profil') },
            { label: 'Kurikulum 8 Semester', href: '/kurikulum' },
            { label: t.flKompetensi, href: homeAnchor('kompetensi') },
            { label: t.flKarir, href: homeAnchor('karir') },
            { label: t.flSertifikasi, href: homeAnchor('sertifikasi') },
          ]
        : [
            { label: t.flProfil, href: homeAnchor('profil') },
            { label: 'Kurikulum 8 Semester', href: '/kurikulum' },
            { label: 'Kurikulum Terintegrasi Mapping', href: '/integrated-curr' },
            { label: 'Prasyarat Mata Kuliah', href: '/prasyarat-linkmap' },
          ];

  return (
    <footer className="site-footer">
      <div className="container site-footer__container">
        <div className="footer-col footer-about">
          <div className="footer-logo">
            <img src="/images/logo/rks.png" alt="Logo RKS" width="64" height="64" loading="lazy" />
            <span>D4 Rekayasa Keamanan Siber</span>
          </div>
          <p className="footer-desc">{t.footerDesc}</p>
          <p className="footer-address">📍 Jalan Ahmad Yani, Batam Kota, Kota Batam, Kepulauan Riau 29461</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t.footerCol1}</h4>
          <ul className="footer-links">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                {link.href.startsWith('/') ? (
                  <Link href={link.href}>{link.label}</Link>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t.footerCol2}</h4>
          <ul className="footer-links">
            <li>
              <CertTrigger
                className="footer-cert-link cert-popup-trigger"
                certImg="/dokumen/sertifikat_laminfokom.jpg"
                certTitle="Sertifikat Akreditasi LAM INFOKOM (Baik Sekali)"
              >
                Sertifikat LAM INFOKOM (Baik Sekali)
              </CertTrigger>
            </li>
            <li>
              <CertTrigger
                className="footer-cert-link cert-popup-trigger"
                certImg="/dokumen/sertifikat_iabee.jpg"
                certTitle="Sertifikat Akreditasi IABEE"
              >
                Sertifikat Akreditasi IABEE
              </CertTrigger>
            </li>
            {variant === 'home' || variant === 'kurikulum' ? (
              <>
                <li>
                  <a href="#">CDIO World Initiative</a>
                </li>
                <li>
                  <a href="#">CSIRT Polibatam</a>
                </li>
              </>
            ) : null}
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t.footerCol3}</h4>
          <ul className="footer-links">
            <li>
              <a href="#">Cisco Networking Academy</a>
            </li>
            <li>
              <a href="#">EC-Council Academic Partner</a>
            </li>
            <li>
              <a href="#">AWS Academy</a>
            </li>
            <li>
              <a href="#">RedHat Academy</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__container">
          <p>&copy; 2026 D4 Rekayasa Keamanan Siber - Politeknik Negeri Batam. All Rights Reserved.</p>
          <div className="footer-socials">
            <span className="social-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              made with
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              ID
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
