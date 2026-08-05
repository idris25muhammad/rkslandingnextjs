'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang, useTheme } from './Providers';
import { useUi } from './ui-context';

export default function MobileMenu() {
  const { mobileOpen, setMobileOpen } = useUi();
  const { lang, setLang, t } = useLang();
  const { toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (!mobileOpen) return null;

  const homeAnchor = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  const close = () => setMobileOpen(false);

  const links: { label: string; href: string }[] = [
    { label: t.mobProfil, href: '#profil' },
    { label: t.mobPeo, href: '#peo' },
    { label: t.mobKompetensi, href: '#kompetensi' },
    { label: t.mobKarir, href: '#karir' },
    { label: t.mobSertifikasi, href: '#sertifikasi' },
    { label: t.mobVideo, href: '#profil' },
    { label: t.mobFasilitas, href: '#fasilitas' },
    { label: t.mobDosen, href: '#dosen' },
  ];

  return (
    <div className="mobile-menu active">
      <div className="mobile-menu__content">
        <div className="mobile-menu__header-controls">
          <button
            className="theme-toggle-btn mobile-theme-toggle"
            onClick={toggleTheme}
            title="Ganti Tema"
            aria-label="Ganti Tema"
          >
            <svg
              className="theme-icon theme-icon-dark"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg
              className="theme-icon theme-icon-light"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>
          <div className="lang-switcher mobile-lang-switcher" aria-label="Pilih Bahasa">
            <button
              className={`lang-btn${lang === 'id' ? ' active' : ''}`}
              onClick={() => setLang('id')}
            >
              ID
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn${lang === 'en' ? ' active' : ''}`}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
        <ul className="mobile-nav-list">
          {links.map((link, idx) => (
            <li key={idx}>
              {link.href.startsWith('/') ? (
                <Link href={link.href} className="mobile-link" onClick={close}>
                  {link.label}
                </Link>
              ) : (
                <a
                  href={homeAnchor(link.href.slice(1))}
                  className="mobile-link"
                  onClick={close}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-menu__actions">
          <a
            href={homeAnchor('pmb')}
            className="btn btn--cyan btn--lg"
            style={{ width: '100%', marginTop: 20 }}
            onClick={close}
          >
            Daftar PMB ↗
          </a>
          <Link
            href="/kurikulum"
            className="btn btn--outline-cyan btn--lg"
            style={{ width: '100%', marginTop: 10 }}
            onClick={close}
          >
            {t.mobLihatKurikulum} ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
