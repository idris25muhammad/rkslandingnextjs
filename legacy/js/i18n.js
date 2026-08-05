/**
 * RKS POLIBATAM - INTERNATIONALIZATION & LOCALIZATION ENGINE
 * Handles multi-language dictionaries (ID | EN), fallback data, and page translation.
 */

function getUiDictionary(lang) {
  if (lang === 'en') {
    return {
      'i18n-brand-title': 'CYBER SECURITY ENGINEERING',
      'i18n-alert-text': `<svg class="svg-icon-inline" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><strong>CSIRT Security Advisory:</strong> Beware of phishing attacks &amp; ensure 2-Factor Authentication (2FA) is enabled on all accounts.`,
      'global-search-input': 'Search admissions, curriculum...',
      'i18n-nav-profil': 'About & Academic',
      'i18n-nav-kurikulum': 'Curriculum & Badges',
      'i18n-nav-fasilitas': 'Facilities & Career',
      'i18n-btn-pmb': 'Apply PMB',
      'i18n-hero-badge-1': 'APPLIED BACHELOR • FIRST ACCREDITATION: VERY GOOD',
      'i18n-hero-main-title': 'Earn Your <span class="gradient-text">Applied Bachelor Degree (D4)</span> in Cyber Security Engineering',
      'i18n-hero-acc-label': 'Nationally &amp; Internationally Accredited:',
      'i18n-hero-btn1': 'Explore Career Prospects ↗',
      'i18n-hero-btn2': 'View Curriculum',
      'i18n-stat-1': 'Study Semesters',
      'i18n-stat-2': 'Global Certifications',
      'i18n-stat-3': 'Industry PBL',
      'i18n-mascot-speech': '"Ready to Defend the Digital Future?"',
      'i18n-persona-title': 'Curated Information For:',
      'i18n-persona-sub': 'Select your profile for tailored navigation &amp; key insights',
      'i18n-tab-calon': 'Prospective Students',
      'i18n-tab-mahasiswa': 'Students &amp; Practitioners',
      'i18n-tab-industri': 'Industry &amp; Enterprise Partners',
      'i18n-tab-ortua': 'Parents &amp; Guardians',
      'i18n-tab-alumni': 'Alumni Network',
      'i18n-tagline-heading': "Sangat Memungkinkan Menguasai Pertahanan Siber di Polibatam",
      'i18n-tagline-sub': 'First vocational higher education program in cyber security with inaugural VERY GOOD accreditation from LAM INFOKOM &amp; IABEE standards.',
      'i18n-usp-tag': 'WHY CHOOSE RKS POLIBATAM?',
      'i18n-usp-title': 'Key Highlights &amp; Competitive Edge',
      'i18n-usp-desc': 'Industry-standard cyber curriculum, expert practitioner faculty, and 24/7 Security Operations Center labs.',
      'i18n-tile1-badge': 'Cyber Operations Center',
      'i18n-tile1-title': 'Hands-on Real-Time SOC Simulation Labs',
      'i18n-tile1-desc': 'Students practice live incident response, malware analysis, network packet analysis, and threat hunting.',
      'i18n-tile1-link': 'Explore SOC Facilities',
      'i18n-tile2-unit': 'Semesters',
      'i18n-tile2-title': 'Applied Bachelor Degree (D4)',
      'i18n-tile2-desc': '4-Year structured curriculum with 1-2 semesters of full-time industry internship.',
      'i18n-tile3-unit': 'Certifications',
      'i18n-tile3-title': 'Global Licenses &amp; Badges',
      'i18n-tile3-desc': 'Exam support for EC-Council (CEH, CND, CHFI), Cisco CCNA/CyberOps, AWS, and CertNexus.',
      'i18n-tile4-unit': 'Career Pathways',
      'i18n-tile4-title': 'Specialized Cybersecurity Roles',
      'i18n-tile4-desc': 'Graduates hired as Cyber Security Analysts, SOC Administrators, and Penetration Testers.',
      'i18n-tile5-badge': 'LAM INFOKOM: VERY GOOD',
      'i18n-tile5-title': 'First Accreditation: Rated VERY GOOD &amp; IABEE Standard',
      'i18n-tile5-desc': 'Remarkable achievement on the inaugural accreditation cycle awarded VERY GOOD rating by LAM INFOKOM.',
      'i18n-tile5-link': 'View Certificate (JPG)',
      'i18n-mm-visi': 'Vision, Mission, Objectives &amp; Targets',
      'i18n-vmts-tag': 'STRATEGIC DIRECTION',
      'i18n-vmts-title': 'Strategic Vision, Mission, Objectives &amp; Targets',
      'i18n-vmts-desc': 'The foundational commitment of D4 Cybersecurity Engineering Polibatam to cultivate top talent in Southeast Asia.',
      'i18n-visi-badge': 'CORE PROGRAM VISION',
      'i18n-vmts-misi': 'Program Mission',
      'i18n-vmts-tujuan': 'Strategic Objectives',
      'i18n-vmts-sasaran': 'Performance &amp; Quality Targets',
      'i18n-tab-visi': 'Vision Statement',
      'i18n-tab-misi': 'Mission Pillars',
      'i18n-tab-tujuan': 'Strategic Goals',
      'i18n-tab-sasaran': 'Performance Targets',
      'i18n-vmt-eyebrow': 'COMMITMENT & STRATEGY',
      'i18n-vmt-card-title': 'Vision, Mission, Objectives & Targets',
      'i18n-tab-visi-2': 'Vision',
      'i18n-tab-misi-2': 'Mission',
      'i18n-tab-tujuan-2': 'Objectives',
      'i18n-tab-sasaran-2': 'Targets',
      'i18n-vmt-visi-quote': '"To become a superior, leading, and internationally competitive vocational study program in the field of Cyber Security Engineering by 2030."',
      'i18n-vmt-visi-sub': 'Focusing on developing technical talents who are critical thinkers, adaptive to global cyber threats, and have high integrity.',
      'i18n-vmt-misi-1': 'Providing high-quality vocational education in cyber security based on applied curriculum & industry standards.',
      'i18n-vmt-misi-2': 'Conducting appropriate applied research to solve cyber security challenges at national and global levels.',
      'i18n-vmt-misi-3': 'Developing community service through cyber security education, audit, and awareness programs.',
      'i18n-vmt-tujuan-1': 'Producing skilled graduates who master vulnerability analysis, digital forensics investigation, and cyber network defense.',
      'i18n-vmt-tujuan-2': 'Producing cyber security innovations and research products implemented in the industry.',
      'i18n-vmt-tujuan-3': 'Strengthening strategic collaboration with various national and international cyber defense institutions.',
      'i18n-vmt-sasaran-1': '100% of graduates are internationally certified (CEH, Cisco CyberOps, or CompTIA Security+).',
      'i18n-vmt-sasaran-2': 'Graduate waiting time for employment is less than 3 months after graduation.',
      'i18n-vmt-sasaran-3': 'Achievement of active research cooperation with SOCs & multinational cyber security companies.',
      'i18n-vmt-video-label': 'RKS PROFILE',
      'i18n-vmt-video-desc-txt': 'Witness our state-of-art facilities and innovative environment that mold global standard cyber security professionals.',
      'i18n-vmt-youtube-btn': 'Watch Full on YouTube',
      'i18n-vmt-socmed-title': 'Follow Our Social Media',
      'i18n-video-tag': 'RKS PROFILE',
      'i18n-video-title': 'Discover D4 Cyber Security Engineering Up Close',
      'i18n-video-desc': 'Watch a preview of campus life, SOC laboratories, and applied research facilities at Politeknik Negeri Batam.',
      'i18n-peo-tag': 'PROGRAM EDUCATIONAL OBJECTIVES (PEO)',
      'i18n-peo-title': 'Graduate Autonomous Professional Profile',
      'i18n-kompetensi-tag': 'GRADUATE OUTCOMES &amp; COMPETENCIES',
      'i18n-kompetensi-title': 'Competency &amp; CPL Matrix Exploration',
      'i18n-kompetensi-desc': 'Specific skills developed systematically over 8 semesters of practical study at Polibatam.',
      'i18n-mtab-kompetensi': '9 Core Competencies',
      'i18n-mtab-cpl': '10 Learning Outcomes (CPL)',
      'matrix-search-input': 'Filter topics (e.g. network, threats, ethics)...',
      'i18n-karir-tag': 'CAREER OPPORTUNITIES',
      'i18n-karir-title': 'Cyber Security Specialist Position',
      'i18n-karir-desc': 'Graduate profiles highly sought after by multinational tech companies, banking, government, and global SOCs.',
      'i18n-cert-tag': 'GLOBAL QUALIFICATIONS',
      'i18n-cert-title': 'Academic Partners &amp; 20+ Global Certifications',
      'i18n-cert-desc': 'Our curriculum is designed to prepare students for globally recognized professional certification exams required by the industry.',
      'i18n-cert-mitra': 'Official Academic Partners:',
      'i18n-fasilitas-tag': 'ENVIRONMENT & INFRASTRUCTURE',
      'i18n-fasilitas-title': 'Advanced Facilities & Inclusive Campus',
      'i18n-fasilitas-desc': 'Enterprise-grade infrastructure support and a commitment to providing an inclusive learning environment for everyone.',
      'i18n-fas-col1-title': 'Laboratories & SOC',
      'i18n-fas-col2-title': 'Inclusive Campus',
      'i18n-fas-col2-desc': 'Polibatam is a campus that supports inclusivity. We provide disability-friendly facilities, comfortable learning spaces, and support services to ensure every student has equal opportunities to achieve their best performance.',
      'i18n-lab1-title': 'Penetration Testing Laboratory',
      'i18n-lab1-desc': 'High-performance workstations for security auditing, malware analysis, and red-teaming simulations.',
      'i18n-lab2-title': 'Cyber Operations Center (SOC) Lab',
      'i18n-lab2-desc': 'Real-time network traffic monitoring and threat analysis facility based on SOC industry standards.',
      'i18n-lab3-title': 'Network Infrastructure &amp; Security Lab',
      'i18n-lab3-desc': 'Enterprise Cisco routers, switches, and Fortinet firewalls for building secure network architectures.',
      'i18n-lab4-title': 'Digital Forensics Laboratory',
      'i18n-lab4-desc': 'Specialized facility for digital evidence investigation, artifact analysis, data recovery, and legal reporting.',
      'i18n-lab5-title': 'Research &amp; Development Lab',
      'i18n-lab5-desc': 'Collaborative research space for faculty and students on final projects, PBL industry tasks, and CTF competitions.',
      'i18n-dosen-tag': 'CYBER EXPERTS &amp; PRACTITIONERS',
      'i18n-dosen-title': 'Faculty &amp; Instructional Team',
      'i18n-dosen-desc': 'Faculty members with strong academic backgrounds and international certifications in networking and security.',
      'i18n-pmb-badge': 'ADMISSION OPEN FOR NEW STUDENTS',
      'i18n-pmb-title': 'Launch Your Cybersecurity Career with RKS Polibatam',
      'i18n-pmb-desc': 'Join the frontline professionals guarding digital assets. Apply via SNBP, SNBT, or Polibatam Independent tracks.',
      'i18n-pmb-btn1': 'PMB Admission Portal ↗',
      'i18n-pmb-btn2': 'Download Accreditation (PDF)',
      'i18n-bot-welcome': 'Hello! <svg class="svg-icon-inline" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> I am <strong>Cyber Guardian AI</strong>. How can I assist you with RKS Cyber Security Engineering Polibatam?',
      'i18n-q1': 'Career Prospects',
      'i18n-q2': 'Global Certifications',
      'i18n-q3': 'Study Duration',
      'i18n-kur-badge': '8-SEMESTER CURRICULUM STRUCTURE • APPLIED BACHELOR IN CYBERSECURITY ENGINEERING',
      'i18n-kur-title': 'International Standard &amp; CDIO Project Based Learning',
      'i18n-kur-subtitle': 'Moulding top cybersecurity specialists through 70% Hands-on Practical Labs/PBL and 30% Comprehensive Theory. Aligned with global industry certifications (Cisco, EC-Council, CompTIA, AWS) and LAM INFOKOM &amp; IABEE Accreditations.',
      'i18n-m1-label': 'Total Graduation Credits',
      'i18n-m1-sub': 'Distributed across 8 Semesters',
      'i18n-m2-label': 'Practical &amp; PBL',
      'i18n-m2-sub': 'Hands-On Industry Labs',
      'i18n-m3-label': 'Global Certifications',
      'i18n-m3-sub': 'Integrated Certifications',
      'i18n-m4-label': 'Industry Internship & MBKM',
      'i18n-m4-sub': '6-Month Immersion (Sem 7)'
    };
  } else {
    return {
      'i18n-brand-title': 'REKAYASA KEAMANAN SIBER',
      'i18n-alert-text': `<svg class="svg-icon-inline" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><strong>Himbauan CSIRT RKS:</strong> Waspada serangan phishing &amp; pastikan mengaktifkan 2-Factor Authentication (2FA) di setiap akun.`,
      'global-search-input': 'Cari info pendaftaran, kurikulum...',
      'i18n-nav-profil': 'Profil & Akademik',
      'i18n-nav-kurikulum': 'Kurikulum & Sertifikasi',
      'i18n-nav-fasilitas': 'Fasilitas & Karir',
      'i18n-btn-pmb': 'Daftar↗',
      'i18n-hero-badge-1': 'D4 SARJANA TERAPAN • AKREDITASI PERDANA: BAIK SEKALI',
      'i18n-hero-main-title': 'Raih Gelar <span class="gradient-text">D4 Sarjana Terapan</span> di Prodi RKS',
      'i18n-hero-acc-label': 'Terakreditasi Nasional &amp; Internasional:',
      'i18n-hero-btn1': 'Jelajahi Prospek Karir ↗',
      'i18n-hero-btn2': 'Lihat Kurikulum',
      'i18n-stat-1': 'Semester Studi',
      'i18n-stat-2': 'Sertifikasi Global',
      'i18n-stat-3': 'PBL Industri',
      'i18n-mascot-speech': '"Siap Menjadi Defender Siber Masa Depan?"',
      'i18n-persona-title': 'Informasi Dikurasi Khusus Untuk:',
      'i18n-persona-sub': 'Pilih profil Anda untuk navigasi cepat &amp; informasi paling relevan',
      'i18n-tab-calon': 'Calon Mahasiswa (SMA/SMK)',
      'i18n-tab-mahasiswa': 'Mahasiswa &amp; Praktisi',
      'i18n-tab-industri': 'Mitra Industri &amp; BUMN',
      'i18n-tab-ortua': 'Orang Tua / Wali',
      'i18n-tab-alumni': 'Alumni RKS',
      'i18n-tagline-heading': 'It\'s So Possible to Master Cyber Defense at Polibatam',
      'i18n-tagline-sub': 'Penyelenggara pendidikan vokasi siber pertama yang berhasil meraih Akreditasi Perdana berpredikat BAIK SEKALI dari LAM INFOKOM &amp; standar IABEE.',
      'i18n-usp-tag': 'MENGAPA RKS POLIBATAM?',
      'i18n-usp-title': 'Keunggulan Utama Program Studi',
      'i18n-usp-desc': 'Kombinasi kurikulum berstandar industri siber, pengajar praktisi berpengalaman, dan lab operasi keamanan 24/7.',
      'i18n-tile1-badge': 'Pusat Operasi Siber',
      'i18n-tile1-title': 'Praktik Real-Time di Lab Security Operations Center (SOC)',
      'i18n-tile1-desc': 'Mahasiswa dilatih langsung menangani serangan siber nyata, malware analysis, incident response, dan threat hunting.',
      'i18n-tile1-link': 'Eksplor Fasilitas Lab',
      'i18n-tile2-unit': 'Semester',
      'i18n-tile2-title': 'Jenjang DIV / Sarjana Terapan',
      'i18n-tile2-desc': '4 Tahun masa studi terstruktur dengan magang industri 1-2 semester penuh.',
      'i18n-tile3-unit': 'Sertifikasi',
      'i18n-tile3-title': 'Lisensi &amp; Sertifikasi Global',
      'i18n-tile3-desc': 'Dukungan ujian EC-Council (CEH, CND, CHFI), Cisco CCNA/CyberOps, AWS, dan CertNexus.',
      'i18n-tile4-unit': 'Jalur Karir',
      'i18n-tile4-title': 'Posisi Spesialis Keamanan',
      'i18n-tile4-desc': 'Lulusan diserap sebagai Cyber Security Analyst, SOC Administrator, hingga Vulnerability Assessor.',
      'i18n-tile5-badge': 'BAIK SEKALI (LAM INFOKOM)',
      'i18n-tile5-title': 'Akreditasi Perdana BAIK SEKALI &amp; Standard IABEE',
      'i18n-tile5-desc': 'Prestasi luar biasa pada penilaian akreditasi pertama langsung meraih predikat BAIK SEKALI dari LAM INFOKOM.',
      'i18n-tile5-link': 'Lihat Sertifikat Akreditasi (JPG)',
      'i18n-mm-visi': 'Visi, Misi, Tujuan &amp; Sasaran',
      'i18n-vmts-tag': 'ARAH STRATEGIS PRODI',
      'i18n-vmts-title': 'Visi, Misi, Tujuan &amp; Sasaran Strategic',
      'i18n-vmts-desc': 'Landasan komitmen D4 Rekayasa Keamanan Siber Polibatam dalam mencetak SDM unggul berdaya saing di Asia Tenggara.',
      'i18n-visi-badge': '🌐 VISI UTAMA PRODI',
      'i18n-vmts-misi': 'Misi Program Studi',
      'i18n-vmts-tujuan': 'Tujuan Strategis',
      'i18n-vmts-sasaran': 'Sasaran Mutu &amp; Kinerja',
      'i18n-tab-visi': 'Visi Utama',
      'i18n-tab-misi': 'Misi Prodi',
      'i18n-tab-tujuan': 'Tujuan Strategis',
      'i18n-tab-sasaran': 'Sasaran Kinerja',
      'i18n-vmt-eyebrow': 'KOMITMEN & STRATEGI',
      'i18n-vmt-card-title': 'Visi, Misi, Tujuan & Sasaran',
      'i18n-tab-visi-2': 'Visi',
      'i18n-tab-misi-2': 'Misi',
      'i18n-tab-tujuan-2': 'Tujuan',
      'i18n-tab-sasaran-2': 'Sasaran',
      'i18n-vmt-visi-quote': '"Menjadi program studi vokasi yang unggul, terkemuka, dan berdaya saing internasional di bidang Rekayasa Keamanan Siber pada tahun 2030."',
      'i18n-vmt-visi-sub': 'Berfokus pada pengembangan talenta teknikal berpikiran kritis, adaptif terhadap ancaman siber global, serta berintegritas tinggi.',
      'i18n-vmt-misi-1': 'Menyelenggarakan pendidikan vokasi bidang keamanan siber berkualitas tinggi berbasis kurikulum terapan & standar industri.',
      'i18n-vmt-misi-2': 'Melaksanakan riset terapan tepat guna untuk menyelesaikan tantangan keamanan siber di tingkat nasional dan global.',
      'i18n-vmt-misi-3': 'Mengembangkan pengabdian masyarakat melalui program edukasi, audit, dan penyuluhan kesadaran keamanan siber.',
      'i18n-vmt-tujuan-1': 'Mencetak lulusan terampil yang menguasai analisis kerentanan, investigasi digital forensik, dan pertahanan jaringan siber.',
      'i18n-vmt-tujuan-2': 'Menghasilkan inovasi dan produk riset keamanan siber yang terimplementasi di industri.',
      'i18n-vmt-tujuan-3': 'Memperkuat kolaborasi strategis dengan berbagai lembaga pertahanan siber nasional dan internasional.',
      'i18n-vmt-sasaran-1': '100% lulusan tersertifikasi internasional (CEH, Cisco CyberOps, atau CompTIA Security+).',
      'i18n-vmt-sasaran-2': 'Waktu tunggu kerja lulusan kurang dari 3 bulan setelah kelulusan.',
      'i18n-vmt-sasaran-3': 'Tercapainya kerja sama riset aktif dengan SOC & perusahaan keamanan siber multinasional.',
      'i18n-vmt-video-label': 'PROFIL RKS',
      'i18n-vmt-video-desc-txt': 'Saksikan fasilitas unggulan dan lingkungan inovatif kami yang mencetak profesional keamanan siber berstandar global.',
      'i18n-vmt-youtube-btn': 'Tonton Full di YouTube',
      'i18n-vmt-socmed-title': 'Ikuti Sosial Media Kami',
      'i18n-video-tag': 'PROFIL PRODI RKS',
      'i18n-video-title': 'Mengenal Lebih Dekat D4 Rekayasa Keamanan Siber',
      'i18n-video-desc': 'Saksikan sekilas suasana perkuliahan, laboratorium SOC, dan fasilitas riset terapan di Politeknik Negeri Batam.',
      'i18n-peo-tag': 'TUJUAN PENDIDIKAN PROGRAM (PEO)',
      'i18n-peo-title': 'Profil Profesional Mandiri Lulusan',
      'i18n-kompetensi-tag': 'STANDAR CAPAIAN &amp; KOMPETENSI',
      'i18n-kompetensi-title': 'Eksplorasi Kompetensi &amp; CPL Lulusan',
      'i18n-kompetensi-desc': 'Kemampuan spesifik yang dibentuk secara bertahap selama 8 semester pembelajaran praktis di Politeknik Negeri Batam.',
      'i18n-mtab-kompetensi': 'Kompetensi Utama',
      'i18n-mtab-cpl': 'Capaian Pembelajaran (CPL)',
      'matrix-search-input': 'Filter topik (mis. jaringan, ancaman, etika)...',
      'i18n-karir-tag': 'PELUANG KARIR MASA DEPAN',
      'i18n-karir-title': 'Prospek Karir Lulusan',
      'i18n-karir-desc': 'Profil lulusan yang paling dicari oleh perusahaan multinasional, perbankan, instansi pemerintah, dan SOC global.',
      'i18n-cert-tag': 'KUALIFIKASI GLOBAL',
      'i18n-cert-title': 'Mitra Akademi &amp; 20+ Sertifikasi Internasional',
      'i18n-cert-desc': 'Kurikulum dirancang untuk mempersiapkan mahasiswa menghadapi ujian sertifikasi profesi global yang diakui industri nasional &amp; internasional.',
      'i18n-cert-mitra': 'Mitra Akademi Resmi:',
      'i18n-fasilitas-tag': 'LINGKUNGAN & INFRASTRUKTUR',
      'i18n-fasilitas-title': 'Fasilitas Terkini & Kampus Inklusif',
      'i18n-fasilitas-desc': 'Dukungan infrastruktur enterprise dan komitmen menyediakan lingkungan belajar yang ramah bagi semua kalangan.',
      'i18n-fas-col1-title': 'Laboratorium & SOC',
      'i18n-fas-col2-title': 'Kampus Inklusif',
      'i18n-fas-col2-desc': 'Polibatam merupakan kampus yang mendukung inklusivitas. Kami menyediakan fasilitas ramah disabilitas, ruang belajar yang nyaman, serta layanan pendukung untuk memastikan setiap mahasiswa memiliki kesempatan yang sama untuk meraih prestasi terbaik mereka.',
      'i18n-lab1-title': 'Laboratorium Penetration Testing',
      'i18n-lab1-desc': 'Dilengkapi workstation performa tinggi untuk pengujian celah keamanan, analisis malware, dan simulasi penyerangan siber.',
      'i18n-lab2-title': 'Laboratorium Cyber Operations Center',
      'i18n-lab2-desc': 'Pusat pemantauan lalu lintas jaringan real-time dan analisis ancaman siber berbasis Security Operations Center (SOC).',
      'i18n-lab3-title': 'Laboratorium Jaringan &amp; Infrastruktur',
      'i18n-lab3-desc': 'Perangkat router, switch, firewall enterprise Cisco &amp; Fortinet untuk konfigurasi arsitektur jaringan aman skala besar.',
      'i18n-lab4-title': 'Laboratorium Digital Forensics',
      'i18n-lab4-desc': 'Fasilitas khusus investigasi bukti digital, analisis artifacts, pemulihan data, dan pembuatan laporan forensik hukum.',
      'i18n-lab5-title': 'Laboratorium Research &amp; Development',
      'i18n-lab5-desc': 'Ruang kolaborasi riset dosen dan mahasiswa untuk pengerjaan tugas akhir, proyek industri (PBL), dan kompetisi CTF.',
      'i18n-dosen-tag': 'PAKAR &amp; PRAKTISI SIBER',
      'i18n-dosen-title': 'Tim Prodi &amp; Pengajar RKS',
      'i18n-dosen-desc': 'Dosen berlatar akademis kuat &amp; memiliki bersertifikasi internasional spesialis di bidang jaringan dan keamanan siber.',
      'i18n-pmb-badge': 'PENERIMAAN MAHASISWA BARU',
      'i18n-pmb-title': 'Siapkan Karir Keamanan Siber Anda Bersama RKS Polibatam',
      'i18n-pmb-desc': 'Bergabunglah dalam jajaran profesional yang menjaga aset digital bangsa. Pilih jalur pendaftaran SNBP, SNBT, atau Mandiri Polibatam.',
      'i18n-pmb-btn1': 'Portal Pendaftaran PMB ↗',
      'i18n-pmb-btn2': 'Unduh Akreditasi (PDF)',
      'i18n-bot-welcome': 'Halo! <svg class="svg-icon-inline" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> Saya <strong>Cyber Guardian AI</strong>. Ada yang ingin kamu tanyakan mengenai Program Studi D4 Rekayasa Keamanan Siber Polibatam?',
      'i18n-q1': 'Prospek Kerja',
      'i18n-q2': 'Sertifikasi Global',
      'i18n-q3': 'Lama Studi',
      'i18n-kur-badge': 'STRUKTUR KURIKULUM 8 SEMESTER • D4 REKAYASA KEAMANAN SIBER',
      'i18n-kur-title': 'Kurikulum Berstandar Internasional &amp; CDIO Project Based Learning',
      'i18n-kur-subtitle': 'Mendidik spesialis siber unggulan melalui kombinasi 70% Hands-on Practical Lab/PBL dan 30% Teori Komprehensif. Dirancang selaras dengan sertifikasi industri dunia (Cisco, EC-Council, CompTIA, AWS) dan Akreditasi LAM INFOKOM &amp; IABEE.',
      'i18n-m1-label': 'Total SKS Kelulusan',
      'i18n-m1-sub': 'Distribusi 8 Semester',
      'i18n-m2-label': 'Praktikum &amp; PBL',
      'i18n-m2-sub': 'Hands-On Industry Lab',
      'i18n-m3-label': 'Sertifikasi Global',
      'i18n-m3-sub': 'Integrated Certification',
      'i18n-m4-label': 'Magang Industri & MBKM',
      'i18n-m4-sub': 'Full Immersion (Sem 7)'
    };
  }
}

