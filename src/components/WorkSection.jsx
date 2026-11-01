import React, { useState, useRef, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import { WORK_DATA } from '../content';
import { gsap, ScrollTrigger, EASINGS, prefersReducedMotion } from '../lib/gsap';

export default function WorkSection({ onOpenCaseStudy, onStartProject }) {
  const { eyebrow, h2, filterChips, projects } = WORK_DATA;
  const [activeFilter, setActiveFilter] = useState('All');
  const [renderedFilter, setRenderedFilter] = useState('All');

  const sectionRef = useRef(null);
  const chipsRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const footerBtnRef = useRef(null);
  const isFirstMount = useRef(true);

  const filteredProjects = renderedFilter === 'All'
    ? projects
    : projects.filter((p) => {
        if (!p.category) return false;
        const normFilter = renderedFilter.trim().toLowerCase();
        const normCat = p.category.trim().toLowerCase();
        if (normCat === normFilter) return true;
        if (Array.isArray(p.tags) && p.tags.some((t) => t.trim().toLowerCase() === normFilter)) {
          return true;
        }
        return false;
      });

  // Initial scroll-triggered reveal
  useEffect(() => {
    if (!sectionRef.current) return;

    if (prefersReducedMotion()) {
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Filter chips staggered entrance
      if (chipsRef.current) {
        const chips = chipsRef.current.querySelectorAll('.filter-chip');
        gsap.fromTo(
          chips,
          { opacity: 0, y: 15, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: EASINGS.power3Out,
            scrollTrigger: {
              trigger: chipsRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }

      // 2. Initial projects grid entrance
      if (cardsContainerRef.current) {
        const cards = cardsContainerRef.current.querySelectorAll('article');
        gsap.fromTo(
          cards,
          { opacity: 0, y: 48, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            stagger: 0.09,
            ease: EASINGS.power3Out,
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: 'top 84%',
              once: true,
            },
          }
        );
      }

      // 3. Footer button entrance
      if (footerBtnRef.current) {
        gsap.fromTo(
          footerBtnRef.current,
          { opacity: 0, y: 22, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: EASINGS.power3Out,
            scrollTrigger: {
              trigger: footerBtnRef.current,
              start: 'top 92%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle filter switching with smooth GSAP transition
  const handleFilterChange = (chip) => {
    if (chip === activeFilter) return;
    setActiveFilter(chip);

    if (prefersReducedMotion() || !cardsContainerRef.current) {
      setRenderedFilter(chip);
      return;
    }

    const cards = cardsContainerRef.current.querySelectorAll('article');
    gsap.to(cards, {
      opacity: 0,
      y: 14,
      scale: 0.98,
      duration: 0.2,
      stagger: 0.02,
      ease: EASINGS.power2Out,
      onComplete: () => {
        setRenderedFilter(chip);
      },
    });
  };

  // Animate newly rendered cards in after filter changes
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }

    if (prefersReducedMotion() || !cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.querySelectorAll('article');
    gsap.fromTo(
      cards,
      { opacity: 0, y: 28, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.05,
        ease: EASINGS.power3Out,
      }
    );
  }, [renderedFilter]);

  const handleCardMouseEnter = (e) => {
    if (prefersReducedMotion()) return;
    const card = e.currentTarget;
    gsap.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.35,
      ease: EASINGS.power2Out,
      overwrite: 'auto',
    });
  };

  const handleCardMouseLeave = (e) => {
    if (prefersReducedMotion()) return;
    const card = e.currentTarget;
    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: EASINGS.power2Out,
      overwrite: 'auto',
    });
  };

  return (
    <section id="work" ref={sectionRef} className="content-section" aria-labelledby="work-heading">
      <div className="section-container">
        <SectionHeading id="work-heading" eyebrow={eyebrow} title={h2} />

        {/* Filter Chips */}
        <div ref={chipsRef} className="filter-chips-bar" role="tablist" aria-label="Filter client projects">
          {filterChips.map((chip) => {
            const isSelected = activeFilter === chip;
            return (
              <button
                key={chip}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`filter-chip ${isSelected ? 'is-selected' : ''}`}
                onClick={() => handleFilterChange(chip)}
              >
                {chip}
              </button>
            );
          })}
        </div>

        {/* Projects Grid Container with Scroll Reveal */}
        <div className="work-grid-wrapper is-revealed">
          <div
            ref={cardsContainerRef}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                onClick={() => onOpenCaseStudy(project)}
                onMouseEnter={handleCardMouseEnter}
                onMouseLeave={handleCardMouseLeave}
                tabIndex={0}
                role="button"
                aria-label={`View case study: ${project.name} for ${project.client}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenCaseStudy(project);
                  }
                }}
                className="group relative flex h-[370px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-[#050507] p-7 text-white shadow-xl border border-white/10"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  '--delay-index': idx
                }}
              >
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
                  style={{
                    background: project.cssGradient,
                    opacity: 0.82
                  }}
                />

                {/* Content Container */}
                <div className="relative z-10 flex h-full flex-col justify-between">
                  {/* Top Section: Category, Metric & Title */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-xs font-semibold uppercase tracking-widest text-white/90">
                        {project.category} • {project.industry}
                      </p>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/50 border border-white/20 text-white backdrop-blur-sm">
                        {project.metric}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{project.name}</h3>
                    <p className="mt-2 text-sm text-white/85 line-clamp-2 leading-relaxed font-medium">
                      {project.outcome}
                    </p>
                  </div>

                  {/* Bottom Section: Read / View Button & Client */}
                  <div className="flex items-center justify-between mt-auto pt-4">
                    <span
                      className="inline-flex items-center gap-2 rounded-md bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-md transition-all duration-300 group-hover:bg-white/30 text-white"
                    >
                      View case study <span aria-hidden="true">→</span>
                    </span>
                    <span className="text-xs text-white/80 font-medium">
                      {project.client}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* End of Section Ghost Button */}
        <div ref={footerBtnRef} className="work-footer-action">
          <button
            type="button"
            className="pill-btn pill-btn-ghost"
            onClick={onStartProject}
          >
            Start a project
          </button>
        </div>
      </div>
    </section>
  );
}
