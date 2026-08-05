/**
 * RKS POLIBATAM - INTERACTIVE UI COMPONENTS
 * Handles theme switcher, sliders, persona tabs, search command palette, modals, and navigation controls.
 */

function initTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  currentTheme = theme;
}

function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!themeBtn) return;

  themeBtn.addEventListener('click', () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    initTheme(newTheme);
    localStorage.setItem('rks-theme', newTheme);
  });
}

function initPersonaTabs() {
  const tabs = document.querySelectorAll('.persona-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderPersonaContent(tab.dataset.persona, currentLang);
    });
  });
}

function initVMTSSlider() {
  const track = document.getElementById('vmts-track');
  const pills = document.querySelectorAll('.vmts-pill-btn');
  const dots = document.querySelectorAll('.vmts-dot');
  const prevBtn = document.getElementById('vmts-prev-btn');
  const nextBtn = document.getElementById('vmts-next-btn');
  const counterText = document.getElementById('vmts-counter-text');
  const container = document.getElementById('vmts-single-container');

  if (!track) return;

  let currentSlide = 0;
  const totalSlides = 4;

  function goToSlide(n) {
    currentSlide = (n + totalSlides) % totalSlides;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    pills.forEach((p, idx) => {
      p.classList.toggle('active', idx === currentSlide);
    });

    dots.forEach((d, idx) => {
      d.classList.toggle('active', idx === currentSlide);
    });

    if (counterText) {
      counterText.textContent = `${currentSlide + 1} / ${totalSlides}`;
    }
  }

  pills.forEach(p => {
    p.addEventListener('click', () => {
      const slideIndex = parseInt(p.dataset.slide, 10);
      goToSlide(slideIndex);
    });
  });

  dots.forEach(d => {
    d.addEventListener('click', () => {
      const slideIndex = parseInt(d.dataset.slide, 10);
      goToSlide(slideIndex);
    });
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
  }

  // Touch Swipe Support
  let startX = 0;
  let endX = 0;

  if (container) {
    container.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      endX = e.changedTouches[0].clientX;
      const diff = startX - endX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          goToSlide(currentSlide + 1);
        } else {
          goToSlide(currentSlide - 1);
        }
      }
    }, { passive: true });
  }

  goToSlide(0);
}

// Global VMT / SV Tab Switcher
window.switchVmtTab = function (btn, tabId) {
  var svCard = btn.closest('.sv-card');
  if (svCard) {
    svCard.querySelectorAll('.sv-tab').forEach(function (b) { b.classList.remove('sv-tab--active'); });
    btn.classList.add('sv-tab--active');
    svCard.querySelectorAll('.sv-pane').forEach(function (p) { p.style.display = 'none'; });
    var target = document.getElementById('vmt-' + tabId);
    if (target) target.style.display = 'block';
    return;
  }
  var panel = btn.closest('.vmt-panel');
  if (!panel) return;
  panel.querySelectorAll('.vmt-tab-btn').forEach(function (b) { b.classList.remove('active'); });
  btn.classList.add('active');
  panel.querySelectorAll('.vmt-tab-content').forEach(function (c) { c.style.display = 'none'; });
  var t = panel.querySelector('#vmt-' + tabId);
  if (t) t.style.display = 'block';
};

function initMatrixTabs() {
  const tabs = document.querySelectorAll('.matrix-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.dataset.target;
      document.querySelectorAll('.matrix-panel').forEach(p => p.classList.remove('active'));
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });
}

function initMatrixSearch() {
  const searchInput = document.getElementById('matrix-search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    document.querySelectorAll('.kompetensi-card').forEach(card => {
      const text = card.dataset.search || '';
      card.style.display = text.includes(query) ? 'flex' : 'none';
    });

    document.querySelectorAll('.cpl-card').forEach(card => {
      const text = card.dataset.search || '';
      card.style.display = text.includes(query) ? 'flex' : 'none';
    });
  });
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.dot');
  if (slides.length < 2) return;

  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 6000);

  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      goToSlide(idx);
      slideInterval = setInterval(nextSlide, 6000);
    });
  });
}

