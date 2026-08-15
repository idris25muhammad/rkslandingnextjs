'use client';

import Link from 'next/link';
import { useLang } from '@/components/Providers';
import CertTrigger from '@/components/CertTrigger';
import SectionTitle from '@/components/home/SectionTitle';

export default function UspsSection() {
  const { t } = useLang();

  return (
    <section className="usp-gallery-section" id="keunggulan">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-tag">{t.uspTag}</span>
          <SectionTitle text={t.uspTitle} variant="nodes" />
          <p className="section-desc">{t.uspDesc}</p>
        </div>

        <div className="usp-bento-grid">
          <div className="bento-card bento-card--large bento-card--image bento-card--cyan" id="usp-tile-1">
            <div
              className="bento-card__bg"
              style={{ backgroundImage: "url('/images/bgsoc.webp')" }}
            ></div>
            <div className="bento-card__overlay"></div>
            <div className="bento-card__content">
              <h3 className="bento-title">{t.tile1Title}</h3>
              <p className="bento-desc">{t.tile1Desc}</p>
              <a href="#fasilitas" className="bento-link">
                <span>{t.tile1Link}</span> <span className="arrow">→</span>
              </a>
            </div>
          </div>

          <div className="bento-card bento-card--stat bento-card--cyan" id="usp-tile-2">
            <div className="bento-card__content">
              <div className="stat-number">
                8<span className="stat-unit">{t.tile2Unit}</span>
              </div>
              <h4 className="stat-title">{t.tile2Title}</h4>
              <p className="stat-desc">{t.tile2Desc}</p>
              <Link href="/kurikulum" className="bento-btn">
                <span>{t.heroBtn2}</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bento-card bento-card--stat bento-card--purple" id="usp-tile-3">
            <div className="bento-card__content">
              <div className="stat-number">
                20+<span className="stat-unit">{t.tile3Unit}</span>
              </div>
              <h4 className="stat-title">{t.tile3Title}</h4>
              <p className="stat-desc">{t.tile3Desc}</p>
            </div>
          </div>

          <div className="bento-card bento-card--stat bento-card--emerald" id="usp-tile-4">
            <div className="bento-card__content">
              <div className="stat-number">
                9<span className="stat-unit">{t.tile4Unit}</span>
              </div>
              <h4 className="stat-title">{t.tile4Title}</h4>
              <p className="stat-desc">{t.tile4Desc}</p>
            </div>
          </div>

          <div className="bento-card bento-card--medium bento-card--image bento-card--amber" id="usp-tile-5">
            <div
              className="bento-card__bg"
              style={{ backgroundImage: "url('/images/bg/informatika.jpg')" }}
            ></div>
            <div className="bento-card__overlay"></div>
            <div className="bento-card__content">
              <h3 className="bento-title">{t.tile5Title}</h3>
              <p className="bento-desc">{t.tile5Desc}</p>

              <div className="bento-acc-logos">
                <CertTrigger
                  className="hero-acc-btn cert-popup-trigger"
                  certImg="/dokumen/sertifikat_iabee.jpg"
                  certTitle="Sertifikat Akreditasi IABEE - Standard Accreditation"
                  title="Klik untuk lihat Sertifikat IABEE (JPG)"
                >
                  <img src="/images/logo/iabee.png" alt="Akreditasi IABEE" width="110" height="36" loading="lazy" />
                </CertTrigger>
                <CertTrigger
                  className="hero-acc-btn cert-popup-trigger"
                  certImg="/dokumen/sertifikat_laminfokom.jpg"
                  certTitle="Sertifikat Akreditasi LAM INFOKOM - Predikat BAIK SEKALI (Akreditasi Perdana)"
                  title="Klik untuk lihat Sertifikat LAM INFOKOM (Baik Sekali)"
                >
                  <img
                    src="/images/logo/laminfokom.png"
                    alt="Akreditasi LAM INFOKOM Baik Sekali"
                    width="110"
                    height="36"
                    loading="lazy"
                  />
                  <span className="hero-acc-badge-tag">BAIK SEKALI</span>
                </CertTrigger>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://www.polibatam.ac.id/prodi-rekayasa-keamanan-siber-polibatam-gelar-kuliah-umum-tentang-android-malware-analysis/"
          target="_blank"
          rel="noopener noreferrer"
          className="kuliah-banner"
        >
          <div className="kuliah-banner__poster">
            <img src="/images/rks-kuliah-umum.webp" alt={t.kuliahTitle} loading="lazy" />
          </div>
          <div className="kuliah-banner__text">
            <span className="kuliah-banner__tag">{t.kuliahTag}</span>
            <h3 className="kuliah-banner__title">{t.kuliahTitle}</h3>
            <p className="kuliah-banner__desc">{t.kuliahDesc}</p>
          </div>
        </a>
      </div>
    </section>
  );
}
