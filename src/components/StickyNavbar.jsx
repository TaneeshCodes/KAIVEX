import React, { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'products', label: 'Products' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

export default function StickyNavbar({ activeSection, onOpenModal, visible }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when active section changes or window resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky-nav-bar ${visible ? 'is-visible' : ''}`}
      role="banner"
      aria-label="Main navigation"
    >
      <div className="sticky-nav-container">
        {/* Brand / Logo */}
        <a href="#hero" className="sticky-nav-logo" onClick={handleLogoClick} aria-label="Kaivex Home">
          <img src="/logo-icon.webp" alt="Kaivex" className="sticky-logo-img" width="28" height="28" />
          <span className="sticky-logo-text">KAIVEX</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="sticky-nav-links" aria-label="In-page sections">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`sticky-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="sticky-nav-actions">
          <button
            type="button"
            className="pill-btn pill-btn-white sticky-cta-btn"
            onClick={() => onOpenModal('project')}
          >
            Start a project
          </button>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`sticky-mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, item.id)}
                aria-current={isActive ? 'true' : undefined}
              >
                {item.label}
              </a>
            );
          })}
          <button
            type="button"
            className="pill-btn pill-btn-white mobile-drawer-cta"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal('project');
            }}
          >
            Start a project
          </button>
        </nav>
      </div>
    </header>
  );
}