function initCommandPalette() {
  const trigger = document.getElementById('command-search-trigger');
  const overlay = document.getElementById('command-modal-overlay');
  const input = document.getElementById('command-modal-input');
  const resultsContainer = document.getElementById('command-modal-results');

  if (!overlay || !input) return;

  function openPalette() {
    overlay.classList.add('active');
    input.focus();
    renderCommandResults('');
  }

  function closePalette() {
    overlay.classList.remove('active');
    input.value = '';
  }

  if (trigger) trigger.addEventListener('click', openPalette);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      overlay.classList.contains('active') ? closePalette() : openPalette();
    } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openPalette();
    } else if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closePalette();
    }
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePalette();
  });

  input.addEventListener('input', (e) => {
    renderCommandResults(e.target.value.toLowerCase().trim());
  });

  function renderCommandResults(query) {
    const activeData = currentLang === 'en' ? dataEN : dataID;
    let items = [
      { title: 'Video Profil Program Studi RKS', cat: 'Video', url: '#video-profil' },
      { title: 'Profil & Visi Misi RKS', cat: 'Prodi', url: '#profil' },
      { title: 'PEO (Program Educational Objectives)', cat: 'Tujuan', url: '#peo' },
      { title: 'Kompetensi Utama Lulusan', cat: 'Kurikulum', url: '#kompetensi' },
      { title: 'Capaian Pembelajaran (CPL)', cat: 'Kurikulum', url: '#cpl-list' },
      { title: 'Posisi Spesialis Keamanan Siber', cat: 'Karir', url: '#karir' },
      { title: '20+ Sertifikasi Internasional (CEH, Cisco)', cat: 'Sertifikasi', url: '#sertifikasi' },
      { title: 'Fasilitas Laboratorium SOC', cat: 'Fasilitas', url: '#fasilitas' },
      { title: 'Tim Dosen & Pengajar RKS', cat: 'Dosen', url: '#dosen' },
      { title: 'Pendaftaran PMB Polibatam', cat: 'PMB', url: '#pmb' }
    ];

    if (activeData && activeData.peluang_kerja_lulusan) {
      activeData.peluang_kerja_lulusan.forEach(k => {
        items.push({ title: `${k.posisi}: ${k.deskripsi}`, cat: 'Karir Role', url: '#karir' });
      });
    }

    if (query) {
      items = items.filter(i => i.title.toLowerCase().includes(query) || i.cat.toLowerCase().includes(query));
    }

    if (items.length > 0) {
      resultsContainer.innerHTML = items.slice(0, 8).map(i => `
        <a href="${i.url}" class="command-item" onclick="document.getElementById('command-modal-overlay').classList.remove('active')">
          <span class="command-item-title">${i.title}</span>
          <span class="command-item-cat">${i.cat}</span>
        </a>
      `).join('');
    } else {
      resultsContainer.innerHTML = `<div class="command-item"><span class="command-item-title">Tidak ada hasil untuk "${query}"</span></div>`;
    }
  }
}

function initCertModal() {
  const overlay = document.getElementById('cert-modal-overlay');
  const modalImg = document.getElementById('cert-modal-img');
  const modalTitle = document.getElementById('cert-modal-title');
  const modalDownload = document.getElementById('cert-modal-download');
  const closeBtn = document.getElementById('cert-modal-close');

  if (!overlay || !modalImg) return;

  function openCertModal(imgSrc, title) {
    modalImg.src = imgSrc;
    if (modalTitle) modalTitle.textContent = title || 'Sertifikat Akreditasi RKS Polibatam';
    if (modalDownload) modalDownload.href = imgSrc;
    overlay.classList.add('active');
  }

  function closeCertModal() {
    overlay.classList.remove('active');
  }

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.cert-popup-trigger');
    if (trigger) {
      e.preventDefault();
      const imgSrc = trigger.getAttribute('data-cert-img');
      const title = trigger.getAttribute('data-cert-title');
      if (imgSrc) openCertModal(imgSrc, title);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeCertModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeCertModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeCertModal();
    }
  });
}

