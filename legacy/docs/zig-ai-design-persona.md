# Design Persona — "Zig AI Editorial" Style

> Referensi gaya desain yang dianalisis dari [zig.ai](https://zig.ai/) — satu persona desain
> yang dapat diterapkan ulang pada proyek web lain.

---

## 1. Identitas Persona

| Aspek | Nilai |
|---|---|
| **Nama** | Editorial SaaS / "The Quiet Tech" |
| **Vibe** | Tenang, percaya diri, presisi — berbicara lewat tipografi, bukan dekorasi |
| **Target** | Produk B2B / institusi / brand yang ingin tampil sebagai *authority* |
| **Kata kunci** | Whitespace, ritme, tegas, minimal, proof-driven |

---

## 2. Prinsip Inti (Non-Negotiable)

1. **Satu ide per section** — setiap blok menyampaikan SATU pesan, dengan satu visual, dua CTA.
2. **Ketenangan** — *motion* dipakai untuk mengarahkan perhatian, BUKAN untuk menghias.
3. **Ritme berulang** — semua section mengikuti pola yang sama (lihat di bawah).
4. **Bukti berupa angka** — klaim diperkuat dengan statistik/evidence, bukan kata-kata kosong.
5. **Sedikit CTA, selalu sama** — 2 tombol identik yang diulang di seluruh halaman.

---

## 3. Pola Struktur Halaman

Urutan section standar (dapat dipotong sesuai kebutuhan):

```text
1. Nav (minimal: 3-5 link + 2 CTA)
2. Hero (1 headline + 1 sub + 2 CTA + 1 visual)
3. Problem / After (before-after narrative)
4. Trust bar (logo klien/mitra)
5. Fitur bernomor (/01 .. /06)
6. Impact stats (angka besar)
7. Dual audience (dua sisi pengguna)
8. Workflow / produk
9. Timeline / progresi
10. Testimonial
11. FAQ
12. Final CTA
13. Footer (minimal)
```

---

## 4. Anatomi Section (Yang Paling Penting)

Setiap section WAJIB mengikuti ritme tiga baris:

```
[EYEBROW]   ← label kecil, uppercase, tracking lebar (mis. "THE IMPACT")
[HEADLINE]  ← judul besar, satu kalimat tegas, bisa 2 baris dengan penekanan
[DESC]      ← satu baris deskripsi singkat
```

Contoh dari zig.ai:

> THE IMPACT
> **What changes when Zig runs**
> What happens when the rep finally has a team.

---

## 5. Tipografi

| Elemen | Pedoman |
|---|---|
| **Headline** | Sangat besar (`clamp(2.5rem, 6vw, 4.5rem)`), font weight 600-700, *tight line-height* (~1.05) |
| **Kalimat penekanan** | Baris kedua headline bisa diberi aksen berbeda (italic / warna / underline custom) |
| **Body** | Font sans modern (Inter / Space Grotesk / Plus Jakarta Sans), ukuran 1-1.125rem |
| **Eyebrow** | Uppercase, `letter-spacing: 0.12em`, kecil (0.75-0.85rem), warna aksen |
| **Mono/angka** | Font mono (JetBrains Mono) untuk angka statistik & label teknis |

---

## 6. Warna

Palet yang disarankan (adaptasi dari zig.ai + fleksibel untuk brand):

- **Background utama**: off-white / near-black (dukung dark & light mode)
- **Teks utama**: kontras tinggi (hampir hitam / hampir putih)
- **Aksen**: 1-2 warna brand yang dipakai hemat — hanya untuk CTA, eyebrow, highlight
- **Aturan**: maksimal 2 warna aksen per halaman. Sisanya netral.

---

## 7. Spasi & Layout

- **Whitespace adalah fitur**, bukan sisa. Padding section besar: `clamp(80px, 12vw, 140px)`.
- **Container**: max-width 1100-1200px, 1 kolom teks dipusatkan (center-aligned) untuk headline.
- **Grid**: fitur memakai grid 2-3 kolom; statistik memakai grid 4 kolom angka besar.
- **Nomor fitur** (`/01`, `/02`) sebagai aksen editorial di atas setiap kartu fitur.

---

## 8. Motion & Animasi (Kunci Persona Ini)

**Filosofi**: Motion itu *garam* — sedikit, dan hanya untuk mengarahkan mata.

### Yang BOLEH dilakukan
- Fade + translateY kecil (8-16px) saat scroll-in, dengan **stagger 150ms per kartu**
- Hover: elevasi kartu (`translateY(-4px)` + shadow) — tanpa scale besar
- Hover button: subtle fill/shift
- Counter angka statistik saat masuk viewport (sekali)

### Yang DILARANG
- Animasi loop infinite (pulse, scanline, floating) pada elemen dekoratif
- Maskot/ikon melompat terus-menerus
- Parallax berlebihan / background berputar
- Lebih dari satu animasi "hidup" dalam satu layar

### Wajib
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 9. Komponen Standar

| Komponen | Spesifikasi |
|---|---|
| **Tombol Primer** | Solid fill aksen, radius kecil-sedang, label tegas: "Start Now" / "Daftar" |
| **Tombol Sekunder** | Outline / ghost, label sama panjang |
| **Logo bar** | Grayscale logo, satu baris, opacity ~60%, hover jadi penuh |
| **Kartu fitur** | Nomor urut + judul + 1 baris + gambar; border tipis / glass tipis |
| **Stats** | Angka 3-5rem dengan unit kecil, satu baris label |
| **FAQ** | Accordion polos, satu pertanyaan satu jawaban |
| **Testimonial** | Kutipan besar + foto + nama + jabatan + logo perusahaan |

---

## 10. Checklist Sebelum Rilis

- [ ] Setiap section punya ritme eyebrow → headline → desc
- [ ] Maksimal 2 CTA unik di seluruh halaman
- [ ] Tidak ada animasi infinite selain indikator "live" yang benar-benar live
- [ ] `prefers-reduced-motion` terpasang
- [ ] Stagger scroll-reveal sudah diterapkan
- [ ] Whitespace tidak dipadatkan (jangan isi semua ruang)
- [ ] Statistik / angka dipakai sebagai bukti di section impact
- [ ] Palet maksimal 2 warna aksen
- [ ] Halaman scroll pendek (maks ~12 section)

---

*Dokumen ini adalah persona desain yang dapat digunakan ulang untuk proyek web lain.
Terapkan sebagai referensi, bukan aturan kaku — sesuaikan palet & tipografi dengan brand.*
