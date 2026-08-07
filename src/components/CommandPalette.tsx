'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from './Providers';
import { useUi } from './ui-context';
import { dosen, generalInfo, getSemestersList } from '@/lib/data';

interface CommandItem {
  title: string;
  cat: string;
  url: string;
}

const STATIC_ITEMS: CommandItem[] = [
  { title: 'Video Profil Program Studi RKS', cat: 'Video', url: '#profil' },
  { title: 'Profil & Visi Misi RKS', cat: 'Prodi', url: '#profil' },
  { title: 'PEO (Program Educational Objectives)', cat: 'Tujuan', url: '#peo' },
  { title: 'Kompetensi Utama Lulusan', cat: 'Kurikulum', url: '#kompetensi' },
  { title: 'Capaian Pembelajaran (CPL)', cat: 'Kurikulum', url: '#cpl-list' },
  { title: 'Posisi Spesialis Keamanan Siber', cat: 'Karir', url: '#karir' },
  { title: 'Sertifikasi Internasional (CEH, Cisco)', cat: 'Sertifikasi', url: '#sertifikasi' },
  { title: 'Fasilitas Laboratorium SOC', cat: 'Fasilitas', url: '#fasilitas' },
  { title: 'Tim Dosen & Pengajar RKS', cat: 'Dosen', url: '#dosen' },
  { title: 'Pendaftaran PMB Polibatam', cat: 'PMB', url: '#pmb' },
];

export default function CommandPalette() {
  const { commandOpen, setCommandOpen } = useUi();
  const { lang } = useLang();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (commandOpen && inputRef.current) {
      inputRef.current.focus();
      setQuery('');
    }
  }, [commandOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandOpen(!commandOpen);
      } else if (
        e.key === '/' &&
        document.activeElement &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        setCommandOpen(true);
      } else if (e.key === 'Escape' && commandOpen) {
        setCommandOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [commandOpen, setCommandOpen]);

  const items = useMemo(() => {
    const careerItems: CommandItem[] = generalInfo[lang].peluang_kerja_lulusan.map((k) => ({
      title: `${k.posisi}: ${k.deskripsi}`,
      cat: 'Karir Role',
      url: '#karir',
    }));
    let list = [...STATIC_ITEMS, ...careerItems];
    const q = query.toLowerCase().trim();
    if (q) {
      const dosenItems: CommandItem[] = dosen.map((d) => ({
        title: `${d.nama} — ${d.bidang_spesialis}`,
        cat: 'Dosen',
        url: '#dosen',
      }));
      const courseItems: CommandItem[] = getSemestersList().flatMap((sem) =>
        sem.courses.map((c) => ({
          title: `${c.code} · ${c.name_id}`,
          cat: 'Matakuliah',
          url: `/kurikulum?search=${encodeURIComponent(c.code)}#semester-${sem.semester}`,
        }))
      );
      list = [...list, ...dosenItems, ...courseItems].filter(
        (i) => i.title.toLowerCase().includes(q) || i.cat.toLowerCase().includes(q)
      );
    }
    return list.slice(0, 8);
  }, [query, lang]);

  if (!commandOpen) return null;

  return (
    <div
      className="command-modal-overlay active"
      onClick={(e) => {
        if (e.target === e.currentTarget) setCommandOpen(false);
      }}
    >
      <div className="command-modal">
        <div className="command-modal__header">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tulis kata kunci (CPL, Karir, Sertifikasi, Dosen)..."
          />
          <kbd className="command-esc">ESC</kbd>
        </div>
        <div className="command-modal__body">
          {items.length > 0 ? (
            items.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                className="command-item"
                onClick={() => setCommandOpen(false)}
              >
                <span className="command-item-title">{item.title}</span>
                <span className="command-item-cat">{item.cat}</span>
              </a>
            ))
          ) : (
            <div className="command-item">
              <span className="command-item-title">
                Tidak ada hasil untuk &quot;{query}&quot;
              </span>
            </div>
          )}
        </div>
        <div className="command-modal__footer">
          <span>
            <kbd>↑</kbd> <kbd>↓</kbd> Navigasi
          </span>
          <span>
            <kbd>↵</kbd> Pilih
          </span>
          <span>
            <kbd>ESC</kbd> Tutup
          </span>
        </div>
      </div>
    </div>
  );
}
