'use client';

import { useUi } from '@/components/ui-context';

export default function MobileBottomNav() {
  const { setCommandOpen, mobileOpen, setMobileOpen } = useUi();

  return (
    <nav className="mobile-bottom-nav" aria-label="Navigasi Bawah Mobile">
      <button
        className="mobile-bottom-action-btn mobile-bottom-search-box"
        onClick={() => setCommandOpen(true)}
        title="Cari di RKS"
        aria-label="Buka Pencarian"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

      <button
        className={`mobile-bottom-action-btn${mobileOpen ? ' active' : ''}`}
        onClick={() => setMobileOpen(!mobileOpen)}
        title="Menu Navigasi"
        aria-label="Buka Menu"
        aria-expanded={mobileOpen}
      >
        <div className="mobile-bottom-burger-icon">
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
        <span>Menu</span>
      </button>
    </nav>
  );
}
