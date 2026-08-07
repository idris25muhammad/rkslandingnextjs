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
      {head}
      <span className="title-doodle">
        <SocDoodle variant={variant} className="title-doodle__icon" />
        <span className="title-doodle__text">{tail}</span>
      </span>
    </h2>
  );
}

