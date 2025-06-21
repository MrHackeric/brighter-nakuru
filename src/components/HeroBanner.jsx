import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/hero.css';

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-gradient-overlay"></div>
      <div className="hero-content">
        <div className="hero-tagline">Leadership for Results</div>
        <h1>Nakuru Deserves Better</h1>
        <h2>Let's Deliver – Together</h2>
        <div className="hero-buttons">
          <Link to="/volunteer" className="btn">
            <span>Join the Movement</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link to="/manifesto" className="btn btn-secondary">
            <span>Read the Manifesto</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6V4M6 20H4V4H20V20H18M6 20H18M6 20V14H18V20M10 12H8V10H10V12ZM10 16H8V14H10V16ZM16 12H14V10H16V12ZM16 16H14V14H16V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-icon"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroBanner;