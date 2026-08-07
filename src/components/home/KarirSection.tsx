'use client';

import { useLang } from '@/components/Providers';
import { generalInfo } from '@/lib/data';
import SectionTitle from '@/components/home/SectionTitle';
import SocDoodle, { SocVariant } from '@/components/SocDoodle';

const DOODLE_VARIANTS: SocVariant[] = [
  'monitor',
  'radar',
  'logAlert',
  'nodes',
  'fingerprint',
  'attackDefense',
];

export default function KarirSection() {
  const { t, lang } = useLang();
  const karir = generalInfo[lang].peluang_kerja_lulusan;

  return (
    <section className="karir-section" id="karir">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-tag">{t.karirTag}</span>
          <SectionTitle text={t.karirTitle} variant="fingerprint" />
          <p className="section-desc">{t.karirDesc}</p>
        </div>

        <div className="karir-cards-grid">
          {karir.map((item, idx) => (
            <div className="karir-card" key={idx}>
              <SocDoodle
                variant={DOODLE_VARIANTS[idx % DOODLE_VARIANTS.length]}
                className="karir-watermark-icon"
              />
              <div className="karir-card__content">
                <h3 className="karir-posisi">
                  <span className="karir-title-icon" aria-hidden="true">
                    <svg width="28" height="22" viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="0" width="40" height="32" rx="6" className="karir-title-icon-rect" fill="#0F172A" stroke="var(--accent-cyan)" strokeWidth="1" />
                      <path d="M8 10 L16 16 L8 22" fill="none" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <line x1="20" y1="22" x2="30" y2="22" stroke="var(--accent-cyan)" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span>{item.posisi}</span>
                </h3>
                <p className="karir-desc">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


