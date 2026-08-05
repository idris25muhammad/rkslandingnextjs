import type { Lang } from './data';

export type UiDict = Record<string, string>;

const id: UiDict = {
  brandTitle: 'REKAYASA KEAMANAN SIBER',
  searchHome: 'Cari info pendaftaran, kurikulum...',
  searchKurikulum: 'Cari matkul, sertifikasi...',
  navProfil: 'Profil & Akademik',
  navKurikulum: 'Kurikulum & Sertifikasi',
  btnPmb: 'Daftar↗',
  heroMainTitle:
    'Raih Gelar <span class="gradient-text">D4 Sarjana Terapan</span> di Prodi RKS',
  heroBtn1: 'Jelajahi Prospek Karir ↗',
  heroBtn2: 'Lihat Kurikulum',
  stat1: 'Semester Studi',
  stat2: 'Sertifikasi Global',
  stat3: 'PBL Industri',
  personaTitle: 'Informasi Dikurasi Khusus Untuk:',
  personaSub: 'Pilih profil Anda untuk navigasi cepat & informasi paling relevan',
  tabCalon: 'Calon Mahasiswa (SMA/SMK)',
  tabMahasiswa: 'Mahasiswa & Praktisi',
  tabIndustri: 'Mitra Industri & BUMN',
  tabOrtua: 'Orang Tua / Wali',
  tabAlumni: 'Alumni RKS',
  uspTag: 'MENGAPA RKS POLIBATAM?',
  uspTitle: 'Keunggulan Utama Program Studi',
  uspDesc:
    'Kombinasi kurikulum berstandar industri siber, pengajar praktisi berpengalaman, dan lab operasi keamanan 24/7.',
  tile1Badge: 'Pusat Operasi Siber',
  tile1Title: 'Praktik Real-Time di Lab Security Operations Center (SOC)',
  tile1Desc:
    'Mahasiswa dilatih langsung menangani serangan siber nyata, malware analysis, incident response, dan threat hunting.',
  tile1Link: 'Eksplor Fasilitas Lab',
  tile2Unit: 'Semester',
  tile2Title: 'Jenjang DIV / Sarjana Terapan',
  tile2Desc: '4 Tahun masa studi terstruktur dengan magang industri 1-2 semester penuh.',
  tile3Unit: 'Sertifikasi',
  tile3Title: 'Lisensi & Sertifikasi Global',
  tile3Desc:
    'Dukungan ujian EC-Council (CEH, CND, CHFI), Cisco CCNA/CyberOps, AWS, dan CertNexus.',
  tile4Unit: 'Jalur Karir',
  tile4Title: 'Posisi Spesialis Keamanan',
  tile4Desc:
    'Lulusan diserap sebagai Cyber Security Analyst, SOC Administrator, hingga Vulnerability Assessor.',
  tile5Badge: 'BAIK SEKALI (LAM INFOKOM)',
  tile5Title: 'Akreditasi Perdana BAIK SEKALI & Standard IABEE',
  tile5Desc:
    'Prestasi luar biasa pada penilaian akreditasi pertama langsung meraih predikat BAIK SEKALI dari LAM INFOKOM.',
  mmTentang: 'Tentang D4 RKS',
  mmOverview: 'Gambaran Umum & Keunggulan',
  mmVisi: 'Visi, Misi, Tujuan & Sasaran',
  mmPeo: 'PEO (Tujuan Pendidikan)',
  mmDosen: 'Tim Dosen & Pengajar',
  mmVideo: 'Video Profil RKS',
  mmStandar: 'Akreditasi Global',
  mmCplHead: 'Struktur & Capaian',
  mmKompetensi: 'Kompetensi Utama (CPL)',
  mmSertifikasi: '20+ Sertifikasi Global',
  mmKarir: 'Prospek Karir Lulusan',
  vmtEyebrow: 'KOMITMEN & STRATEGI',
  vmtCardTitle: 'Visi, Misi, Tujuan & Sasaran',
  tabVisi: 'Visi',
  tabMisi: 'Misi',
  tabTujuan: 'Tujuan',
  tabSasaran: 'Sasaran',
  vmtVisiQuote:
    '"Menjadi program studi vokasi yang unggul, terkemuka, dan berdaya saing internasional di bidang Rekayasa Keamanan Siber pada tahun 2030."',
  vmtVisiSub:
    'Berfokus pada pengembangan talenta teknikal berpikiran kritis, adaptif terhadap ancaman siber global, serta berintegritas tinggi.',
  vmtMisi1:
    'Menyelenggarakan pendidikan vokasi bidang keamanan siber berkualitas tinggi berbasis kurikulum terapan & standar industri.',
  vmtMisi2:
    'Melaksanakan riset terapan tepat guna untuk menyelesaikan tantangan keamanan siber di tingkat nasional dan global.',
  vmtMisi3:
    'Mengembangkan pengabdian masyarakat melalui program edukasi, audit, dan penyuluhan kesadaran keamanan siber.',
  vmtTujuan1:
    'Mencetak lulusan terampil yang menguasai analisis kerentanan, investigasi digital forensik, dan pertahanan jaringan siber.',
  vmtTujuan2:
    'Menghasilkan inovasi dan produk riset keamanan siber yang terimplementasi di industri.',
  vmtTujuan3:
    'Memperkuat kolaborasi strategis dengan berbagai lembaga pertahanan siber nasional dan internasional.',
  vmtSasaran1:
    '100% lulusan tersertifikasi internasional (CEH, Cisco CyberOps, atau CompTIA Security+).',
  vmtSasaran2: 'Waktu tunggu kerja lulusan kurang dari 3 bulan setelah kelulusan.',
  vmtSasaran3:
    'Tercapainya kerja sama riset aktif dengan SOC & perusahaan keamanan siber multinasional.',
  vmtVideoLabel: 'PROFIL RKS',
  vmtVideoDescTxt:
    'Saksikan fasilitas unggulan dan lingkungan inovatif kami yang mencetak profesional keamanan siber berstandar global.',
  vmtYoutubeBtn: 'Tonton Full di YouTube',
  vmtSocmedTitle: 'Ikuti Sosial Media Kami',
  videoTag: 'PROFIL PRODI RKS',
  videoTitle: 'Mengenal Lebih Dekat D4 Rekayasa Keamanan Siber',
  videoDesc:
    'Saksikan sekilas suasana perkuliahan, laboratorium SOC, dan fasilitas riset terapan di Politeknik Negeri Batam.',
  peoTag: 'TUJUAN PENDIDIKAN PROGRAM (PEO)',
  peoTitle: 'Profil Profesional Mandiri Lulusan',
  kompetensiTag: 'STANDAR CAPAIAN & KOMPETENSI',
  kompetensiTitle: 'Eksplorasi Kompetensi & CPL Lulusan',
  kompetensiDesc:
    'Kemampuan spesifik yang dibentuk secara bertahap selama 8 semester pembelajaran praktis di Politeknik Negeri Batam.',
  mtabKompetensi: 'Kompetensi Utama',
  mtabCpl: 'Capaian Pembelajaran (CPL)',
  karirTag: 'PELUANG KARIR MASA DEPAN',
  karirTitle: 'Prospek Karir Lulusan',
  karirDesc:
    'Profil lulusan yang paling dicari oleh perusahaan multinasional, perbankan, instansi pemerintah, dan SOC global.',
  certTag: 'KUALIFIKASI GLOBAL',
  certTitle: 'Mitra Akademi & 20+ Sertifikasi Internasional',
  certDesc:
    'Kurikulum dirancang untuk mempersiapkan mahasiswa menghadapi ujian sertifikasi profesi global yang diakui industri nasional & internasional.',
  certMitra: 'Mitra Akademi Resmi:',
  fasilitasTag: 'LINGKUNGAN & INFRASTRUKTUR',
  fasilitasTitle: 'Fasilitas Terkini & Kampus Inklusif',
  fasilitasDesc:
    'Dukungan infrastruktur enterprise dan komitmen menyediakan lingkungan belajar yang ramah bagi semua kalangan.',
  fasCol2Desc:
    'Polibatam merupakan kampus yang mendukung inklusivitas. Kami menyediakan fasilitas ramah disabilitas, ruang belajar yang nyaman, serta layanan pendukung untuk memastikan setiap mahasiswa memiliki kesempatan yang sama untuk meraih prestasi terbaik mereka.',
  lab1Title: 'Laboratorium Penetration Testing',
  lab1Desc:
    'Dilengkapi workstation performa tinggi untuk pengujian celah keamanan, analisis malware, dan simulasi penyerangan siber.',
  lab2Title: 'Laboratorium Cyber Operations Center',
  lab2Desc:
    'Pusat pemantauan lalu lintas jaringan real-time dan analisis ancaman siber berbasis Security Operations Center (SOC).',
  lab3Title: 'Laboratorium Jaringan & Infrastruktur',
  lab3Desc:
    'Perangkat router, switch, firewall enterprise Cisco & Fortinet untuk konfigurasi arsitektur jaringan aman skala besar.',
  lab4Title: 'Laboratorium Digital Forensics',
  lab4Desc:
    'Fasilitas khusus investigasi bukti digital, analisis artifacts, pemulihan data, dan pembuatan laporan forensik hukum.',
  lab5Title: 'Laboratorium Research & Development',
  lab5Desc:
    'Ruang kolaborasi riset dosen dan mahasiswa untuk pengerjaan tugas akhir, proyek industri (PBL), dan kompetisi CTF.',
  dosenTag: 'PAKAR & PRAKTISI SIBER',
  dosenTitle: 'Tim Prodi & Pengajar RKS',
  dosenDesc:
    'Dosen berlatar akademis kuat & memiliki bersertifikasi internasional spesialis di bidang jaringan dan keamanan siber.',
  pmbBadge: 'PENERIMAAN MAHASISWA BARU',
  pmbTitle: 'Siapkan Karir Keamanan Siber Anda Bersama RKS Polibatam',
  pmbDesc:
    'Bergabunglah dalam jajaran profesional yang menjaga aset digital bangsa. Pilih jalur pendaftaran SNBP, SNBT, atau Mandiri Polibatam.',
  pmbBtn1: 'Portal Pendaftaran PMB ↗',
  footerDesc:
    'Program Studi DIV Rekayasa Keamanan Siber, Jurusan Teknik Informatika, Politeknik Negeri Batam.',
  footerCol1: 'Navigasi Utama',
  footerCol2: 'Akreditasi & Legal',
  footerCol3: 'Akademi Mitra',
  flProfil: 'Profil Prodi',
  flPeo: 'PEO & Capaian',
  flKompetensi: 'Kompetensi CPL',
  flKarir: 'Peluang Kerja',
  flSertifikasi: 'Sertifikasi Global',
  mobProfil: 'Profil Prodi',
  mobVisi: 'Visi, Misi & Sasaran',
  mobPeo: 'PEO & Profil Mandiri',
  mobKompetensi: 'Kompetensi & CPL',
  mobKarir: 'Peluang Kerja Lulusan',
  mobSertifikasi: '20+ Sertifikasi Internasional',
  mobVideo: 'Video Profil RKS',
  mobFasilitas: 'Fasilitas Laboratorium',
  mobDosen: 'Tim Dosen Pengajar',
  kurTitle: 'Kurikulum Berstandar Internasional & CDIO Project Based Learning',
  m1Label: 'Total SKS Kelulusan',
  m1Sub: 'Distribusi 8 Semester',
  m2Label: 'Praktikum & PBL',
  m2Sub: 'Hands-On Industry Lab',
  m3Label: 'Sertifikasi Global',
  m3Sub: 'Integrated Certification',
  m4Label: 'Magang Industri & MBKM',
  m4Sub: 'Full Immersion (Sem 7)',
};

