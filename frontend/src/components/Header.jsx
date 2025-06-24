import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <header className="header">
      <div className="header-main">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <h1>Geoffrey Gitau Mwangi – Governor 2027</h1>
            </Link>
          </div>

          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Geoffrey</Link></li>
              <li><Link to="/manifesto" onClick={() => setMenuOpen(false)}>Manifesto</Link></li>
              <li><Link to="/news" onClick={() => setMenuOpen(false)}>News & Updates</Link></li>
              {/* <li><Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link></li> */}
              {/* <li><Link to="/volunteer" onClick={() => setMenuOpen(false)}>Volunteer</Link></li> */}
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
            </ul>
          </nav>

          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
