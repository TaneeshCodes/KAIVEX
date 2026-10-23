import React, { useState } from 'react';

export default function ProjectModal({ isOpen, onClose, initialType = 'project' }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    budget: '$2,500 - $5,000',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <h3>We received your details!</h3>
            <p>Our creative director will reach out within 2 hours to get your project scaling.</p>
          </div>
        ) : (
          <>
            <div className="modal-header">
              <div className="modal-badge">
                {initialType === 'talk' ? "Let's Talk" : 'Built to Scale'}
              </div>
              <h2>{initialType === 'talk' ? 'Start a Conversation' : 'Start a Project'}</h2>
              <p>Tell us about your brand. We’ll match you with vetted short-form video creators.</p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Alex Rivers"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="alex@yourbrand.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Brand / Website</label>
                  <input
                    type="text"
                    placeholder="yourbrand.com"
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>Monthly Reel Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  >
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Project Vision / Goals</label>
                <textarea
                  rows="3"
                  placeholder="We want high-converting TikTok & Instagram product reels for our upcoming Q4 launch..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="modal-submit-btn">
                Launch My Project &rarr;
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
