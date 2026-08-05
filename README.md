# 🛡️ Landing Page DIV Rekayasa Keamanan Siber (Cyber Security Engineering) - Polibatam

[![Akreditasi](https://img.shields.io/badge/Akreditasi-Baik%20Sekali-emerald.svg)](#-akreditasi--sertifikasi-internasional)
[![Bahasa](https://img.shields.io/badge/Bahasa-Indonesia%20%7C%20English-cyan.svg)](#-fitur-utama)
[![Polibatam](https://img.shields.io/badge/Politeknik-Negeri%20Batam-blue.svg)](https://www.polibatam.ac.id/)

Website resmi landing page & portal informasi untuk **Program Studi Sarjana Terapan (D4) Rekayasa Keamanan Siber** di **Politeknik Negeri Batam**. Website ini menyajikan informasi komprehensif mengenai profil prodi, visi & misi, akreditasi (LAM INFOKOM & IABEE), sertifikasi internasional, struktur kurikulum, profil dosen, fasilitas laboratorium, hingga peta prasyarat mata kuliah.

---

## 🌟 Fitur Utama

- 🌐 **Multi-Language Support (ID / EN)**: Alih bahasa konten secara dinamis melalui data JSON.
- 🎓 **Kurikulum Berbasis Vokasi & CDIO**: Penyajian kurikulum terintegrasi, PEO, CPL, dan pendekatan CDIO.
- 🗺️ **Interactive Prerequisite Link Map**: Visualisasi graf interaktif alur prasyarat mata kuliah antar-semester.
- 📜 **Akreditasi & Sertifikasi Internasional**: Akreditasi Perdana *Baik Sekali* LAM INFOKOM, standar IABEE, serta kemitraan akademi (EC-Council, Cisco, AWS, RedHat).
- 👨‍🏫 **Direktori Dosen & Pengelola**: Katalog pengajar profesional dengan sertifikasi industri.
- 🎨 **Modern Cyber-Themed UI**: Desain futuristik bertema keamanan siber dengan glassmorphism, mode gelap, dan animasi *hover-only* (tanpa animasi loop yang membebani performa).
- ⚡ **Next.js Static Export**: Arsitektur React (App Router) dengan *static site generation* — cepat, SEO-friendly, dan tanpa dependency runtime yang berat.

---

## 📂 Struktur Direktori

```text
rkslandingv2/
├── data/                      # Seluruh konten sumber (JSON)
│   ├── informasi_umum.json    # Profil, Visi, Misi, PEO, CPL, Fasilitas, Karir (ID)
│   ├── informasi_umum_en.json # Terjemahan (EN)
│   ├── kurikulum.json         # Struktur mata kuliah 8 semester
│   ├── dosen.json             # Data dosen & sertifikasi
│   ├── sertifikasi.json       # Daftar sertifikasi global
│   ├── persona.json           # Konten navigasi personalitas (ID/EN)
│   ├── prasyarat.json         # Grafik prasyarat mata kuliah
│   └── integrated.json        # Matriks kurikulum terintegrasi CDIO
├── public/                    # Aset statis (gambar, video, dokumen)
├── src/
│   ├── app/                   # Halaman (/, /kurikulum, /integrated-curr, /prasyarat-linkmap)
│   ├── components/            # Komponen React (Header, Footer, modal, section)
│   ├── lib/
│   │   ├── data.ts            # Data layer (impor JSON + normalisasi)
│   │   └── i18n.ts            # Kamus terjemahan ID/EN
│   └── styles/                # Global CSS (style.css + overrides)
├── legacy/                    # Versi vanilla HTML/CSS/JS lama (referensi)
└── next.config.mjs            # Static export (output: 'export')
```

---

## 🚀 Menjalankan & Build

```bash
# Install dependencies
npm install

# Development server (hot reload)
npm run dev

# Production build + static export (menghasilkan folder `out/`)
npm run build
```

Hasil build berupa **static site** di folder `out/` yang dapat di-hosting di server statis apa pun (Nginx, GitHub Pages, Vercel, dsb).

---

## 🛠️ Spesifikasi Teknologi

- **Framework**: Next.js 15 (App Router) + React 19.
- **Output**: `output: 'export'` — static site generation (SSG).
- **Data**: Seluruh konten diambil dari file JSON di `data/` (diimpor saat build).
- **i18n**: Context React `LanguageProvider` (ID/EN) dengan kamus di `src/lib/i18n.ts`.
- **Styling**: Vanilla CSS3 (CSS Variables, Flexbox, CSS Grid, Glassmorphism) dengan animasi hanya pada *hover*.
- **Typography**: Google Fonts (*Space Grotesk*, *Plus Jakarta Sans*, *JetBrains Mono*, *DM Sans*).

---

## 📜 Lisensi & Cipta

© **Politeknik Negeri Batam** - Program Studi D4 Rekayasa Keamanan Siber.  
Diperuntukkan sebagai media informasi publik & portal resmi Program Studi.
