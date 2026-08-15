'use client';

import dynamic from 'next/dynamic';

const CommandPalette = dynamic(() => import('@/components/CommandPalette'), {
  ssr: false,
  loading: () => null,
});

export default function CommandPaletteLoader() {
  return <CommandPalette />;
}
