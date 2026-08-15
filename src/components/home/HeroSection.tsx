'use client';

import Link from 'next/link';
import { useLang } from '@/components/Providers';
import { generalInfo } from '@/lib/data';
import CertTrigger from '@/components/CertTrigger';

export default function HeroSection() {
  const { t, lang } = useLang();
  const data = generalInfo[lang];

  return (
    <section className="hero-video" id="hero">
      <img
        className="hero-video__media"
        src="/images/bg-socroom.webp"
        alt=""
        aria-hidden="true"
        width="1884"
        height="835"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-video__overlay" aria-hidden="true"></div>

      <div className="container hero-minimal__container hero-video__container">
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
        </div>
      </div>
    </section>
  );
}
