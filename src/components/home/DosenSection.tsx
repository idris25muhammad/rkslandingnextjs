'use client';

import { useState } from 'react';
import { useLang } from '@/components/Providers';
import { dosen } from '@/lib/data';
import SectionTitle from '@/components/home/SectionTitle';

function DosenAvatar({ src, name }: { src: string; name: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  return (
    <img
      src={imgSrc}
      alt={name}
      className="dosen-avatar"
      width="80"
      height="80"
      loading="lazy"
      onError={() => setImgSrc('/images/logo/rks.png')}
    />
  );
}

export default function DosenSection() {
  const { t } = useLang();

  return (
    <section className="dosen-section" id="dosen">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t.dosenTag}</span>
          <SectionTitle text={t.dosenTitle} variant="nodes" />
          <p className="section-desc">{t.dosenDesc}</p>
        </div>

        <div className="dosen-grid">
          {dosen.map((d, idx) => {
            const isKaprodi = d.jabatan.toLowerCase().includes('kepala program studi');
            return (
              <div className={`dosen-card${isKaprodi ? ' dosen-card--kaprodi' : ''}`} key={idx}>
                {isKaprodi && <div className="dosen-badge-kaprodi">Kaprodi RKS</div>}
                <div className="dosen-card__header">
                  <div className="dosen-avatar-wrapper">
                    <DosenAvatar src={d.foto} name={d.nama} />
                  </div>
                  <div className="dosen-info-primary">
                    <h4 className="dosen-nama">{d.nama}</h4>
                    <span className="dosen-jabatan">{d.jabatan}</span>
                    <div className="dosen-meta">
                      <span className="dosen-nidn">NIDN/NIK: {d.nidn_nik}</span>
                      <a href={`mailto:${d.email}`} className="dosen-email">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        {d.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="dosen-card__body">
                  <div className="dosen-pendidikan-terakhir">
                    <strong>Pendidikan:</strong> {d.pendidikan_terakhir}
                  </div>
                  {d.riwayat_pendidikan && d.riwayat_pendidikan.length > 0 && (
                    <ul className="dosen-riwayat">
                      {d.riwayat_pendidikan.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  )}
                  {d.bidang_spesialis && (
                    <div className="dosen-spesialis">
                      <span className="dosen-spesialis-label">Spesialisasi:</span> {d.bidang_spesialis}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
