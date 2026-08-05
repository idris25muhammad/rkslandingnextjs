'use client';

import { useState } from 'react';
import { useLang } from '@/components/Providers';
import { personas } from '@/lib/data';

const PERSONAS = [
  { key: 'calon-mahasiswa', id: 'tabCalon' },
  { key: 'mahasiswa', id: 'tabMahasiswa' },
  { key: 'industri', id: 'tabIndustri' },
  { key: 'orang-tua', id: 'tabOrtua' },
  { key: 'alumni', id: 'tabAlumni' },
];

function PersonaIcon({ type }: { type: string }) {
  const common = {
    className: 'persona-svg-icon',
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
  };
  switch (type) {
    case 'calon-mahasiswa':
      return (
        <svg {...common}>
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4l7 3.82 7-3.82v-4L12 17l-7-3.82z" />
        </svg>
      );
    case 'mahasiswa':
      return (
        <svg {...common}>
          <path d="M20 4H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 13.5l-2.5-2.5 2.5-2.5 1.41 1.41L9.33 11l1.58 1.09L9.5 13.5zm5 0l-1.41-1.41L14.67 11l-1.58-1.09L14.5 8.5l2.5 2.5-2.5 2.5z" />
        </svg>
      );
    case 'industri':
      return (
        <svg {...common}>
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V18z" />
        </svg>
      );
    case 'orang-tua':
      return (
        <svg {...common}>
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      );
  }
}

export default function PersonaSection() {
  const { t, lang } = useLang();
  const [active, setActive] = useState('calon-mahasiswa');

  const personaData = personas[lang][active] || personas[lang]['calon-mahasiswa'];

  return (
    <section className="persona-section" id="persona-selector">
      <div className="container">
        <div className="persona-widget">
          <div className="persona-widget__mascot" title="WISE si Ksatria Siber">
            <img
              src="/images/maskot.png"
              alt="WISE si Ksatria Siber"
              className="persona-mascot-img"
              width="50"
              height="50"
              loading="lazy"
            />
          </div>

          <div className="persona-widget__header">
            <div className="persona-widget__eyebrow">
              <span className="pulse-dot"></span>
              <span>NAVIGASI PERSONALITAS</span>
            </div>
            <h3 className="persona-widget__title">{t.personaTitle}</h3>
            <p className="persona-widget__sub">{t.personaSub}</p>
          </div>

          <div className="persona-tabs" role="tablist">
            {PERSONAS.map((p) => (
              <button
                key={p.key}
                className={`persona-tab${active === p.key ? ' active' : ''}`}
                onClick={() => setActive(p.key)}
                role="tab"
                aria-selected={active === p.key}
              >
                <PersonaIcon type={p.key} />
                <span>{t[p.id]}</span>
              </button>
            ))}
          </div>

          <div className="persona-content-panel">
            <div className="persona-info-box">
              <h4>{personaData.title}</h4>
              <p>{personaData.desc}</p>
              <div className="persona-quick-links">
                {personaData.links.map((link, idx) => (
                  <a key={idx} href={link.url} className="persona-link">
                    <span>{link.label}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
