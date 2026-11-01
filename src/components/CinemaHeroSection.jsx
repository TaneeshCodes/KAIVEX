import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TextAnimationCollection } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';
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
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    radius: typeof window !== 'undefined' && window.innerWidth < 640 ? 370 : 940,
    angleStep: typeof window !== 'undefined' && window.innerWidth < 640 ? 38 : 21,
  });

  const updateDimensions = useCallback(() => {
    if (!stageRef.current) return;
    const w = stageRef.current.clientWidth || window.innerWidth;
    let r = 940;
    let angle = 21;
    if (w < 640) {
      r = Math.min(460, Math.max(340, Math.round(w * 0.95)));
      angle = 38;
    } else if (w < 1024) {
      r = Math.min(740, Math.max(500, Math.round(w * 0.82)));
      angle = 25;
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

      {/* 2. Main Hero Stage: Headline + 3D Carousel evenly spaced */}
      <div className="cinema-hero-body">
        <div className="cinema-headline-wrap">
          <h1 className="sr-only">YOUR NEXT BIG THING, OUR NEXT BIG BUILD</h1>
          <div className="shader-frame hero-shader-frame">
            <TextAnimationCollection
              variant="threeui-intro"
              mode="dark"
              hue={0}
              saturation={1.00}
              brightness={1.00}
              text={"YOUR NEXT BIG THING,\nOUR NEXT BIG BUILD"}
            />
          </div>
        </div>

        {/* The 3D Cylindrical Curved Carousel of Project & Product Boxes */}
        <div ref={stageRef} className="cinema-carousel-viewport">
          <div className="cinema-carousel-cylinder">
            {SHOWCASE_ITEMS.map((item, idx) => {
              const N = SHOWCASE_ITEMS.length;
              let diff = ((idx - offset) % N + N) % N;
              if (diff > N / 2) diff -= N;

              const isMobile = stageDimensions.width < 640;
              const maxVisible = isMobile ? 2.2 : 3.4;
              const isVisible = Math.abs(diff) <= maxVisible;
              if (!isVisible) return null;

              const rad = (diff * stageDimensions.angleStep * Math.PI) / 180;
              let x = stageDimensions.radius * Math.sin(rad);
              let z = stageDimensions.radius * (Math.cos(rad) - 1);
              const rotY = diff * (isMobile ? stageDimensions.angleStep * 0.72 : stageDimensions.angleStep);

              // On mobile, elevate center card and push adjacent cards back cleanly
              if (isMobile) {
                if (Math.abs(diff) < 0.5) {
                  z += (1 - Math.abs(diff) * 2) * 28;
                } else {
                  z -= Math.min(36, Math.abs(diff) * 22);
                }
              }

              const scale = isMobile
                ? Math.max(1 - Math.abs(diff) * 0.16, 0.70)
                : Math.max(1 - Math.abs(diff) * 0.045, 0.72);
              const opacity = isMobile
                ? Math.max(1 - Math.pow(Math.abs(diff) / maxVisible, 2) * 0.9, 0.2)
                : Math.max(1 - Math.pow(Math.abs(diff) / maxVisible, 2) * 0.85, 0.15);
              const zIndex = Math.round(100 - Math.abs(diff) * 15);
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
          flex-shrink: 0;
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

        /* Central Stage Container: Evenly spaces Headline and 3D Carousel in the viewport */
        .cinema-hero-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          position: relative;
          z-index: 20;
          gap: clamp(20px, 3.8vh, 44px);
          margin: 0 auto;
          padding: clamp(8px, 1.5vh, 20px) 0;
        }

        /* Accessible Screen-reader Only Class */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        /* ThreeUI Animated Chromatic Wordmark Stage */
        .cinema-headline-wrap {
          text-align: center;
          margin: 0;
          z-index: 20;
          position: relative;
          padding: 0 16px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cinema-headline-wrap .shader-frame,
        .cinema-headline-wrap .hero-shader-frame {
          position: relative;
          width: clamp(320px, 92vw, 1180px);
          height: clamp(110px, 16vh, 195px);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          overflow: visible !important;
        }

        .cinema-headline-wrap .hero-shader-frame iframe {
          width: 100% !important;
          height: 100% !important;
          border: 0 !important;
          background: transparent !important;
        }

        /* 3D Cylindrical Curved Carousel Viewport */
        .cinema-carousel-viewport {
          position: relative;
          width: 100%;
          height: clamp(270px, 36vw, 430px);
          perspective: clamp(800px, 110vw, 1400px);
          perspective-origin: 50% 50%;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: grab;
          margin: 0;
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

        /* Inner Media Wrap: High-Contrast Opaque Matte Glass */
        .cinema-card-media-wrap {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          background: #0d0f17;
          background: linear-gradient(180deg, #161824 0%, #0c0d13 100%);
          border: 1px solid rgba(255, 255, 255, 0.13);
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.75);
          transition: transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.35s ease, box-shadow 0.35s ease;
        }

        .cinema-card-box.is-center .cinema-card-media-wrap {
          border-color: rgba(255, 255, 255, 0.28);
          box-shadow: 0 22px 50px rgba(0, 0, 0, 0.9), 0 0 32px rgba(224, 67, 31, 0.25);
        }

        .cinema-card-box:hover .cinema-card-media-wrap {
          border-color: rgba(255, 255, 255, 0.35);
          transform: scale(1.025);
          box-shadow: 0 24px 50px rgba(0, 0, 0, 0.9), 0 0 35px rgba(224, 67, 31, 0.3);
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
          .cinema-hero-root {
            padding: 12px 14px 18px;
            min-height: 100svh;
            justify-content: space-between;
          }
          .hero-nav-bar {
            padding: 4px 0 6px;
          }
          .cinema-hero-body {
            gap: clamp(10px, 2vh, 18px);
            margin: auto 0;
            padding: 0;
          }
          .cinema-headline-wrap {
            padding: 0 4px;
          }
          .cinema-headline-wrap .shader-frame,
          .cinema-headline-wrap .hero-shader-frame {
            width: 100% !important;
            max-width: 100% !important;
            height: clamp(86px, 12vh, 115px) !important;
          }
          .cinema-card-box {
            width: clamp(260px, 75vw, 305px);
            height: clamp(370px, 48vh, 430px);
          }
          .cinema-carousel-viewport {
            height: clamp(390px, 50vh, 450px);
            perspective: 900px;
          }
          .cinema-card-content {
            padding: 16px 14px;
          }
          .cinema-card-tag {
            font-size: 10px;
          }
          .cinema-card-metric {
            font-size: 9px;
            padding: 2px 7px;
          }
          .cinema-card-title {
            font-size: 17px;
            line-height: 1.2;
          }
          .cinema-card-desc {
            font-size: 11px;
            line-height: 1.35;
          }
          .cinema-view-pill {
            font-size: 10px;
            padding: 4px 10px;
          }
        }
      `}</style>
    </div>
  );
}
