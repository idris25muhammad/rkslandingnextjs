'use client';

import { useState } from 'react';
import { useLang } from '@/components/Providers';

const TABS = [
  { id: 'visi', labelKey: 'tabVisi' },
  { id: 'misi', labelKey: 'tabMisi' },
  { id: 'tujuan', labelKey: 'tabTujuan' },
  { id: 'sasaran', labelKey: 'tabSasaran' },
] as const;

type VmtTab = (typeof TABS)[number]['id'];

export default function SvSection() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<VmtTab>('visi');

  const visiItems: Record<VmtTab, { num: string; text: string }[]> = {
    visi: [],
    misi: [
      { num: '01', text: t.vmtMisi1 },
      { num: '02', text: t.vmtMisi2 },
      { num: '03', text: t.vmtMisi3 },
    ],
    tujuan: [
      { num: '01', text: t.vmtTujuan1 },
      { num: '02', text: t.vmtTujuan2 },
      { num: '03', text: t.vmtTujuan3 },
    ],
    sasaran: [
      { num: '01', text: t.vmtSasaran1 },
      { num: '02', text: t.vmtSasaran2 },
      { num: '03', text: t.vmtSasaran3 },
    ],
  };

  return (
    <section className="sv-section" id="komitmen">
      <div className="sv-bg" aria-hidden="true">
        <div className="sv-bg__dots"></div>
        <div className="sv-bg__line sv-bg__line--scan"></div>
        <div className="sv-bg__blob sv-bg__blob--cyan"></div>
        <div className="sv-bg__blob sv-bg__blob--purple"></div>
      </div>

      <div className="container sv-inner">
        <div className="sv-header center-header">
          <span className="section-tag">{t.videoTag}</span>
          <h2 className="section-title">{t.videoTitle}</h2>
          <p className="section-desc">{t.videoDesc}</p>
        </div>

        <div className="sv-grid" id="visi-misi">
          <div className="sv-left">
            <div className="sv-card">
              <div className="sv-card__head">
                <div className="sv-card__eyebrow">
                  <span className="sv-dot"></span>
                  <span>{t.vmtEyebrow}</span>
                </div>
                <h3 className="sv-card__title">{t.vmtCardTitle}</h3>
              </div>

              <div className="sv-tabs" role="tablist">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    className={`sv-tab${activeTab === tab.id ? ' sv-tab--active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    role="tab"
                  >
                    <span className="sv-tab__icon"></span> <span>{t[tab.labelKey]}</span>
                  </button>
                ))}
              </div>

              <div className="sv-tabcontent">
                {activeTab === 'visi' ? (
                  <div className="sv-pane sv-pane--active">
                    <div className="sv-visi-quote">
                      <div className="sv-visi-quote__bar"></div>
                      <p className="sv-visi-quote__text">{t.vmtVisiQuote}</p>
                    </div>
                    <p className="sv-visi-sub">{t.vmtVisiSub}</p>
                  </div>
                ) : (
                  <div className="sv-pane sv-pane--active">
                    <ul className="sv-list">
                      {visiItems[activeTab].map((item) => (
                        <li key={item.num}>
                          <span className="sv-list__num">{item.num}</span>
                          <span>{item.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="sv-right">
            <div className="sv-vcard">
              <div className="sv-vcard__label">
                <span className="pulse-dot"></span>
                <span>{t.vmtVideoLabel}</span>
              </div>
              <div className="sv-vcard__player">
                <video controls width="100%" preload="metadata" style={{ borderRadius: 12, aspectRatio: '16/9', objectFit: 'cover' }}>
                  <source src="/videos/rksprofil.mp4#t=0.01" type="video/mp4" />
                  Browser Anda tidak mendukung tag video.
                </video>
              </div>
              <p
                style={{
                  marginTop: 15,
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  textAlign: 'center',
                  padding: '0 10px',
                }}
              >
                {t.vmtVideoDescTxt}
              </p>
              <div style={{ textAlign: 'center', marginTop: 15, marginBottom: 5 }}>
                <a
                  href="https://www.youtube.com/watch?v=nghtR5-XaC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sv-youtube-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>{t.vmtYoutubeBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sv-social-links" style={{ textAlign: 'center', marginTop: 50, borderTop: '1px solid var(--border-subtle)', paddingTop: 30 }}>
          <p
            style={{
              marginBottom: 20,
              fontWeight: 700,
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontSize: '0.95rem',
            }}
          >
            {t.vmtSocmedTitle}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 25 }}>
            <a href="https://www.facebook.com/prodi.rks.polibatam/" target="_blank" rel="noopener noreferrer" className="sv-social-link sv-social-link--fb" aria-label="Facebook">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/rks.polibatam/" target="_blank" rel="noopener noreferrer" className="sv-social-link sv-social-link--ig" aria-label="Instagram">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@rkspolibatam7986" target="_blank" rel="noopener noreferrer" className="sv-social-link sv-social-link--yt" aria-label="YouTube">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
