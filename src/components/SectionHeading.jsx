import React from 'react';

export default function SectionHeading({ eyebrow, title, align = 'left', id }) {
  return (
    <div className={`section-heading-wrap ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 id={id} className="section-h2">
        {title}
      </h2>
    </div>
  );
}
