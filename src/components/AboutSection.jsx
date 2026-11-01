import React, { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import { ABOUT_DATA } from '../content';
import { gsap, ScrollTrigger, EASINGS, prefersReducedMotion } from '../lib/gsap';

export default function AboutSection() {
  const { eyebrow, h2, story, values, timeline, techStack, stats, team, testimonials } = ABOUT_DATA;

  const sectionRef = useRef(null);
  const storyRef = useRef(null);
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const techRef = useRef(null);
  const statsRef = useRef(null);
  const logoSymbolRef = useRef(null);
  const arrowStemRef = useRef(null);
  const arrowHeadRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    if (prefersReducedMotion()) {
      if (arrowStemRef.current) arrowStemRef.current.style.strokeDashoffset = '0';
      if (arrowHeadRef.current) arrowHeadRef.current.style.strokeDashoffset = '0';
      return;
    }

    const ctx = gsap.context(() => {
      // 1. Continuous gentle floating levitation for Kaivex symbol mark
      if (logoSymbolRef.current) {
        gsap.to(logoSymbolRef.current, {
          y: -9,
          duration: 2.8,
          yoyo: true,
          repeat: -1,
          ease: EASINGS.sineInOut,
        });
      }

      // 2. Story text & visual reveal
      if (storyRef.current) {
        const storyPs = storyRef.current.querySelectorAll('.about-story-p');
        const symbolCard = storyRef.current.querySelector('.about-symbol-card');

        const storyTl = gsap.timeline({
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 82%',
            once: true,
          },
        });

        storyTl
          .fromTo(
            storyPs,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: EASINGS.power3Out }
          )
          .fromTo(
            symbolCard,
            { opacity: 0, scale: 0.94, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.85, ease: EASINGS.backOutSoft },
            '-=0.5'
          );

        // Hand-drawn arrow SVG draw-in
        if (arrowStemRef.current && arrowHeadRef.current) {
          storyTl
            .fromTo(
              arrowStemRef.current,
              { strokeDashoffset: 80 },
              { strokeDashoffset: 0, duration: 0.85, ease: EASINGS.power2Out },
              '-=0.2'
            )
            .fromTo(
              arrowHeadRef.current,
              { strokeDashoffset: 40 },
              { strokeDashoffset: 0, duration: 0.45, ease: EASINGS.power2Out },
              '-=0.2'
            );
        }
      }

      // 3. Values hairline cards staggered entrance
      if (valuesRef.current) {
        const valueCards = valuesRef.current.querySelectorAll('.value-card');
        gsap.fromTo(
          valueCards,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: EASINGS.power3Out,
            scrollTrigger: {
              trigger: valuesRef.current,
              start: 'top 84%',
              once: true,
            },
          }
        );
      }

      // 4. How We Work Timeline: scroll-linked progress scrub & step reveal
      if (timelineRef.current) {
        const trackFill = timelineRef.current.querySelector('.timeline-track-fill');
        const steps = timelineRef.current.querySelectorAll('.timeline-step-item');

        // ScrollTrigger to scrub timeline track progress
        if (trackFill) {
          ScrollTrigger.create({
            trigger: timelineRef.current,
            start: 'top 75%',
            end: 'bottom 65%',
            scrub: 0.3,
            onUpdate: (self) => {
              if (timelineRef.current) {
                timelineRef.current.style.setProperty('--fill-ratio', `${(self.progress * 100).toFixed(1)}%`);
              }
            },
          });
        }

        // Staggered entrance for steps
        gsap.fromTo(
          steps,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: EASINGS.power3Out,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 80%',
              once: true,
            },
          }
        );
      }

      // 5. Tech stack chips staggered wave
      if (techRef.current) {
        const chips = techRef.current.querySelectorAll('.tech-stack-chip');
        gsap.fromTo(
          chips,
          { opacity: 0, y: 15, scale: 0.94 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.035,
            ease: EASINGS.power3Out,
            scrollTrigger: {
              trigger: techRef.current,
              start: 'top 86%',
              once: true,
            },
          }
        );
      }

      // 6. Stats row cards entrance
      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll('.stat-card');
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 28, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: EASINGS.backOutSoft,
            scrollTrigger: {
              trigger: statsRef.current,
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="content-section" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeading id="about-heading" eyebrow={eyebrow} title={h2} />

        {/* Block A: Story */}
        <div ref={storyRef} className="about-story-grid">
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
                ref={logoSymbolRef}
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
                    ref={arrowStemRef}
                    d="M60 8 C48 18, 30 24, 12 36"
                    stroke="#ff5a36"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    className="arrow-stem"
                  />
                  <path
                    ref={arrowHeadRef}
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
          <div ref={valuesRef} className="hairline-grid-frame values-grid">
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
          <div ref={timelineRef} className="timeline-container">
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
          <div ref={techRef} className="tech-chips-calm-row">
            {techStack.map((tech) => (
              <span key={tech} className="tech-stack-chip">
                {tech}
              </span>
            ))}
          </div>

          {/* Stats Row */}
          {stats && stats.length > 0 && (
            <div ref={statsRef} className="stats-row">
              {stats.map((st, sIdx) => (
                <div key={sIdx} className="stat-card">
                  <div className="stat-number">{st.value}</div>
                  <div className="stat-label">{st.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Optional Team Grid */}
          {team && team.length > 0 && (
            <div className="team-grid">
              {team.map((member, mIdx) => (
                <div key={mIdx} className="team-card">
                  <div className="team-avatar-placeholder" />
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                </div>
              ))}
            </div>
          )}

          {/* Optional Testimonials */}
          {testimonials && testimonials.length > 0 && (
            <div className="testimonials-row">
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