function getPersonaDictionary(lang) {
  if (lang === 'en') {
    return {
      'calon-mahasiswa': {
        title: '🎓 Information for Prospective Students (High School Graduates)',
        desc: 'Aspiring to build a career in Cybersecurity? D4 Cyber Security Engineering at Polibatam offers an 8-semester hands-on curriculum with global certifications (CEH, Cisco) and guaranteed industry internships.',
        links: [
          { label: 'Admission Requirements & PMB Tracks', url: '#pmb' },
          { label: 'Graduate Career Opportunities', url: '#karir' },
          { label: 'SOC Lab Facilities & Campus Tour', url: '#fasilitas' }
        ]
      },
      'mahasiswa': {
        title: 'Information for Current Students & Practitioners',
        desc: 'Access the 10 CPL learning outcomes, EC-Council & Cisco exam prep, exam schedules, and SOC labs for Project-Based Learning (PBL) industry tasks.',
        links: [
          { label: 'Learning Outcomes (CPL)', url: '#cpl-list' },
          { label: '20+ Global Certifications', url: '#sertifikasi' },
          { label: 'Faculty & Lecturer Team', url: '#dosen' }
        ]
      },
      'industri': {
        title: 'Information for Industry & Enterprise Partners',
        desc: 'Partner with RKS Polibatam for Cybersecurity talent recruitment, 1-2 semester full-time internships, applied CSIRT research projects, and security consulting.',
        links: [
          { label: 'PEO Professional Profile', url: '#peo' },
          { label: 'IABEE Accreditation Criteria', url: '#akreditasi' },
          { label: 'Industry Partnership Contact', url: '#pmb' }
        ]
      },
      'orang-tua': {
        title: ' Information for Parents & Guardians',
        desc: 'D4 RKS is accredited Excellent by LAM INFOKOM and IABEE standards, assuring top-tier employment prospects in banking, government, and global SOCs.',
        links: [
          { label: 'Why Choose RKS Polibatam?', url: '#profil' },
          { label: 'Download Accreditation PDF', url: 'dokumen/akreditasi_iabee.pdf' }
        ]
      },
      'alumni': {
        title: 'Information for RKS Alumni',
        desc: 'Stay connected with the RKS Alumni Network, advance your professional certifications, and participate in annual Tracer Study initiatives.',
        links: [
          { label: 'Alumni & Career Network', url: 'https://www.polibatam.ac.id/alumni/' },
          { label: 'Professional Certifications', url: '#sertifikasi' }
        ]
      }
    };
  } else {
    return {
      'calon-mahasiswa': {
        title: 'Untuk Calon Mahasiswa (Siswa SMA/SMK)',
        desc: 'Ingin berkarir di bidang Cyber Security? D4 Rekayasa Keamanan Siber Polibatam menawarkan studi 8 semester berbasis praktikum hands-on, sertifikasi internasional (CEH, Cisco), dan jaminan magang industri.',
        links: [
          { label: 'Syarat & Jalur PMB', url: '#pmb' },
          { label: 'Prospek Karir Lulusan', url: '#karir' },
          { label: 'Tur Lab SOC & Fasilitas', url: '#fasilitas' }
        ]
      },
      'mahasiswa': {
        title: 'Untuk Mahasiswa Aktif & Praktisi',
        desc: 'Akses silabus CPL Capaian Pembelajaran, persiapan sertifikasi EC-Council & Cisco, jadwal ujian, dan laboratorium SOC untuk pengerjaan Project Based Learning (PBL).',
        links: [
          { label: '20+ Sertifikasi Global', url: '#sertifikasi' },
          { label: 'Tim Dosen Pengajar', url: '#dosen' }
        ]
      },
      'industri': {
        title: 'Untuk Mitra Industri, Perusahaan & BUMN',
        desc: 'Bekerja sama dengan RKS Polibatam untuk rekrutmen talenta Cyber Security, program magang industri 1-2 semester, proyek riset terapan CSIRT, dan konsultasi keamanan siber.',
        links: [
          { label: 'Profil PEO Lulusan', url: '#peo' },
          { label: 'Standar Akreditasi IABEE', url: '#akreditasi' },
          { label: 'Kontak Kerjasama Industri', url: '#pmb' }
        ]
      },
      'orang-tua': {
        title: 'Untuk Orang Tua / Wali Mahasiswa',
        desc: 'Program Studi D4 RKS terakreditasi LAM INFOKOM & berstandar IABEE dengan prospek kerja yang sangat tinggi di sektor perbankan, BUMN, instansi pemerintah, dan SOC global.',
        links: [
          { label: 'Kenapa Pilih RKS Polibatam?', url: '#profil' },
          { label: 'Bisa kerja apa???', url: '#karir' }
        ]
      },
      'alumni': {
        title: 'Untuk Alumni RKS',
        desc: 'Tetap terhubung dengan jaringan Alumni RKS Polibatam, pembaruan sertifikasi profesi tingkat lanjut, dan program Tracer Study.',
        links: [
          { label: 'Jaringan Alumni & Karir', url: 'https://www.polibatam.ac.id/alumni/' },
          { label: 'Sertifikasi Professional', url: '#sertifikasi' }
        ]
      }
    };
  }
}

