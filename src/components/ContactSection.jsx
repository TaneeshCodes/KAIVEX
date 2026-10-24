import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import { CONTACT_DATA, CALENDAR_URL } from '../content';

function ChannelIcon({ type }) {
  const strokeProps = {
    width: '20',
    height: '20',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: '#3b82f6',
    strokeWidth: '1.75',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  };

  switch (type) {
    case 'Email':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      );
    case 'WhatsApp':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case 'Location':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case 'Working hours':
      return (
        <svg {...strokeProps} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    default:
      return (
        <svg {...strokeProps} aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}

export default function ContactSection({ onOpenModal }) {
  const { eyebrow, h2, intro, channels, socialLinks, card, faq, faqSubtitle, faqContactEmail, readyBand, footer } = CONTACT_DATA;
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="contact" className="content-section contact-section" aria-labelledby="contact-heading">
      <div className="section-container">
        <SectionHeading id="contact-heading" eyebrow={eyebrow} title={h2} />

        {/* 2-Column Direct Channels & Glass Card */}
        <div className="contact-main-grid" data-reveal>
          {/* Left Column: Direct Channels */}
          <div className="contact-channels-column">
            <p className="contact-intro-line">{intro}</p>

            <div className="direct-channels-list">
              {channels.map((ch) => (
                <div key={ch.id} className="channel-row">
                  <div className="channel-icon-circle">
                    <ChannelIcon type={ch.type} />
                  </div>
                  <div className="channel-content">
                    <span className="channel-type-label">{ch.type}</span>
                    {ch.href ? (
                      <a href={ch.href} className="channel-value-link">
                        {ch.value}
                      </a>
                    ) : (
                      <span className="channel-value-text">{ch.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Optional "Book a call" button if CALENDAR_URL is non-empty */}
            {CALENDAR_URL && (
              <div className="book-call-wrap">
                <a
                  href={CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn-ghost"
                >
                  Book a call
                </a>
              </div>
            )}

            {/* Social Links if present */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="contact-social-row" aria-label="Social profiles">
                {socialLinks.map((item, sIdx) => (
                  <a
                    key={sIdx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-text-link"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Glass Card with CTA */}
          <div className="contact-card-column">
            <div className="contact-glass-card">
              <h3 className="contact-card-headline">{card.headline}</h3>
              <p className="contact-card-sentence">{card.sentence}</p>

              <button
                type="button"
                className="pill-btn pill-btn-white contact-start-btn"
                onClick={() => onOpenModal('project')}
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordion matching reference image */}
        <div className="faq-section-clean" data-reveal>
          <div className="faq-header-centered">
            <h2 className="faq-centered-title">
              Frequently asked<br />questions
            </h2>
            <p className="faq-centered-subtitle">
              {faqSubtitle || "We are here to help you with any questions you may have. If you don’t find what you need, please contact us."}{' '}
              <a href={`mailto:${faqContactEmail || "hello@kaivex.com"}`} className="faq-email-link">
                {faqContactEmail || "hello@kaivex.com"}
              </a>
            </p>
          </div>

          <div className="faq-clean-list">
            {faq.map((item) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id} className="faq-clean-item">
                  <button
                    type="button"
                    className="faq-clean-trigger"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                  >
                    <span className={`faq-clean-question ${isOpen ? 'is-active' : ''}`}>
                      {item.question}
                    </span>
                    <span className={`faq-clean-icon ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className={`faq-clean-collapse ${isOpen ? 'is-expanded' : ''}`}
                  >
                    <div className="faq-clean-content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final CTA Band */}
        <div className="ready-band" data-reveal>
          <h2 className="ready-band-h2">{readyBand.h2}</h2>
          <button
            type="button"
            className="pill-btn pill-btn-white"
            onClick={() => onOpenModal('project')}
          >
            {readyBand.buttonText}
          </button>
        </div>

        {/* Footer */}
        <footer className="kaivex-site-footer" role="contentinfo">
          <div className="footer-left">
            <span className="footer-copyright">{footer.copyright}</span>
          </div>
          <div className="footer-right">
            {footer.links.map((link, lIdx) => (
              <a key={lIdx} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
