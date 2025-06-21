import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Manifesto from './pages/Manifesto';
import News from './pages/News';
import Events from './pages/Events';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import './App.css';

function App() {
 
  return (
    <Router>
      <div className={`app`}>
        <Header />
        <WhatsAppButton />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/manifesto" element={<Manifesto  />} />
          <Route path="/news" element={<News />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;