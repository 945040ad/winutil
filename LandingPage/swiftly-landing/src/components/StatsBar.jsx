import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './StatsBar.css';

const stats = [
  { value: '10K+', label: 'Downloads' },
  { value: '50+', label: 'Tweaks Available' },
  { value: '99%', label: 'Safe & Tested' },
  { value: '100%', label: 'Open Source' },
];

const StatsBar = () => {
  const sectionRef = useScrollReveal();

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-item reveal delay-${index + 1}`}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
