import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './FeaturesSection.css';

const features = [
  {
    title: 'Debloat Windows',
    description: 'Safely remove pre-installed telemetry and unused Windows apps to free up system resources and reclaim storage space.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/>
        <line x1="17.5" y1="14" x2="17.5" y2="21" opacity="0.4"/>
        <line x1="14" y1="17.5" x2="21" y2="17.5" opacity="0.4"/>
      </svg>
    ),
    color: '#FF6B6B',
  },
  {
    title: 'Custom Tweaks',
    description: 'Apply advanced registry and Group Policy changes through an intuitive interface without risking your system stability.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14"/>
        <line x1="4" y1="10" x2="4" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12" y2="3"/>
        <line x1="20" y1="21" x2="20" y2="16"/>
        <line x1="20" y1="12" x2="20" y2="3"/>
        <circle cx="4" cy="12" r="2" fill="currentColor" opacity="0.3"/>
        <circle cx="12" cy="10" r="2" fill="currentColor" opacity="0.3"/>
        <circle cx="20" cy="14" r="2" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
    color: '#00E5C6',
  },
  {
    title: 'Streamlined Setup',
    description: 'One-click bulk installation of essential apps like browsers, runtimes, and developer tools using Winget package manager.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    color: '#4AE3F5',
  }
];

const FeaturesSection = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="features" className="features" ref={sectionRef}>
      <div className="container features-container">
        
        <div className="features-header reveal">
          <span className="section-label">Features</span>
          <h2 className="features-title">Everything You Need</h2>
          <p className="features-subtitle">
            A comprehensive toolbox designed to give you absolute control over your machine's performance.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card glass-panel reveal delay-${index + 2}`}
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-name">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
