import React, { useEffect, useRef, useState } from 'react';
import SectionHeading from './SectionHeading';
import { ABOUT_DATA } from '../content';

export default function AboutSection() {
  const { eyebrow, h2, story, values, timeline, techStack, stats, team, testimonials } = ABOUT_DATA;
  const timelineRef = useRef(null);
  const [timelineProgress, setTimelineProgress] = useState(0);

  // Monitor timeline scroll progress to fill connecting hairline blue
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const total = rect.height + windowHeight;
        const current = windowHeight - rect.top;
        const ratio = Math.min(Math.max(current / total, 0), 1);
        setTimelineProgress(ratio);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="content-section" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeading id="about-heading" eyebrow={eyebrow} title={h2} />

        {/* Block A: Story */}
        <div className="about-story-grid" data-reveal>
          <div className="about-story-text">
            {story.paragraphs.map((p, idx) => (
              <p key={idx} className="about-story-p">
                {p}
              </p>
            ))}
          </div>

          <div className="about-symbol-card">
            <div className="symbol-visual-wrap">
              <img
                src="/logo-icon.webp"
                alt="Kaivex Mark"
                className="about-logo-symbol"
                width="96"
                height="96"
              />
              <span className="symbol-microcopy">{story.microcopy}</span>

              {/* Handwritten note & Hand-drawn arrow */}
              <div className="handwritten-annotation" aria-hidden="true">
                <span className="handwritten-text">{story.note}</span>
                <svg
                  className="handdrawn-arrow-svg"
                  width="72"
                  height="48"
                  viewBox="0 0 72 48"
                  fill="none"
                >
                  <path
                    d="M60 8 C48 18, 30 24, 12 36"
                    stroke="#ff5a36"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    className="arrow-stem"
                  />
                  <path
                    d="M12 26 L10 37 L22 36"
                    stroke="#ff5a36"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="arrow-head"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Block B: Values (4 compact cards in hairline grid) */}
        <div className="about-sub-block">
          <span className="about-block-eyebrow">Our principles</span>
          <div className="hairline-grid-frame values-grid" data-reveal>
            {values.map((val) => (
              <div key={val.id} className="hairline-card value-card">
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Block C: How We Work (4-step timeline with blue fill) */}
        <div className="about-sub-block">
          <span className="about-block-eyebrow">How we work</span>
          <div
            ref={timelineRef}
            className="timeline-container"
            style={{ '--fill-ratio': `${timelineProgress * 100}%` }}
            data-reveal
          >
            <div className="timeline-track" aria-hidden="true">
              <div className="timeline-track-fill" />
            </div>

            <div className="timeline-steps-grid">
              {timeline.map((step) => (
                <div key={step.step} className="timeline-step-item">
                  <div className="timeline-node">
                    <span className="timeline-dot" />
                    <span className="timeline-step-num">{step.step}</span>
                  </div>
                  <h4 className="timeline-step-title">{step.title}</h4>
                  <p className="timeline-step-desc">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Block D: Tech Stack & Trust */}
        <div className="about-sub-block">
          <span className="about-block-eyebrow">Engineering stack</span>
          <div className="tech-chips-calm-row" data-reveal>
            {techStack.map((tech) => (
              <span key={tech} className="tech-stack-chip">
                {tech}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          {stats && stats.length > 0 && (
            <div className="stats-row" data-reveal>
              {stats.map((st, sIdx) => (
                <div key={sIdx} className="stat-card">
                  <div className="stat-number">{st.value}</div>
                  <div className="stat-label">{st.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Optional Team Grid (rendered only when items exist) */}
          {team && team.length > 0 && (
            <div className="team-grid" data-reveal>
              {team.map((member, mIdx) => (
                <div key={mIdx} className="team-card">
                  <div className="team-avatar-placeholder" />
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                </div>
              ))}
            </div>
          )}

          {/* Optional Testimonials Carousel (rendered only when items exist) */}
          {testimonials && testimonials.length > 0 && (
            <div className="testimonials-row" data-reveal>
              {testimonials.map((t, tIdx) => (
                <blockquote key={tIdx} className="testimonial-card">
                  <p className="testimonial-text">“{t.quote}”</p>
                  <footer className="testimonial-author">{t.author}</footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
