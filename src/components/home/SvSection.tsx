'use client';

import { useState } from 'react';
import { useLang } from '@/components/Providers';

type VmtTab = 'visi' | 'misi' | 'tujuan' | 'sasaran';

const VMT_STEPS: { id: VmtTab; num: string; labelKey: string }[] = [
  { id: 'visi', num: '01', labelKey: 'tabVisi' },
  { id: 'misi', num: '02', labelKey: 'tabMisi' },
  { id: 'tujuan', num: '03', labelKey: 'tabTujuan' },
  { id: 'sasaran', num: '04', labelKey: 'tabSasaran' },
];

const YOUTUBE_EMBED = 'https://www.youtube.com/embed/nghtR5-XaC8';

export default function SvSection() {
  const { t } = useLang();
  const [activeStep, setActiveStep] = useState<VmtTab>('visi');

  const stepItems: Record<VmtTab, { num: string; text: string }[]> = {
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

  const spotChips = [
    { num: t.spotC1v, unit: t.spotC1u, label: t.spotC1l, pos: 'sv-chip--tl' },
    { num: t.spotC2v, unit: t.spotC2u, label: t.spotC2l, pos: 'sv-chip--tr' },
    { num: t.spotC3v, unit: t.spotC3u, label: t.spotC3l, pos: 'sv-chip--bl' },
    { num: t.spotC4v, unit: t.spotC4u, label: t.spotC4l, pos: 'sv-chip--br' },
  ];

  const spotPoints = [
    { title: t.profProdiTitle, desc: t.profProdiDesc },
    { title: t.profPengajarTitle, desc: t.profPengajarDesc },
    { title: t.profFasilitasTitle, desc: t.profFasilitasDesc },
    { title: t.profLulusanTitle, desc: t.profLulusanDesc },
  ];

  return (
    <section className="sv-spot" id="profil">
      <div className="sv-spot__bg" aria-hidden="true">
        <div className="sv-spot__dots"></div>
        <div className="sv-spot__scan"></div>
        <div className="sv-spot__blob sv-spot__blob--cyan"></div>
        <div className="sv-spot__blob sv-spot__blob--purple"></div>
      </div>

      <div className="container">
        {/* ============ ROW 1 · VIDEO SPOTLIGHT ============ */}
        <div className="sv-spot__grid">
          <div className="sv-spot__media">
            <div className="sv-frame">
              <span className="sv-frame__corner sv-frame__corner--tl"></span>
              <span className="sv-frame__corner sv-frame__corner--tr"></span>
              <span className="sv-frame__corner sv-frame__corner--bl"></span>
              <span className="sv-frame__corner sv-frame__corner--br"></span>

              <div className="sv-live">
                <span className="sv-live__dot"></span>
                <span>{t.vmtVideoLabel}</span>
              </div>

              <div className="sv-frame__player">
                <iframe
                  src={YOUTUBE_EMBED}
                  title={t.videoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {spotChips.map((chip) => (
                <div key={chip.pos} className={`sv-chip ${chip.pos}`}>
                  <span className="sv-chip__num">{chip.num}</span>
                  <span className="sv-chip__meta">
                    <b>{chip.unit}</b>
                    <i>{chip.label}</i>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="sv-spot__info">
            <span className="section-tag">{t.videoTag}</span>
            <h2 className="section-title">{t.videoTitle}</h2>

            <ul className="sv-spot__points">
              {spotPoints.map((point) => (
                <li key={point.title}>
                  <span className="sv-spot__check">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <span className="sv-spot__point-body">
                    <b className="sv-spot__point-title">{point.title}</b>
                    <span className="sv-spot__point-desc">{point.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ============ ROW 2 · VMT ROADMAP ============ */}
        <div className="sv-vmt" id="komitmen">
          <div className="sv-vmt__header">
            <span className="section-tag">{t.vmtEyebrow}</span>
            <h2 className="section-title">{t.vmtCardTitle}</h2>
            <p className="section-desc">{t.vmtDesc}</p>
          </div>

          <div className="sv-vmt__track">
            <span className="sv-vmt__line"></span>
            {VMT_STEPS.map((step) => {
              const isActive = activeStep === step.id;
              return (
                <button
                  key={step.id}
                  className={`sv-node${isActive ? ' sv-node--active' : ''}`}
                  onClick={() => setActiveStep(step.id)}
                  aria-pressed={isActive}
                >
                  <span className="sv-node__dot">{step.num}</span>
                  <span className="sv-node__label">{t[step.labelKey]}</span>
                </button>
              );
            })}
          </div>

          <div className="sv-vmt__panel">
            {activeStep === 'visi' ? (
              <div className="sv-pane">
                <div className="sv-visi-quote">
                  <div className="sv-visi-quote__bar"></div>
                  <p className="sv-visi-quote__text">{t.vmtVisiQuote}</p>
                </div>
                <p className="sv-visi-sub">{t.vmtVisiSub}</p>
              </div>
            ) : (
              <div className="sv-pane">
                <ul className="sv-list">
                  {stepItems[activeStep].map((item) => (
                    <li key={item.num}>
                      <span className="sv-list__num">{item.num}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <p className="sv-vmt__hint">{t.vmtHint}</p>

          <div className="sv-vmt__social">
            <p className="sv-vmt__social-title">{t.vmtSocmedTitle}</p>
            <div className="sv-vmt__social-icons">
              <a href="https://www.facebook.com/prodi.rks.polibatam/" target="_blank" rel="noopener noreferrer" className="sv-social sv-social--fb" aria-label="Facebook">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/rks.polibatam/" target="_blank" rel="noopener noreferrer" className="sv-social sv-social--ig" aria-label="Instagram">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.07M12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@rkspolibatam7986" target="_blank" rel="noopener noreferrer" className="sv-social sv-social--yt" aria-label="YouTube">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
