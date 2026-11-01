import React, { useState, useRef, useEffect } from 'react';
import { SERVICES_DATA } from '../content';
import { gsap, ScrollTrigger, EASINGS, prefersReducedMotion } from '../lib/gsap';

function FallbackIcon({ id }) {
  const strokeProps = {
    width: '48',
    height: '48',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#ffffff',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };

  switch (id) {
    case 'lead-management':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      );
    case 'website':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <line x1="2" y1="8" x2="22" y2="8" />
          <polyline points="9 13 6 16 9 19" />
          <polyline points="15 13 18 16 15 19" />
        </svg>
      );
    case 'app':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
        </svg>
      );
    case 'ai-ml':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case 'saas':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <polyline points="12 13 12 17" />
        </svg>
      );
    case 'computer-vision':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      );
    default:
      return (
        <svg {...strokeProps} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 14 14" />
        </svg>
      );
  }
}

export default function ServicesSection({ onOpenService, onStartProject }) {
  const { eyebrow, h2, paragraph, ctaButton, services } = SERVICES_DATA;
  const [hoveredCard, setHoveredCard] = useState(null);
  const [failedImages, setFailedImages] = useState({});

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const cardRefs = useRef([]);
  const twinkleRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(['.svc-eyebrow', '.svc-title', '.svc-desc', '.svc-cta-wrapper', cardRefs.current], {
        opacity: 1,
        y: 0,
        scale: 1,
      });
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Continuous organic ambient floating for twinkle glow dots
      if (twinkleRef.current) {
        const dots = twinkleRef.current.querySelectorAll('.svc-dot');
        dots.forEach((dot, i) => {
          gsap.to(dot, {
            y: (i % 2 === 0 ? '-=10' : '+=10'),
            x: (i % 3 === 0 ? '+=8' : '-=6'),
            scale: 1.25,
            opacity: 0.9,
            duration: 3 + (i * 0.35),
            repeat: -1,
            yoyo: true,
            ease: EASINGS.sineInOut,
            delay: i * 0.25,
          });
        });
      }

      // 2. Section Header entrance timeline
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      headerTl
        .fromTo(
          '.svc-eyebrow',
          { opacity: 0, y: 18, filter: 'blur(3px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.75, ease: EASINGS.power3Out }
        )
        .fromTo(
          '.svc-title',
          { opacity: 0, y: 28, filter: 'blur(4px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9, ease: EASINGS.power3Out },
          '-=0.55'
        )
        .fromTo(
          '.svc-desc',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: EASINGS.power3Out },
          '-=0.6'
        )
        .fromTo(
          '.svc-cta-wrapper',
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: EASINGS.backOutSoft },
          '-=0.45'
        );

      // 3. 3x2 Capability cards staggered entrance
      const validCards = cardRefs.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            stagger: 0.1,
            ease: EASINGS.power3Out,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardMouseEnter = (idx) => {
    setHoveredCard(idx);
    if (prefersReducedMotion()) return;

    const cardEl = cardRefs.current[idx];
    if (!cardEl) return;

    gsap.to(cardEl, {
      y: -8,
      scale: 1.015,
      duration: 0.35,
      ease: EASINGS.power2Out,
      overwrite: 'auto',
    });

    const imgEl = cardEl.querySelector('.svc-art-img');
    if (imgEl) {
      gsap.to(imgEl, {
        scale: 1.06,
        duration: 0.45,
        ease: EASINGS.power2Out,
        overwrite: 'auto',
      });
    }

    const arrowEl = cardEl.querySelector('.svc-arrow');
    if (arrowEl) {
      gsap.to(arrowEl, {
        x: 5,
        duration: 0.25,
        ease: EASINGS.power2Out,
        overwrite: 'auto',
      });
    }
  };

  const handleCardMouseLeave = (idx) => {
    setHoveredCard(null);
    if (prefersReducedMotion()) return;

    const cardEl = cardRefs.current[idx];
    if (!cardEl) return;

    gsap.to(cardEl, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: EASINGS.power2Out,
      overwrite: 'auto',
    });

    const imgEl = cardEl.querySelector('.svc-art-img');
    if (imgEl) {
      gsap.to(imgEl, {
        scale: 1,
        duration: 0.45,
        ease: EASINGS.power2Out,
        overwrite: 'auto',
      });
    }

    const arrowEl = cardEl.querySelector('.svc-arrow');
    if (arrowEl) {
      gsap.to(arrowEl, {
        x: 0,
        duration: 0.25,
        ease: EASINGS.power2Out,
        overwrite: 'auto',
      });
    }
  };

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleCardKeyDown = (e, index, service) => {
    const cols = 3;
    const total = services.length;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      cardRefs.current[(index + 1) % total]?.focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      cardRefs.current[(index - 1 + total) % total]?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextRow = index + cols;
      if (nextRow < total) {
        cardRefs.current[nextRow]?.focus();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevRow = index - cols;
      if (prevRow >= 0) {
        cardRefs.current[prevRow]?.focus();
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpenService?.(service.serviceKey);
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="services-section is-revealed"
      aria-labelledby="svc-title"
    >
      {/* Background Dot Grid */}
      <div className="svc-dot-grid" aria-hidden="true" />

      {/* Twinkling Glow Dots with continuous GSAP ambient motion */}
      <div ref={twinkleRef} className="svc-twinkle-container" aria-hidden="true">
        <span className="svc-dot svc-dot-blue" style={{ top: '65%', left: '8%' }} />
        <span className="svc-dot svc-dot-violet" style={{ top: '75%', left: '18%' }} />
        <span className="svc-dot svc-dot-blue" style={{ top: '82%', left: '30%' }} />
        <span className="svc-dot svc-dot-violet" style={{ top: '68%', left: '42%' }} />
        <span className="svc-dot svc-dot-blue" style={{ top: '88%', left: '50%' }} />
        <span className="svc-dot svc-dot-violet" style={{ top: '72%', left: '62%' }} />
        <span className="svc-dot svc-dot-blue" style={{ top: '84%', left: '74%' }} />
        <span className="svc-dot svc-dot-violet" style={{ top: '69%', left: '85%' }} />
        <span className="svc-dot svc-dot-blue" style={{ top: '80%', left: '94%' }} />
      </div>

      {/* Soft Blue Radial Glow Behind Cards */}
      <div className="svc-cards-radial-glow" aria-hidden="true" />

      <div className="svc-content-container">
        {/* Header Zone */}
        <div ref={headerRef} className="svc-header-zone">
          <p className="svc-eyebrow">{eyebrow}</p>
          <h2 id="svc-title" className="svc-title">
            {h2}
          </h2>
          <p className="svc-desc">{paragraph}</p>
          <div className="svc-cta-wrapper">
            <button
              type="button"
              className="svc-cta-btn"
              onClick={() => onStartProject?.()}
              data-open
            >
              {ctaButton}
            </button>
          </div>
        </div>

        {/* 3x2 Cards Grid */}
        <div
          ref={gridRef}
          className={`svc-grid-3x2 ${hoveredCard !== null ? 'has-hovered-child' : ''}`}
          role="region"
          aria-label="Services capabilities grid"
        >
          {services.map((item, idx) => {
            const isHovered = hoveredCard === idx;
            const hasFailed = !!failedImages[item.id];

            return (
              <article
                key={item.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                tabIndex={0}
                role="button"
                aria-label={`${item.title}: ${item.descriptor}`}
                className={`svc-card-clean ${isHovered ? 'is-hovered' : ''} ${hasFailed ? 'has-failed-image' : ''}`}
                style={{
                  '--card-hue': item.hue,
                  '--card-index': idx
                }}
                onClick={() => onOpenService?.(item.serviceKey)}
                onKeyDown={(e) => handleCardKeyDown(e, idx, item)}
                onMouseEnter={() => handleCardMouseEnter(idx)}
                onMouseLeave={() => handleCardMouseLeave(idx)}
                data-service={item.serviceKey}
              >
                {/* Subtle top arch highlight line */}
                <div className="svc-card-top-glow" aria-hidden="true" />

                {/* 1. Header Zone: Tag & Clean Left-Aligned Typography */}
                <div className="svc-card-header-zone">
                  <div className="svc-card-badge-row">
                    <span className="svc-card-badge">
                      {item.number} • {item.tags?.[0] || 'Capability'}
                    </span>
                    <span className="svc-card-status-dot" aria-hidden="true" />
                  </div>
                  <h3 className="svc-card-title">{item.title}</h3>
                  <p className="svc-card-descriptor">{item.descriptor}</p>
                </div>

                {/* 2. Illustration Zone */}
                <div className="svc-card-art-zone">
                  <div className="svc-art-ambient-spotlight" aria-hidden="true" />
                  {!hasFailed ? (
                    <img
                      className="svc-art-img"
                      src={item.imageSrc}
                      srcSet={`${item.imageSrc.replace('.webp', '-440.webp')} 440w, ${item.imageSrc} 800w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      alt={item.alt}
                      width={800}
                      height={800}
                      loading="lazy"
                      decoding="async"
                      onError={() => handleImageError(item.id)}
                    />
                  ) : (
                    <div className="svc-fallback-box">
                      <div className="svc-fallback-glow" aria-hidden="true" />
                      <FallbackIcon id={item.id} />
                    </div>
                  )}
                </div>

                {/* 3. Footer Zone */}
                <div className="svc-card-footer-zone">
                  <ul className="svc-bullet-list" aria-label={`Deliverables for ${item.title}`}>
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="svc-bullet-item">
                        <span className="svc-bullet-dot" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="svc-card-action-bar">
                    <span
                      className="svc-action-link"
                      role="button"
                      tabIndex={-1}
                      data-service={item.serviceKey}
                    >
                      Discuss this <span className="svc-arrow" aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
