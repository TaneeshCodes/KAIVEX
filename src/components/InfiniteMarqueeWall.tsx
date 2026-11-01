"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion as checkReducedMotion } from "../lib/gsap";

export interface MarqueeTileItem {
  id?: string | number;
  url: string;
  alt?: string;
  title?: string;
  label?: string;
  tag?: string;
  videoUrl?: string;
  href?: string;
}

export interface InfiniteMarqueeWallProps {
  /** Array of items. If provided, distributed across columns. */
  items?: MarqueeTileItem[];
  /** Custom columns array, overriding automatic distribution. */
  columns?: MarqueeTileItem[][];
  /** Number of vertical columns (default: 5). */
  columnsCount?: number;
  /** Primary huge headline using mix-blend-mode: difference. */
  headline?: React.ReactNode;
  /** Small uppercase mono kicker tag above headline. */
  kicker?: React.ReactNode;
  /** Secondary subtitle or copy below headline. */
  subheadline?: React.ReactNode;
  /** Call-to-action button text. */
  ctaText?: string;
  /** Call-to-action click handler. */
  onCtaClick?: () => void;
  /** Call-to-action href link. */
  ctaHref?: string;
  /** Top overlay slot (e.g. navigation, logo). */
  topSlot?: React.ReactNode;
  /** Bottom overlay slot (e.g. metrics, badges). */
  bottomSlot?: React.ReactNode;
  /** Base scroll speed in pixels per frame (default: 0.75). */
  speed?: number;
  /** Speed multiplier when pointer hovers over the wall (default: 0.18). */
  hoverSpeedRatio?: number;
  /** Max degrees of tilt added by pointer position (default: 12). */
  tiltStrength?: number;
  /** Base 3D X rotation angle in degrees (default: 28). */
  baseRotateX?: number;
  /** Base 3D Z rotation angle in degrees (default: -14). */
  baseRotateZ?: number;
  /** 3D Perspective in pixels (default: 1200). */
  perspective?: number;
  /** Additional container CSS class. */
  className?: string;
  /** Additional container inline styles. */
  style?: React.CSSProperties;
}

// Curated default photography & local KAIVEX tech assets
const DEFAULT_ITEMS: MarqueeTileItem[] = [
  // Column 1
  {
    url: "/services/lead-management-440.webp",
    alt: "Lead Management CRM Architecture",
    label: "01 • CRM ENGINE",
    title: "Lead Management",
    tag: "Sub-second Routing"
  },
  {
    url: "/work/project-1.webp",
    alt: "Synapse Digital Experience",
    label: "FINTECH CORE",
    title: "Synapse OS",
    tag: "Enterprise Edge"
  },
  {
    url: "/services/ai-ml-440.webp",
    alt: "Artificial Intelligence & Neural Models",
    label: "04 • LLM PIPELINE",
    title: "Autonomous Agents",
    tag: "Inference Mesh"
  },
  {
    url: "/team/member-1.webp",
    alt: "Lead Architect",
    label: "SYSTEM ARCHITECT",
    title: "Kernel Engineering",
    tag: "Zero Overhead"
  },
  // Column 2
  {
    url: "/services/website-440.webp",
    alt: "Next-gen Edge Web Architecture",
    label: "02 • WEB RUNTIME",
    title: "Sub-second Web",
    tag: "SSR Edge Clusters"
  },
  {
    url: "/work/project-2.webp",
    alt: "Prism Cloud Console",
    label: "SAAS PLATFORM",
    title: "Prism Telemetry",
    tag: "Real-time Metrics"
  },
  {
    url: "/services/computer-vision-440.webp",
    alt: "Computer Vision Defect Rig",
    label: "06 • OPTICAL HUD",
    title: "Computer Vision",
    tag: "99.8% Precision"
  },
  {
    url: "/team/member-2.webp",
    alt: "Systems Lead",
    label: "INFRASTRUCTURE",
    title: "Cloud Operations",
    tag: "Sub-2h SLA"
  },
  // Column 3
  {
    url: "/services/app-440.webp",
    alt: "Cross-platform Mobile Engineering",
    label: "03 • NATIVE RUNTIME",
    title: "iOS & Android",
    tag: "120 FPS Motion"
  },
  {
    url: "/work/project-3.webp",
    alt: "Neural Telemetry Matrix",
    label: "AI ORCHESTRATION",
    title: "Tensor Fabric",
    tag: "Distributed Nodes"
  },
  {
    url: "/services/saas-440.webp",
    alt: "Multi-tenant Cloud Fabric",
    label: "05 • MULTI-TENANT",
    title: "SaaS Fabric",
    tag: "Global Edge"
  },
  {
    url: "/reels-poster.webp",
    alt: "Kinetic Micro-UI Framework",
    label: "KINETIC PRISM",
    title: "Motion Systems",
    tag: "Zero Drama"
  },
  // Column 4
  {
    url: "/work/project-4.webp",
    alt: "Distributed Cloud Pipeline",
    label: "PIPELINE RUNNER",
    title: "Edge Worker Cluster",
    tag: "Zero Cold Starts"
  },
  {
    url: "/team/member-3.webp",
    alt: "Security & Scale Engineer",
    label: "SECURITY FABRIC",
    title: "Deterministic Auth",
    tag: "SOC-2 Ready"
  },
  {
    url: "/services/lead-management-440.webp",
    alt: "High-throughput Sales Funnels",
    label: "CONVERSION ARCHITECTURE",
    title: "Conversion Engine",
    tag: "Omnichannel Sync"
  },
  {
    url: "/services/computer-vision-440.webp",
    alt: "Optical Defect Telemetry Sensor",
    label: "SENSOR TELEMETRY",
    title: "Edge Inspection",
    tag: "Micron Accuracy"
  },
  // Column 5
  {
    url: "/work/project-5.webp",
    alt: "Global Edge CDN Network",
    label: "ENTERPRISE EDGE",
    title: "Global Mesh",
    tag: "18 POP Locations"
  },
  {
    url: "/work/project-6.webp",
    alt: "High-performance Database Layer",
    label: "DATA ENGINE",
    title: "Sub-millisecond DB",
    tag: "Event-sourced"
  },
  {
    url: "/services/website-440.webp",
    alt: "Kinetic Landing System",
    label: "EDITORIAL MOTION",
    title: "Motion UX",
    tag: "Micro-physics"
  },
  {
    url: "/team/member-4.webp",
    alt: "AI Research Lead",
    label: "NEURAL RESEARCH",
    title: "Model Quantization",
    tag: "Edge TPU"
  }
];

