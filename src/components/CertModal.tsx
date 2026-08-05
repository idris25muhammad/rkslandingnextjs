'use client';

import { useEffect } from 'react';
import { useUi } from './ui-context';

export default function CertModal() {
  const { cert, closeCert } = useUi();

  useEffect(() => {
    if (!cert) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCert();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [cert, closeCert]);

  if (!cert) return null;

  return (
    <div
      className="cert-modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCert();
      }}
    >
      <div className="cert-modal">
        <div className="cert-modal__header">
          <span className="cert-modal__title">{cert.title}</span>
          <button className="cert-modal__close" onClick={closeCert} aria-label="Tutup Popup">
            &times;
          </button>
        </div>
        <div className="cert-modal__body">
          <img src={cert.img} alt={cert.title} loading="lazy" />
        </div>
        <div className="cert-modal__footer">
          <a
            href={cert.img}
            target="_blank"
            download
            className="btn btn--cyan btn--sm"
          >
            Unduh File Sertifikat (JPG)
          </a>
        </div>
      </div>
    </div>
  );
}
