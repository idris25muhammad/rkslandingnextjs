'use client';

import { useLang } from '@/components/Providers';

const LABS = [
  { room: 'Ruang 10.3', img: '/images/fasilitas/10.3.jpg', titleKey: 'lab1Title', descKey: 'lab1Desc' },
  { room: 'Ruang 10.4', img: '/images/fasilitas/10.4.jpg', titleKey: 'lab2Title', descKey: 'lab2Desc' },
  { room: 'Ruang 11.3', img: '/images/fasilitas/11.3.jpg', titleKey: 'lab3Title', descKey: 'lab3Desc' },
  { room: 'Ruang 11.4', img: '/images/fasilitas/11.4.jpg', titleKey: 'lab4Title', descKey: 'lab4Desc' },
  { room: 'Ruang 11.5', img: '/images/fasilitas/11.5.jpg', titleKey: 'lab5Title', descKey: 'lab5Desc' },
];

export default function FasilitasSection() {
  const { t } = useLang();

  return (
    <section className="fasilitas-section" id="fasilitas">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-tag">{t.fasilitasTag}</span>
          <h2 className="section-title">{t.fasilitasTitle}</h2>
          <p className="section-desc">{t.fasilitasDesc}</p>
        </div>

        <div className="fasilitas-inclusivity-layout">
          <div className="fasilitas-column">
            <div className="fasilitas-grid fasilitas-grid--scrollable">
              {LABS.map((lab, idx) => (
                <div className="fasilitas-card" key={idx}>
                  <div className="fasilitas-card__image">
                    <img src={lab.img} alt={`Fasilitas Lab RKS ${lab.room}`} width="400" height="220" loading="lazy" />
                    <span className="fasilitas-room-tag">{lab.room}</span>
                  </div>
                  <div className="fasilitas-card__content">
                    <h3 className="fasilitas-title">{t[lab.titleKey]}</h3>
                    <p className="fasilitas-desc">{t[lab.descKey]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="inclusivity-column">
            <p className="inclusivity-desc">{t.fasCol2Desc}</p>
            <div className="inclusivity-video-wrapper">
              <img src="/images/kampus-Inklusif.jpeg" alt="Fasilitas Kampus Inklusif" className="inclusivity-video" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