export const InfiniteMarqueeWall: React.FC<InfiniteMarqueeWallProps> = ({
  items = DEFAULT_ITEMS,
  columns: customColumns,
  columnsCount = 5,
  headline,
  kicker,
  subheadline,
  ctaText,
  ctaHref,
  onCtaClick,
  topSlot,
  bottomSlot,
  speed = 0.75,
  hoverSpeedRatio = 0.18,
  tiltStrength = 12,
  baseRotateX = 28,
  baseRotateZ = -14,
  perspective = 1200,
  className = "",
  style
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const planeRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const columnRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Split items into N columns
  const preparedColumns = React.useMemo(() => {
    if (customColumns && customColumns.length > 0) return customColumns;
    const cols: MarqueeTileItem[][] = Array.from({ length: columnsCount }, () => []);
    items.forEach((item, idx) => {
      cols[idx % columnsCount].push(item);
    });
    return cols;
  }, [items, customColumns, columnsCount]);

  // Column scroll physics refs
  const columnOffsets = useRef<number[]>([]);
  const columnHalfHeights = useRef<number[]>([]);
  const prefersReducedMotion = useRef(false);

  // Initialize column offsets with staggered starting values
  useEffect(() => {
    columnOffsets.current = preparedColumns.map((_, i) => -i * 120);
    columnHalfHeights.current = preparedColumns.map(() => 0);
  }, [preparedColumns]);

  // Scroll-linked hero depth parallax
  useEffect(() => {
    if (checkReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          y: -75,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom 45%",
            scrub: 0.5,
          },
        });
      }

      if (planeRef.current) {
        gsap.to(planeRef.current, {
          opacity: 0.35,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Measure half-height of each column track for seamless wrapping (cached, zero layout thrash)
  const measureColumns = () => {
    columnRefs.current.forEach((colEl, i) => {
      if (colEl) {
        const half = colEl.scrollHeight / 2;
        if (half > 50) {
          columnHalfHeights.current[i] = half;
        }
      }
    });
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mql.matches;
    const handleMql = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    mql.addEventListener("change", handleMql);

    // Initial measurements with staggered retries as images finish decoding
    measureColumns();
    const t1 = setTimeout(measureColumns, 80);
    const t2 = setTimeout(measureColumns, 350);
    const t3 = setTimeout(measureColumns, 1200);

    // ResizeObserver on the plane to keep half-heights accurate
    const ro = new ResizeObserver(() => {
      measureColumns();
    });
    if (planeRef.current) ro.observe(planeRef.current);

    // Direction and speed multiplier per column: alternate directions
    const speedMultipliers = [1.0, -1.18, 0.94, -1.25, 1.08, -1.12, 1.04];

    let animId: number;
    let lastTime = performance.now();

    // Fixed plane orientation
    if (planeRef.current) {
      planeRef.current.style.transform = `translate3d(-50%, -50%, 0) rotateX(${baseRotateX}deg) rotateY(0deg) rotateZ(${baseRotateZ}deg)`;
    }

    const loop = (now: number) => {
      const deltaMs = Math.min(now - lastTime, 40); // clamp delta to avoid huge jumps
      lastTime = now;
      const timeScale = deltaMs / 16.666;

      // Constant roll speed: completely unaffected, never paused or slowed down by mouse
      const effectiveBaseSpeed = prefersReducedMotion.current ? 0 : speed * timeScale;

      // Move and wrap each column track seamlessly using cached heights
      columnRefs.current.forEach((colEl, i) => {
        if (!colEl) return;
        let half = columnHalfHeights.current[i];
        if (!half || half <= 0) {
          half = colEl.scrollHeight / 2;
          if (half > 50) {
            columnHalfHeights.current[i] = half;
          } else {
            return;
          }
        }

        const multiplier = speedMultipliers[i % speedMultipliers.length];
        const step = effectiveBaseSpeed * multiplier;

        let y = (columnOffsets.current[i] || 0) + step;

        // Seamless infinite wrap around half-height
        while (y > 0) y -= half;
        while (y <= -half) y += half;

        columnOffsets.current[i] = y;
        colEl.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      mql.removeEventListener("change", handleMql);
      ro.disconnect();
    };
  }, [speed, baseRotateX, baseRotateZ]);

  return (
    <div
      ref={containerRef}
      className={`imw-root ${className}`}
      style={{
        ...style,
        perspective: `${perspective}px`
      }}
    >
      <style>{`
        /* Self-contained Infinite Marquee Wall Styles */
        @import url('https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600;700&display=swap');

        .imw-root {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: transparent;
          background-color: transparent;
          container-type: size;
          isolation: auto;
          user-select: none;
          font-family: 'Geist', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Ambient Sub-pixel Tech Background Grid */
        .imw-ambient-grid {
          display: none !important;
        }

        /* 3D Tilted Plane (~150% wide, 220% tall) - Fixed at exact angle */
        .imw-plane {
          position: absolute;
          left: 50%;
          top: 50%;
          width: clamp(140%, 160cqw, 190%);
          height: clamp(210%, 230cqh, 270%);
          transform-origin: center center;
          transform-style: preserve-3d;
          transform: translate3d(-50%, -50%, 0) rotateX(28deg) rotateY(0deg) rotateZ(-14deg);
          display: flex;
          gap: clamp(14px, 1.8cqw, 32px);
          justify-content: center;
          align-items: stretch;
          pointer-events: none;
          will-change: transform;
          z-index: 2;
        }

        /* Individual Vertical Column Track */
        .imw-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(14px, 1.8cqw, 32px);
          transform-style: preserve-3d;
          will-change: transform;
          contain: layout style;
        }

        /* 4:5 Photo Tile - Fixed rolling, lightweight GPU paint */
        .imw-tile {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: clamp(12px, 1.4cqw, 24px);
          overflow: hidden;
          background: #0c0d14;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.45);
          cursor: default;
          transform: translateZ(0);
          pointer-events: none;
          display: block;
          text-decoration: none;
          color: inherit;
          contain: paint;
        }

        .imw-tile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        /* Subtle Inner Glaze & Bottom Shadow for Labels */
        .imw-tile-glaze {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.06) 0%,
            transparent 35%,
            rgba(5, 6, 10, 0.4) 70%,
            rgba(5, 6, 10, 0.85) 100%
          );
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        /* Tile Micro Labels */
        .imw-tile-info {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: clamp(10px, 1.2cqw, 18px);
          display: flex;
          flex-direction: column;
          gap: 4px;
          pointer-events: none;
          transform: translateZ(1px);
        }

        .imw-tile-badge {
          font-family: 'Geist Mono', monospace;
          font-size: clamp(8px, 0.7cqw, 11px);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #ff5500;
          font-weight: 600;
          text-shadow: 0 1px 4px rgba(0,0,0,0.8);
        }

        .imw-tile-title {
          font-size: clamp(11px, 0.95cqw, 15px);
          font-weight: 600;
          color: #f5f5f7;
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-shadow: 0 2px 8px rgba(0,0,0,0.9);
        }

        /* Radial Vignette: Soft edge darkening that lets dynamic dots shine through */
        .imw-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 5;
          background: radial-gradient(
            ellipse 80% 80% at 50% 50%,
            transparent 25%,
            rgba(5, 6, 10, 0.25) 60%,
            rgba(5, 6, 10, 0.6) 100%
          );
        }

        /* Top Slot Container (e.g. Navigation) */
        .imw-top-slot {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 20;
          pointer-events: auto;
        }

        .imw-nav-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: clamp(16px, 2.8cqh, 32px) clamp(20px, 4cqw, 60px);
          width: 100%;
          position: relative;
        }

        .imw-nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          z-index: 25;
        }

        .imw-logo-mark {
          height: clamp(34px, 3.2cqw, 46px);
          width: clamp(34px, 3.2cqw, 46px);
          object-fit: contain;
          filter: drop-shadow(0 0 14px rgba(255, 85, 0, 0.45));
        }

        .imw-logo-wordmark {
          height: clamp(14px, 1.2cqw, 18px);
          width: auto;
          display: block;
        }

        @media (max-width: 640px) {
          .imw-logo-wordmark {
            display: none;
          }
        }

        .imw-nav-dock {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 25;
        }

        @media (max-width: 768px) {
          .imw-nav-dock {
            display: none;
          }
        }

        /* Huge Centered Difference Headline & Copy */
        .imw-overlay {
          position: absolute;
          inset: 0;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          text-align: center !important;
          padding: clamp(20px, 4cqw, 64px);
          pointer-events: none;
          z-index: 10;
        }

        .imw-overlay > * {
          order: initial;
        }

        /* Kicker Tag */
        .imw-kicker {
          order: 1 !important;
          font-family: 'Geist Mono', monospace !important;
          font-size: clamp(10px, 0.9cqw, 13px) !important;
          letter-spacing: 0.22em !important;
          text-transform: uppercase !important;
          font-weight: 600 !important;
          color: #ffffff !important;
          mix-blend-mode: difference !important;
          margin-bottom: clamp(12px, 1.8cqh, 24px) !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 10px !important;
        }

        .imw-kicker-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ffffff;
          display: inline-block;
        }

        /* Huge Centered Headline */
        h1.imw-headline {
          order: 2 !important;
          width: 100% !important;
          font-family: 'Geist', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
          font-size: clamp(32px, 7.2cqw, 108px) !important;
          font-weight: 850 !important;
          line-height: 0.94 !important;
          letter-spacing: clamp(-3px, -0.045cqw, -1.0px) !important;
          text-transform: uppercase !important;
          color: #ffffff !important;
          margin: 0 !important;
          padding: 0 !important;
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: clamp(4px, 0.6cqh, 12px) !important;
          pointer-events: none !important;
        }

        .shader-frame,
        .hero-shader-frame {
          position: relative !important;
          width: clamp(300px, 94cqw, 1160px) !important;
          height: clamp(140px, 25cqh, 250px) !important;
          margin: 0 auto !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          pointer-events: none !important;
          background: transparent !important;
        }

        .hero-shader-frame iframe {
          width: 100% !important;
          height: 100% !important;
          border: 0 !important;
          background: transparent !important;
          pointer-events: none !important;
        }

        h1.imw-headline span {
          display: block !important;
          color: #ffffff !important;
          mix-blend-mode: difference !important;
        }

        /* Subtitle Copy */
        p.imw-subheadline {
          order: 3 !important;
          font-size: clamp(13px, 1.3cqw, 19px) !important;
          font-weight: 450 !important;
          color: #ffffff !important;
          mix-blend-mode: difference !important;
          max-width: clamp(280px, 50cqw, 640px) !important;
          margin-top: clamp(16px, 2.2cqh, 32px) !important;
          margin-bottom: 0 !important;
          line-height: 1.55 !important;
          letter-spacing: -0.015em !important;
          padding: 0 !important;
        }

        /* CTA Wrap: pointer-events: auto & mix-blend-mode: normal */
        .imw-cta-wrap {
          order: 4 !important;
          margin-top: clamp(20px, 3.2cqh, 44px) !important;
          pointer-events: auto !important;
          mix-blend-mode: normal !important;
          z-index: 15 !important;
        }

        .imw-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: clamp(12px, 1.2cqw, 18px) clamp(24px, 2.4cqw, 40px);
          border-radius: 9999px;
          background: #f5f5f7;
          color: #05060a;
          font-family: 'Geist', sans-serif;
          font-size: clamp(13px, 1.0cqw, 16px);
          font-weight: 700;
          letter-spacing: -0.01em;
          text-decoration: none;
          border: none;
          cursor: pointer;
          box-shadow: 
            0 10px 30px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(255, 255, 255, 0.25),
            inset 0 1px 1px rgba(255, 255, 255, 0.8);
          transition: 
            transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.3s ease,
            background-color 0.2s ease,
            color 0.2s ease;
        }

        .imw-cta-btn:hover {
          transform: scale(1.05);
          background: #ffffff;
          box-shadow: 
            0 16px 45px rgba(0, 0, 0, 0.7),
            0 0 50px rgba(255, 85, 0, 0.4),
            inset 0 1px 2px rgba(255, 255, 255, 1);
        }

        .imw-cta-btn:active {
          transform: scale(0.97);
        }

        .imw-cta-arrow {
          width: clamp(14px, 1.1cqw, 18px);
          height: clamp(14px, 1.1cqw, 18px);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .imw-cta-btn:hover .imw-cta-arrow {
          transform: translateX(4px);
        }

        /* Bottom Slot Container */
        .imw-bottom-slot {
          position: absolute;
          bottom: clamp(16px, 2.5cqh, 36px);
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 15;
          pointer-events: auto;
        }

        @media (prefers-reduced-motion: reduce) {
          .imw-plane,
          .imw-col,
          .imw-tile,
          .imw-cta-btn {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>

      {/* Ambient Tech Grid */}
      <div className="imw-ambient-grid" aria-hidden="true" />

      {/* Top Slot (e.g. Navigation Header) */}
      {topSlot && <div className="imw-top-slot">{topSlot}</div>}

      {/* 3D Tilted Perspective Wall */}
      <div
        ref={planeRef}
        className="imw-plane"
        style={{
          transform: `translate3d(-50%, -50%, 0) rotateX(${baseRotateX}deg) rotateZ(${baseRotateZ}deg)`
        }}
      >
        {preparedColumns.map((colItems, colIdx) => {
          // Render the photo list twice for seamless wrapping
          const doubledList = [...colItems, ...colItems];

          return (
            <div
              key={`col-${colIdx}`}
              ref={(el) => {
                columnRefs.current[colIdx] = el;
              }}
              className="imw-col"
            >
              {doubledList.map((tile, tileIdx) => {
                const uniqueKey = `col-${colIdx}-tile-${tileIdx}-${tile.id ?? tileIdx}`;
                const isFirstHalf = tileIdx < colItems.length;

                return (
                  <div
                    key={uniqueKey}
                    className="imw-tile"
                    aria-label={tile.title || tile.alt || `Photo ${tileIdx + 1}`}
                  >
                    <img
                      src={tile.url}
                      alt={tile.alt || tile.title || "Project preview"}
                      className="imw-tile-img"
                      loading="eager"
                      decoding="async"
                      onLoad={measureColumns}
                    />
                    <div className="imw-tile-glaze" />
                    {(tile.label || tile.title) && (
                      <div className="imw-tile-info">
                        {tile.label && <span className="imw-tile-badge">{tile.label}</span>}
                        {tile.title && <h4 className="imw-tile-title">{tile.title}</h4>}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Radial Vignette */}
      <div className="imw-vignette" aria-hidden="true" />

      {/* Centered Huge Difference Headline & Overlay */}
      <div ref={overlayRef} className="imw-overlay">
        {kicker && (
          <div className="imw-kicker">
            <span className="imw-kicker-dot" />
            <span>{kicker}</span>
            <span className="imw-kicker-dot" />
          </div>
        )}

        {headline && <h1 className="imw-headline">{headline}</h1>}

        {subheadline && <p className="imw-subheadline">{subheadline}</p>}

        {ctaText && (
          <div className="imw-cta-wrap">
            {ctaHref ? (
              <a href={ctaHref} className="imw-cta-btn">
                <span>{ctaText}</span>
                <svg
                  className="imw-cta-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            ) : (
              <button
                type="button"
                className="imw-cta-btn"
                onClick={onCtaClick}
              >
                <span>{ctaText}</span>
                <svg
                  className="imw-cta-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Bottom Slot */}
      {bottomSlot && <div className="imw-bottom-slot">{bottomSlot}</div>}
    </div>
  );
};

export default InfiniteMarqueeWall;
