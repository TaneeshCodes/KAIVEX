import React, { useState, useEffect, useRef, useCallback } from 'react';
import { WORK_DATA } from '../content';

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

// Curated showcase of projects and products built by the team
const SHOWCASE_ITEMS = [
  {
    id: 'synapse-os',
    type: 'project',
    projectKey: 'project-one',
    title: 'SYNAPSE OS',
    tag: 'FINTECH CORE',
    category: 'SaaS / Infrastructure',
    description: 'Sub-second event microservices & elastic transaction routing',
    imageUrl: '/work/project-1.webp',
    metric: '42ms SLA'
  },
  {
    id: 'prism-telemetry',
    type: 'project',
    projectKey: 'project-two',
    title: 'PRISM TELEMETRY',
    tag: 'AI / HEALTHCARE',
    category: 'Neural Models',
    description: 'HIPAA-compliant clinical triage & automated NLP pipeline',
    imageUrl: '/work/project-2.webp',
    metric: '99.4% Precision'
  },
  {
    id: 'kaivex-crm',
    type: 'product',
    title: 'KAIVEX CRM',
    tag: 'SALES ENGINE',
    category: 'Product Suite',
    description: 'Multi-channel webhook capture & algorithmic rep assignment',
    imageUrl: '/services/lead-management-440.webp',
    metric: 'Live System'
  },
  {
    id: 'autonomous-agents',
    type: 'project',
    projectKey: 'project-two',
    title: 'AUTONOMOUS AGENTS',
    tag: 'INFERENCE MESH',
    category: 'AI Pipeline',
    description: 'Distributed model quantization & human-in-the-loop review',
    imageUrl: '/services/ai-ml-440.webp',
    metric: 'Sub-2h Deploy'
  },
  {
    id: 'edge-storefront',
    type: 'project',
    projectKey: 'project-three',
    title: 'EDGE WEB RUNTIME',
    tag: 'E-COMMERCE',
    category: 'Web Architecture',
    description: 'Sub-second page transitions & edge caching with 100/100 CWV',
    imageUrl: '/work/project-3.webp',
    metric: '100/100 CWV'
  },
  {
    id: 'native-mobile',
    type: 'project',
    projectKey: 'project-four',
    title: 'NATIVE 120 FPS',
    tag: 'MOBILE RUNTIME',
    category: 'Cross-Platform',
    description: 'Offline-first dispatch engine with background state sync',
    imageUrl: '/work/project-4.webp',
    metric: 'Zero Latency'
  },
  {
    id: 'kaivex-insights',
    type: 'product',
    title: 'KAIVEX INSIGHTS',
    tag: 'EVENT TELEMETRY',
    category: 'Analytics OS',
    description: 'Predictive churn behavioral models with sub-second cohort queries',
    imageUrl: '/services/computer-vision-440.webp',
    metric: 'Beta 2.0'
  },
  {
    id: 'defect-vision',
    type: 'project',
    projectKey: 'project-five',
    title: 'DEFECT VISION RIG',
    tag: 'COMPUTER VISION',
    category: 'Optical Edge',
    description: 'High-speed camera telemetry & automated pneumatic rejection',
    imageUrl: '/work/project-5.webp',
    metric: '99.8% Precision'
  },
  {
    id: 'data-engine',
    type: 'project',
    projectKey: 'project-six',
    title: 'GLOBAL MESH DB',
    tag: 'DATA ENGINE',
    category: 'Distributed SaaS',
    description: 'High-throughput webhook ingestion & real-time enrichment',
    imageUrl: '/work/project-6.webp',
    metric: '00k RPS'
  },
  {
    id: 'cloud-fabric',
    type: 'service',
    title: 'SAAS FABRIC',
    tag: 'MULTI-TENANT',
    category: 'Cloud Engineering',
    description: 'Global edge clustering with zero cold starts and instant scaling',
    imageUrl: '/services/saas-440.webp',
    metric: 'Global Edge'
  }
];

