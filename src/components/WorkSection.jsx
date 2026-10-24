import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { WORK_DATA } from '../content';

function WorkArtIcon({ category }) {
  const strokeProps = {
    width: '36',
    height: '36',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#ffffff',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };

  switch (category) {
    case 'Websites':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <rect x="2" y="3" width="20" height="18" rx="2" />
          <line x1="2" y1="8" x2="22" y2="8" />
          <polyline points="9 13 6 16 9 19" />
          <polyline points="15 13 18 16 15 19" />
        </svg>
      );
    case 'Apps':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
        </svg>
      );
    case 'AI / ML':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
          <circle cx="12" cy="12" r="3.5" />
        </svg>
      );
    case 'SaaS':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <polyline points="12 13 12 17" />
        </svg>
      );
    case 'Vision':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
        </svg>
      );
    default:
      return (
        <svg {...strokeProps} aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
        </svg>
      );
  }
}

export default function WorkSection({ onOpenCaseStudy, onStartProject }) {
  const { eyebrow, h2, filterChips, projects } = WORK_DATA;
  const [activeFilter, setActiveFilter] = useState('All');
  const [isFading, setIsFading] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    if (el.classList.contains('is-revealed')) {
      setIsRevealed(true);
      return;
    }
    const observer = new MutationObserver(() => {
      if (el.classList.contains('is-revealed')) {
        setIsRevealed(true);
        observer.disconnect();
      }
    });
    observer.observe(el, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const handleFilterChange = (chip) => {
    if (chip === activeFilter) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveFilter(chip);
      setIsFading(false);
    }, 150);
  };

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => {
        if (!p.category) return false;
        const normFilter = activeFilter.trim().toLowerCase();
        const normCat = p.category.trim().toLowerCase();
        if (normCat === normFilter) return true;
        if (Array.isArray(p.tags) && p.tags.some((t) => t.trim().toLowerCase() === normFilter)) {
          return true;
        }
        return false;
      });

  return (
    <section id="work" className="content-section" aria-labelledby="work-heading">
      <div className="section-container">
        <SectionHeading id="work-heading" eyebrow={eyebrow} title={h2} />

        {/* Filter Chips */}
        <div className="filter-chips-bar" role="tablist" aria-label="Filter client projects" data-reveal>
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
        <div
          ref={wrapperRef}
          className={`work-grid-wrapper ${isRevealed ? 'is-revealed' : ''}`}
          data-reveal
        >
          <div
            className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-200 ease-out ${
              isFading ? 'opacity-20' : 'opacity-100'
            }`}
          >
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                onClick={() => onOpenCaseStudy(project)}
                tabIndex={0}
                role="button"
                aria-label={`View case study: ${project.name} for ${project.client}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenCaseStudy(project);
                  }
                }}
                className="group relative flex h-[370px] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl bg-[#050507] p-7 text-white shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-2xl border border-white/10"
                style={{
                  backgroundImage: `url(${project.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  '--delay-index': idx
                }}
              >
                {/* Gradient Overlay matching ArticleCard style */}
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
        <div className="work-footer-action" data-reveal>
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
