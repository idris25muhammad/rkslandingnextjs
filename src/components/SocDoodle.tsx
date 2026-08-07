import type { JSX } from 'react';

export type SocVariant = 'monitor' | 'radar' | 'logAlert' | 'nodes' | 'fingerprint' | 'attackDefense';

const socVariants: Record<SocVariant, () => JSX.Element> = {
  monitor: () => (
    <svg width="56" height="46" viewBox="0 0 56 46" fill="none">
      <rect x="0" y="0" width="56" height="38" rx="4" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 21 L16 21 L20 11 L24 31 L28 21 L48 21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="20" y1="38" x2="20" y2="45" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="10" y1="45" x2="30" y2="45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  radar: () => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="20" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.4"/>
      <circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6"/>
      <circle cx="22" cy="22" r="4" fill="currentColor"/>
    </svg>
  ),
  logAlert: () => (
    <svg width="52" height="30" viewBox="0 0 52 30" fill="none">
      <line x1="0" y1="0" x2="40" y2="0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <line x1="0" y1="10" x2="50" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="0" y1="20" x2="35" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="47" cy="20" r="3.5" fill="currentColor"/>
      <line x1="0" y1="30" x2="45" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    </svg>
  ),
  nodes: () => (
    <svg width="50" height="30" viewBox="0 0 50 30" fill="none">
      <circle cx="25" cy="0" r="3" fill="currentColor"/>
      <circle cx="0" cy="25" r="3" fill="currentColor"/>
      <circle cx="50" cy="25" r="3" fill="currentColor"/>
      <circle cx="25" cy="30" r="3.5" fill="currentColor"/>
      <line x1="25" y1="0" x2="25" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      <line x1="0" y1="25" x2="25" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
      <line x1="50" y1="25" x2="25" y2="30" stroke="currentColor" strokeWidth="1" opacity="0.6"/>
    </svg>
  ),
  fingerprint: () => (
    <svg width="48" height="52" viewBox="0 0 80 78" fill="none">
      <path d="M40 6 C58 6 72 20 72 38 C72 50 66 60 56 66" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M40 16 C52 16 62 26 62 38 C62 47 57 55 49 60" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M40 26 C46 26 52 32 52 38 C52 43 49 47 44 50" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M8 44 C8 26 22 12 40 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M17 48 C17 32 27 22 40 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M27 50 C27 40 33 32 40 26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M8 44 C8 58 16 68 28 72" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M17 48 C17 58 23 65 32 68" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="40" cy="38" r="2" fill="currentColor"/>
    </svg>
  ),
  attackDefense: () => (
    <svg width="40" height="42" viewBox="0 0 40 42" fill="none">
      <path d="M0 0 L0 18 C0 30 8 38 20 42 C32 38 40 30 40 18 L40 0 C32 4 8 4 0 0 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="8" y1="20" x2="32" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M32 20 L28 16 M32 20 L28 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default function SocDoodle({
  variant = 'monitor',
  className = '',
}: {
  variant?: SocVariant;
  className?: string;
}) {
  const renderVariant = socVariants[variant] || socVariants.monitor;
  return <div className={className}>{renderVariant()}</div>;
}
