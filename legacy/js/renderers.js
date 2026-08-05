/**
 * RKS POLIBATAM - DYNAMIC DOM RENDERERS
 * Handles HTML markup rendering for all sections (Hero, VMTS, PEO, CPL, Karir, Dosen, Certifications, Persona).
 */

function renderHeroData(data) {
  const descEl = document.getElementById('hero-desc-dynamic');
  if (descEl && data.deskripsi) {
    descEl.textContent = data.deskripsi;
  }
}

function renderVMTS(data) {
  if (!data) return;

  // Visi
  const visiEl = document.getElementById('vmts-visi-text');
  if (visiEl && data.visi) {
    visiEl.textContent = `"${data.visi}"`;
  }

  // Misi
  const misiList = document.getElementById('vmts-misi-list');
  if (misiList && data.misi) {
    misiList.innerHTML = data.misi.map(item => `
      <li class="vmts-item">
        <span class="vmts-bullet">✦</span>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // Tujuan
  const tujuanList = document.getElementById('vmts-tujuan-list');
  if (tujuanList && data.tujuan) {
    tujuanList.innerHTML = data.tujuan.map(item => `
      <li class="vmts-item">
        <span class="vmts-bullet">✦</span>
        <span>${item}</span>
      </li>
    `).join('');
  }

  // Sasaran
  const sasaranList = document.getElementById('vmts-sasaran-list');
  if (sasaranList && data.sasaran) {
    sasaranList.innerHTML = data.sasaran.map(item => `
      <li class="vmts-item">
        <span class="vmts-bullet">✦</span>
        <span>${item}</span>
      </li>
    `).join('');
  }
}

function renderPEO(peo) {
  const peoDescText = document.getElementById('peo-desc-text');
  const container = document.getElementById('peo-cards-container');
  if (!container || !peo) return;

  if (peoDescText) {
    peoDescText.textContent = `${peo.deskripsi} (${peo.target_waktu})`;
  }

  container.innerHTML = peo.profil_profesional_mandiri.map((item, idx) => `
    <div class="peo-card">
      <div class="peo-card-number">PEO 0${idx + 1}</div>
      <p class="peo-card-text">${item}</p>
    </div>
  `).join('');
}

function renderKompetensi(kompetensiList) {
  const container = document.getElementById('kompetensi-cards-container');
  if (!container || !kompetensiList) return;

  container.innerHTML = kompetensiList.map((item, idx) => `
    <div class="kompetensi-card" data-search="${item.toLowerCase()}">
      <div class="kompetensi-idx">${idx + 1}</div>
      <p class="kompetensi-text">${item}</p>
    </div>
  `).join('');
}

function renderCPL(cplList) {
  const container = document.getElementById('cpl-cards-container');
  if (!container || !cplList) return;

  container.innerHTML = cplList.map((item, idx) => `
    <div class="cpl-card" data-search="${item.toLowerCase()}">
      <span class="cpl-code">CPL-${(idx + 1).toString().padStart(2, '0')}</span>
      <p class="cpl-text">${item}</p>
    </div>
  `).join('');
}

function renderKarir(karirList) {
  const container = document.getElementById('karir-cards-container');
  if (!container || !karirList) return;

  const watermarkSvgs = [
    `<svg class="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    `<svg class="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    `<svg class="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    `<svg class="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    `<svg class="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>`,
    `<svg class="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    `<svg class="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    `<svg class="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
    `<svg class="karir-watermark-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/></svg>`
  ];

  container.innerHTML = karirList.map((item, idx) => `
    <div class="karir-card">
      ${watermarkSvgs[idx % watermarkSvgs.length]}
      <div class="karir-card__content">
        <h3 class="karir-posisi">${item.posisi}</h3>
        <p class="karir-desc">${item.deskripsi}</p>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certifications-grid');
  if (!container) return;

  const certs = [
    { name: 'EC-Council Certified Ethical Hacker (CEH)', img: 'images/sertifikasi/Certified Ethical Hacker (CEH).webp' },
    { name: 'EC-Council Certified Network Defender (CND)', img: 'images/sertifikasi/Certified Network Defender (CND).webp' },
    { name: 'EC-Council Certified SOC Analyst (CSA)', img: 'images/sertifikasi/Certified SOC Analyst (CSA).webp' },
    { name: 'EC-Council Computer Hacking Forensic Investigator (CHFI)', img: 'images/sertifikasi/Computer Hacking Forensic Investigator (CHFI).webp' },
    { name: 'EC-Council Certified Cybersecurity Technician (CCT)', img: 'images/sertifikasi/Certified Cybersecurity Technician Certification (CCT).webp' },
    { name: 'Cisco CyberOps Associate', img: 'images/sertifikasi/Cyberops Associate.png' },
    { name: 'Cisco CCNA Security & Automation', img: 'images/sertifikasi/CCNAv7 Enterprise Networking, Security, and Automation.png' },
    { name: 'Cisco CCNA Switching & Routing', img: 'images/sertifikasi/CCNAv7 Switching, Routing, and Wireless Essentials.png' },
    { name: 'AWS Certified Cloud Practitioner', img: 'images/sertifikasi/AWS_Certified Cloud Practitioner.png' },
    { name: 'CertNexus Certified IoT Practitioner (CIoTP)', img: 'images/sertifikasi/CertNexus Certified Internet of Things Practitioner (CIoTP).png' },
    { name: 'Certified AppSec Practitioner (CAP)', img: 'images/sertifikasi/Certified AppSec Practitioner.png' },
    { name: 'Certified DevSecOps Professional', img: 'images/sertifikasi/Certified DevSecOps.jpg' },
    { name: 'SECO Ethical Hacking Practitioner (S-EHP)', img: 'images/sertifikasi/Ethical Hacking Practitioner (S-EHP).png' },
    { name: 'SECO IT-Security Practitioner (S-ITSP)', img: 'images/sertifikasi/IT-Security Practitioner (S-ITSP).png' },
    { name: 'SECO Information Security Foundation', img: 'images/sertifikasi/Information Security Foundation (S-ISF).png' },
    { name: 'Microsoft Certified Educator (MCE)', img: 'images/sertifikasi/MCE Microsoft Certified Educator.png' }
  ];

  container.innerHTML = certs.map(c => `
    <div class="cert-card" title="${c.name}">
      <img src="${c.img}" alt="${c.name}" class="cert-img" width="48" height="48" loading="lazy">
      <span class="cert-name">${c.name}</span>
    </div>
  `).join('');
}

async function renderDosen() {
  const container = document.getElementById('dosen-grid');
  if (!container) return;

  let timDosen = [];
  try {
    const response = await fetch('data/dosen.json');
    if (!response.ok) throw new Error('Failed to fetch dosen data');
    timDosen = await response.json();
  } catch (e) {
    console.warn('Fetch failed, using local fallback:', e);
    timDosen = [
      { "nama": "Maidel Fani, S.Pd., M.Kom.", "jabatan": "Kepala Program Studi Rekayasa Keamanan Siber", "nidn_nik": "117192", "pendidikan_terakhir": "Magister Strata 2 (S2)", "email": "maidelfani@polibatam.ac.id", "foto": "images/tim_prodi/MD.jpeg", "riwayat_pendidikan": ["Sarjana (S1) STAIN Bukittinggi : Pendidikan Teknik Informatika dan Komputer", "Magister (S2) Universitas Putra Indonesia YPTK Padang : Ilmu Komputer"], "bidang_spesialis": "Ilmu Komputer" },
      { "nama": "Hamdani Arif, S.Pd., M.Sc", "jabatan": "Dosen", "nidn_nik": "117175", "pendidikan_terakhir": "Magister Strata 2 (S2)", "email": "hamdaniarif@polibatam.ac.id", "foto": "images/tim_prodi/HA.jpeg", "riwayat_pendidikan": ["Sarjana (S1) Univ. Negeri Malang : Teknik Informatika", "Magister (S2) Chang Gung University : Computer Science & Information Engineering"], "bidang_spesialis": "Networking, IoT" },
      { "nama": "Nur Cahyono Kushardianto, S.Si., M.T., M.Sc, Ph.D", "jabatan": "Dosen", "nidn_nik": "106044", "pendidikan_terakhir": "Doktoral Strata 3 (S3)", "email": "anung@polibatam.ac.id", "foto": "images/tim_prodi/NC.jpeg", "riwayat_pendidikan": ["Sarjana (S1) Institut Teknologi Bandung : Matematika", "Magister (S2) Universitas Indonesia : Jaringan Informasi dan Multimedia", "Magister (S2) Université de Valenciennes et du Hainaut-Cambrésis : Teknik Sistem Komunikasi", "Doktor (S3) Université Polytechnique Hauts-de-France : Electronics"], "bidang_spesialis": "Jaringan Komputer, Teknologi Komunikasi, dan Machine Learning" },
      { "nama": "Andy Triwinarko, ST, M.T., Ph.D", "jabatan": "Dosen", "nidn_nik": "105038", "pendidikan_terakhir": "Doktoral Strata 3 (S3)", "email": "andy@polibatam.ac.id", "foto": "images/tim_prodi/AT.jpeg", "riwayat_pendidikan": ["Sarjana (S1) Institut Teknologi Bandung : Teknik Informatika", "Magister (S2) Universitas Indonesia : Teknik Elektro", "Doktor (S3) Université Polytechnique Hauts-de-France : Électronique"], "bidang_spesialis": "Telecommunication, Informatics" },
      { "nama": "Agus Fatulloh, S.T., M.T", "jabatan": "Dosen", "nidn_nik": "107051", "pendidikan_terakhir": "Magister Strata 2 (S2)", "email": "agusf@polibatam.ac.id", "foto": "images/tim_prodi/AU.jpeg", "riwayat_pendidikan": ["Sarjana (S1) Sekolah Tinggi Sains dan Teknologi Indonesia Bandung : Teknik Informatika", "Magister (S2) Institut Teknologi Bandung : Teknik Elektro"], "bidang_spesialis": "Computer Organization and Architecture, Operating System, Networking and Hardware Technology, Computer Engineering, Software Applications Development, Social Computing" },
      { "nama": "Supardianto, M.Eng.", "jabatan": "Dosen", "nidn_nik": "113105", "pendidikan_terakhir": "Magister Strata 2 (S2)", "email": "supardianto@polibatam.ac.id", "foto": "images/tim_prodi/SP.png", "riwayat_pendidikan": ["Sarjana (S1) Institut Teknologi Bandung : Teknik Media Digital", "Magister (S2) Universitas Gadjah Mada : Teknologi Informasi"], "bidang_spesialis": "Software Development Specialist" },
      { "nama": "Nelmiawati, B.CS., M.Comp.Sc", "jabatan": "Dosen", "nidn_nik": "115148", "pendidikan_terakhir": "Magister Strata 2 (S2)", "email": "mia@polibatam.ac.id", "foto": "images/tim_prodi/MI.jpeg", "riwayat_pendidikan": ["Sarjana (S1) Universiti Teknologi Malaysia : Computer Network and Security", "Magister (S2) Universiti Teknologi Malaysia : Information Security"], "bidang_spesialis": "Cryptography" },
      { "nama": "Dodi Prima Resda, S.Pd., M.Kom", "jabatan": "Dosen", "nidn_nik": "119222", "pendidikan_terakhir": "Magister Strata 2 (S2)", "email": "dodi.prima@polibatam.ac.id", "foto": "images/tim_prodi/DP.jpeg", "riwayat_pendidikan": ["Sarjana (S1) Universitas Negeri Padang : Pendidikan Teknik Elektro", "Magister (S2) Universitas Pendidikan Indonesia : Teknik Informatika"], "bidang_spesialis": "Teknik Informatika, Rekayasa Keamanan Siber" },
      { "nama": "Antoni Haikal, S.S.T., MT", "jabatan": "Dosen", "nidn_nik": "122276", "pendidikan_terakhir": "Magister Strata 2 (S2)", "email": "antoni@polibatam.ac.id", "foto": "images/tim_prodi/nofoto.webp", "riwayat_pendidikan": ["Magister Strata 2 (S2) Institut Teknologi Bandung : Rekayasa Manajemen dan Keamanan Informasi (Cyber Security)"], "bidang_spesialis": "Penetration Testing, Application Security, Network Security and Software Development" },
      { "nama": "Muhammad Idris, S.Tr., M.Tr.Kom", "jabatan": "Dosen", "nidn_nik": "8988670023", "pendidikan_terakhir": "Magister Strata 2 (S2)", "email": "idris@polibatam.ac.id", "foto": "images/tim_prodi/id.jpeg", "riwayat_pendidikan": ["Magister Strata 2 (S2) Politeknik Elektronika Negeri Surabaya : Teknik Informatika dan Komputer"], "bidang_spesialis": "Software Development, QA Software, Web Security" },
      { "nama": "Festy Winda Sari, M.Sc", "jabatan": "Dosen", "nidn_nik": "122288", "pendidikan_terakhir": "Magister Strata 2 (S2)", "email": "festy@polibatam.ac.id", "foto": "images/tim_prodi/nofoto.webp", "riwayat_pendidikan": ["Master of Cyber Security at Swansea University"], "bidang_spesialis": "Cryptography, IT Sec Law & Regulation" },
      { "nama": "Hajrul Khaira, S.Tr.Kom", "jabatan": "Laboran", "nidn_nik": "220315", "pendidikan_terakhir": "Sarjana Terapan (DIV)", "email": "hajrul@polibatam.ac.id", "foto": "images/tim_prodi/HK.jpg", "riwayat_pendidikan": ["Sarjana Terapan (DIV) Politeknik Negeri Batam : Multimedia & Jaringan"], "bidang_spesialis": "Software Development" },
      { "nama": "Agus Riady, A.Md.Kom", "jabatan": "Laboran", "nidn_nik": "224345", "pendidikan_terakhir": "Diploma 3 (DIII)", "email": "agusriady@polibatam.ac.id", "foto": "images/tim_prodi/ay.jpg", "riwayat_pendidikan": ["Ahli Madya (DIII) Politeknik Negeri Batam : Teknik Informatika"], "bidang_spesialis": "Pengembangan Web" }
    ];
  }

  container.innerHTML = timDosen.map(d => {
    const isKaprodi = d.jabatan.toLowerCase().includes('kepala program studi');
    const kaprodiClass = isKaprodi ? 'dosen-card--kaprodi' : '';
    const kaprodiBadge = isKaprodi ? '<div class="dosen-badge-kaprodi">Kaprodi RKS</div>' : '';

    const riwayatList = d.riwayat_pendidikan && d.riwayat_pendidikan.length > 0
      ? `<ul class="dosen-riwayat">${d.riwayat_pendidikan.map(r => `<li>${r}</li>`).join('')}</ul>`
      : '';

    const spesialisTag = d.bidang_spesialis
      ? `<div class="dosen-spesialis"><span class="dosen-spesialis-label">Spesialisasi:</span> ${d.bidang_spesialis}</div>`
      : '';

    return `
      <div class="dosen-card ${kaprodiClass}">
        ${kaprodiBadge}
        <div class="dosen-card__header">
          <div class="dosen-avatar-wrapper">
            <img src="${d.foto}" alt="${d.nama}" class="dosen-avatar" width="80" height="80" loading="lazy" onerror="this.src='images/logo/rks.png'">
          </div>
          <div class="dosen-info-primary">
            <h4 class="dosen-nama">${d.nama}</h4>
            <span class="dosen-jabatan">${d.jabatan}</span>
            <div class="dosen-meta">
              <span class="dosen-nidn">NIDN/NIK: ${d.nidn_nik}</span>
              <a href="mailto:${d.email}" class="dosen-email">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                ${d.email}
              </a>
            </div>
          </div>
        </div>
        <div class="dosen-card__body">
          <div class="dosen-pendidikan-terakhir"><strong>Pendidikan:</strong> ${d.pendidikan_terakhir}</div>
          ${riwayatList}
          ${spesialisTag}
        </div>
      </div>
    `;
  }).join('');
}

function renderPersonaContent(persona, lang) {
  const panel = document.getElementById('persona-panel');
  if (!panel) return;

  const personaData = getPersonaDictionary(lang);
  const data = personaData[persona] || personaData['calon-mahasiswa'];

  panel.innerHTML = `
    <div class="persona-info-box">
      <h4>${data.title}</h4>
      <p>${data.desc}</p>
      <div class="persona-quick-links">
        ${data.links.map(l => `
          <a href="${l.url}" class="persona-link">
            <span>${l.label}</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   5. KURIKULUM PAGE RENDERER & FILTERS
   ========================================================================== */

let kurikulumDataGlobal = null;
const DEFAULT_KURIKULUM_DATA = {
  "semester_1": [
    {
      "kode": "RKS111",
      "nama": "Dasar Keamanan Siber",
      "courses": "Fundamental of Cyber Security",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Mengenalkan prinsip dasar CIA Triad, lanskap ancaman modern, serta strategi pertahanan mendasar pada sistem informasi.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Wireshark, VirtualBox, Cisco Packet Tracer",
      "integrasi_sertifikasi_industri": "CompTIA Security+ / Cisco CCST Cybersecurity",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengidentifikasi komponen CIA Triad pada arsitektur sistem informasi berdasarkan prinsip pertahanan berlapis secara komprehensif.",
        "Mahasiswa mampu mengkategorikan jenis serangan dan ancaman siber modern menggunakan repositori kerentanan standar industri secara tepat.",
        "Mahasiswa mampu menganalisis pola lalu lintas data jaringan menggunakan alat pemantau paket untuk mendeteksi anomali akses secara cermat.",
        "Mahasiswa mampu mengkonfigurasi kebijakan akses dan kontrol keamanan dasar pada lingkungan terisolasi sesuai standar operasional prosedur.",
        "Mahasiswa mampu merumuskan langkah respon awal penanganan insiden keamanan siber berdasarkan panduan mitigasi yang berlaku."
      ]
    },
    {
      "kode": "RKS112",
      "nama": "Algoritma dan Pemrograman",
      "courses": "Programming and Algorithm",
      "sks": 4,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Rekayasa",
      "deskripsi": "Mengasah logika berpikir komputasional dan fondasi pemrograman terstruktur untuk menyelesaikan masalah teknis secara efektif.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Python, C, VS Code, GCC Compiler",
      "integrasi_sertifikasi_industri": "Python Institute PCAP",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menganalisis struktur masalah komputasional untuk menentukan pendekatan algoritma yang efisien sesuai spesifikasi logika dasar.",
        "Mahasiswa mampu merancang notasi algoritma yang sistematis untuk menyelesaikan kasus pemrosesan data terstruktur.",
        "Mahasiswa mampu mengimplementasikan logika program menggunakan bahasa pemrograman tingkat tinggi dengan menerapkan tipe data dan kontrol alur secara valid.",
        "Mahasiswa mampu menguji dan melakukan verifikasi kode program pada lingkungan pengembangan untuk mengeliminasi kesalahan sintaks maupun logika secara mandiri.",
        "Mahasiswa mampu mengevaluasi kompleksitas efisiensi kode program berdasarkan kriteria waktu eksekusi dan penggunaan memori secara kritis."
      ]
    },
    {
      "kode": "RKS113",
      "nama": "Dasar Linux",
      "courses": "Linux Fundamental",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Sistem Komputer & Infrastruktur",
      "deskripsi": "Mempelajari perintah dasar terminal Linux, manajemen hierarki sistem berkas, otorisasi hak akses, dan eksekusi skrip otomatisasi.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Ubuntu Linux, Bash, VirtualBox, SSH",
      "integrasi_sertifikasi_industri": "Linux Essentials (LPI) / CompTIA Linux+",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengoperasikan sistem antarmuka baris perintah (CLI) untuk navigasi dan pengelolaan berkas secara efisien.",
        "Mahasiswa mampu mengkonfigurasi otorisasi hak akses pengguna dan grup pada sistem Linux sesuai standar keamanan secara tepat.",
        "Mahasiswa mampu mengelola instalasi paket perangkat lunak dan layanan latar belakang pada Linux secara mandiri.",
        "Mahasiswa mampu membuat skrip perintah otomatisasi dasar untuk menyederhanakan tugas-tugas administratif sistem secara sistematis."
      ]
    },
    {
      "kode": "RKS114",
      "nama": "Fisika Dasar",
      "courses": "Fundamental of Physics",
      "sks": 3,
      "kategori_iabee": "Mathematics & Basic Sciences",
      "kategori_rumpun": "Sains Dasar & Matematika",
      "deskripsi": "Memahami fenomena fisik, kelistrikan, dan gelombang elektromagnetik yang menjadi dasar perangkat keras komputasi dan transmisi sinyal.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "MATLAB, PhET Interactive Simulations",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menerapkan prinsip-prinsip mekanika dan gelombang elektromagnetik untuk menyelesaikan permasalahan fisik komputasi secara rinci.",
        "Mahasiswa mampu menganalisis fenomena kelistrikan dan kemagnetan pada komponen perangkat keras secara logis.",
        "Mahasiswa mampu mengukur variabel fisika dasar menggunakan alat ukur laboratorium sesuai kaidah keselamatan kerja.",
        "Mahasiswa mampu mengevaluasi pengaruh gangguan fisik terhadap transmisi sinyal data berdasarkan hukum-hukum fisika dasar secara ilmiah."
      ]
    },
    {
      "kode": "RKS115",
      "nama": "Matematika Diskrit",
      "courses": "Discrete Mathematics",
      "sks": 3,
      "kategori_iabee": "Mathematics & Basic Sciences",
      "kategori_rumpun": "Sains Dasar & Matematika",
      "deskripsi": "Membedah logika matematika, teori graf, kombinatorika, dan struktur diskrit yang menjadi dasar algoritma dan kriptografi.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Wolfram Alpha, Python (NetworkX)",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu membuktikan kebenaran argumen menggunakan tabel kebenaran dan logika predikat secara valid.",
        "Mahasiswa mampu mengaplikasikan konsep teori himpunan, relasi, dan fungsi pada permasalahan struktur data diskrit.",
        "Mahasiswa mampu menganalisis struktur graf dan pohon untuk pemodelan jaringan dan alur algoritma secara terstruktur.",
        "Mahasiswa mampu menerapkan konsep teori bilangan diskrit dalam algoritma aritmatika kriptografi secara akurat."
      ]
    },
    {
      "kode": "MPK001RKS",
      "nama": "Pendidikan Pancasila",
      "courses": "Pancasila Education",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Mata Kuliah Umum / Humaniora",
      "deskripsi": "Memahami nilai-nilai kebangsaan, etika bernegara, serta dasar filosofis kehidupan bermasyarakat dan berprofesi di Indonesia.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "-",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menganalisis substansi Pancasila sebagai dasar negara dan pandangan hidup bangsa secara historis dan yuridis.",
        "Mahasiswa mampu mengkorelasikan nilai-nilai kebangsaan dengan penerapan etika dalam kehidupan bermasyarakat.",
        "Mahasiswa mampu merumuskan solusi terhadap permasalahan kebangsaan berbasis ideologi Pancasila secara kritis.",
        "Mahasiswa mampu menunjukkan integritas moral dan sikap toleransi dalam lingkungan akademis dan sosial."
      ]
    }
  ],
  "semester_2": [
    {
      "kode": "RKS211",
      "nama": "Administrasi Sistem Komputer",
      "courses": "Computer System Administration",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Sistem Komputer & Infrastruktur",
      "deskripsi": "Mengelola server, layanan domain, manajemen hak akses terpusat, serta pengerasan keamanan sistem operasi server.",
      "prasyarat_matkul": "Linux Fundamental",
      "software_toolset_utama": "Windows Server, Active Directory, RSAT, SSH, Bash",
      "integrasi_sertifikasi_industri": "Microsoft Certified: Windows Server Hybrid Administrator Associate",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengkonfigurasi layanan direktori terpusat dan tata kelola akun pengguna pada lingkungan server secara tepat.",
        "Mahasiswa mampu mengimplementasikan layanan infrastruktur inti server untuk pengelolaan lalu lintas jaringan terpusat.",
        "Mahasiswa mampu merancang skema kebijakan grup dan hak akses terstruktur sesuai prinsip hak akses minimum.",
        "Mahasiswa mampu melakukan pengerasan keamanan server (server hardening) dan pemantauan kinerja sistem secara rutin."
      ]
    },
    {
      "kode": "RKS212",
      "nama": "Jaringan Komputer",
      "courses": "Computer Network",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Sistem Komputer & Infrastruktur",
      "deskripsi": "Mempelajari arsitektur jaringan, protokol OSI & TCP/IP, addressing, serta konfigurasi dasar perangkat routing dan switching.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Cisco Packet Tracer, GNS3, Wireshark",
      "integrasi_sertifikasi_industri": "Cisco Certified Network Associate (CCNA)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menjelaskan fungsi setiap lapisan pada model referensi jaringan komunikasi secara terstruktur.",
        "Mahasiswa mampu merancang skema pengalamatan IP dan subnetting untuk kebutuhan segmentasi jaringan lokal secara efisien.",
        "Mahasiswa mampu mengkonfigurasi layanan dan protokol routing/switching dasar pada perangkat jaringan secara tepat.",
        "Mahasiswa mampu menganalisis keterhubungan antar titik pada jaringan komputer untuk mendeteksi potensi ketiadaan koneksi secara sistematis."
      ]
    },
    {
      "kode": "RKS213",
      "nama": "Dasar Windows",
      "courses": "Windows Fundamental",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Sistem Komputer & Infrastruktur",
      "deskripsi": "Pendalaman arsitektur ekosistem Windows, pendaftaran registri, manajemen layanan, penjadwalan tugas, dan skrip otomatisasi administrasi.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Windows 11, PowerShell, Task Scheduler, Event Viewer",
      "integrasi_sertifikasi_industri": "Microsoft Certified: Windows Client",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menguraikan arsitektur sistem operasi dan manajemen registri Windows secara terstruktur.",
        "Mahasiswa mampu mengkonfigurasi kebijakan keamanan lokal dan penjadwalan tugas sistem secara valid.",
        "Mahasiswa mampu membuat skrip otomatisasi administrasi menggunakan antarmuka baris perintah Windows secara mandiri.",
        "Mahasiswa mampu menganalisis berkas catatan peristiwa (event log) untuk melakukan diagnosa masalah sistem secara cermat."
      ]
    },
    {
      "kode": "RKS214",
      "nama": "Kalkulus",
      "courses": "Calculus",
      "sks": 2,
      "kategori_iabee": "Mathematics & Basic Sciences",
      "kategori_rumpun": "Sains Dasar & Matematika",
      "deskripsi": "Mempelajari konsep diferensial dan integral sebagai landasan pemodelan matematis serta analisis algoritma lanjutan.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "GeoGebra, GeoGebra 3D Calculator",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menghitung fungsi diferensial dan integral untuk menyelesaikan persoalan perubahan kontinu secara presisi.",
        "Mahasiswa mampu memodelkan masalah rekayasa sederhana menggunakan pendekatan kalkulus diferensial secara terstruktur.",
        "Mahasiswa mampu menganalisis perilaku grafik fungsi dan titik ekstrem berdasarkan kriteria turunan secara cermat.",
        "Mahasiswa mampu menerapkan deret tak hingga dalam mengestimasi nilai fungsi matematika sesuai kriteria konvergensi."
      ]
    },
    {
      "kode": "RKS215",
      "nama": "Kriptografi Terapan",
      "courses": "Applied Cryptography",
      "sks": 4,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Menerapkan algoritma enkripsi simetris, asimetris, fungsi hash, dan sertifikat digital untuk mengamankan komunikasi data.",
      "prasyarat_matkul": "Discrete Mathematics",
      "software_toolset_utama": "OpenSSL, Hashcat, Python Cryptography Library, VeraCrypt",
      "integrasi_sertifikasi_industri": "EC-Council Certified Encryption Specialist (ECES)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengorelasikan konsep matematika diskrit dengan mekanisme enkripsi simetris dan asimetris sesuai standar kerahasiaan data.",
        "Mahasiswa mampu mengelola infrastruktur kunci publik dan sertifikat digital menggunakan perkakas kriptografi untuk mengamankan saluran komunikasi secara handal.",
        "Mahasiswa mampu memverifikasi integritas data dan otentikasi pesan menggunakan fungsi hash dan tanda tangan digital secara presisi.",
        "Mahasiswa mampu mengimplementasikan proteksi data tersimpan menggunakan skema enkripsi yang sesuai dengan tingkat sensitivitas informasi."
      ]
    },
    {
      "kode": "MPK002RKS",
      "nama": "Pendidikan Kewarganegaraan",
      "courses": "Civic Education",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Mata Kuliah Umum / Humaniora",
      "deskripsi": "Menumbuhkan kesadaran hak dan kewajiban warga negara, wawasan nusantara, serta ketahanan nasional dalam era digital.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "-",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menganalisis hak dan kewajiban warga negara sesuai Konstitusi dan regulasi yang berlaku secara tepat.",
        "Mahasiswa mampu menguraikan konsep Wawasan Nusantara dan Ketahanan Nasional dalam menjaga kedaulatan di era siber.",
        "Mahasiswa mampu mengevaluasi tantangan demokrasi dan penegakan hukum di Indonesia secara kritis.",
        "Mahasiswa mampu berperan aktif dalam gerakan kesadaran bela negara dan pencegahan radikalisme secara bertanggung jawab."
      ]
    }
  ],
  "semester_3": [
    {
      "kode": "RKS311",
      "nama": "Dasar Pusat Operasi Keamanan",
      "courses": "SOC Essential",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Memahami alur kerja Security Operations Center, manajemen SIEM, analisis log kejadian, dan eskalasi penanganan insiden keamanan siber.",
      "prasyarat_matkul": "Fundamental of Cyber Security",
      "software_toolset_utama": "Wazuh, Splunk, Elastic Stack, AlienVault",
      "integrasi_sertifikasi_industri": "EC-Council Certified SOC Analyst (CSA)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menguraikan peran dan alur kerja operasional Security Operations Center dalam pemantauan ancaman.",
        "Mahasiswa mampu mengkonfigurasi pengumpulan log dan aturan korelasi kejadian pada sistem SIEM secara tepat.",
        "Mahasiswa mampu menganalisis peringatan keamanan untuk membedakan antara ancaman nyata dan hasil positif palsu secara cermat.",
        "Mahasiswa mampu merumuskan alur eskalasi insiden keamanan sesuai skenario penanganan yang berlaku."
      ]
    },
    {
      "kode": "RKS312",
      "nama": "Interkoneksi Jaringan",
      "courses": "Internetworking",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Sistem Komputer & Infrastruktur",
      "deskripsi": "Mendalami protokol routing dinamis, switching tingkat lanjut, VLAN, dan interkoneksi antar jaringan kompleks.",
      "prasyarat_matkul": "Computer Network",
      "software_toolset_utama": "GNS3, Cisco VIRL, Wireshark",
      "integrasi_sertifikasi_industri": "Cisco CCNP Enterprise (ENCOR)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengkonfigurasi protokol penentuan rute dinamis skala menengah hingga luas secara valid.",
        "Mahasiswa mampu merancang segmentasi jaringan menggunakan skema jaringan lokal virtual untuk efisiensi lalu lintas data.",
        "Mahasiswa mampu menganalisis ketersediaan jalur redundan dan pencegahan loop pada infrastruktur sakelar jaringan secara tepat.",
        "Mahasiswa mampu melacak dan memecahkan gangguan komunikasi pada interkoneksi jaringan kompleks secara terstruktur."
      ]
    },
    {
      "kode": "RKS313",
      "nama": "Dasar Pertahanan Jaringan",
      "courses": "Network Defender Essentials",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Penerapan pertahanan perimeter, pemantauan lalu lintas data, analisis aturan firewall, dan sistem pendeteksi intrusi.",
      "prasyarat_matkul": "Computer Network",
      "software_toolset_utama": "pfSense, Snort, Suricata, Zeek",
      "integrasi_sertifikasi_industri": "EC-Council Network Defender Essentials (NDE) / CND",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengkonfigurasi aturan penyaringan dinding api pada gerbang jaringan secara presisi.",
        "Mahasiswa mampu mengimplementasikan sistem pendeteksi dan pencegah intrusi berbasis tanda tangan serangan.",
        "Mahasiswa mampu menganalisis berkas tangkapan paket lalu lintas jaringan untuk mengidentifikasi aktivitas berbahaya.",
        "Mahasiswa mampu merekayasa teknik pengerasan keamanan pada perangkat pertahanan jaringan."
      ]
    },
    {
      "kode": "RKS314",
      "nama": "Dasar Web",
      "courses": "Web Fundamental",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Rekayasa",
      "deskripsi": "Mempelajari arsitektur web client-server, markup HTML, styling CSS, skrip JavaScript, serta pemrosesan permintaan HTTP.",
      "prasyarat_matkul": "Programming and Algorithm",
      "software_toolset_utama": "HTML5, CSS3, JavaScript, VS Code, Node.js",
      "integrasi_sertifikasi_industri": "W3Schools Web Developer Certification",
      "capaian_pembelajaran": [
        "Mahasiswa mampu merancang tampilan web responsif menggunakan elemen markup dan penataan gaya modern.",
        "Mahasiswa mampu mengimplementasikan skrip interaktif pada sisi klien menggunakan pemrosesan kejadian yang valid.",
        "Mahasiswa mampu menganalisis alur komunikasi protokol HTTP antar klien dan peladen secara cermat.",
        "Mahasiswa mampu menguji kelaikan aplikasi web sederhana pada berbagai platform peramban."
      ]
    },
    {
      "kode": "RKS315",
      "nama": "DevOps",
      "courses": "DevOps",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Rekayasa",
      "deskripsi": "Integrasi kultur alur kerja kolaboratif, otomatisasi CI/CD, manajemen konfigurasi terpusat, dan kontainerisasi aplikasi.",
      "prasyarat_matkul": "Linux Fundamental",
      "software_toolset_utama": "Git, Docker, Jenkins, Ansible, GitLab CI",
      "integrasi_sertifikasi_industri": "Docker Certified Associate / AWS Certified DevOps Engineer",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengelola sistem kontrol versi terdistribusi untuk kolaborasi pengembangan kode program.",
        "Mahasiswa mampu merancang alur otomatisasi integrasi dan penggelaran perangkat lunak secara berkelanjutan.",
        "Mahasiswa mampu mengimplementasikan kontainerisasi aplikasi untuk menjamin konsistensi lingkungan eksekusi.",
        "Mahasiswa mampu mengkonfigurasi perkakas manajemen infrastruktur sebagai kode (Infrastructure as Code) secara tepat."
      ]
    },
    {
      "kode": "MPK003RKS",
      "nama": "Pendidikan Bahasa Indonesia",
      "courses": "Bahasa Indonesia",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Mata Kuliah Umum / Humaniora",
      "deskripsi": "Mengembangkan kemampuan menyusun karya ilmiah, laporan teknis, dan komunikasi profesional berbahasa Indonesia baku.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Mendeley, Zotero, Grammarly",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menerapkan kaidah ejaan dan tata bahasa Indonesia baku dalam penyusunan dokumen ilmiah secara tepat.",
        "Mahasiswa mampu menyusun paragraf dan struktur tulisan akademik yang logis untuk menyampaikan gagasan teknis secara efektif.",
        "Mahasiswa mampu mereview referensi ilmiah dan menghindari plagiarisme dalam penulisan laporan sesuai etika akademis.",
        "Mahasiswa mampu mempresentasikan karya tulis ilmiah secara lisan dengan bahasa yang lugas dan santun."
      ]
    },
    {
      "kode": "MPK004RKS",
      "nama": "Pendidikan Agama",
      "courses": "Religious Education",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Mata Kuliah Umum / Humaniora",
      "deskripsi": "Membangun landasan moral, etika, serta tanggung jawab spiritual dalam menjalankan kehidupan pribadi dan profesi teknolog.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "-",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menginternalisasi nilai-nilai keagamaan sebagai landasan moral dalam kehidupan bermasyarakat.",
        "Mahasiswa mampu menerapkan prinsip-prinsip etika spiritual dalam menjalankan tugas dan tanggung jawab profesi.",
        "Mahasiswa mampu menunjukkan sikap saling menghargai dan kerukunan antar umat beragama.",
        "Mahasiswa mampu menangkal pengaruh pemahaman keagamaan yang ekstrem melalui penalaran rasional dan santun."
      ]
    }
  ],
  "semester_4": [
    {
      "kode": "RKS411",
      "nama": "Uji Penetrasi Aplikasi Web",
      "courses": "Web Application Pentest",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Teknik identifikasi, eksploitasi etis, dan analisis celah kerentanan aplikasi web berbasis standar OWASP Top 10.",
      "prasyarat_matkul": "Web Fundamental",
      "software_toolset_utama": "Burp Suite, OWASP ZAP, SQLMAP, Nmap",
      "integrasi_sertifikasi_industri": "eLearnSecurity Web Application Penetration Tester (eWPT)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu melakukan pemetaan dan pengumpulan informasi kerentanan pada target aplikasi web secara terstruktur.",
        "Mahasiswa mampu menguji dan mengidentifikasi celah kerentanan aplikasi web menggunakan teknik simulasi serangan secara tepat.",
        "Mahasiswa mampu mengevaluasi dampak risiko keamanan dari celah kerentanan yang ditemukan secara objektif.",
        "Mahasiswa mampu menyusun laporan hasil pengetesan penetrasi beserta rekomendasi perbaikan teknis secara profesional."
      ]
    },
    {
      "kode": "RKS412",
      "nama": "Keamanan Basis Data",
      "courses": "Database Security",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Mempelajari proteksi data tersimpan, kontrol akses granular, enkripsi database, serta mitigasi ancaman injeksi data.",
      "prasyarat_matkul": "Web Fundamental",
      "software_toolset_utama": "PostgreSQL, MySQL, SQLMAP, DbVisualizer",
      "integrasi_sertifikasi_industri": "Oracle Database Security Certified Specialist",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menganalisis model kerentanan dan vektor serangan pada manajemen sistem basis data secara cermat.",
        "Mahasiswa mampu mengkonfigurasi otentikasi, otorisasi granular, dan kendali akses pengguna basis data sesuai standar keamanan.",
        "Mahasiswa mampu menerapkan enkripsi data tersimpan dan analisis log aktivitas basis data untuk pelacakan transaksi abnormal.",
        "Mahasiswa mampu merancang mekanisme pencegahan injeksi kueri dan perlindungan kerahasiaan data secara handal."
      ]
    },
    {
      "kode": "RKS413",
      "nama": "DevSecOps",
      "courses": "DevSecOps",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Integrasi otomatisasi verifikasi keamanan, pemindaian kode statis/dinamis, dan manajemen kerentanan dalam alur CI/CD.",
      "prasyarat_matkul": "DevOps",
      "software_toolset_utama": "SonarQube, Snyk, Trivy, GitLab CI/CD, OWASP Dependency-Check",
      "integrasi_sertifikasi_industri": "Certified DevSecOps Professional (CDP)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengintegrasikan alur pemindaian keamanan kode otomatis ke dalam alur kerja integrasi berkelanjutan.",
        "Mahasiswa mampu menganalisis kerentanan dependensi pustaka pihak ketiga pada alur pengembangan software.",
        "Mahasiswa mampu mengevaluasi konfigurasi keamanan penampung aplikasi (container) dan gambar citra eksekusi.",
        "Mahasiswa mampu menerapkan prinsip secure-by-design dalam alur kerja pengembangan perangkat lunak secara berkelanjutan."
      ]
    },
    {
      "kode": "RKS414",
      "nama": "Dasar Intelijen Ancaman",
      "courses": "Threat Intelligence Essential",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Pengumpulan, analisis, pengolahan indikator kompromi (IoC), dan penyebaran informasi intelijen ancaman siber.",
      "prasyarat_matkul": "SOC Essential",
      "software_toolset_utama": "MISP, OpenCTI, VirusTotal, Anomali ThreatStream",
      "integrasi_sertifikasi_industri": "EC-Council Certified Threat Intelligence Analyst (CTIA)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menguraikan siklus intelijen ancaman siber dari pengumpulan data hingga penyebaran informasi.",
        "Mahasiswa mampu mengestreak dan menganalisis Indikator Kompromi (IoC) dari berbagai sumber informasi intelijen.",
        "Mahasiswa mampu mengelola repositori intelijen ancaman menggunakan platform integrasi standar industri secara terstruktur.",
        "Mahasiswa mampu merumuskan laporan intelijen strategis dan taktis untuk mendukung keputusan pertahanan siber."
      ]
    },
    {
      "kode": "RKS415",
      "nama": "Manajemen Risiko Keamanan Siber",
      "courses": "Cyber Security Risk and Management",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Tata Kelola & Manajemen Siber",
      "deskripsi": "Menganalisis penilaian ancaman, mitigasi risiko, serta standar tata kelola keamanan informasi pada infrastruktur organisasi.",
      "prasyarat_matkul": "Fundamental of Cyber Security",
      "software_toolset_utama": "PILAR, ISO 27001 Risk Assessment Framework Tools",
      "integrasi_sertifikasi_industri": "ISACA Certified Information Security Manager (CISM)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengidentifikasi aset, ancaman, dan kerentanan organisasi berdasarkan kerangka kerja manajemen risiko secara komprehensif.",
        "Mahasiswa mampu mengevaluasi dampak dan tingkat kemungkinan risiko keamanan siber menggunakan metode analisis kuantitatif maupun kualitatif secara tepat.",
        "Mahasiswa mampu merumuskan opsi perlakuan dan mitigasi risiko siber sesuai dengan tingkat toleransi risiko organisasi.",
        "Mahasiswa mampu menyusun dokumen register risiko dan rencana tindakan keamanan informasi secara profesional."
      ]
    },
    {
      "kode": "MPK005RKS",
      "nama": "Bahasa Inggris Umum",
      "courses": "General English",
      "sks": 3,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Mata Kuliah Umum / Humaniora",
      "deskripsi": "Penguatan pemahaman tata bahasa, struktur kalimat kompleks, dan kecakapan akademik berbahasa Inggris secara menyeluruh.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Duolingo for Schools, IELTS Preparation Kits",
      "integrasi_sertifikasi_industri": "IELTS / TOEFL iBT",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menguasai struktur kalimat kompleks dan tata bahasa Inggris akademik secara sistematis.",
        "Mahasiswa mampu memahami bacaan akademik tingkat lanjut dan menarik kesimpulan secara tepat.",
        "Mahasiswa mampu merespons percakapan lisan dalam situasi akademis dan sosial secara efisien.",
        "Mahasiswa mampu menulis esai akademis terstruktur dengan argumen yang solid."
      ]
    }
  ],
  "semester_5": [
    {
      "kode": "RKS511",
      "nama": "Peretasan Etis",
      "courses": "Ethical Hacking",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Metodologi serangan siber legal, pengintaian, pemindaian jaringan, eksploitasi sistem, serta pasca-eksploitasi.",
      "prasyarat_matkul": "Web Application Pentest",
      "software_toolset_utama": "Kali Linux, Metasploit, Nmap, Burp Suite, John the Ripper",
      "integrasi_sertifikasi_industri": "EC-Council Certified Ethical Hacker (CEH) / OffSec OSCP",
      "capaian_pembelajaran": [
        "Mahasiswa mampu melakukan pengintaian dan pengumpulan informasi target menggunakan teknik pasif maupun aktif secara terstruktur.",
        "Mahasiswa mampu mengidentifikasi dan menguji celah keamanan sistem menggunakan skrip eksploitasi etis.",
        "Mahasiswa mampu merancang skenario serangan pasca-eksploitasi untuk menguji batasan akses keamanan jaringan.",
        "Mahasiswa mampu menyusun laporan pengujian penetrasi teknis beserta rekomendasi mitigasi yang dapat diterapkan."
      ]
    },
    {
      "kode": "RKS512",
      "nama": "Keamanan Perangkat Bergerak",
      "courses": "Mobile Security",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Menganalisis arsitektur keamanan iOS/Android, melakukan rekayasa balik aplikasi mobile, dan proteksi dari malware mobile.",
      "prasyarat_matkul": "Programming and Algorithm",
      "software_toolset_utama": "Jadx, MobSF, Frida, Android Studio",
      "integrasi_sertifikasi_industri": "eLearnSecurity Mobile Application Penetration Tester (eMAPT)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menguraikan arsitektur keamanan dan model isolasi sandbox pada sistem operasi perangkat bergerak.",
        "Mahasiswa mampu melakukan dekompilasi dan analisis rekayasa balik pada berkas aplikasi bergerak secara terstruktur.",
        "Mahasiswa mampu mengidentifikasi celah kerentanan penyimpanan data dan enkripsi pada aplikasi bergerak.",
        "Mahasiswa mampu merumuskan mekanisme proteksi dan hardening pada aplikasi bergerak dari ancaman pengubahan tanpa izin."
      ]
    },
    {
      "kode": "RKS513",
      "nama": "Keamanan Komputasi Awan",
      "courses": "Cloud Computing Security",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Mengamankan lingkungan cloud (AWS/Azure), mengelola Identity Access Management (IAM), serta proteksi beban kerja awan.",
      "prasyarat_matkul": "Computer System Administration",
      "software_toolset_utama": "AWS Console, Microsoft Azure, Terraform, ScoutSuite",
      "integrasi_sertifikasi_industri": "AWS Certified Security - Specialty / CCSP",
      "capaian_pembelajaran": [
        "Mahasiswa mampu membedakan pembagian tanggung jawab keamanan pada berbagai model layanan komputasi awan secara tepat.",
        "Mahasiswa mampu mengkonfigurasi kebijakan identitas dan kontrol akses pada infrastruktur awan secara terstruktur.",
        "Mahasiswa mampu menerapkan skema enkripsi dan isolasi beban kerja untuk proteksi data tersimpan di awan.",
        "Mahasiswa mampu melakukan audit konfigurasi kerentanan lingkungan awan sesuai pedoman standar industri."
      ]
    },
    {
      "kode": "RKS514",
      "nama": "Forensik Digital",
      "courses": "Digital Forensic",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Teknik akuisisi bukti digital, analisis artefak memori, disk forensics, serta rekonstruksi insiden keamanan sesuai kaidah hukum.",
      "prasyarat_matkul": "Linux Fundamental",
      "software_toolset_utama": "Autopsy, FTK Imager, Volatility, Eric Zimmerman Tools",
      "integrasi_sertifikasi_industri": "EC-Council Computer Hacking Forensic Investigator (CHFI)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu melakukan akuisisi bukti digital pada media penyimpanan dan memori sesuai prosedur rantai pemeliharaan barang bukti.",
        "Mahasiswa mampu menganalisis artefak sistem dan sistem berkas untuk mengekstrak jejak aktivitas ilegal.",
        "Mahasiswa mampu merekonstruksi kronologi terjadinya insiden keamanan siber berdasarkan analisis log data secara tepat.",
        "Mahasiswa mampu menyusun laporan forensik siber komprehensif yang memenuhi standar pembuktian hukum."
      ]
    },
    {
      "kode": "RKS515",
      "nama": "Manajemen Keberlangsungan Bisnis",
      "courses": "Business Continuity Management",
      "sks": 3,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Tata Kelola & Manajemen Siber",
      "deskripsi": "Menyusun strategi pemulihan bencana (DRP), Business Impact Analysis (BIA), serta menjaga operasional saat insiden kritis.",
      "prasyarat_matkul": "Cyber Security Risk and Management",
      "software_toolset_utama": "ISO 22301 Framework Templates",
      "integrasi_sertifikasi_industri": "CBCI (Certificate of the Business Continuity Institute)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu melakukan analisis dampak bisnis (Business Impact Analysis) untuk menentukan batas waktu pemulihan.",
        "Mahasiswa mampu merancang strategi dan prosedur pemulihan bencana (Disaster Recovery Plan) secara komprehensif.",
        "Mahasiswa mampu menyusun kerangka kerja keberlanjutan bisnis organisasi sesuai standar internasional.",
        "Mahasiswa mampu menguji kesiapan skenario pemulihan bencana melalui simulasi terencana."
      ]
    },
    {
      "kode": "MPK006RKS",
      "nama": "Komunikasi Bahasa Inggris",
      "courses": "English Communication",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Mata Kuliah Umum / Humaniora",
      "deskripsi": "Meningkatkan kepercayaan diri dalam presentasi teknis, diskusi tim, serta penulisan korespondensi bisnis berbahasa Inggris.",
      "prasyarat_matkul": "General English",
      "software_toolset_utama": "Grammarly, Cambridge English Benchmark",
      "integrasi_sertifikasi_industri": "TOEIC Official Certificate",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menyampaikan presentasi teknis berbahasa Inggris dengan intonasi dan struktur pesan yang jelas.",
        "Mahasiswa mampu berpartisipasi aktif dalam diskusi profesional berbahasa Inggris secara responsif.",
        "Mahasiswa mampu menyusun dokumen korespondensi bisnis dan ringkasan eksekutif secara profesional.",
        "Mahasiswa mampu memahami dokumen teknis dan spesifikasi sistem dalam bahasa Inggris secara akurat."
      ]
    },
    {
      "kode": "RKS516",
      "nama": "Kewirausahaan",
      "courses": "Entrepreneurship",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Tata Kelola & Manajemen Siber",
      "deskripsi": "Membangun mindset bisnis teknologi (technopreneurship), analisis pasar, perancangan model bisnis, hingga pembuatan produk minimum.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Lean Canvas, Figma",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengidentifikasi peluang bisnis berbasis inovasi teknologi berdasarkan analisis kebutuhan pasar.",
        "Mahasiswa mampu merancang model bisnis terstruktur menggunakan kerangka pemetaan bisnis modern.",
        "Mahasiswa mampu menyusun rencana keuangan dan strategi pemasaran produk berbasis teknologi secara realistis.",
        "Mahasiswa mampu mempresentasikan gagasan bisnis di hadapan calon investor secara meyakinkan."
      ]
    }
  ],
  "semester_6": [
    {
      "kode": "RKS611",
      "nama": "Proyek Keamanan Siber",
      "courses": "Cyber Security Project",
      "sks": 3,
      "kategori_iabee": "Major Design Experience",
      "kategori_rumpun": "Penerapan Praktis & Proyek",
      "deskripsi": "Penerapan kolaboratif lintas disiplin untuk memecahkan studi kasus keamanan siber riil melalui pendekatan berbasis proyek.",
      "prasyarat_matkul": "Ethical Hacking",
      "software_toolset_utama": "Kali Linux, OpenVAS, Metasploit, WireGuard",
      "integrasi_sertifikasi_industri": "OffSec OSCP / CEH",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menganalisis permasalahan keamanan siber kompleks pada lingkungan riil secara sistematis.",
        "Mahasiswa mampu merancang solusi perlindungan atau pengetesan keamanan terpadu secara kolaboratif.",
        "Mahasiswa mampu mengimplementasikan sistem atau teknik keamanan sesuai batas kendala teknis dan ekonomis.",
        "Mahasiswa mampu menyajikan dan mempertahankan hasil solusi proyek keamanan di hadapan penguji secara ilmiah."
      ]
    },
    {
      "kode": "RKS612",
      "nama": "Keamanan IoT",
      "courses": "IoT Security",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Perlindungan arsitektur Internet of Things, sistem kontrol industri (SCADA), protokol sensor, serta keamanan firmware.",
      "prasyarat_matkul": "Internetworking",
      "software_toolset_utama": "Node-RED, Wireshark (MQTT/CoAP), Binwalk, ScadaBR",
      "integrasi_sertifikasi_industri": "GIAC Global Industrial Cyber Security Professional (GICSP)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menguraikan arsitektur dan protokol komunikasi khusus pada perangkat Internet of Things.",
        "Mahasiswa mampu menganalisis titik rawan kerentanan pada firmware dan saluran transmisi data IoT.",
        "Mahasiswa mampu mengkonfigurasi strategi segmentasi dan pengamanan jaringan IoT dari intervensi luar.",
        "Mahasiswa mampu merumuskan teknik pemantauan anomali lalu lintas data pada perangkat IoT secara efisien."
      ]
    },
    {
      "kode": "RKS613",
      "nama": "Statistika dan Probabilitas",
      "courses": "Statistic and Probability",
      "sks": 3,
      "kategori_iabee": "Mathematics & Basic Sciences",
      "kategori_rumpun": "Sains Dasar & Matematika",
      "deskripsi": "Menggunakan distribusi probabilitas, pengujian hipotesis, dan analisis regresi untuk validasi data teknis siber.",
      "prasyarat_matkul": "Calculus",
      "software_toolset_utama": "R Studio, Python (SciPy/Statsmodels)",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menghitung ukuran pemusatan dan penyebaran data untuk deskripsi statistik yang akurat.",
        "Mahasiswa mampu menerapkan model distribusi probabilitas dalam memprediksi kejadian acak.",
        "Mahasiswa mampu melakukan pengujian hipotesis statistik untuk pembuktian hubungan antar variabel.",
        "Mahasiswa mampu menganalisis hubungan korelasional dan regresi data teknis secara valid."
      ]
    },
    {
      "kode": "RKS614",
      "nama": "Hukum dan Etika Keamanan Siber",
      "courses": "Cyber Security Law and Ethics",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Tata Kelola & Manajemen Siber",
      "deskripsi": "Mengkaji regulasi kejahatan siber (UU ITE, PDP), batasan legal pengetesan keamanan, serta etika profesi praktisi siber.",
      "prasyarat_matkul": "Fundamental of Cyber Security",
      "software_toolset_utama": "-",
      "integrasi_sertifikasi_industri": "EC-Council CCT",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menganalisis pasal-pasal dalam peraturan perundang-undangan siber dan perlindungan data pribadi secara cermat.",
        "Mahasiswa mampu mengevaluasi batasan legalitas operasional pengujian keamanan siber untuk menghindari pelanggaran hukum.",
        "Mahasiswa mampu merumuskan prinsip etika profesi praktisi siber dalam penanganan data sensitif organisasi.",
        "Mahasiswa mampu menilai aspek tanggung jawab hukum atas terjadinya kejahatan siber secara objektif."
      ]
    },
    {
      "kode": "RKS615",
      "nama": "Metodologi Penelitian",
      "courses": "Research Methodology",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Metodologi & Riset",
      "deskripsi": "Merumuskan masalah penelitian, studi literatur, perancangan eksperimen, serta penyusunan proposal tugas akhir secara ilmiah.",
      "prasyarat_matkul": "-",
      "software_toolset_utama": "Mendeley, LaTeX / Overleaf, SPSS",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu merumuskan latar belakang dan rumusan masalah penelitian bidang keilmuan secara tajam.",
        "Mahasiswa mampu melakukan kajian pustaka kritis untuk menemukan celah kebaruan riset secara ilmiah.",
        "Mahasiswa mampu merancang metodologi eksperimen dan teknik pengumpulan data penelitian yang valid.",
        "Mahasiswa mampu menyusun proposal penelitian yang memenuhi kaidah penulisan ilmiah secara terstruktur."
      ]
    },
    {
      "kode": "RKS616",
      "nama": "Kebijakan dan Audit Keamanan Siber",
      "courses": "Cyber Security Policy and Audit",
      "sks": 2,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Tata Kelola & Manajemen Siber",
      "deskripsi": "Evaluasi kepatuhan sistem terhadap standar industri (NIST, ISO 27001) serta perancangan SOP dan kebijakan internal.",
      "prasyarat_matkul": "Cyber Security Law and Ethics",
      "software_toolset_utama": "NIST CSF, Audit Checklist Tools",
      "integrasi_sertifikasi_industri": "ISACA Certified Information Systems Auditor (CISA)",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menyusun dokumen kebijakan dan standar operasional prosedur keamanan siber organisasi.",
        "Mahasiswa mampu merancang program dan daftar periksa audit berdasarkan kerangka kerja standar internasional.",
        "Mahasiswa mampu melakukan evaluasi tingkat kepatuhan dan kesenjangan kontrol keamanan informasi secara objektif.",
        "Mahasiswa mampu menyusun laporan temuan audit beserta rekomendasi tindakan korektif secara terstruktur."
      ]
    },
    {
      "kode": "RKS617",
      "nama": "Kecerdasan Buatan untuk Keamanan Siber",
      "courses": "AI for Cybersecurity",
      "sks": 3,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Keahlian Inti / Keamanan Siber",
      "deskripsi": "Penerapan algoritma machine learning dan pemrosesan bahasa alami untuk deteksi malware, anomali jaringan, dan otomatisasi analisis siber.",
      "prasyarat_matkul": "Programming and Algorithm",
      "software_toolset_utama": "Python, Scikit-learn, TensorFlow, PyTorch",
      "integrasi_sertifikasi_industri": "AWS Certified Machine Learning - Specialty",
      "capaian_pembelajaran": [
        "Mahasiswa mampu mengaplikasikan algoritma pembelajaran mesin untuk klasifikasi pola serangan siber.",
        "Mahasiswa mampu membangun model pendeteksi anomali lalu lintas data berbasis data riwayat aktivitas.",
        "Mahasiswa mampu mengevaluasi kinerja model kecerdasan buatan menggunakan metrik validasi yang akurat.",
        "Mahasiswa mampu menganalisis ancaman manipulasi data pada sistem kecerdasan buatan (adversarial AI attack)."
      ]
    }
  ],
  "semester_7": [
    {
      "kode": "RKS731",
      "nama": "Magang Industri",
      "courses": "Industrial Internship",
      "sks": 6,
      "kategori_iabee": "Engineering Topics",
      "kategori_rumpun": "Penerapan Praktis & Proyek",
      "deskripsi": "Pengalaman kerja penuh waktu di industri mitra untuk menerapkan keahlian teknis pada lingkungan kerja profesional nyata.",
      "prasyarat_matkul": "Cyber Security Project",
      "software_toolset_utama": "Disesuaikan lingkungan kerja mitra",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu beradaptasi dengan budaya kerja profesional dan etika industri mitra.",
        "Mahasiswa mampu mengaplikasikan kompetensi teknis keamanan siber untuk menyelesaikan tugas-tugas di tempat kerja.",
        "Mahasiswa mampu berkolaborasi dalam tim kerja lintas fungsi secara produktif.",
        "Mahasiswa mampu mengidentifikasi dinamika permasalahan teknis riil di industri."
      ]
    },
    {
      "kode": "RKS732",
      "nama": "Penulisan Ilmiah",
      "courses": "Scientific Writing",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Metodologi & Riset",
      "deskripsi": "Penyusunan artikel atau jurnal ilmiah yang bersumber dari riset Tugas Akhir untuk dipublikasikan pada forum/jurnal.",
      "prasyarat_matkul": "Research Methodology",
      "software_toolset_utama": "Overleaf, IEEE Paper Template, Mendeley",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menyarikan inti hasil riset ke dalam bentuk artikel ilmiah sesuai panduan berkala.",
        "Mahasiswa mampu mengolah sajian gambar, tabel, dan grafik ilmiah secara efektif.",
        "Mahasiswa mampu mengelola sitasi dan daftar pustaka secara otomatis dan akurat.",
        "Mahasiswa mampu mengetahui kriteria penerimaan publikasi ilmiah pada forum ilmiah nasional/internasional."
      ]
    },
    {
      "kode": "RKS733",
      "nama": "Proposal Tugas Akhir",
      "courses": "Final Project Proposal",
      "sks": 2,
      "kategori_iabee": "Major Design Experience",
      "kategori_rumpun": "Metodologi & Riset",
      "deskripsi": "Penyusunan perancangan riset, perumusan hipotesis, dan desain eksperimen untuk kelayakan pengerjaan Tugas Akhir.",
      "prasyarat_matkul": "Research Methodology",
      "software_toolset_utama": "Microsoft Word, LaTeX",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu merumuskan masalah dan kebaruan penelitian tugas akhir secara lugas.",
        "Mahasiswa mampu menyusun kerangka teori dan hipotesis penelitian secara logis.",
        "Mahasiswa mampu merancang skema eksperimen dan jadwal pengerjaan riset secara rasional.",
        "Mahasiswa mampu mempresentasikan dan mempertahankan rancangan proposal di hadapan dewan penguji."
      ]
    }
  ],
  "semester_8": [
    {
      "kode": "RKS831",
      "nama": "Tugas Akhir",
      "courses": "Final Project",
      "sks": 6,
      "kategori_iabee": "Major Design Experience",
      "kategori_rumpun": "Metodologi & Riset",
      "deskripsi": "Pelaksanaan riset mandiri atau pengembangan solusi teknis mendalam sebagai puncak penanda kelulusan akademis.",
      "prasyarat_matkul": "Final Project Proposal",
      "software_toolset_utama": "Disesuaikan dengan tema riset Tugas Akhir",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu melaksanakan penelitian atau perancangan rekayasa siber mendalam secara mandiri.",
        "Mahasiswa mampu mengolah data hasil uji atau eksperimen riset menggunakan metode ilmiah yang tepat.",
        "Mahasiswa mampu memvalidasi kebenaran hipotesis atau efektivitas solusi yang dikembangkan.",
        "Mahasiswa mampu mempertahankan kesimpulan dan integritas akademik karya tugas akhir dalam sidang pendadaran."
      ]
    },
    {
      "kode": "MPK008RKS",
      "nama": "Bahasa Inggris untuk Komunikasi Tempat Kerja",
      "courses": "English for Workspace Communication",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Mata Kuliah Umum / Humaniora",
      "deskripsi": "Persiapan matang menghadapi wawancara kerja, negosiasi, dan presentasi profesional berbahasa Inggris menjelang dunia kerja.",
      "prasyarat_matkul": "English Communication",
      "software_toolset_utama": "LinkedIn Learning, Business English Kits",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu melakukan wawancara kerja berbahasa Inggris secara percaya diri dan artikulatif.",
        "Mahasiswa mampu menyampaikan poin argumen dalam simulasi negosiasi bisnis secara meyakinkan.",
        "Mahasiswa mampu menyusun resume dan surat lamaran kerja profesional berbahasa Inggris secara tepat.",
        "Mahasiswa mampu berkomunikasi secara efektif dalam jaringan kerja internasional."
      ]
    },
    {
      "kode": "RKS832",
      "nama": "Laporan Magang",
      "courses": "Internship Report",
      "sks": 2,
      "kategori_iabee": "General Education",
      "kategori_rumpun": "Penerapan Praktis & Proyek",
      "deskripsi": "Penyusunan laporan komprehensif terkait kontribusi teknis dan pengalaman operasional selama berada di tempat magang.",
      "prasyarat_matkul": "Industrial Internship",
      "software_toolset_utama": "Microsoft Word, LaTeX",
      "integrasi_sertifikasi_industri": "-",
      "capaian_pembelajaran": [
        "Mahasiswa mampu menyusun laporan komprehensif pelaksanaan magang sesuai tata tulis ilmiah.",
        "Mahasiswa mampu mengevaluasi kontribusi pribadi terhadap kinerja sistem atau tim di industri.",
        "Mahasiswa mampu merefleksikan pengalaman magang untuk pengembangan kompetensi diri.",
        "Mahasiswa mampu mempresentasikan hasil laporan magang di hadapan dewan penguji akademis."
      ]
    }
  ]
};

let activeSemesterFilter = 'all';
let activeSearchQuery = '';

const semesterTitles = {
  1: "Semester 1 - Introduction to software development in Cyber Security Context",
  2: "Semester 2 - Network Pentest and Risk Management",
  3: "Semester 3 - Security Operation Center Game",
  4: "Semester 4 - Web Penetration Testing",
  5: "Semester 5 - Wide Range Application Penetration Testing (External Project Expected)",
  6: "Semester 6 - Cyber Security Auditing: ISO27001, KAMI.V4, ISMS (In Colab with PCT TeFA)",
  7: "Semester 7 - Industrial Attachment",
  8: "Semester 8 - Final Project"
};

function getSemestersList(data) {
  if (!data) return [];
  if (data.semesters && Array.isArray(data.semesters)) {
    return data.semesters;
  }
  const result = [];
  for (let semNum = 1; semNum <= 8; semNum++) {
    const key = `semester_${semNum}`;
    if (data[key] && Array.isArray(data[key])) {
      result.push({
        semester: semNum,
        title_id: semesterTitles[semNum] || `Semester ${semNum}`,
        title_en: semesterTitles[semNum] || `Semester ${semNum}`,
        courses: data[key]
      });
    }
  }
  return result;
}

function normalizeCourse(c) {
  const code = c.kode || c.code || '-';
  const name_id = c.nama || c.name_id || '';
  const name_en = c.courses || c.name_en || c.nama || '';
  const sks_total = c.sks !== undefined ? c.sks : (c.sks_total || 0);
  const category_rumpun = c.kategori_rumpun || c.category_id || c.category || 'Mata Kuliah';
  const category_iabee = c.kategori_iabee || c.category_en || '';
  const description = c.deskripsi || c.description_id || c.description_en || '';
  const prerequisites = c.prasyarat_matkul || c.prerequisites || '-';
  const tools_str = c.software_toolset_utama || (Array.isArray(c.tools) ? c.tools.join(', ') : '-');
  const cert_str = c.integrasi_sertifikasi_industri || c.certification || '-';
  const cpl = Array.isArray(c.capaian_pembelajaran) ? c.capaian_pembelajaran : [];

  return {
    code,
    name_id,
    name_en,
    sks_total,
    category_rumpun,
    category_iabee,
    description,
    prerequisites,
    tools_str,
    cert_str,
    cpl,
    raw: c
  };
}

async function renderKurikulumPage(lang = 'id') {
  const container = document.getElementById('kurikulum-container');
  if (!container) return; // Not on kurikulum.html

  if (!kurikulumDataGlobal) {
    try {
      const response = await fetch('data/kurikulum.json');
      if (response.ok) {
        kurikulumDataGlobal = await response.json();
      }
    } catch (e) {
      console.warn('Failed to load kurikulum.json', e);
    }
  }

  const semList = getSemestersList(kurikulumDataGlobal);

  if (!kurikulumDataGlobal) { kurikulumDataGlobal = DEFAULT_KURIKULUM_DATA; }
  const semListFallback = getSemestersList(kurikulumDataGlobal);
  if (!kurikulumDataGlobal || semListFallback.length === 0) {
    container.innerHTML = '<p style="text-align:center; padding:40px;">Gagal memuat data kurikulum.</p>';
    return;
  }

  const semSelectEl = document.getElementById('semester-select');
  if (semSelectEl) {
    activeSemesterFilter = semSelectEl.value || activeSemesterFilter;
  }

  const isEn = lang === 'en';
  let html = '';

  semList.forEach(sem => {
    if (activeSemesterFilter !== 'all' && activeSemesterFilter !== sem.semester.toString()) {
      return;
    }

    const filteredCourses = sem.courses.map(normalizeCourse).filter(course => {
      if (activeSearchQuery.trim() !== '') {
        const q = activeSearchQuery.toLowerCase();
        const code = course.code.toLowerCase();
        const nameId = course.name_id.toLowerCase();
        const nameEn = course.name_en.toLowerCase();
        const desc = course.description.toLowerCase();
        const tools = course.tools_str.toLowerCase();
        const cert = course.cert_str.toLowerCase();
        const prereq = course.prerequisites.toLowerCase();
        const iabee = course.category_iabee.toLowerCase();
        const rumpun = course.category_rumpun.toLowerCase();

        return code.includes(q) || nameId.includes(q) || nameEn.includes(q) || desc.includes(q) || tools.includes(q) || cert.includes(q) || prereq.includes(q) || iabee.includes(q) || rumpun.includes(q);
      }

      return true;
    });

    if (filteredCourses.length === 0 && activeSearchQuery.trim() !== '') {
      return;
    }

    const title = sem.title_id || `Semester ${sem.semester}`;
    const semSksTotal = filteredCourses.reduce((sum, c) => sum + c.sks_total, 0);

    html += `
      <section class="semester-section" id="semester-${sem.semester}">
        <div class="semester-header">
          <h2 class="semester-header__title">
            <span class="semester-badge">Semester 0${sem.semester}</span>
            <span>${title}</span>
          </h2>
          <div class="semester-header__meta">
            Total ${semSksTotal} SKS
          </div>
        </div>
        
        <div class="courses-grid">
          ${filteredCourses.map(course => {
      const courseTitle = isEn && course.name_en ? course.name_en : course.name_id;
      const subtitleEn = (!isEn && course.name_en && course.name_en !== course.name_id) ? course.name_en : '';

      let tagClass = 'tag-network';
      const r = course.category_rumpun.toLowerCase();
      if (r.includes('pbl') || r.includes('proyek') || r.includes('project')) tagClass = 'tag-pbl';
      if (r.includes('offensive') || r.includes('pentest') || r.includes('siber')) tagClass = 'tag-offensive';
      if (r.includes('aplikasi') || r.includes('appsec') || r.includes('rekayasa')) tagClass = 'tag-appsec';

      return `
              <div class="course-card" data-code="${course.code}">
                <div class="course-card__top">
                  <span class="course-code">${course.code}</span>
                  <span class="course-category-tag ${tagClass}">${course.category_rumpun}</span>
                </div>
                <h3 class="course-card__title">${courseTitle}</h3>
                ${subtitleEn ? `<div style="font-size:0.82rem; color:var(--cyan-bright); font-weight:500; margin-bottom:8px; font-family:'JetBrains Mono',monospace;">${subtitleEn}</div>` : ''}
                <p class="course-card__desc">${course.description}</p>

                <div class="course-card__sks-pill">
                  <span>SKS: <strong>${course.sks_total}</strong></span>
                  ${course.category_iabee ? `<span>IABEE: <strong>${course.category_iabee}</strong></span>` : ''}
                </div>
              
                <div class="course-card__footer">
                  <span class="course-prereq">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    Prasyarat: ${course.prerequisites}
                  </span>
                  <button class="course-detail-btn" data-code="${course.code}">
                    Detail Silabus ↗
                  </button>
                </div>
              </div>
            `;
    }).join('')}
        </div>
      </section>
    `;
  });

  if (!html) {
    html = `
      <div style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 12px; color: var(--border-hover);"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3 style="font-family: 'Space Grotesk', sans-serif; color: var(--text-main); margin-bottom: 8px;">Mata Kuliah Tidak Ditemukan</h3>
        <p>Coba gunakan kata kunci pencarian yang lain.</p>
      </div>
    `;
  }

  container.innerHTML = html;
  initKurikulumModalListeners();
}

function initKurikulumControls() {
  const searchInput = document.getElementById('kurikulum-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearchQuery = e.target.value;
      renderKurikulumPage(currentLang);
    });
  }

  const semesterSelect = document.getElementById('semester-select');
  if (semesterSelect) {
    semesterSelect.addEventListener('change', (e) => {
      activeSemesterFilter = e.target.value;
      renderKurikulumPage(currentLang);
    });
  }
}

function initKurikulumModalListeners() {
  const overlay = document.getElementById('course-modal-overlay');
  if (!overlay) return;

  const closeBtn = document.getElementById('course-modal-close');
  if (closeBtn) {
    closeBtn.onclick = () => overlay.classList.remove('active');
  }

  overlay.onclick = (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  };

  document.querySelectorAll('.course-detail-btn').forEach(btn => {
    btn.onclick = () => {
      const code = btn.getAttribute('data-code');
      openCourseModal(code);
    };
  });
}

function openCourseModal(courseCode) {
  if (!kurikulumDataGlobal) return;
  const overlay = document.getElementById('course-modal-overlay');
  if (!overlay) return;

  const semList = getSemestersList(kurikulumDataGlobal);
  let foundCourse = null;

  for (const sem of semList) {
    const rawList = sem.courses || [];
    const match = rawList.find(c => (c.kode || c.code) === courseCode);
    if (match) {
      foundCourse = normalizeCourse(match);
      break;
    }
  }

  if (!foundCourse) return;

  const isEn = currentLang === 'en';
  document.getElementById('modal-course-code').textContent = foundCourse.code;
  document.getElementById('modal-course-title').textContent = isEn && foundCourse.name_en ? foundCourse.name_en : foundCourse.name_id;
  document.getElementById('modal-course-category').textContent = `${foundCourse.category_rumpun}${foundCourse.category_iabee ? ' • ' + foundCourse.category_iabee : ''}`;
  document.getElementById('modal-course-sks').textContent = `${foundCourse.sks_total} SKS`;
  document.getElementById('modal-course-desc').textContent = foundCourse.description;
  document.getElementById('modal-course-prereq').textContent = foundCourse.prerequisites || '-';

  // Capaian Pembelajaran (CPL / CPMK)
  const cplGroup = document.getElementById('modal-cpl-group');
  const cplContainer = document.getElementById('modal-course-cpl');
  if (cplGroup && cplContainer) {
    if (foundCourse.cpl && foundCourse.cpl.length > 0) {
      cplGroup.style.display = 'block';
      cplContainer.innerHTML = `
        <ul class="modal-cpl-list">
          ${foundCourse.cpl.map(item => `<li class="modal-cpl-item">${item}</li>`).join('')}
        </ul>
      `;
    } else {
      cplGroup.style.display = 'none';
    }
  }

  // Software & Tools
  const toolsContainer = document.getElementById('modal-course-tools');
  if (toolsContainer) {
    if (foundCourse.tools_str && foundCourse.tools_str !== '-') {
      const toolsList = foundCourse.tools_str.split(',').map(t => t.trim()).filter(Boolean);
      toolsContainer.innerHTML = toolsList.map(t => `<span class="modal-tool-tag">${t}</span>`).join('');
    } else {
      toolsContainer.innerHTML = '<span class="modal-tool-tag">-</span>';
    }
  }

  // Certification
  const certBadge = document.getElementById('modal-course-cert');
  if (certBadge) {
    if (foundCourse.cert_str && foundCourse.cert_str !== '-') {
      certBadge.style.display = 'inline-flex';
      certBadge.innerHTML = `🏆 ${foundCourse.cert_str}`;
    } else {
      certBadge.style.display = 'none';
    }
  }

  overlay.classList.add('active');
}