function getFallbackData(lang) {
  if (lang === 'en') {
    return {
      "program_studi": "Applied Bachelor in Cyber Security Engineering",
      "deskripsi": "A study program specializing in cybersecurity development for strategic industry needs. Graduates possess robust technical competence in cybersecurity, network defense, and incident response.",
      "jenjang": "D4",
      "lama_studi": "8 semesters",
      "program_educational_objectives": {
        "deskripsi": "Statements describing career accomplishments that the program prepares graduates to achieve.",
        "target_waktu": "3 to 5 years post-graduation",
        "profil_profesional_mandiri": [
          "Graduates actively and innovatively contribute to solving complex cybersecurity challenges through ethical IT.",
          "Graduates continuously advance technical, regulatory, and managerial cybersecurity expertise through lifelong learning.",
          "Graduates creatively engineer cybersecurity products and services tailored to global needs."
        ]
      },
      "kompetensi_lulusan": [
        "Ability to respond to organizational security threats effectively.",
        "Ability to execute and report cybersecurity risk management plans.",
        "Ability to analyze internal and external network security threats.",
        "Ability to analyze and assess cybersecurity vulnerabilities.",
        "Ability to design comprehensive cybersecurity risk awareness programs.",
        "Ability to conduct system vulnerability assessments within enterprise environments.",
        "Ability to install and configure security mechanisms for institutional assets.",
        "Ability to install and configure enterprise-scale network infrastructures.",
        "Ability to install computers, software applications, and network components."
      ],
      "capaian_pembelajaran_lulusan": [
        "Apply mathematics, computing, and engineering fundamentals to cybersecurity.",
        "Research and analyze complex cybersecurity engineering problems.",
        "Design security components or processes meeting identified organizational needs.",
        "Investigate engineering problems using databases and structured experiments.",
        "Utilize modern prediction tools and IT resources to solve security problems.",
        "Uphold professional ethics, legal compliance, and embrace diversity.",
        "Function effectively in multidisciplinary and inclusive teams.",
        "Communicate effectively in written, oral, and graphical formats.",
        "Apply engineering management principles to cybersecurity projects.",
        "Engage in independent lifelong learning and critical thinking."
      ],
      "peluang_kerja_lulusan": [
        { "posisi": "Cyber Security Analyst", "deskripsi": "Detect and mitigate security threats in Security Operations Centers." },
        { "posisi": "Cyber Security Administrator", "deskripsi": "Execute controls according to enterprise risk management blueprints." },
        { "posisi": "Network Security Administrator", "deskripsi": "Analyze perimeter threats, deploy firewalls, and enforce policies." },
        { "posisi": "Vulnerability Assessment Analyst", "deskripsi": "Perform security audits and vulnerability scanning across enterprise IT." },
        { "posisi": "Cyber Security Awareness Manager", "deskripsi": "Manage cybersecurity governance and enforce awareness programs." },
        { "posisi": "Junior Cyber Security Specialist", "deskripsi": "Conduct security gap assessments and assist in hardening system architecture." },
        { "posisi": "IT Security Operator", "deskripsi": "Maintain secure server operations and patch management." },
        { "posisi": "Network Administrator", "deskripsi": "Configure LAN, WAN, router, switch, and cloud infrastructure." },
        { "posisi": "IT Support Specialist", "deskripsi": "Deploy and maintain secure web servers and user infrastructure." }
      ]
    };
  }
  return {
    "program_studi": "DIV Rekayasa Keamanan Siber",
    "deskripsi": "Program studi Rekayasa Keamanan Siber mengkhususkan pada pengembangan keamanan siber. Lulusan memiliki keterampilan yang baik di bidang keamanan siber dan jaringan.",
    "jenjang": "D4",
    "lama_studi": "8 semester",
    "program_educational_objectives": {
      "deskripsi": "Pernyataan yang secara luas menggambarkan karir dan pencapaian profesional yang dipersiapkan oleh program untuk dicapai lulusan.",
      "target_waktu": "3 hingga 5 tahun setelah lulus",
      "profil_profesional_mandiri": [
        "Lulusan berkarir dan berkontribusi secara aktif serta inovatif dalam mengidentifikasi, menganalisis, dan menyelesaikan permasalahan keamanan siber.",
        "Lulusan senantiasa mengembangkan kompetensi di bidang keamanan siber dari aspek teknis, regulasi, maupun manajerial.",
        "Lulusan mampu secara kreatif dan profesional menghasilkan solusi siber yang sesuai dengan perkembangan teknologi global."
      ]
    },
    "kompetensi_lulusan": [
      "Memiliki kemampuan dalam menindaklanjuti ancaman keamanan dalam suatu organisasi.",
      "Memiliki kemampuan dalam melaksanakan implementasi manajemen risiko siber.",
      "Memiliki kemampuan menganalisa ancaman keamanan jaringan dari dalam dan luar jangkauan.",
      "Memiliki keterampilan menganalisis celah keamanan siber.",
      "Memiliki kemampuan merancang program kesadaran risiko keamanan siber.",
      "Melakukan penilaian celah keamanan sistem dalam organisasi.",
      "Melakukan instalasi & konfigurasi keamanan aset institusi.",
      "Melakukan instalasi & konfigurasi jaringan skala institusi.",
      "Melakukan instalasi komputer, software, dan jaringan."
    ],
    "capaian_pembelajaran_lulusan": [
      "Mampu mengidentifikasi & menerapkan matematika, komputasi, dan dasar rekayasa siber.",
      "Mampu meneliti, merumuskan, dan menganalisis permasalahan rekayasa siber.",
      "Mampu merancang sistem & proses keamanan siber untuk kebutuhan teridentifikasi.",
      "Mampu mengorganisasi data dan eksperimen investigasi siber.",
      "Mampu memanfaatkan teknologi pemodelan & analisis ancaman siber.",
      "Mampu mematuhi etika profesional & norma praktik rekayasa siber.",
      "Mampu berfungsi efektif dalam tim multidisipliner siber.",
      "Mampu berkomunikasi efektif & inklusif dalam lingkungan kerja.",
      "Mampu menerapkan prinsip manajemen proyek rekayasa siber.",
      "Mampu mandiri melakukan pengembangan diri & pembelajaran sepanjang hayat."
    ],
    "peluang_kerja_lulusan": [
      { "posisi": "Cyber Security Analyst", "deskripsi": "Menindaklanjuti ancaman keamanan di SOC organisasi." },
      { "posisi": "Cyber Security Administrator", "deskripsi": "Melaksanakan program keamanan siber sesuai manajemen risiko." },
      { "posisi": "Network Security Administrator", "deskripsi": "Menganalisa ancaman keamanan jaringan dan mengembangkan kebijakan siber." },
      { "posisi": "Vulnerability Assessment Analyst", "deskripsi": "Melakukan uji celah keamanan siber sistem." },
      { "posisi": "Cyber Security Awareness", "deskripsi": "Mengelola tata kelola dan kesadaran risiko siber." },
      { "posisi": "Junior Cyber Security", "deskripsi": "Penilaian celah keamanan sistem organisasi." },
      { "posisi": "IT Security Operator", "deskripsi": "Perbaikan & maintenance server dan infrastruktur." },
      { "posisi": "Administrator Jaringan", "deskripsi": "Konfigurasi LAN, WAN, dan segmen jaringan." },
      { "posisi": "IT Support", "deskripsi": "Pengelolaan server web dan aplikasi." }
    ]
  };
}

function initLangSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang === currentLang) return;

      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentLang = lang;
      renderPageLanguage(lang);
    });
  });
}

function renderPageLanguage(lang) {
  const data = lang === 'en' ? dataEN : dataID;
  document.documentElement.lang = lang;

  // Render UI Dictionary
  const dict = getUiDictionary(lang);
  for (const [id, text] of Object.entries(dict)) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === 'INPUT') {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  }

  // Render Dynamic Content
  if (data) {
    renderHeroData(data);
    renderVMTS(data);
    renderPEO(data.program_educational_objectives);
    renderKompetensi(data.kompetensi_lulusan);
    renderCPL(data.capaian_pembelajaran_lulusan);
    renderKarir(data.peluang_kerja_lulusan);
  }

  // Refresh Alert Language
  if (window.refreshAlertLanguage) {
    window.refreshAlertLanguage();
  }

  // Render Persona Tab Content
  const activePersonaTab = document.querySelector('.persona-tab.active');
  const activePersona = activePersonaTab ? activePersonaTab.dataset.persona : 'calon-mahasiswa';
  renderPersonaContent(activePersona, lang);

  // Render Kurikulum if on kurikulum.html
  if (typeof renderKurikulumPage === 'function') {
    renderKurikulumPage(lang);
  }
}
