'use client';

import { useLang } from '@/components/Providers';

export default function PmbSection() {
  const { t } = useLang();

  return (
    <section className="pmb-cta-section" id="pmb">
      <div className="container">
        <div className="pmb-box">
          <div className="pmb-box__content">
            <div className="cyber-badge">{t.pmbBadge}</div>
            <h2 className="pmb-title">{t.pmbTitle}</h2>
            <p className="pmb-desc">{t.pmbDesc}</p>
            <div className="pmb-actions">
              <a
                href="https://registrasi.polibatam.ac.id"
                target="_blank"
                rel="noopener"
                className="btn btn--cyan btn--lg"
              >
                {t.pmbBtn1}
              </a>
            </div>
          </div>
          <div className="pmb-box__mascot">
            <img src="/images/maskot.webp" alt="Mascot RKS Ready" width="200" height="200" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
