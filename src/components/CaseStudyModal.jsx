import React, { useEffect, useRef } from 'react';

export default function CaseStudyModal({ project, isOpen, onClose, onStartSimilar }) {
  const modalRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    previouslyFocusedRef.current = document.activeElement;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus first focusable element inside modal
    const focusableElements = modalRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusableElements && focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      if (previouslyFocusedRef.current?.focus) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="modal-backdrop case-study-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        ref={modalRef}
        className="modal-card case-study-card"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close case study dialog"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Modal Header Art Area */}
        <div
          className="case-study-art-hero"
          style={{
            background: `radial-gradient(90% 60% at 50% 0%, hsl(${project.hue} 85% 60% / .5), transparent 70%), linear-gradient(165deg, hsl(${project.hue} 70% 34%), hsl(${project.hue + 25} 65% 11%))`
          }}
        >
          <div className="case-study-meta-top">
            <span className="case-study-industry">{project.industry}</span>
            <span className="case-study-client">{project.client}</span>
          </div>
          <h2 id="case-study-title" className="case-study-modal-title">
            {project.name}
          </h2>
          <p className="case-study-outcome-line">{project.outcome}</p>
        </div>

        {/* Case Study Content Blocks */}
        <div className="case-study-body">
          <div className="case-study-section-block">
            <h3 className="case-study-subheading">Challenge</h3>
            <p className="case-study-paragraph">{project.challenge}</p>
          </div>

          <div className="case-study-section-block">
            <h3 className="case-study-subheading">What we built</h3>
            <p className="case-study-paragraph">{project.whatWeBuilt}</p>
          </div>

          <div className="case-study-section-block">
            <h3 className="case-study-subheading">Result</h3>
            <p className="case-study-paragraph">{project.result}</p>
          </div>

          {/* Tech Stack Chips */}
          <div className="case-study-section-block">
            <h3 className="case-study-subheading">Tech stack</h3>
            <div className="tag-chips-row">
              {project.techStack.map((tech, idx) => (
                <span key={idx} className="tag-chip tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote if present */}
          {project.testimonial && (
            <blockquote className="case-study-quote-card">
              <p className="case-study-quote-text">“{project.testimonial.quote}”</p>
              <footer className="case-study-quote-author">
                <strong>{project.testimonial.author}</strong> — {project.testimonial.role}
              </footer>
            </blockquote>
          )}

          {/* Bottom Action */}
          <div className="case-study-actions">
            <button
              type="button"
              className="pill-btn pill-btn-white"
              onClick={() => {
                onClose();
                onStartSimilar(project.category || 'project');
              }}
            >
              Start a similar project →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
