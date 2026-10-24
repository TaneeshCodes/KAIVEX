import React, { useState, useEffect } from 'react';
import { GetStartedButton } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

const NEED_OPTIONS = [
  'Lead Management',
  'Website',
  'App',
  'AI / ML',
  'SaaS',
  'Computer Vision',
  'Not sure yet'
];

const BUDGET_OPTIONS = [
  'Select a range',
  '< $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000 – $50,000',
  '$50,000+'
];

const TIMELINE_OPTIONS = [
  'Select a timeline',
  '< 1 month',
  '1 – 2 months',
  '2 – 3 months',
  '3+ months',
  'Flexible'
];

export default function ProjectModal({
  isOpen,
  onClose,
  initialType = 'project',
  initialService = null,
  initialMessage = ''
}) {
  const [selectedNeeds, setSelectedNeeds] = useState(['Lead Management']);
  const [budget, setBudget] = useState('Select a range');
  const [timeline, setTimeline] = useState('Select a timeline');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // Sync initialService and initialMessage when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialService) {
        setSelectedNeeds([initialService]);
      }
      if (initialMessage) {
        setFormData((prev) => ({ ...prev, message: initialMessage }));
      }
    }
  }, [isOpen, initialService, initialMessage]);

  // Handle escape key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Listen for clicks on the form submit GetStartedButton iframe
  useEffect(() => {
    if (!isOpen) return;
    let submitHovered = false;
    const getSubmitFrame = () => document.querySelector('.form-shader-submit');

    const onEnter = () => { submitHovered = true; };
    const onLeave = () => { submitHovered = false; };

    const frame = getSubmitFrame();
    frame?.addEventListener('mouseenter', onEnter);
    frame?.addEventListener('mouseleave', onLeave);

    const handleBlur = () => {
      setTimeout(() => {
        if (submitHovered) {
          handleSubmit(new Event('submit'));
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
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleNeed = (need) => {
    if (selectedNeeds.includes(need)) {
      if (selectedNeeds.length > 1) {
        setSelectedNeeds(selectedNeeds.filter((n) => n !== need));
      }
    } else {
      setSelectedNeeds([...selectedNeeds, need]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000);
    }, 400);
  };

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-card exact-kaivex-form" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-pulse-wrap">
              <div className="success-pulse-ring" />
              <div className="success-icon-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <h3>Project details sent!</h3>
            <p>
              Thanks for sharing{formData.name ? `, ${formData.name.split(' ')[0]}` : ''}! We've received your request and will get back to you with next steps shortly.
            </p>
            <div className="success-progress-bar">
              <div className="success-progress-fill" />
            </div>
            <button
              type="button"
              className="modal-secondary-btn"
              onClick={onClose}
            >
              Back to Experience
            </button>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-pill-badge">
                {initialType === 'talk' ? "LET'S TALK" : 'START A PROJECT'}
              </div>
              <h2 id="modal-title">Tell us what you want to build</h2>
              <p>Share a few details and we’ll get back to you with next steps.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form exact-form-grid">
              {/* Row 1: Your Name & Work Email */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="client-name">YOUR NAME</label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="client-email">WORK EMAIL</label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2: Company or Website */}
              <div className="form-group">
                <label htmlFor="client-company">
                  COMPANY OR WEBSITE <span className="label-opt">(optional)</span>
                </label>
                <input
                  id="client-company"
                  type="text"
                  placeholder="company.com"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>

              {/* Row 3: What Do You Need? */}
              <div className="form-group">
                <label className="form-section-label">WHAT DO YOU NEED?</label>
                <div className="needs-chips-wrap">
                  {NEED_OPTIONS.map((opt) => {
                    const isSelected = selectedNeeds.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        className={`need-chip ${isSelected ? 'selected' : ''}`}
                        onClick={() => toggleNeed(opt)}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: Budget & Timeline */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="client-budget">BUDGET</label>
                  <select
                    id="client-budget"
                    className="custom-select"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b} disabled={b === 'Select a range'}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="client-timeline">TIMELINE</label>
                  <select
                    id="client-timeline"
                    className="custom-select"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                  >
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t} disabled={t === 'Select a timeline'}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: About Your Project */}
              <div className="form-group">
                <label htmlFor="client-message">ABOUT YOUR PROJECT</label>
                <textarea
                  id="client-message"
                  rows="3"
                  placeholder="e.g. We need a lead management system that captures leads from our website, scores them and assigns them to our sales team"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit Button: ThreeUI <GetStartedButton /> */}
              <div
                className="shader-frame form-shader-submit"
                onClick={handleSubmit}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSubmit(e); }}
                role="button"
                tabIndex={0}
                title="Send project details"
              >
                <GetStartedButton />
              </div>

              <div className="modal-privacy-note">
                We’ll only use your details to reply to this enquiry
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
