import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import { GetStartedButton, PredictiveArcCanvas, AnimatedTopDock } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import ReelCarousel from './components/ReelCarousel';
import IntroAnimation from './components/IntroAnimation';
import StickyNavbar from './components/StickyNavbar';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import CaseStudyModal from './components/CaseStudyModal';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
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
  const [initialService, setInitialService] = useState(null);
  const [initialMessage, setInitialMessage] = useState('');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const [stickyVisible, setStickyVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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

  const openProjectModal = (type = 'project', service = null, message = '') => {
    setModalType(type);
    setInitialService(service);
    setInitialMessage(message);
    setModalOpen(true);
  };

  // Scroll reveal observer (threshold .12, once)
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (!revealElements.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealElements.forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [introActive]);

  // Section observer for active nav highlighting and hero sticky observer
  useEffect(() => {
    const heroEl = document.getElementById('hero');
    const sectionIds = ['services', 'work', 'products', 'about', 'contact'];
    const sectionElements = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    // Hero observer for sticky navbar: fades in once hero leaves viewport
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        // When hero is not intersecting or less than 20% visible, show sticky bar
        setStickyVisible(!entry.isIntersecting || entry.intersectionRatio < 0.2);
      },
      { threshold: [0, 0.2, 1] }
    );

    if (heroEl) heroObserver.observe(heroEl);

    // Active section highlight observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: 0.1 }
    );

    sectionElements.forEach((el) => sectionObserver.observe(el));

    return () => {
      heroObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  // Listen for clicks on the ThreeUI GetStartedButton iframe
  useEffect(() => {
    let frameHovered = false;
    const getFrame = () => document.querySelector('.cta-get-started-btn');

    const onEnter = () => { frameHovered = true; };
    const onLeave = () => { frameHovered = false; };

    const frame = getFrame();
    frame?.addEventListener('mouseenter', onEnter);
    frame?.addEventListener('mouseleave', onLeave);

    const handleBlur = () => {
      setTimeout(() => {
        if (frameHovered || (document.activeElement && document.activeElement.tagName === 'IFRAME')) {
          openProjectModal('project');
          window.focus();
          if (document.activeElement) document.activeElement.blur();
        }
      }, 10);
    };

    window.addEventListener('blur', handleBlur);
    return () => {
      frame?.removeEventListener('mouseenter', onEnter);
      frame?.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('blur', handleBlur);
    };
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

      {/* Sticky Glass Top Bar */}
      <StickyNavbar
        activeSection={activeSection}
        onOpenModal={(type) => openProjectModal(type)}
        visible={stickyVisible}
      />

      {/* Opening Video Animation with Center-to-Corner Flying Logo */}
      {introActive && (
        <IntroAnimation
          targetLogoRef={targetLogoRef}
          onTransitionStart={handleTransitionStart}
          onComplete={handleIntroComplete}
        />
      )}

      {/* Hero Section Container */}
      <section id="hero" className="hero-section">
        <main
          className="frame"
          id="frame"
          ref={frameRef}
          inert={introActive && !introTransitioned ? '' : undefined}
        >
          <header className="top">
            <a
              className="a logo"
              href="#hero"
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
                  if (id === 'contact' || id === 'about' || id === 'services' || id === 'work' || id === 'products') {
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                      return;
                    }
                  }
                  if (id === 'home') {
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

          {/* CTA: ThreeUI <GetStartedButton /> */}
          <div className="a cta-wrap" id="ring" style={{ '--x': 0, '--y': 880, '--w': '1440px' }}>
            <div
              className="shader-frame cta-get-started-btn"
              onClick={() => openProjectModal('project')}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') openProjectModal('project'); }}
              role="button"
              tabIndex={0}
              title="Start Project"
            >
              <GetStartedButton />
            </div>
          </div>
        </main>
      </section>

      {/* Five New Content Sections in exact order */}
      <ServicesSection
        onOpenService={(service) => openProjectModal('project', service)}
        onStartProject={() => openProjectModal('project')}
      />
      
      <WorkSection
        onOpenCaseStudy={(project) => setActiveCaseStudy(project)}
        onStartProject={() => openProjectModal('project')}
      />

      <ProductsSection
        onRequestDemo={(prodName) => openProjectModal('project', null, `Requesting demo for ${prodName}`)}
        onCustomTalk={() => openProjectModal('talk')}
      />

      <AboutSection />

      <ContactSection onOpenModal={(type) => openProjectModal(type)} />

      {/* Case Study Dialog Modal */}
      <CaseStudyModal
        project={activeCaseStudy}
        isOpen={!!activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        onStartSimilar={(service) => openProjectModal('project', service)}
      />

      {/* Code-split Consultation & Project Modal */}
      {modalOpen && (
        <Suspense fallback={null}>
          <ProjectModal
            isOpen={modalOpen}
            onClose={() => {
              setModalOpen(false);
              setInitialService(null);
              setInitialMessage('');
            }}
            initialType={modalType}
            initialService={initialService}
            initialMessage={initialMessage}
          />
        </Suspense>
      )}
    </>
  );
}
