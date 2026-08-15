'use client';

import { useEffect, useRef, useState } from 'react';
import { useLang } from '@/components/Providers';
import { personas } from '@/lib/data';
import SectionTitle from '@/components/home/SectionTitle';

const PERSONAS = [
  { key: 'calon-mahasiswa', id: 'tabCalon' },
  { key: 'mahasiswa', id: 'tabMahasiswa' },
  { key: 'industri', id: 'tabIndustri' },
  { key: 'orang-tua', id: 'tabOrtua' },
  { key: 'alumni', id: 'tabAlumni' },
] as const;

function useTypewriter(text: string, start: boolean, speed = 16) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) {
      setDisplay('');
      setDone(false);
      return;
    }
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
  }, [text, start, speed]);

  return { display, done };
}

function TerminalPrompt() {
  return (
    <span className="terminal-prompt">
      <span className="terminal-prompt__user">rks</span>
      <span className="terminal-prompt__at">@</span>
      <span className="terminal-prompt__host">polibatam</span>
      <span className="terminal-prompt__path">:~</span>
      <span className="terminal-prompt__dollar">$</span>
    </span>
  );
}

export default function PersonaSection() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<string | null>(null);
  const [typed, setTyped] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const personaData = active ? personas[lang][active] : null;
  const { display, done } = useTypewriter(personaData?.desc ?? '', active !== null);

  const handleSubmit = (value: string) => {
    const num = parseInt(value, 10);
    if (num >= 1 && num <= PERSONAS.length) {
      setActive(PERSONAS[num - 1].key);
    }
    setTyped('');
  };

  const handleSelect = (num: number) => {
    setTyped(String(num));
    setActive(PERSONAS[num - 1].key);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(typed);
    } else if (e.key === 'Escape') {
      setTyped('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2);
    setTyped(value);
  };

  return (
    <section className="persona-section" id="persona-selector">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.personaTag}</span>
          <SectionTitle text={t.personaTitle} variant="monitor" />
          <p className="section-desc">{t.personaSub}</p>
        </div>

        <div className="persona-widget">
          <div className="persona-terminal-bar" aria-hidden="true">
            <svg className="persona-terminal-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M6 9l3 3-3 3M11 15h7" />
            </svg>
            <span className="terminal-title">wise@rks-polibatam:~/curated</span>
          </div>

          <div className="persona-widget__mascot" title="WISE si Ksatria Siber">
            <img
              src="/images/maskot.webp"
              alt="WISE si Ksatria Siber"
              className="persona-mascot-img"
              width="50"
              height="50"
              loading="lazy"
            />
          </div>

          <div className="persona-cli">
            <div className="persona-cli__question">
              <TerminalPrompt />
              <span className="terminal-cmd">{t.personaQuestion}</span>
            </div>

            <div className="persona-cli__options">
              {PERSONAS.map((p, idx) => (
                <button
                  key={p.key}
                  type="button"
                  className={`persona-option-line${active === p.key ? ' active' : ''}`}
                  onClick={() => handleSelect(idx + 1)}
                  aria-pressed={active === p.key}
                >
                  <span className="persona-option-line__num">[{idx + 1}]</span>
                  <span className="persona-option-line__text">{t[p.id]}</span>
                  {active === p.key && <span className="persona-option-line__mark">&lt;-- selected</span>}
                </button>
              ))}
            </div>

            <div className="persona-cli__input-row">
              <TerminalPrompt />
              <input
                ref={inputRef}
                className="persona-cli__input"
                value={typed}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={t.personaHint}
                aria-label={t.personaHint}
                maxLength={2}
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </div>

            {personaData && active && (
              <div className="persona-cli__output">
                <div className="terminal-output-line">
                  <TerminalPrompt />
                  <span className="terminal-cmd">{t.personaRun}</span>
                  <span className="terminal-flag">
                    --profile {PERSONAS.findIndex((p) => p.key === active) + 1}
                  </span>
                </div>
                <p className="persona-cli__title-line">
                  <span className="terminal-prompt">&gt;</span> {personaData.title}
                </p>
                <p className="persona-cli__desc">
                  {display}
                  {!done && <span className="persona-cli__cursor">▍</span>}
                </p>
                {done && (
                  <div className="persona-cli__links">
                    {personaData.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        className="persona-text-link"
                        target={link.url.startsWith('http') ? '_blank' : undefined}
                        rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        → {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
