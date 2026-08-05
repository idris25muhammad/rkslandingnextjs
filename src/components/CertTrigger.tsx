'use client';

import type { ReactNode } from 'react';
import { useUi } from './ui-context';

interface CertTriggerProps {
  certImg: string;
  certTitle: string;
  className?: string;
  title?: string;
  children: ReactNode;
}

export default function CertTrigger({
  certImg,
  certTitle,
  className,
  title,
  children,
}: CertTriggerProps) {
  const { openCert } = useUi();
  return (
    <button
      type="button"
      className={className}
      title={title}
      onClick={(e) => {
        e.preventDefault();
        openCert(certImg, certTitle);
      }}
    >
      {children}
    </button>
  );
}
