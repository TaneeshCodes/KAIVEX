import React, { useRef, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { PRODUCTS_DATA } from '../content';
import { gsap, ScrollTrigger, EASINGS, prefersReducedMotion } from '../lib/gsap';

function ProductMockup({ type, hue }) {
  if (type === 'kaivex-crm') {
    return (
      <div
        className="product-mockup-frame"
        style={{
          background: `radial-gradient(90% 60% at 50% 0%, hsl(${hue} 85% 60% / .45), transparent 70%), linear-gradient(165deg, hsl(${hue} 70% 28%), hsl(${hue + 25} 65% 10%))`
        }}
        aria-hidden="true"
      >
        <div className="mockup-window">
          <div className="mockup-window-header">
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="window-dot" />
            <span className="mockup-window-title">crm.kaivex.internal</span>
          </div>
          <div className="mockup-crm-body">
            <div className="mockup-sidebar">
              <div className="mockup-bar short" />
              <div className="mockup-bar" />
              <div className="mockup-bar" />
            </div>
            <div className="mockup-columns">
              <div className="mockup-col">
                <span className="mockup-col-label">Inbound (00)</span>
                <div className="mockup-deal-card">
                  <div className="mockup-line w80" />
                  <div className="mockup-line w40 blue" />
                </div>
                <div className="mockup-deal-card">
                  <div className="mockup-line w60" />
                </div>
              </div>
              <div className="mockup-col">
                <span className="mockup-col-label">Qualified (00)</span>
                <div className="mockup-deal-card highlight">
                  <div className="mockup-line w90" />
                  <div className="mockup-line w50 blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="product-mockup-frame"
      style={{
        background: `radial-gradient(90% 60% at 50% 0%, hsl(${hue} 85% 60% / .45), transparent 70%), linear-gradient(165deg, hsl(${hue} 70% 28%), hsl(${hue + 25} 65% 10%))`
      }}
      aria-hidden="true"
    >
      <div className="mockup-window">
        <div className="mockup-window-header">
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="mockup-window-title">insights.kaivex.internal</span>
        </div>
        <div className="mockup-insights-body">
          <div className="mockup-metric-pills">
            <div className="metric-pill">
              <span className="metric-num">00.0k</span>
              <span className="metric-lbl">Events / sec</span>
            </div>
            <div className="metric-pill">
              <span className="metric-num">00%</span>
              <span className="metric-lbl">Retention lift</span>
            </div>
          </div>
          <div className="mockup-chart-bars">
            <div className="chart-bar h35" />
            <div className="chart-bar h50" />
            <div className="chart-bar h40" />
            <div className="chart-bar h75" />
            <div className="chart-bar h95 active" />
            <div className="chart-bar h60" />
            <div className="chart-bar h85" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsSection({ onRequestDemo, onCustomTalk }) {
  const { eyebrow, h2, products, customCard } = PRODUCTS_DATA;

  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const customCardRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (prefersReducedMotion()) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Staggered reveal for product cards
      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll('.product-card');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.95,
            stagger: 0.16,
            ease: EASINGS.power3Out,
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 82%',
              once: true,
            },
          }
        );

        // 2. Animated UI inside mockups
        // CRM mockup deal cards entrance
        const dealCards = gridRef.current.querySelectorAll('.mockup-deal-card');
        if (dealCards.length > 0) {
          gsap.fromTo(
            dealCards,
            { x: -22, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.12,
              ease: EASINGS.power3Out,
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 78%',
                once: true,
              },
            }
          );
        }

        // Insights mockup chart bars entrance (rising smoothly from base)
        const chartBars = gridRef.current.querySelectorAll('.chart-bar');
        if (chartBars.length > 0) {
          gsap.fromTo(
            chartBars,
            { scaleY: 0, transformOrigin: 'bottom' },
            {
              scaleY: 1,
              duration: 0.85,
              stagger: 0.08,
              ease: EASINGS.backOutSoft,
              scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 78%',
                once: true,
              },
            }
          );
        }
      }

      // 3. Custom Card reveal
      if (customCardRef.current) {
        gsap.fromTo(
          customCardRef.current,
          { opacity: 0, y: 35, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: EASINGS.power3Out,
            scrollTrigger: {
              trigger: customCardRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardMouseEnter = (e) => {
    if (prefersReducedMotion()) return;
    gsap.to(e.currentTarget, {
      y: -6,
      duration: 0.35,
      ease: EASINGS.power2Out,
      overwrite: 'auto',
    });
  };

  const handleCardMouseLeave = (e) => {
    if (prefersReducedMotion()) return;
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.35,
      ease: EASINGS.power2Out,
      overwrite: 'auto',
    });
  };

  return (
    <section id="products" ref={sectionRef} className="content-section" aria-labelledby="products-heading">
      <div className="section-container">
        <SectionHeading id="products-heading" eyebrow={eyebrow} title={h2} />

        {/* 2-Column Product Cards */}
        <div ref={gridRef} className="products-grid">
          {products.map((prod) => (
            <article
              key={prod.id}
              className="product-card"
              onMouseEnter={handleCardMouseEnter}
              onMouseLeave={handleCardMouseLeave}
            >
              {/* Product Mockup Stage */}
              <ProductMockup type={prod.id} hue={prod.hue} />

              {/* Product Details */}
              <div className="product-card-content">
                <div className="product-status-row">
                  <span className="status-badge-blue">{prod.status}</span>
                  <span className="product-category-label">{prod.category}</span>
                </div>

                <h3 className="product-name">{prod.name}</h3>
                <p className="product-promise">{prod.promise}</p>
                <p className="product-built-for">
                  <span className="built-for-label">Built for:</span> {prod.builtFor}
                </p>

                <ul className="product-features-list" aria-label={`Key features of ${prod.name}`}>
                  {prod.features.map((feat, fIdx) => (
                    <li key={fIdx} className="product-feature-item">
                      <svg
                        className="feature-check-icon"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3b82f6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="product-card-actions">
                  <button
                    type="button"
                    className="pill-btn pill-btn-white"
                    onClick={() => onRequestDemo(prod.name)}
                  >
                    Request a demo
                  </button>
                  <button
                    type="button"
                    className="pill-btn pill-btn-ghost"
                    onClick={() => {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Full-width "Need something custom?" Card */}
        <div ref={customCardRef} className="custom-product-card">
          <div className="custom-card-left">
            <h3 className="custom-card-title">{customCard.title}</h3>
            <p className="custom-card-desc">{customCard.description}</p>
          </div>
          <div className="custom-card-right">
            <button
              type="button"
              className="pill-btn pill-btn-white"
              onClick={onCustomTalk}
            >
              {customCard.actionText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
