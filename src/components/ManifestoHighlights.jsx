import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/manifesto.css';

const ManifestoHighlights = () => {
  const focusAreas = [
    { id: 1, title: 'Jobs & Youth', icon: '💼', link: '/manifesto#jobs' },
    { id: 2, title: 'Health', icon: '🏥', link: '/manifesto#health' },
    { id: 3, title: 'Education', icon: '📚', link: '/manifesto#education' },
    { id: 4, title: 'Agriculture', icon: '🌾', link: '/manifesto#agriculture' },
    { id: 5, title: 'Governance', icon: '⚖️', link: '/manifesto#governance' },
    { id: 6, title: 'Infrastructure', icon: '🏗️', link: '/manifesto#infrastructure' },
  ];

  // Animate cards on scroll
  useEffect(() => {
    const cards = document.querySelectorAll('.manifesto-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
    
    return () => cards.forEach(card => observer.unobserve(card));
  }, []);

  return (
    <section className="section manifesto-section">
      <div className="container">
        <h2 className="section-title">
          <span className="title-text">Manifesto Highlights</span>
          <span className="title-underline"></span>
        </h2>
        
        <div className="manifesto-grid">
          {focusAreas.map(area => (
            <Link to={area.link} key={area.id} className="manifesto-card">
              <div className="card-inner">
                <div className="manifesto-icon">{area.icon}</div>
                <h3>{area.title}</h3>
                <p>Learn about our plans for {area.title.toLowerCase()}</p>
                <div className="hover-indicator">
                  <div className="indicator-dot"></div>
                  <div className="indicator-dot"></div>
                  <div className="indicator-dot"></div>
                </div>
              </div>
              <div className="card-gradient"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoHighlights;