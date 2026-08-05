/**
 * RKS POLIBATAM - MAIN APPLICATION ENTRYPOINT
 * Coordinates state, data fetching, and module initialization on DOMReady.
 */

let currentLang = 'id';
let currentTheme = localStorage.getItem('rks-theme') || 'dark';

let dataID = null;
let dataEN = null;
let himbauanID = [];
let himbauanEN = [];

async function loadJSONData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) return await response.json();
  } catch (e) {
    console.warn(`Failed to fetch ${url}, fallback used.`, e);
  }
  return null;
}

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Theme Initialization
  initTheme(currentTheme);
  initThemeToggle();

  // 2. Fetch Dynamic Data & Himbauan
  dataID = await loadJSONData('data/data-id.json');
  dataEN = await loadJSONData('data/data-en.json');
  
  const hID = await loadJSONData('data/himbauan-id.json');
  const hEN = await loadJSONData('data/himbauan-en.json');
  if (hID) himbauanID = hID;
  if (hEN) himbauanEN = hEN;

  // Fallback to static data if JSON fetch fails
  if (!dataID) dataID = getFallbackData('id');
  if (!dataEN) dataEN = getFallbackData('en');

  // 3. Render Initial Page Content
  renderPageLanguage(currentLang);
  renderCertifications();
  renderDosen();
  renderKurikulumPage(currentLang);

  // 4. Initialize Interactive UI Components & Listeners
  initLangSwitcher();
  initPersonaTabs();
  initVMTSSlider();
  initMatrixTabs();
  initMatrixSearch();
  initHeroSlider();
  initCommandPalette();
  initCertModal();
  initMobileMenu();
  initAnnouncementBanner(himbauanID, himbauanEN);
  initBackToTop();
  initLazyObserver();
  initKurikulumControls();
});

