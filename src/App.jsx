import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import { ShaderButtons, PredictiveArcCanvas, AnimatedTopDock } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import ReelCarousel from './components/ReelCarousel';
import IntroAnimation from './components/IntroAnimation';
import { usePerformanceTier } from './hooks/usePerformanceTier';

const ProjectModal = lazy(() => import('./components/ProjectModal'));

export default function App() {
  const [introActive, setIntroActive] = useState(() => {
    try {
      return !sessionStorage.getItem('kaivex_intro_seen');
    } catch (_) {
      return true;
    }
  });
  const [logoDocked, setLogoDocked] = useState(() => {
    try {
      return !!sessionStorage.getItem('kaivex_intro_seen');
    } catch (_) {
      return false;
    }
  });
  const [introTransitioned, setIntroTransitioned] = useState(() => {
    try {
      return !!sessionStorage.getItem('kaivex_intro_seen');
    } catch (_) {
      return false;
    }
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('project');

  const frameRef = useRef(null);
  const targetLogoRef = useRef(null);

  // Performance tier system and governor
  const { tier, recordFrame } = usePerformanceTier(!introActive);

  // If intro already seen in this session, trigger entrance immediately
  useEffect(() => {
    if (!introActive) {
      triggerEntrance();
    }
  }, []);

  // Listen for button clicks from within ThreeUI iframe
  useEffect(() => {
    const handleMsg = (e) => {
      if (e.data?.type === 'start-project' || e.data?.action === 'upload') {
        openProjectModal('project');
      }
    };
    window.addEventListener('message', handleMsg, { passive: true });
    return () => window.removeEventListener('message', handleMsg);
  }, []);

  // Trigger page elements entrance animation (opacity & transform only, zero blur churn)
  const triggerEntrance = () => {
    const E = 'cubic-bezier(.2,.8,.2,1)';
    const go = (el, kf, delay, dur = 750) => {
      if (!el) return;
      el.style.willChange = 'transform, opacity';
      const anim = el.animate(kf, { duration: dur, delay, easing: E, fill: 'backwards' });
      anim.onfinish = () => {
        el.style.willChange = 'auto';
      };
    };

    const topEl = document.querySelector('.top');
    const h1Spans = document.querySelectorAll('#h1 span');
    const subEl = document.getElementById('sub');
    const rowwrapEl = document.getElementById('rowwrap');
    const ringEl = document.getElementById('ring');
    const paths = document.querySelectorAll('svg.ink path');
    const n1El = document.getElementById('n1');
    const n2El = document.getElementById('n2');

    go(topEl, [{ opacity: 0, transform: 'translateY(-24px)' }, { opacity: 1, transform: 'none' }], 0);
    h1Spans.forEach((s, i) =>
      go(
        s,
        [
          { opacity: 0, transform: 'translateY(40px)' },
          { opacity: 1, transform: 'none' }
        ],
        180 + i * 140,
        900
      )
    );
    go(subEl, [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'none' }], 550);
    go(rowwrapEl, [{ opacity: 0, transform: 'translateY(110px)' }, { opacity: 1, transform: 'none' }], 450, 1100);
    go(ringEl, [{ opacity: 0, transform: 'scale(.7)' }, { opacity: 1, transform: 'none' }], 850, 650);

    paths.forEach((p, i) =>
      go(p, [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], 1050 + i * 180, 700)
    );

    go(n1El, [{ opacity: 0 }, { opacity: 1 }], 1350, 600);
    go(n2El, [{ opacity: 0 }, { opacity: 1 }], 1550, 600);
  };

  const handleTransitionStart = () => {
    setIntroTransitioned(true);
    triggerEntrance();
  };

  const handleIntroComplete = () => {
    setLogoDocked(true);
    setIntroActive(false);
    try {
      sessionStorage.setItem('kaivex_intro_seen', 'true');
    } catch (_) {}
  };

  const openProjectModal = (type = 'project') => {
    setModalType(type);
    setModalOpen(true);
  };

  // Detect activation inside the button iframe
  useEffect(() => {
    const handleBlur = () => {
      setTimeout(() => {
        if (document.activeElement && document.activeElement.tagName === 'IFRAME') {
          setTimeout(() => {
            openProjectModal('project');
          }, 850);
        }
      }, 50);
    };

    window.addEventListener('blur', handleBlur, { passive: true });
    return () => window.removeEventListener('blur', handleBlur);
  }, []);

  const carouselActive = !introActive || introTransitioned;

  return (
    <>
      {/* Background: ThreeUI PredictiveArcCanvas (Signal Particles) */}
      <div className="site-background" aria-hidden="true">
        <PredictiveArcCanvas
          variant="signal-particles"
          mode="dark"
          speed={1.00}
          hue={0}
          saturation={1.00}
          brightness={1.00}
        />
      </div>

      {/* Opening Video Animation with Center-to-Corner Flying Logo */}
      {introActive && (
        <IntroAnimation
          targetLogoRef={targetLogoRef}
          onTransitionStart={handleTransitionStart}
          onComplete={handleIntroComplete}
        />
      )}

      {/* Main Page Content: kept inert while intro overlay is opaque */}
      <main
        className="frame"
        id="frame"
        ref={frameRef}
        inert={introActive && !introTransitioned ? '' : undefined}
      >
        <header className="top">
          <a
            className="a logo"
            href="#"
            style={{ '--x': 37, '--y': 24 }}
            aria-label="Kaivex Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            title="Kaivex Home"
          >
            <img
              ref={targetLogoRef}
              src="/logo-icon.webp"
              alt="Kaivex Icon"
              className="logo-mark"
              style={{
                opacity: logoDocked || !introActive ? 1 : 0,
                transition: 'opacity 0.25s ease-in',
              }}
            />
            <img
              src="/logo-text.webp"
              alt="Kaivex"
              className="logo-wordmark"
              style={{
                opacity: logoDocked || !introActive ? 1 : 0,
                transition: 'opacity 0.4s ease-in 0.1s',
              }}
            />
          </a>

          {/* Centered ThreeUI AnimatedTopDock (Sable variant) */}
          <div className="a nav-dock-wrap" style={{ '--x': 0, '--y': 22, '--w': '1440px' }}>
            <AnimatedTopDock
              variant="sable"
              proximity={140}
              spring={0.19}
              damping={0.70}
              widthGrowth={20}
              heightGrowth={18}
              drop={4}
              onItemClick={(id) => {
                if (id === 'contact' || id === 'about') {
                  openProjectModal('talk');
                } else if (id === 'home' || id === 'services') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  openProjectModal('project');
                }
              }}
            />
          </div>
        </header>

        {/* Tiered 3D Curved Perspective Carousel with Video Reels */}
        <ReelCarousel
          frameRef={frameRef}
          tier={tier}
          active={carouselActive}
          onFrameDuration={recordFrame}
        />

        {/* Hero Content */}
        <h1 className="a" id="h1" style={{ '--x': 0, '--y': 160, '--w': '1440px' }}>
          <span>Your Next Big Thing.</span>
          <span>Our Next Build.</span>
        </h1>

        <p className="a sub" id="sub" style={{ '--x': 0, '--y': 388, '--w': '1440px' }}>
          No idea too ambitious.
        </p>

        {/* Hand-drawn ink SVG arrows and annotations */}
        <svg className="ink" viewBox="0 0 1440 1080" aria-hidden="true">
          <g className="slashes">
            <path pathLength="1" d="M268 421L289 380" />
            <path pathLength="1" d="M291 425L313 380" />
          </g>
          {/* Arrow pointing to "Built to scale" note */}
          <path className="beseen orange-stroke" pathLength="1" d="M1252 410C1344 420 1388 484 1352 548" />
          <path className="beseen orange-stroke" pathLength="1" d="M1334 532L1352 549L1367 530" />
          {/* Arrow pointing to "Let's talk" note */}
          <path className="zero-arrow orange-stroke" pathLength="1" d="M606 1004C630 1010 648 998 648 982" />
          <path className="zero-arrow orange-stroke" pathLength="1" d="M640 991L648 981L657 989" />
        </svg>

        {/* Note 1: "Built to scale" in vibrant logo orange */}
        <div
          className="a note beseen orange-note"
          id="n1"
          style={{ '--x': 1212, '--y': 310, transform: 'rotate(16deg)', cursor: 'pointer' }}
          onClick={() => openProjectModal('project')}
          title="Click to learn about scaling"
        >
          Built to<br />scale
        </div>

        {/* Note 2: "Let's talk" in vibrant logo orange */}
        <div
          className="a note zero orange-note"
          id="n2"
          style={{ '--x': 521, '--y': 937, transform: 'rotate(24deg)', cursor: 'pointer' }}
          onClick={() => openProjectModal('talk')}
          title="Click to talk with us"
        >
          Let’s talk
        </div>

        {/* CTA: Polished Chrome Upload Shader Button from ThreeUI */}
        <div className="a cta-wrap" id="ring" style={{ '--x': 0, '--y': 880, '--w': '1440px' }}>
          <div
            className="shader-frame cta-shader-btn"
            onClick={() => openProjectModal('project')}
            title="Start a Project"
          >
            <ShaderButtons
              variant="chrome-upload"
              mode="dark"
              hue={0}
              saturation={1.00}
              brightness={1.00}
            />
          </div>
        </div>
      </main>

      {/* Code-split Consultation & Project Modal */}
      {modalOpen && (
        <Suspense fallback={null}>
          <ProjectModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            initialType={modalType}
          />
        </Suspense>
      )}
    </>
  );
}
