import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Footer.css';

const Footer = () => {
  const sectionRef = useScrollReveal();

  return (
    <footer className="footer" ref={sectionRef}>
      <div className="container footer-container">
        
        <div className="footer-main reveal">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" stroke="url(#footer-grad)" strokeWidth="2" fill="none"/>
                <path d="M14 8L20 11V17L14 20L8 17V11L14 8Z" fill="url(#footer-grad)"/>
                <defs>
                  <linearGradient id="footer-grad" x1="2" y1="2" x2="26" y2="26">
                    <stop offset="0%" stopColor="#00E5C6"/>
                    <stop offset="100%" stopColor="#4AE3F5"/>
                  </linearGradient>
                </defs>
              </svg>
              <span>Mercury</span>
            </a>
            <p className="footer-tagline">
              Next-gen Windows optimization toolkit.
              <br />Open source. Community driven.
            </p>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-links-title">Links</h4>
            <a href="#features" className="footer-link">Features</a>
            <a href="#preview" className="footer-link">Preview</a>
            <a href="https://github.com/945040ad/swiftly/releases" target="_blank" rel="noopener noreferrer" className="footer-link">Download</a>
          </div>

          <div className="footer-links-col">
            <h4 className="footer-links-title">Community</h4>
            <a href="https://github.com/945040ad/swiftly" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://github.com/945040ad/swiftly/issues" target="_blank" rel="noopener noreferrer" className="footer-link">Issues</a>
            <a href="https://github.com/945040ad/swiftly/releases" target="_blank" rel="noopener noreferrer" className="footer-link">Releases</a>
          </div>
        </div>

        <div className="footer-bottom reveal delay-2">
          <span className="footer-copyright">
            &copy; {new Date().getFullYear()} Mercury Optimizer. MIT License.
          </span>
          <div className="footer-socials">
            <a href="https://github.com/945040ad/swiftly" target="_blank" rel="noopener noreferrer" className="footer-social" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
