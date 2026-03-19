import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          <div className="logo-mark">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" stroke="url(#logo-grad)" strokeWidth="2" fill="none"/>
              <path d="M14 8L20 11V17L14 20L8 17V11L14 8Z" fill="url(#logo-grad)"/>
              <defs>
                <linearGradient id="logo-grad" x1="2" y1="2" x2="26" y2="26">
                  <stop offset="0%" stopColor="#00E5C6"/>
                  <stop offset="100%" stopColor="#4AE3F5"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="logo-text">Mercury</span>
        </a>

        <div className="nav-links">
          <a href="#features" className="nav-link">
            <span>Features</span>
          </a>
          <a href="#preview" className="nav-link">
            <span>Preview</span>
          </a>
          <a href="https://github.com/945040ad/swiftly" target="_blank" rel="noopener noreferrer" className="nav-link">
            <span>GitHub</span>
          </a>
        </div>

        <a href="https://github.com/945040ad/swiftly/releases" target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
