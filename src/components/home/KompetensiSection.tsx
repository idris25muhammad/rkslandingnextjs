'use client';

import { useState } from 'react';
import { useLang } from '@/components/Providers';
import { generalInfo } from '@/lib/data';

type Panel = 'kompetensi' | 'cpl';

export default function KompetensiSection() {
  const { t, lang } = useLang();
  const [panel, setPanel] = useState<Panel>('kompetensi');

  const kompetensi = generalInfo[lang].kompetensi_lulusan;
  const cpl = generalInfo[lang].capaian_pembelajaran_lulusan;

  return (
    <section className="kompetensi-section" id="kompetensi">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.kompetensiTag}</span>
          <h2 className="section-title">{t.kompetensiTitle}</h2>
          <p className="section-desc">{t.kompetensiDesc}</p>
        </div>

        <div className="matrix-filter-bar">
          <div className="matrix-tabs">
            <button
              className={`matrix-tab${panel === 'kompetensi' ? ' active' : ''}`}
              onClick={() => setPanel('kompetensi')}
            >
              <svg className="svg-icon-inline" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>{t.mtabKompetensi}</span>
            </button>
            <button className={`matrix-tab${panel === 'cpl' ? ' active' : ''}`} onClick={() => setPanel('cpl')}>
              <svg className="svg-icon-inline" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span>{t.mtabCpl}</span>
            </button>
          </div>
        </div>

        <div className="matrix-content-wrapper">
          <div className={`matrix-panel${panel === 'kompetensi' ? ' active' : ''}`} id="kompetensi-list">
            <div className="kompetensi-cards-grid">
              {kompetensi.map((item, idx) => (
                <div className="kompetensi-card" key={idx}>
                  <div className="kompetensi-idx">{idx + 1}</div>
                  <p className="kompetensi-text">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`matrix-panel${panel === 'cpl' ? ' active' : ''}`} id="cpl-list">
            <div className="cpl-list-grid">
              {cpl.map((item, idx) => (
                <div className="cpl-card" key={idx}>
                  <span className="cpl-code">CPL-{(idx + 1).toString().padStart(2, '0')}</span>
                  <p className="cpl-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
