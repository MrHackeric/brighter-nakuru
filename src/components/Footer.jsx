import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/footer.css';

const Footer = ({ language }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { name: 'facebook', icon: '𝔽', url: '#' },
    { name: 'twitter', icon: '𝕏', url: '#' },
    { name: 'instagram', icon: '𝕀', url: '#' },
    { name: 'youtube', icon: '𝕐', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3 className="column-title">Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/" className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">About Geoffrey</span>
                  </Link>
                </li>
                <li>
                  <Link to="/manifesto" className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">Manifesto</span>
                  </Link>
                </li>
                <li>
                  <Link to="/news" className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">News & Updates</span>
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">Events</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="column-title">Get Involved</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/volunteer" className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">Volunteer</span>
                  </Link>
                </li>
                <li>
                  <Link to="/donate" className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">Donate</span>
                  </Link>
                </li>
                <li>
                  <Link to="/join" className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">Join the Movement</span>
                  </Link>
                </li>
                <li>
                  <Link to="/ward-plan" className="footer-link">
                    <span className="link-icon">→</span>
                    <span className="link-text">Ward Plans</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="column-title">Contact Us</h3>
              <ul className="contact-info">
                <li className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <span>info@geoffreygitau.com</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+254 700 123456</span>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>Campaign HQ, Nakuru Town</span>
                </li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="column-title">Stay Updated</h3>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address" 
                    required 
                  />
                  <button type="submit" className="subscribe-btn">
                    {subscribed ? '✓' : '→'}
                  </button>
                </div>
                {subscribed && (
                  <div className="subscription-message">
                    Thank you for subscribing!
                  </div>
                )}
              </form>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    className={`social-link ${social.name}`}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.name}
                  >
                    <span className="social-icon">
                      {social.icon}
                    </span>
                    {hoveredSocial === social.name && (
                      <span className="social-tooltip">{social.name}</span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-legal">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Geoffrey Gitau Mwangi Campaign. All Rights Reserved.
            </p>
            <ul className="legal-links">
              <li>
                <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="legal-link">Terms of Use</Link>
              </li>
              <li>
                <Link to="/press" className="legal-link">Press Kit</Link>
              </li>
            </ul>
          </div>
          <div className="designer-credit">
            <a 
              href="https://github.com/MrHackeric" 
              target="_blank" 
              rel="noopener noreferrer"
              className="designer-link"
            >
              Designed by MrHackeric
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;