'use client';

import SocDoodle, { SocVariant } from '@/components/SocDoodle';

export default function SectionTitle({
  text,
  variant = 'monitor',
}: {
  text: string;
  variant?: SocVariant;
}) {
  const head = text.slice(0, text.length - 1);
  const tail = text.slice(-1);

  return (
    <h2 className="section-title">
      {text}
      <span className="title-doodle" aria-hidden="true">
        <SocDoodle variant={variant} className="title-doodle__icon" />
      </span>
    </h2>
  );
}

