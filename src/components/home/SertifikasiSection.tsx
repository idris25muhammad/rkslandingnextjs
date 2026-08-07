'use client';

import { useLang } from '@/components/Providers';
import { certifications } from '@/lib/data';
import SectionTitle from '@/components/home/SectionTitle';

const ACADEMIES = [
  { img: '/images/akademi/cisco.png', alt: 'Cisco Networking Academy' },
  { img: '/images/akademi/ec.png', alt: 'EC-Council Academic' },
  { img: '/images/akademi/aws.png', alt: 'AWS Academy' },
  { img: '/images/akademi/redhat.png', alt: 'RedHat Academy' },
  { img: '/images/akademi/cdio.jpg', alt: 'CDIO Initiative' },
];

export default function SertifikasiSection() {
  const { t } = useLang();

  return (
    <section className="sertifikasi-section section--white" id="sertifikasi">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.certTag}</span>
          <SectionTitle text={t.certTitle} variant="radar" />
          <p className="section-desc">{t.certDesc}</p>
        </div>

        <div className="academies-bar">
          <h4 className="academies-title">{t.certMitra}</h4>
          <div className="academies-logos">
            {ACADEMIES.map((academy, idx) => (
              <div className="academy-item" key={idx}>
                <img src={academy.img} alt={academy.alt} width="110" height="40" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div className="cert-card" title={cert.name} key={idx}>
              <img src={cert.img} alt={cert.name} className="cert-img" width="48" height="48" loading="lazy" />
              <span className="cert-name">{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