const en: UiDict = {
  brandTitle: 'CYBER SECURITY ENGINEERING',
  searchHome: 'Search admissions, curriculum...',
  searchKurikulum: 'Search courses, certifications...',
  navProfil: 'About & Academic',
  navKurikulum: 'Curriculum & Badges',
  btnPmb: 'Apply PMB',
  heroMainTitle:
    'Earn Your <span class="gradient-text">Applied Bachelor Degree (D4)</span> in Cyber Security Engineering',
  heroBtn1: 'Explore Career Prospects ↗',
  heroBtn2: 'View Curriculum',
  stat1: 'Study Semesters',
  stat2: 'Global Certifications',
  stat3: 'Industry PBL',
  personaTitle: 'Curated Information For:',
  personaSub: 'Select your profile for tailored navigation & key insights',
  tabCalon: 'Prospective Students',
  tabMahasiswa: 'Students & Practitioners',
  tabIndustri: 'Industry & Enterprise Partners',
  tabOrtua: 'Parents & Guardians',
  tabAlumni: 'Alumni Network',
  uspTag: 'WHY CHOOSE RKS POLIBATAM?',
  uspTitle: 'Key Highlights & Competitive Edge',
  uspDesc:
    'Industry-standard cyber curriculum, expert practitioner faculty, and 24/7 Security Operations Center labs.',
  tile1Badge: 'Cyber Operations Center',
  tile1Title: 'Hands-on Real-Time SOC Simulation Labs',
  tile1Desc:
    'Students practice live incident response, malware analysis, network packet analysis, and threat hunting.',
  tile1Link: 'Explore SOC Facilities',
  tile2Unit: 'Semesters',
  tile2Title: 'Applied Bachelor Degree (D4)',
  tile2Desc:
    '4-Year structured curriculum with 1-2 semesters of full-time industry internship.',
  tile3Unit: 'Certifications',
  tile3Title: 'Global Licenses & Badges',
  tile3Desc:
    'Exam support for EC-Council (CEH, CND, CHFI), Cisco CCNA/CyberOps, AWS, and CertNexus.',
  tile4Unit: 'Career Pathways',
  tile4Title: 'Specialized Cybersecurity Roles',
  tile4Desc:
    'Graduates hired as Cyber Security Analysts, SOC Administrators, and Penetration Testers.',
  tile5Badge: 'LAM INFOKOM: VERY GOOD',
  tile5Title: 'First Accreditation: Rated VERY GOOD & IABEE Standard',
  tile5Desc:
    'Remarkable achievement on the inaugural accreditation cycle awarded VERY GOOD rating by LAM INFOKOM.',
  mmTentang: 'About D4 RKS',
  mmOverview: 'Overview & Highlights',
  mmVisi: 'Vision, Mission, Objectives & Targets',
  mmPeo: 'PEO (Educational Objectives)',
  mmDosen: 'Faculty & Lecturers',
  mmVideo: 'RKS Profile Video',
  mmStandar: 'Global Accreditation',
  mmCplHead: 'Structure & Outcomes',
  mmKompetensi: 'Core Competencies (CPL)',
  mmSertifikasi: '20+ Global Certifications',
  mmKarir: 'Graduate Career Prospects',
  vmtEyebrow: 'COMMITMENT & STRATEGY',
  vmtCardTitle: 'Vision, Mission, Objectives & Targets',
  tabVisi: 'Vision',
  tabMisi: 'Mission',
  tabTujuan: 'Objectives',
  tabSasaran: 'Targets',
  vmtVisiQuote:
    '"To become a superior, leading, and internationally competitive vocational study program in the field of Cyber Security Engineering by 2030."',
  vmtVisiSub:
    'Focusing on developing technical talents who are critical thinkers, adaptive to global cyber threats, and have high integrity.',
  vmtMisi1:
    'Providing high-quality vocational education in cyber security based on applied curriculum & industry standards.',
  vmtMisi2:
    'Conducting appropriate applied research to solve cyber security challenges at national and global levels.',
  vmtMisi3:
    'Developing community service through cyber security education, audit, and awareness programs.',
  vmtTujuan1:
    'Producing skilled graduates who master vulnerability analysis, digital forensics investigation, and cyber network defense.',
  vmtTujuan2:
    'Producing cyber security innovations and research products implemented in the industry.',
  vmtTujuan3:
    'Strengthening strategic collaboration with various national and international cyber defense institutions.',
  vmtSasaran1:
    '100% of graduates are internationally certified (CEH, Cisco CyberOps, or CompTIA Security+).',
  vmtSasaran2:
    'Graduate waiting time for employment is less than 3 months after graduation.',
  vmtSasaran3:
    'Achievement of active research cooperation with SOCs & multinational cyber security companies.',
  vmtVideoLabel: 'RKS PROFILE',
  vmtVideoDescTxt:
    'Witness our state-of-art facilities and innovative environment that mold global standard cyber security professionals.',
  vmtYoutubeBtn: 'Watch Full on YouTube',
  vmtSocmedTitle: 'Follow Our Social Media',
  videoTag: 'RKS PROFILE',
  videoTitle: 'Discover D4 Cyber Security Engineering Up Close',
  videoDesc:
    'Watch a preview of campus life, SOC laboratories, and applied research facilities at Politeknik Negeri Batam.',
  peoTag: 'PROGRAM EDUCATIONAL OBJECTIVES (PEO)',
  peoTitle: 'Graduate Autonomous Professional Profile',
  kompetensiTag: 'GRADUATE OUTCOMES & COMPETENCIES',
  kompetensiTitle: 'Competency & CPL Matrix Exploration',
  kompetensiDesc:
    'Specific skills developed systematically over 8 semesters of practical study at Polibatam.',
  mtabKompetensi: '9 Core Competencies',
  mtabCpl: '10 Learning Outcomes (CPL)',
  karirTag: 'CAREER OPPORTUNITIES',
  karirTitle: 'Cyber Security Specialist Position',
  karirDesc:
    'Graduate profiles highly sought after by multinational tech companies, banking, government, and global SOCs.',
  certTag: 'GLOBAL QUALIFICATIONS',
  certTitle: 'Academic Partners & 20+ Global Certifications',
  certDesc:
    'Our curriculum is designed to prepare students for globally recognized professional certification exams required by the industry.',
  certMitra: 'Official Academic Partners:',
  fasilitasTag: 'ENVIRONMENT & INFRASTRUCTURE',
  fasilitasTitle: 'Advanced Facilities & Inclusive Campus',
  fasilitasDesc:
    'Enterprise-grade infrastructure support and a commitment to providing an inclusive learning environment for everyone.',
  fasCol2Desc:
    'Polibatam is a campus that supports inclusivity. We provide disability-friendly facilities, comfortable learning spaces, and support services to ensure every student has equal opportunities to achieve their best performance.',
  lab1Title: 'Penetration Testing Laboratory',
  lab1Desc:
    'High-performance workstations for security auditing, malware analysis, and red-teaming simulations.',
  lab2Title: 'Cyber Operations Center (SOC) Lab',
  lab2Desc:
    'Real-time network traffic monitoring and threat analysis facility based on SOC industry standards.',
  lab3Title: 'Network Infrastructure & Security Lab',
  lab3Desc:
    'Enterprise Cisco routers, switches, and Fortinet firewalls for building secure network architectures.',
  lab4Title: 'Digital Forensics Laboratory',
  lab4Desc:
    'Specialized facility for digital evidence investigation, artifact analysis, data recovery, and legal reporting.',
  lab5Title: 'Research & Development Lab',
  lab5Desc:
    'Collaborative research space for faculty and students on final projects, PBL industry tasks, and CTF competitions.',
  dosenTag: 'CYBER EXPERTS & PRACTITIONERS',
  dosenTitle: 'Faculty & Instructional Team',
  dosenDesc:
    'Faculty members with strong academic backgrounds and international certifications in networking and security.',
  pmbBadge: 'ADMISSION OPEN FOR NEW STUDENTS',
  pmbTitle: 'Launch Your Cybersecurity Career with RKS Polibatam',
  pmbDesc:
    'Join the frontline professionals guarding digital assets. Apply via SNBP, SNBT, or Polibatam Independent tracks.',
  pmbBtn1: 'PMB Admission Portal ↗',
  footerDesc:
    'Applied Bachelor (D4) of Cyber Security Engineering, Department of Informatics Engineering, Politeknik Negeri Batam.',
  footerCol1: 'Main Navigation',
  footerCol2: 'Accreditation & Legal',
  footerCol3: 'Partner Academies',
  flProfil: 'Program Profile',
  flPeo: 'PEO & Outcomes',
  flKompetensi: 'Competencies & CPL',
  flKarir: 'Career Opportunities',
  flSertifikasi: 'Global Certifications',
  mobProfil: 'Program Profile',
  mobVisi: 'Vision, Mission & Targets',
  mobPeo: 'PEO & Autonomous Profile',
  mobKompetensi: 'Competencies & CPL',
  mobKarir: 'Graduate Career Opportunities',
  mobSertifikasi: '20+ International Certifications',
  mobVideo: 'RKS Profile Video',
  mobFasilitas: 'Laboratory Facilities',
  mobDosen: 'Faculty Members',
  kurTitle: 'International Standard & CDIO Project Based Learning',
  m1Label: 'Total Graduation Credits',
  m1Sub: 'Distributed across 8 Semesters',
  m2Label: 'Practical & PBL',
  m2Sub: 'Hands-On Industry Labs',
  m3Label: 'Global Certifications',
  m3Sub: 'Integrated Certifications',
  m4Label: 'Industry Internship & MBKM',
  m4Sub: '6-Month Immersion (Sem 7)',
};

export const dictionaries: Record<Lang, UiDict> = { id, en };
