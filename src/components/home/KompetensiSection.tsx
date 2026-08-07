'use client';

import { useState, useEffect } from 'react';
import { useLang } from '@/components/Providers';
import { generalInfo } from '@/lib/data';
import SectionTitle from '@/components/home/SectionTitle';

type KompetensiTab = 'kompetensi' | 'cpl';

function useTypewriter(text: string, speed = 18) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplay('');
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return { display, done };
}

export default function KompetensiSection() {
  const { t, lang } = useLang();
  const [activeTab, setActiveTab] = useState<KompetensiTab>('kompetensi');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleHash = () => {
        if (window.location.hash === '#cpl-list') {
          setActiveTab('cpl');
        } else if (window.location.hash === '#kompetensi-list' || window.location.hash === '#kompetensi') {
          setActiveTab('kompetensi');
        }
      };
      handleHash();
      window.addEventListener('hashchange', handleHash);
      return () => window.removeEventListener('hashchange', handleHash);
    }
  }, []);

  const commandText =
    activeTab === 'kompetensi'
      ? './info --show --kompetensi-utama'
      : './info --show --cpl-outcomes';

  const { display, done } = useTypewriter(commandText, 18);

  const kompetensi = generalInfo[lang].kompetensi_lulusan;
  const cpl = generalInfo[lang].capaian_pembelajaran_lulusan;

  const cmdBase = './info --show ';
  const typedCmd = display.slice(0, Math.min(display.length, cmdBase.length));
  const typedFlag = display.length > cmdBase.length ? display.slice(cmdBase.length) : '';

  return (
    <section className="kompetensi-section" id="kompetensi">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.kompetensiTag}</span>
          <SectionTitle text={t.kompetensiTitle} variant="logAlert" />
          <p className="section-desc">{t.kompetensiDesc}</p>
        </div>

        <div className="matrix-tabs">
          <button
            type="button"
            className={`matrix-tab${activeTab === 'kompetensi' ? ' active' : ''}`}
            onClick={() => setActiveTab('kompetensi')}
            aria-pressed={activeTab === 'kompetensi'}
            data-target="kompetensi-list"
          >
            <svg className="svg-icon-inline" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span>{t.mtabKompetensi}</span>
          </button>
          <button
            type="button"
            className={`matrix-tab${activeTab === 'cpl' ? ' active' : ''}`}
            onClick={() => setActiveTab('cpl')}
            aria-pressed={activeTab === 'cpl'}
            data-target="cpl-list"
          >
            <svg className="svg-icon-inline" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            <span>{t.mtabCpl}</span>
          </button>
        </div>

        <div className="matrix-content-wrapper">
          <div className="terminal-output-line kompetensi-terminal-bar">
            <span className="terminal-prompt">
              <span className="terminal-prompt__user">rks</span>
              <span className="terminal-prompt__at">@</span>
              <span className="terminal-prompt__host">polibatam</span>
              <span className="terminal-prompt__path">:~</span>
              <span className="terminal-prompt__dollar">$</span>
            </span>
            <span className="terminal-cmd" style={{ marginLeft: '6px' }}>{typedCmd}</span>
            {typedFlag && <span className="terminal-flag">{typedFlag}</span>}
            {!done && <span className="persona-cli__cursor">▍</span>}
          </div>

          <div className="matrix-panel" id="kompetensi-list" style={{ display: activeTab === 'kompetensi' ? 'block' : 'none' }}>
            <div className="kompetensi-cards-grid">
              {kompetensi.map((item, idx) => (
                <div className="kompetensi-card" key={idx}>
                  <div className="kompetensi-idx">{idx + 1}</div>
                  <p className="kompetensi-text">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="matrix-panel" id="cpl-list" style={{ display: activeTab === 'cpl' ? 'block' : 'none' }}>
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


