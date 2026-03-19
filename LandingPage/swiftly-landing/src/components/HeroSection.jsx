import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './HeroSection.css';

const getShellConfig = () => {
  const configs = [
    { primary: 2 }, // Shell 1 (inner)
    { secondary: 4, primary: 4 }, // Shell 2: 8
    { primary: 6, secondary: 6, accent: 6 }, // Shell 3: 18
    { primary: 10, secondary: 11, accent: 11 }, // Shell 4: 32
    { primary: 6, secondary: 6, accent: 6 }, // Shell 5: 18
    { primary: 2 } // Shell 6 (outer)
  ];
  
  const colors = {
    primary: '#00E5C6', // teal
    secondary: '#4AE3F5', // cyan
    accent: '#8B5CF6' // purple
  };

  return configs.map((config, shellIdx) => {
    const electrons = [];
    Object.entries(config).forEach(([type, count]) => {
       for(let i=0; i<count; i++) electrons.push(colors[type]);
    });

    return {
      shell: shellIdx + 1,
      electrons
    };
  });
};


const HeroSection = () => {
  const [copied, setCopied] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const command = 'irm "https://raw.githubusercontent.com/945040ad/swiftly/main/swiftly.ps1" | iex';

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className={`hero-content ${loaded ? 'hero-content--loaded' : ''}`}>
          
          {/* Badge sits ABOVE the atomic rings */}
          <div className="hero-badge">
            <span className="hero-badge__dot"></span>
            Next-Gen Windows Optimization
          </div>

          {/* Atomic ring system wraps title → subtitle → actions */}
          <div className="atomic-wrapper">
            {/* Mercury Concentric Bohr Model (6 shells, 80 electrons) */}
            <div className="atomic-rings atomic-rings--bohr">
              
              {/* Invisible Nucleus (anchor point) */}
              <div className="bohr-nucleus"></div>

              {/* Rings */}
              {getShellConfig().map((shellConfig, ringIdx) => {
                // Speeds: Outer ring (index 5) = 60s, Inner ring (index 0) = 20s
                const duration = 60 - (5 - ringIdx) * 8; 
                return (
                  <div 
                    key={ringIdx} 
                    className={`bohr-ring bohr-ring--${shellConfig.shell}`}
                    style={{ animationDuration: `${duration}s` }}
                  >
                    <div className="bohr-path"></div>
                    
                    {shellConfig.electrons.map((color, eIdx) => {
                      const baseAngle = (360 / shellConfig.electrons.length) * eIdx;
                      return (
                        <div 
                          key={eIdx} 
                          className="electron-carrier" 
                          style={{ transform: `rotate(${baseAngle}deg)` }}
                        >
                          <div className="electron" style={{ 
                            backgroundColor: color, 
                            boxShadow: `0 0 10px ${color}`
                          }}></div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            {/* Particles scattered around rings */}
            <div className="cosmic-particles">
              {[...Array(16)].map((_, i) => (
                <span key={i} className="particle" style={{
                  '--angle': `${(i * 22.5)}deg`,
                  '--distance': `${200 + Math.random() * 200}px`,
                  '--size': `${2 + Math.random() * 3}px`,
                  '--delay': `${Math.random() * 5}s`,
                  '--duration': `${3 + Math.random() * 4}s`,
                }}></span>
              ))}
            </div>

            {/* Content inside the rings */}
            <div className="atomic-content">
              <h1 className="hero-title">
                Speed Up Windows<br />
                <span className="text-gradient">Without the Bloat</span>
              </h1>

              <p className="hero-subtitle">
                A premium, lightweight utility designed to streamline installs,
                debloat your system with safe tweaks, troubleshoot common issues,
                and boost overall speed.
              </p>

              <div className="hero-actions">
                <a 
                  href="https://github.com/945040ad/swiftly/releases" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download .exe
                </a>
                <a 
                  href="https://github.com/945040ad/swiftly" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Terminal below the rings */}
          <div className="hero-terminal glass-panel">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot dot--red"></span>
                <span className="dot dot--yellow"></span>
                <span className="dot dot--green"></span>
              </div>
              <span className="terminal-title">Windows PowerShell (Admin)</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-prompt">
                <span className="terminal-prompt__symbol">❯</span>
                <code>{command}</code>
              </div>
              <button 
                className="terminal-copy btn btn-outline"
                onClick={copyToClipboard}
                title="Copy to clipboard"
              >
                {copied ? (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Copied!
                  </>
                ) : (
                  <>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                    </svg>
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
