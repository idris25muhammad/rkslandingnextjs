'use client';

import type { ReactNode } from 'react';
import { useLang } from '@/components/Providers';
import { generalInfo } from '@/lib/data';

const WATERMARKS: ReactNode[] = [
  <svg className="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="w1">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
  <svg className="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="w2">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>,
  <svg className="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="w3">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>,
  <svg className="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="w4">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>,
  <svg className="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="w5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
  </svg>,
  <svg className="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="w6">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
  <svg className="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="w7">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>,
  <svg className="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="w8">
    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
    <path d="M1.42 9a16 16 0 0 1 21.16 0" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>,
  <svg className="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="w9">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
  </svg>,
];

export default function KarirSection() {
  const { t, lang } = useLang();
  const karir = generalInfo[lang].peluang_kerja_lulusan;

  return (
    <section className="karir-section" id="karir">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-tag">{t.karirTag}</span>
          <h2 className="section-title">{t.karirTitle}</h2>
          <p className="section-desc">{t.karirDesc}</p>
        </div>

        <div className="karir-cards-grid">
          {karir.map((item, idx) => (
            <div className="karir-card" key={idx}>
              {WATERMARKS[idx % WATERMARKS.length]}
              <div className="karir-card__content">
                <h3 className="karir-posisi">{item.posisi}</h3>
                <p className="karir-desc">{item.deskripsi}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
