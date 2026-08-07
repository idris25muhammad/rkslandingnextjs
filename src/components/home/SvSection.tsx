'use client';

import { useState } from 'react';
import { useLang } from '@/components/Providers';
import SectionTitle from '@/components/home/SectionTitle';

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
            <SectionTitle text={t.videoTitle} variant="radar" />

            <ul className="sv-spot__points">
              {spotPoints.map((point) => (
                <li key={point.title}>
                  <span className="sv-spot__check">
                    <svg width="28" height="22" viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="0" width="40" height="32" rx="6" fill="#0F172A" stroke="#22D3EE" strokeWidth="1"/>
                      <path d="M8 10 L16 16 L8 22" fill="none" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="20" y1="22" x2="30" y2="22" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
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
            <SectionTitle text={t.vmtCardTitle} variant="attackDefense" />
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
        </div>
      </div>
    </section>
  );
}
