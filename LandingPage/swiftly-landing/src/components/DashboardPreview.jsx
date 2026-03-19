import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './DashboardPreview.css';

const DashboardPreview = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="preview" className="preview" ref={sectionRef}>
      <div className="container preview-container">
        
        <div className="preview-header reveal">
          <span className="section-label">Preview</span>
          <h2 className="preview-title">See It In Action</h2>
          <p className="preview-subtitle">
            A clean, intuitive interface that puts powerful optimization tools at your fingertips.
          </p>
        </div>

        <div className="preview-window reveal-scale delay-2">
          <div className="preview-window__bar">
            <div className="preview-window__dots">
              <span></span><span></span><span></span>
            </div>
            <div className="preview-window__address">
              <span>mercury-optimizer</span>
            </div>
          </div>
          <div className="preview-window__content">
            {/* Mock Dashboard UI */}
            <div className="mock-sidebar">
              <div className="mock-sidebar__logo">
                <div className="mock-logo-dot"></div>
                <div className="mock-line mock-line--short"></div>
              </div>
              <div className="mock-sidebar__nav">
                <div className="mock-nav-item mock-nav-item--active">
                  <div className="mock-icon"></div>
                  <div className="mock-line"></div>
                </div>
                <div className="mock-nav-item">
                  <div className="mock-icon"></div>
                  <div className="mock-line"></div>
                </div>
                <div className="mock-nav-item">
                  <div className="mock-icon"></div>
                  <div className="mock-line"></div>
                </div>
                <div className="mock-nav-item">
                  <div className="mock-icon"></div>
                  <div className="mock-line"></div>
                </div>
              </div>
            </div>
            <div className="mock-main">
              <div className="mock-topbar">
                <div className="mock-line mock-line--medium"></div>
                <div className="mock-search">
                  <div className="mock-icon mock-icon--sm"></div>
                  <div className="mock-line mock-line--search"></div>
                </div>
              </div>
              <div className="mock-cards">
                <div className="mock-card mock-card--teal">
                  <div className="mock-card__header">
                    <div className="mock-line mock-line--short"></div>
                    <div className="mock-badge-sm"></div>
                  </div>
                  <div className="mock-card__value">
                    <div className="mock-big-number"></div>
                  </div>
                  <div className="mock-card__bar">
                    <div className="mock-progress" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <div className="mock-card mock-card--purple">
                  <div className="mock-card__header">
                    <div className="mock-line mock-line--short"></div>
                    <div className="mock-badge-sm"></div>
                  </div>
                  <div className="mock-card__value">
                    <div className="mock-big-number"></div>
                  </div>
                  <div className="mock-card__bar">
                    <div className="mock-progress" style={{ width: '58%' }}></div>
                  </div>
                </div>
                <div className="mock-card mock-card--cyan">
                  <div className="mock-card__header">
                    <div className="mock-line mock-line--short"></div>
                    <div className="mock-badge-sm"></div>
                  </div>
                  <div className="mock-card__value">
                    <div className="mock-big-number"></div>
                  </div>
                  <div className="mock-card__bar">
                    <div className="mock-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
              <div className="mock-list">
                <div className="mock-list-row">
                  <div className="mock-checkbox"></div>
                  <div className="mock-line mock-line--medium"></div>
                  <div className="mock-tag mock-tag--green"></div>
                </div>
                <div className="mock-list-row">
                  <div className="mock-checkbox"></div>
                  <div className="mock-line mock-line--long"></div>
                  <div className="mock-tag mock-tag--blue"></div>
                </div>
                <div className="mock-list-row">
                  <div className="mock-checkbox mock-checkbox--checked"></div>
                  <div className="mock-line mock-line--medium" style={{ opacity: 0.4 }}></div>
                  <div className="mock-tag mock-tag--gray"></div>
                </div>
                <div className="mock-list-row">
                  <div className="mock-checkbox"></div>
                  <div className="mock-line mock-line--short"></div>
                  <div className="mock-tag mock-tag--green"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;
