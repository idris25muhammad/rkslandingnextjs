'use client';

import { useLang } from '@/components/Providers';
import { generalInfo } from '@/lib/data';

const PEO_NUMBERS = ['01', '02', '03'];
const PEO_NAMES = ['Problem Solver', 'Lifelong Learner', 'Cyber Innovator'];

export default function PeoSection() {
  const { t, lang } = useLang();
  const peo = generalInfo[lang].program_educational_objectives;

  return (
    <section className="peo-section" id="peo">
      <div className="container">
        <div className="peo-container-box">
          <div className="peo-header">
            <span className="section-tag">{t.peoTag}</span>
            <h2 className="peo-main-title">{t.peoTitle}</h2>
            <p className="peo-sub-desc">{peo.deskripsi}</p>
          </div>

          <div className="peo-cards-grid">
            {peo.profil_profesional_mandiri.map((item, idx) => (
              <div className="peo-card" key={idx}>
                <div className="peo-card-number">
                  <span className="peo-card-num">{PEO_NUMBERS[idx]}</span>
                  <span className="peo-card-label">{PEO_NAMES[idx]}</span>
                </div>
                <p className="peo-card-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