function initLazyObserver() {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.bento-card, .fasilitas-card, .dosen-card, .peo-card, .karir-card').forEach(el => {
    observer.observe(el);
  });
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-toggle-btn');
  const bottomBurgerBtn = document.getElementById('mobile-bottom-burger-btn');
  const bottomSearchBtn = document.getElementById('mobile-bottom-search-trigger');
  const mobileThemeBtn = document.getElementById('mobile-theme-toggle-btn');
  const menu = document.getElementById('mobile-menu');

  if (!menu) return;

  function toggleMenu() {
    const isActive = menu.classList.toggle('active');
    if (bottomBurgerBtn) {
      bottomBurgerBtn.classList.toggle('active', isActive);
    }
    if (toggleBtn) {
      toggleBtn.classList.toggle('active', isActive);
    }
  }

  function closeMenu() {
    menu.classList.remove('active');
    if (bottomBurgerBtn) bottomBurgerBtn.classList.remove('active');
    if (toggleBtn) toggleBtn.classList.remove('active');
  }

  if (toggleBtn) toggleBtn.addEventListener('click', toggleMenu);
  if (bottomBurgerBtn) bottomBurgerBtn.addEventListener('click', toggleMenu);

  if (bottomSearchBtn) {
    bottomSearchBtn.addEventListener('click', () => {
      closeMenu();
      const searchOverlay = document.getElementById('command-modal-overlay');
      const searchInput = document.getElementById('command-modal-input');
      if (searchOverlay) {
        searchOverlay.classList.add('active');
        if (searchInput) searchInput.focus();
      }
    });
  }

  if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', () => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      initTheme(newTheme);
    });
  }

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

let alertTimer = null;
let currentAlertIndex = 0;

function initAnnouncementBanner(himbauanID, himbauanEN) {
  const banner = document.getElementById('announcement-banner');
  const closeBtn = document.getElementById('announcement-close-btn');
  const pager = document.getElementById('alert-pager');
  const catText = document.getElementById('alert-cat-text');
  const bodyText = document.getElementById('alert-body-text');
  const slideText = document.getElementById('i18n-alert-text');

  if (!banner) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      banner.style.display = 'none';
      if (alertTimer) clearInterval(alertTimer);
    });
  }

  function updateAlertDisplay(index) {
    const activeData = currentLang === 'en' ? (himbauanEN || []) : (himbauanID || []);
    if (!activeData || !activeData.length) return;

    currentAlertIndex = (index + activeData.length) % activeData.length;
    const item = activeData[currentAlertIndex];

    if (slideText) {
      slideText.style.opacity = '0';
      slideText.style.transform = 'translateY(-4px)';
      setTimeout(() => {
        if (catText) catText.textContent = `${item.kategori}: `;
        if (bodyText) bodyText.textContent = item.pesan;
        if (pager) pager.textContent = `${currentAlertIndex + 1} / ${activeData.length}`;
        slideText.style.opacity = '1';
        slideText.style.transform = 'translateY(0)';
      }, 180);
    }
  }

  updateAlertDisplay(0);

  if (alertTimer) clearInterval(alertTimer);
  alertTimer = setInterval(() => {
    updateAlertDisplay(currentAlertIndex + 1);
  }, 4500);

  banner.addEventListener('mouseenter', () => {
    if (alertTimer) clearInterval(alertTimer);
  });

  banner.addEventListener('mouseleave', () => {
    if (alertTimer) clearInterval(alertTimer);
    alertTimer = setInterval(() => {
      updateAlertDisplay(currentAlertIndex + 1);
    }, 4500);
  });

  window.refreshAlertLanguage = () => updateAlertDisplay(currentAlertIndex);
}

function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
