'use client';

import { useLang } from '@/components/Providers';
import SectionTitle from '@/components/home/SectionTitle';

const LABS = [
  { room: 'Ruang 10.3', img: '/images/fasilitas/10.3.webp', titleKey: 'lab1Title', descKey: 'lab1Desc' },
  { room: 'Ruang 10.4', img: '/images/fasilitas/10.4.webp', titleKey: 'lab2Title', descKey: 'lab2Desc' },
  { room: 'Ruang 11.3', img: '/images/fasilitas/11.3.webp', titleKey: 'lab3Title', descKey: 'lab3Desc' },
  { room: 'Ruang 11.4', img: '/images/fasilitas/11.4.webp', titleKey: 'lab4Title', descKey: 'lab4Desc' },
  { room: 'Ruang 11.5', img: '/images/fasilitas/11.5.webp', titleKey: 'lab5Title', descKey: 'lab5Desc' },
];

export default function FasilitasSection() {
  const { t } = useLang();

  return (
    <section className="fasilitas-section" id="fasilitas">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-tag">{t.fasilitasTag}</span>
          <SectionTitle text={t.fasilitasTitle} variant="monitor" />
          <p className="section-desc">{t.fasilitasDesc}</p>
        </div>

        <div className="fasilitas-inclusivity-layout">
          <div className="fasilitas-column">
            <div className="fasilitas-photo-grid">
              <span className="fasilitas-blob" aria-hidden="true"></span>
              {LABS.map((lab, idx) => (
                <figure className={`fasilitas-photo fasilitas-photo--${idx + 1}`} key={idx}>
                  <img src={lab.img} alt={`Fasilitas Lab RKS ${lab.room}`} loading="lazy" />
                  <figcaption className="fasilitas-photo__label">
                    <span className="fasilitas-room-tag">{lab.room}</span>
                    <span className="fasilitas-photo__name">{t[lab.titleKey]}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="inclusivity-column">
            <div className="inclusivity-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/Y-GQEvRFoLY?rel=0"
                title={t.fasilitasTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
