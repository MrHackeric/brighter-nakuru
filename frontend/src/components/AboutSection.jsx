import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/about.css';
import profileImage from '../assets/images/geff.jpg';

const AboutSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-up');
      elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 100) {
          el.style.opacity = 1;
          el.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-section">
      {/* Animated Background Elements */}
      <div className="campaign-elements">
        <div className="element flag-1"></div>
        <div className="element flag-2"></div>
        <div className="element circle-1"></div>
        <div className="element circle-2"></div>
      </div>
      
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="header-content">
            <h1>Welcome to the Official Website of <span>Geoffrey Gitau Mwangi</span></h1>
            <h2>Your Next Governor for Nakuru County</h2>
            <div className="tagline">Leadership for Results</div>
          </div>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="profile-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="profile-badge">
              <div className="badge-content">
                <div className="badge-title">CPA Geoffrey Gitau Mwangi</div>
                <div className="badge-subtitle">Candidate for Governor</div>
                <div className="badge-year">Nakuru County 2027</div>
              </div>
            </div>
            
            <div className="profile-image">
              <img src={profileImage} alt="Geoffrey Gitau Mwangi" />
              <div className="image-overlay">
                <div className="quote">"Nakuru deserves leadership that listens, leads, and delivers"</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="welcome-section">
              <div className="karibu">Karibu!</div>
              <p>
                I'm Geoffrey Gitau Mwangi, and I warmly welcome you to this digital space. This is your hub for ideas, dialogue, and our shared vision for a transformed Nakuru County.
              </p>
              <p>
                As a son of this soil, born and raised among you, I know our potential as a people of Nakuru County, our challenges, and most importantly, our dreams.
              </p>
            </div>

            <div className="experience-section">
              <h3>Proven Leadership & Accountability</h3>
              <p>
                With years of experience in public finance and strategic governance, I offer more than promises; I bring tested leadership, accountability, and a track record of results.
              </p>
              <p>
                My time in public service, including as CEO at the then National Health Insurance Fund (NHIF), was marked by bold reforms and impactful service delivery.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Centered content section below leadership */}
        <div className="centered-content">
          <motion.div 
            className="vision-section fade-in"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3H9C6.79086 3 5 4.79086 5 7V17C5 19.2091 6.79086 21 9 21H15C17.2091 21 19 19.2091 19 17V7C19 4.79086 17.2091 3 15 3Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>My Vision for Nakuru</h3>
            <p className="vision-statement">A Prosperous, Inclusive, and Empowered Nakuru</p>
            <p>
              With a fast-growing population, rich agricultural lands, vibrant youth, and a strategic position in Kenya's economy, Nakuru deserves leadership that listens, leads, and delivers. This is my promise to you.
            </p>
          </motion.div>

          <motion.div 
            className="campaign-section fade-in"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="section-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Our Collective Future</h3>
            <p>
              The 2027 Gubernatorial campaign is not just about me, it's about us. It is about our collective future, the destiny we all desire.
            </p>
            <div className="priorities-grid">
              <motion.div 
                className="priority-card"
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="priority-icon">👥</div>
                <h4>Community Empowerment</h4>
                <p>Creating opportunities for all residents to participate in county development</p>
              </motion.div>
              <motion.div 
                className="priority-card"
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <div className="priority-icon">🌱</div>
                <h4>Sustainable Development</h4>
                <p>Balancing economic growth with environmental protection for future generations</p>
              </motion.div>
              <motion.div 
                className="priority-card"
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="priority-icon">💼</div>
                <h4>Economic Growth</h4>
                <p>Creating jobs and supporting local businesses through favorable policies</p>
              </motion.div>
              <motion.div 
                className="priority-card"
                whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)" }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="priority-icon">🏥</div>
                <h4>Quality Services</h4>
                <p>Improving healthcare, education, and infrastructure across all wards</p>
              </motion.div>
            </div>
          </motion.div>

          {/* <motion.div 
            className="call-to-action fade-in"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="cta-content">
              <h3>Join Our Movement</h3>
              <p>
                <strong>Together, let's shape a future where Nakuru leads by example.</strong> Let's usher in a leadership that puts people first.
              </p>
              <div className="cta-buttons">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/manifesto" className="btn primary">Read the Manifesto</Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/volunteer" className="btn secondary">Join the Movement</Link>
                </motion.div>
              </div>
              <div className="final-statement">
                <p>Because Nakuru Deserves Better, And Together, We Will Deliver.</p>
                <p className="signature">Asanteni sana, na karibuni.</p>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;