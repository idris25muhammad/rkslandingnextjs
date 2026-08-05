'use client';

import Link from 'next/link';
import { useLang } from '@/components/Providers';
import { generalInfo } from '@/lib/data';
import CertTrigger from '@/components/CertTrigger';

export default function HeroSection() {
  const { t, lang } = useLang();
  const data = generalInfo[lang];

  return (
    <section className="hero-minimal" id="hero">
      <div className="hero-aurora-bg" aria-hidden="true">
        <div className="hero-aurora-blob hero-aurora-blob--cyan"></div>
        <div className="hero-aurora-blob hero-aurora-blob--blue"></div>
        <div className="hero-aurora-blob hero-aurora-blob--purple"></div>
        <div className="hero-aurora-grid"></div>
      </div>

      <div className="container hero-minimal__container">
        <div className="hero-minimal__text">
          <h1
            className="hero-minimal__title"
            dangerouslySetInnerHTML={{ __html: t.heroMainTitle }}
          />
          <p className="hero-minimal__desc">{data.deskripsi}</p>

          <div className="hero-minimal__cta">
            <a href="#karir" className="btn btn--cyan btn--lg">
              {t.heroBtn1}
            </a>
            <Link href="/kurikulum" className="btn btn--outline-cyan btn--lg">
              {t.heroBtn2}
            </Link>
          </div>

          <div className="hero-minimal__stats">
            <div className="stat-item">
              <span className="stat-val">8</span>
              <span className="stat-lbl">{t.stat1}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-val">20+</span>
              <span className="stat-lbl">{t.stat2}</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-val">100%</span>
              <span className="stat-lbl">{t.stat3}</span>
            </div>
          </div>
        </div>

        <div className="hero-minimal__media">
          <div className="hero-accreditation-block">
            <div className="hero-acc-logos">
              <CertTrigger
                className="hero-acc-btn cert-popup-trigger"
                certImg="/dokumen/sertifikat_iabee.jpg"
                certTitle="Sertifikat Akreditasi IABEE - Standard Accreditation"
                title="Klik untuk lihat Sertifikat IABEE (JPG)"
              >
                <img src="/images/logo/iabee.png" alt="Akreditasi IABEE" height="40" loading="lazy" />
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
                  height="40"
                  loading="lazy"
                />
                <span className="hero-acc-badge-tag">BAIK SEKALI</span>
              </CertTrigger>
            </div>
          </div>

          <div className="hero-right-banner-card">
            <img
              src="/images/ilustrasi_soc_biru.png"
              alt="Banner Rekayasa Keamanan Siber Polibatam"
              className="hero-right-banner-img"
              loading="eager"
              width="720"
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
