import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import { PredictiveArcCanvas } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";
import CinemaHeroSection from './components/CinemaHeroSection';
import IntroAnimation from './components/IntroAnimation';
import StickyNavbar from './components/StickyNavbar';
import { usePerformanceTier } from './hooks/usePerformanceTier';
import { gsap, EASINGS, prefersReducedMotion } from './lib/gsap';

const ServicesSection = lazy(() => import('./components/ServicesSection'));
const WorkSection = lazy(() => import('./components/WorkSection'));
const ProductsSection = lazy(() => import('./components/ProductsSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const CaseStudyModal = lazy(() => import('./components/CaseStudyModal'));
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

  // Prefetch below-the-fold sections during browser idle time so they feel instant
  useEffect(() => {
    const prefetch = () => {
      import('./components/ServicesSection');
      import('./components/WorkSection');
      import('./components/ProductsSection');
      import('./components/AboutSection');
      import('./components/ContactSection');
      import('./components/CaseStudyModal');
    };
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(prefetch, { timeout: 3000 });
    } else {
      setTimeout(prefetch, 1800);
    }
  }, []);

  // Trigger page elements entrance animation via GSAP Master Timeline
  const triggerEntrance = () => {
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({ defaults: { ease: EASINGS.power3Out } });

    const topBar = document.querySelector('.hero-nav-bar') || document.querySelector('.cinema-top-nav') || document.querySelector('.imw-nav-bar');
    const headline = document.querySelector('.cinema-headline-text') || document.querySelector('.hero-shader-frame') || document.querySelector('.imw-headline');
    const carousel = document.querySelector('.cinema-carousel-viewport') || document.querySelector('.imw-plane');
    const manifesto = document.querySelector('.cinema-manifesto-text') || document.querySelector('.imw-subheadline');
    const stepper = document.querySelector('.cinema-stepper-wrap');
    const hud = document.querySelector('.cinema-bottom-hud');

    if (topBar) {
      tl.fromTo(topBar, { opacity: 0, y: -24 }, { opacity: 1, y: 0, duration: 0.8 }, 0);
    }
    if (headline) {
      tl.fromTo(headline, { opacity: 0, y: 32, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.95 }, 0.15);
    }
    if (carousel) {
      tl.fromTo(carousel, { opacity: 0, scale: 0.92, y: 36 }, { opacity: 1, scale: 1, y: 0, duration: 1.15, ease: EASINGS.power2Out }, 0.25);
    }
    if (manifesto) {
      tl.fromTo(manifesto, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, 0.45);
    }
    if (stepper) {
      tl.fromTo(stepper, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6 }, 0.55);
    }
    if (hud) {
      tl.fromTo(hud, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0.65);
    }
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
  // Scroll reveal observer (threshold .12, once, observing dynamically mounted elements)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observedSet = new WeakSet();
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

    const scanAndObserve = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (!observedSet.has(el)) {
          observedSet.add(el);
          observer.observe(el);
        }
      });
    };

    scanAndObserve();

    const mutObserver = new MutationObserver(scanAndObserve);
    mutObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutObserver.disconnect();
    };
  }, []);

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

      {/* Hero Section Container with 3D Curved Cinema Carousel */}
      <section id="hero" className="hero-section">
        <CinemaHeroSection
          onOpenCaseStudy={(project) => setActiveCaseStudy(project)}
          onOpenModal={(type, service, msg) => openProjectModal(type, service, msg)}
        />
      </section>

      {/* Five New Content Sections in exact order with Suspense */}
      <Suspense fallback={null}>
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
      </Suspense>

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
