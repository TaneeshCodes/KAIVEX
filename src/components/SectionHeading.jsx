import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, EASINGS, prefersReducedMotion } from '../lib/gsap';

export default function SectionHeading({ eyebrow, title, align = 'left', id }) {
  const wrapRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;

    if (prefersReducedMotion()) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top 88%',
          once: true,
        },
      });

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 14, filter: 'blur(3px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75, ease: EASINGS.power3Out }
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 26, filter: 'blur(4px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: EASINGS.power3Out },
          eyebrowRef.current ? '-=0.55' : 0
        );
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className={`section-heading-wrap ${align === 'center' ? 'text-center' : ''}`}>
      {eyebrow && (
        <span ref={eyebrowRef} className="section-eyebrow">
          {eyebrow}
        </span>
      )}
      <h2 id={id} ref={titleRef} className="section-h2">
        {title}
      </h2>
    </div>
  );
}