export default function CinemaHeroSection({ onOpenCaseStudy, onOpenModal }) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);

  // Carousel physics state
  const [offset, setOffset] = useState(0);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastDragTimeRef = useRef(0);
  const lastDragXRef = useRef(0);
  const isHoveredRef = useRef(false);

  // Responsive stage measurements
  const [stageDimensions, setStageDimensions] = useState({
    width: 1200,
    radius: 940,
    angleStep: 21,
  });

  const updateDimensions = useCallback(() => {
    if (!stageRef.current) return;
    const w = stageRef.current.clientWidth || window.innerWidth;
    let r = 940;
    let angle = 21;
    if (w < 640) {
      r = 540;
      angle = 29;
    } else if (w < 1024) {
      r = 740;
      angle = 24;
    }
    setStageDimensions({ width: w, radius: r, angleStep: angle });
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // Main RAF animation loop: smooth auto-drift, inertia & friction
  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const loop = (now) => {
      const delta = Math.min(now - lastTime, 40) / 16.666;
      lastTime = now;

      if (!isDraggingRef.current) {
        if (Math.abs(velocityRef.current) > 0.0001) {
          offsetRef.current += velocityRef.current * delta;
          velocityRef.current *= Math.pow(0.92, delta);
        } else {
          if (!isHoveredRef.current) {
            offsetRef.current += 0.0028 * delta;
          }
        }
      }

      const N = SHOWCASE_ITEMS.length;
      offsetRef.current = ((offsetRef.current % N) + N) % N;
      setOffset(offsetRef.current);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Pointer drag controls (mouse & touch)
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragStartOffsetRef.current = offsetRef.current;
    lastDragXRef.current = dragStartXRef.current;
    lastDragTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - dragStartXRef.current;
    const now = performance.now();
    const dt = Math.max(now - lastDragTimeRef.current, 1);

    const instantaneousDelta = clientX - lastDragXRef.current;
    velocityRef.current = (-instantaneousDelta / 220) / (dt / 16.666);

    lastDragXRef.current = clientX;
    lastDragTimeRef.current = now;

    const sensitivity = stageDimensions.width < 640 ? 0.004 : 0.0028;
    offsetRef.current = dragStartOffsetRef.current - deltaX * sensitivity;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      offsetRef.current += (e.deltaX * 0.0018);
      velocityRef.current = e.deltaX * 0.002;
    }
  };

  const handleCardClick = (item, diff) => {
    if (Math.abs(diff) > 0.4) {
      offsetRef.current += diff;
      velocityRef.current = diff * 0.08;
      return;
    }

    if (item.type === 'project') {
      const foundProject = WORK_DATA.projects.find((p) => p.id === item.projectKey) || {
        id: item.id,
        name: item.title,
        client: 'Client Showcase',
        category: item.tag,
        outcome: item.description,
        imageUrl: item.imageUrl,
        whatWeBuilt: item.description,
        techStack: ['React', 'Next.js', 'TypeScript', 'Node.js'],
        testimonial: { quote: 'Engineered with exceptional performance and precision.', author: 'Technical Lead' }
      };
      onOpenCaseStudy?.(foundProject);
    } else {
      onOpenModal?.('project', null, `Inquiry regarding ${item.title} (${item.tag})`);
    }
  };

  const handleNavScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      velocityRef.current = 0.4;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      velocityRef.current = -0.4;
    }
  };

  // Stepper calculations: 3..2..1..0..1..2..3
  const stepperRatio = ((offset % 1) - 0.5) * 2;
  const markerOffsetPercent = (stepperRatio * 18);

  return (
    <div
      ref={containerRef}
      className="cinema-hero-root"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      aria-label="Interactive projects and products carousel"
    >
      {/* 1. Top Navigation Bar matching the rest of the site */}
      <header className="hero-nav-bar" role="banner" aria-label="Main navigation">
        <div className="hero-nav-container">
          {/* Brand / Logo */}
          <a
            href="#hero"
            className="sticky-nav-logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Kaivex Home"
          >
            <img src="/logo-icon.webp" alt="Kaivex" className="sticky-logo-img" width="28" height="28" />
            <span className="sticky-logo-text">KAIVEX</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="sticky-nav-links" aria-label="In-page sections">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="sticky-nav-link"
                onClick={(e) => handleNavScroll(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Button */}
          <div className="sticky-nav-actions">
            <button
              type="button"
              className="pill-btn pill-btn-white sticky-cta-btn"
              onClick={() => onOpenModal?.('project')}
            >
              Start a project
            </button>
          </div>
        </div>
      </header>

      {/* 2. Massive Display Headline */}
      <div className="cinema-headline-wrap">
        <h1 className="cinema-headline-text">
          <span className="cinema-headline-row">YOUR NEXT BIG THING,</span>
          <span className="cinema-headline-row">OUR NEXT BIG BUILD</span>
        </h1>
      </div>

      {/* 3. The 3D Cylindrical Curved Carousel of Project & Product Boxes */}
      <div ref={stageRef} className="cinema-carousel-viewport">
        <div className="cinema-carousel-cylinder">
          {SHOWCASE_ITEMS.map((item, idx) => {
            const N = SHOWCASE_ITEMS.length;
            let diff = ((idx - offset) % N + N) % N;
            if (diff > N / 2) diff -= N;

            const isVisible = Math.abs(diff) <= 3.4;
            if (!isVisible) return null;

            const rad = (diff * stageDimensions.angleStep * Math.PI) / 180;
            const x = stageDimensions.radius * Math.sin(rad);
            const z = stageDimensions.radius * (Math.cos(rad) - 1);
            const rotY = diff * stageDimensions.angleStep;
            const scale = Math.max(1 - Math.abs(diff) * 0.045, 0.72);
            const opacity = Math.max(1 - Math.pow(Math.abs(diff) / 3.4, 2) * 0.85, 0.15);
            const zIndex = Math.round(100 - Math.abs(diff) * 10);
            const isCenter = Math.abs(diff) < 0.5;

            return (
              <div
                key={item.id}
                className={`cinema-card-box ${isCenter ? 'is-center' : ''}`}
                style={{
                  transform: `translate3d(calc(-50% + ${x.toFixed(1)}px), -50%, ${z.toFixed(1)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(3)})`,
                  opacity: opacity.toFixed(3),
                  zIndex,
                }}
                onClick={() => handleCardClick(item, diff)}
                onMouseEnter={() => { isHoveredRef.current = true; }}
                onMouseLeave={() => { isHoveredRef.current = false; }}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}: ${item.tag}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleCardClick(item, diff);
                  }
                }}
              >
                {/* Media Image / Poster */}
                <div className="cinema-card-media-wrap">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="cinema-card-image"
                    loading="eager"
                    decoding="async"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="cinema-card-vignette" />

                  {/* Card Content Overlay */}
                  <div className="cinema-card-content">
                    <div className="cinema-card-header">
                      <span className="cinema-card-tag">{item.tag}</span>
                      <span className="cinema-card-metric">{item.metric}</span>
                    </div>

                    <div className="cinema-card-footer">
                      <h3 className="cinema-card-title">{item.title}</h3>
                      <p className="cinema-card-desc">{item.description}</p>
                      <div className="cinema-card-action-bar">
                        <span className="cinema-view-pill">
                          EXPLORE <span className="arrow" aria-hidden="true">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. Editorial Manifesto / Description below the carousel */}
      <div className="cinema-manifesto-wrap">
        <p className="cinema-manifesto-text">
          WE ARE EXPERTS IN THE ARCHITECTURE OF HIGH-PERFORMANCE SOFTWARE, AI PLATFORMS,
          AND BESPOKE DIGITAL PRODUCTS. WE CREATE SYSTEMS THAT CAPTIVATE AUDIENCES AROUND THE WORLD.
        </p>
      </div>

      {/* 5. Stepper Indicator */}
      <div className="cinema-stepper-wrap" aria-hidden="true">
        <div className="cinema-stepper-scale">
          <span className="step-num">3</span>
          <span className="step-dot">.</span>
          <span className="step-dot">.</span>
          <span className="step-num">2</span>
          <span className="step-dot">.</span>
          <span className="step-dot">.</span>
          <span className="step-num">1</span>
          <span className="step-dot">.</span>
          <span className="step-dot">.</span>
          <span className="step-num zero">0</span>
          <span className="step-dot">.</span>
          <span className="step-dot">.</span>
          <span className="step-num">1</span>
          <span className="step-dot">.</span>
          <span className="step-dot">.</span>
          <span className="step-num">2</span>
          <span className="step-dot">.</span>
          <span className="step-dot">.</span>
          <span className="step-num">3</span>
        </div>
        <div
          className="cinema-stepper-marker"
          style={{ transform: `translateX(${markerOffsetPercent}px)` }}
        >
          |
        </div>
      </div>

      {/* Subtle Bottom Fade blending into the rest of the site */}
      <div className="cinema-bottom-blend" aria-hidden="true" />

      <style>{`
        /* ============================================================
           SEAMLESS BLENDED CINEMA HERO SECTION
           ============================================================ */
        .cinema-hero-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          background: transparent !important;
          color: #f5f5f7;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px clamp(20px, 3.8vw, 64px) 36px;
          user-select: none;
          box-sizing: border-box;
          touch-action: pan-y;
        }

        /* Top Navigation Header matching StickyNavbar */
        .hero-nav-bar {
          position: relative;
          z-index: 35;
          width: 100%;
          padding: 8px 0;
        }

        .hero-nav-container {
          max-width: 1180px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 820px) {
          .hero-nav-container .sticky-nav-links {
            display: none;
          }
        }

        /* Massive Display Title */
        .cinema-headline-wrap {
          text-align: center;
          margin-top: clamp(10px, 1.8vh, 26px);
          margin-bottom: clamp(6px, 1vh, 16px);
          z-index: 20;
          position: relative;
          padding: 0 16px;
        }

        .cinema-headline-text {
          font-family: 'Inter Tight', 'Inter', -apple-system, sans-serif;
          font-weight: 900;
          font-size: clamp(24px, 4.3vw, 68px);
          line-height: 1.04;
          letter-spacing: clamp(0.5px, 0.1vw, 2px);
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
          padding: 0;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }

        .cinema-headline-row {
          display: block;
        }

        /* 3D Cylindrical Curved Carousel Viewport */
        .cinema-carousel-viewport {
          position: relative;
          width: 100%;
          height: clamp(260px, 34vw, 420px);
          perspective: clamp(800px, 110vw, 1400px);
          perspective-origin: 50% 50%;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          margin: clamp(8px, 1.5vh, 22px) 0;
        }

        .cinema-carousel-viewport:active {
          cursor: grabbing;
        }

        .cinema-carousel-cylinder {
          position: relative;
          width: 0;
          height: 0;
          transform-style: preserve-3d;
        }

        /* Individual Cylindrical Card Box */
        .cinema-card-box {
          position: absolute;
          top: 0;
          left: 0;
          width: clamp(180px, 20vw, 290px);
          height: clamp(240px, 28vw, 380px);
          transform-style: preserve-3d;
          transform-origin: center center;
          will-change: transform, opacity;
          cursor: pointer;
          transition: filter 0.3s ease;
        }

        .cinema-card-box.is-center {
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 24px rgba(224, 67, 31, 0.22));
        }

        /* Inner Media Wrap: Luxury Translucent Glass */
        .cinema-card-media-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(12, 13, 18, 0.75);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.6);
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .cinema-card-box:hover .cinema-card-media-wrap {
          border-color: rgba(255, 255, 255, 0.35);
          transform: scale(1.025);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.8), 0 0 30px rgba(224, 67, 31, 0.3);
        }

        .cinema-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Vignette on image */
        .cinema-card-vignette {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(9, 9, 11, 0.2) 0%,
            transparent 35%,
            rgba(9, 9, 11, 0.65) 65%,
            rgba(9, 9, 11, 0.95) 100%
          );
          pointer-events: none;
        }

        /* Card Overlay Content */
        .cinema-card-content {
          position: absolute;
          inset: 0;
          padding: clamp(14px, 1.4vw, 20px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          z-index: 5;
          pointer-events: none;
        }

        .cinema-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .cinema-card-tag {
          font-family: 'Geist Mono', monospace;
          font-size: clamp(9px, 0.75vw, 11px);
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ff6636;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
        }

        .cinema-card-metric {
          font-family: 'Geist Mono', monospace;
          font-size: clamp(8px, 0.65vw, 10px);
          background: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 99px;
          padding: 2px 7px;
          color: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(6px);
        }

        .cinema-card-footer {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .cinema-card-title {
          font-family: 'Inter Tight', sans-serif;
          font-size: clamp(14px, 1.25vw, 19px);
          font-weight: 800;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
          line-height: 1.15;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);
        }

        .cinema-card-desc {
          font-size: clamp(10px, 0.8vw, 12px);
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.35;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .cinema-card-action-bar {
          margin-top: 6px;
        }

        .cinema-view-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Geist Mono', monospace;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.12);
          padding: 3px 10px;
          border-radius: 99px;
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transition: background 0.2s, border-color 0.2s;
        }

        .cinema-card-box:hover .cinema-view-pill {
          background: rgba(255, 255, 255, 0.25);
          border-color: rgba(255, 255, 255, 0.4);
        }

        /* Editorial Manifesto / Subtitle */
        .cinema-manifesto-wrap {
          text-align: center;
          max-width: 680px;
          margin: clamp(6px, 1.2vh, 18px) auto 0;
          padding: 0 20px;
          z-index: 20;
          position: relative;
        }

        .cinema-manifesto-text {
          font-family: 'Geist Mono', 'Inter', monospace;
          font-size: clamp(10px, 0.8vw, 12.5px);
          font-weight: 500;
          line-height: 1.6;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.9);
        }

        /* Stepper: 3..2..1..0..1..2..3 */
        .cinema-stepper-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: clamp(6px, 1.2vh, 14px) auto 0;
          z-index: 20;
        }

        .cinema-stepper-scale {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Geist Mono', monospace;
          font-size: clamp(11px, 0.8vw, 13px);
          letter-spacing: 0.22em;
          color: rgba(255, 255, 255, 0.55);
          font-weight: 600;
        }

        .cinema-stepper-scale .step-num.zero {
          color: #ffffff;
          font-weight: 700;
        }

        .cinema-stepper-scale .step-dot {
          color: rgba(255, 255, 255, 0.3);
        }

        .cinema-stepper-marker {
          font-family: 'Geist Mono', monospace;
          font-size: 14px;
          font-weight: 700;
          color: #ff6636;
          line-height: 1;
          margin-top: -2px;
          transition: transform 0.08s linear;
        }

        /* Bottom Blend Gradient */
        .cinema-bottom-blend {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, transparent, var(--bg, #09090b));
          pointer-events: none;
          z-index: 5;
        }

        @media (max-width: 640px) {
          .cinema-headline-text {
            font-size: 34px;
          }
          .cinema-manifesto-text {
            font-size: 9.5px;
            letter-spacing: 0.08em;
          }
        }
      `}</style>
    </div>
  );
}
