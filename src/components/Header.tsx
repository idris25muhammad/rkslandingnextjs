'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang, useTheme } from './Providers';
import { useUi } from './ui-context';
import CertTrigger from './CertTrigger';

export default function Header() {
  const pathname = usePathname();
  const isSubpage = pathname !== '/';
  const activeNav: 'home' | 'kurikulum' = ['/kurikulum', '/integrated-curr', '/prasyarat-linkmap'].includes(
    pathname
  )
    ? 'kurikulum'
    : 'home';
  const { t, lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const { setCommandOpen, mobileOpen, setMobileOpen } = useUi();

  const homeAnchor = (hash: string) => (isSubpage ? `/#${hash}` : `#${hash}`);
  const homePage = isSubpage ? '/' : '/';

  return (
    <header className="site-header" id="site-header">
      <div className="container site-header__container">
        <Link href="/" className="site-header__logo" aria-label="Beranda RKS Polibatam">
          <div className="logo-cyan-box">
            <img
              src="/images/logo/rks.png"
              alt="Logo Rekayasa Keamanan Siber Polibatam"
              className="logo-img"
              width="64"
              height="64"
            />
          </div>
          <div className="logo-text">
            <span className="brand-title">{t.brandTitle}</span>
            <span className="brand-subtitle">Politeknik Negeri Batam</span>
          </div>
        </Link>

        <nav className="site-header__nav" aria-label="Navigasi Utama">
          <ul className="nav-list">
            <li className="nav-item has-megamenu">
              <a
                href={homeAnchor('profil')}
                className={`nav-link${activeNav === 'home' ? '' : ''}`}
              >
                <span>{t.navProfil}</span>
                <svg
                  className="chevron-svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <div className="megamenu">
                <div className="megamenu__inner">
                  <div className="megamenu__col">
                    <h4 className="megamenu__heading">{t.mmTentang}</h4>
                    <ul className="megamenu__links">
                      <li>
                        <a href={homeAnchor('profil')}>
                          <span className="icon-dot"></span> <span>{t.mmOverview}</span>
                        </a>
                      </li>
                      <li>
                        <a href={homeAnchor('keunggulan')}>
                          <span className="icon-dot"></span> <span>{t.mmKeunggulan}</span>
                        </a>
                      </li>
                      <li>
                        <a href={homeAnchor('peo')}>
                          <span className="icon-dot"></span> <span>{t.mmPeo}</span>
                        </a>
                      </li>
                      <li>
                        <a href={homeAnchor('dosen')}>
                          <span className="icon-dot"></span> <span>{t.mmDosen}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="megamenu__col">
                    <h4 className="megamenu__heading">{t.mmStandar}</h4>
                    <div className="megamenu-badges">
                      <CertTrigger
                        className="badge-img-btn cert-popup-trigger"
                        certImg="/dokumen/sertifikat_laminfokom.jpg"
                        certTitle="Sertifikat Akreditasi LAM INFOKOM (Baik Sekali)"
                        title="Lihat Sertifikat LAM INFOKOM"
                      >
                        <img
                          src="/images/logo/laminfokom.png"
                          alt="LAM INFOKOM Baik Sekali"
                          className="badge-img"
                          width="110"
                          height="34"
                          loading="lazy"
                        />
                        <span className="badge-tag-text">BAIK SEKALI</span>
                      </CertTrigger>
                      <CertTrigger
                        className="badge-img-btn cert-popup-trigger"
                        certImg="/dokumen/sertifikat_iabee.jpg"
                        certTitle="Sertifikat Akreditasi IABEE"
                        title="Lihat Sertifikat IABEE"
                      >
                        <img
                          src="/images/logo/iabee.png"
                          alt="IABEE Standard"
                          className="badge-img"
                          width="110"
                          height="34"
                          loading="lazy"
                        />
                        <span className="badge-tag-text">PROVISIONAL</span>
                      </CertTrigger>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item has-megamenu">
              <a
                href={activeNav === 'kurikulum' ? '/kurikulum' : homeAnchor('kompetensi')}
                className={`nav-link${activeNav === 'kurikulum' ? ' active' : ''}`}
              >
                <span>{t.navKurikulum}</span>
                <svg
                  className="chevron-svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
              <div className="megamenu">
                <div className="megamenu__inner">
                  <div className="megamenu__col">
                    <h4 className="megamenu__heading">{t.mmCplHead}</h4>
                    <ul className="megamenu__links">
                      <li>
                        <a href="/kurikulum/">
                          <span className="icon-dot"></span> <span>{t.mmKurikulumPage}</span>
                        </a>
                      </li>
                      <li>
                        <a href="/integrated-curr/">
                          <span className="icon-dot"></span> <span>{t.mmIntegrated}</span>
                        </a>
                      </li>
                      <li>
                        <a href="/prasyarat-linkmap/">
                          <span className="icon-dot"></span> <span>{t.mmPrasyarat}</span>
                        </a>
                      </li>
                      <li>
                        <a href={homeAnchor('kompetensi')}>
                          <span className="icon-dot"></span> <span>{t.mmKompetensi}</span>
                        </a>
                      </li>
                      <li>
                        <a href={homeAnchor('sertifikasi')}>
                          <span className="icon-dot"></span> <span>{t.mmSertifikasi}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="megamenu__col">
                    <h4 className="megamenu__heading">{t.mmFasilitasKarir}</h4>
                    <ul className="megamenu__links">
                      <li>
                        <a href={homeAnchor('fasilitas')}>
                          <span className="icon-dot"></span> <span>{t.mmLabSoc}</span>
                        </a>
                      </li>
                      <li>
                        <a href={homeAnchor('karir')}>
                          <span className="icon-dot"></span> <span>{t.mmKarir}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </nav>

        <div className="site-header__actions">
          <button
            className="header-search-btn"
            onClick={() => setCommandOpen(true)}
            title="Cari di RKS (Ctrl+K / /)"
            aria-label="Buka Pencarian"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <span className="search-btn-text">{t.searchHome}</span>
            <kbd className="search-shortcut">Ctrl+K</kbd>
          </button>

          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title="Ganti Tema (Dark / Light)"
            aria-label="Ganti Tema"
          >
            <svg
              className="theme-icon theme-icon-dark"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg
              className="theme-icon theme-icon-light"
              width="16"
              height="16"
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

          <div className="lang-switcher" aria-label="Pilih Bahasa">
            <button
              className={`lang-btn${lang === 'id' ? ' active' : ''}`}
              onClick={() => setLang('id')}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <span className="lang-divider">|</span>
            <button
              className={`lang-btn${lang === 'en' ? ' active' : ''}`}
              onClick={() => setLang('en')}
              aria-label="English Language"
            >
              EN
            </button>
          </div>

          <button
            className={`mobile-toggle${mobileOpen ? ' is-open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Buka Menu Mobile"
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
