import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingButtonsWrapper from './components/FloatingButtonsWrapper';
import Home from './pages/Home';
import About from './pages/About';
import Manifesto from './pages/Manifesto';
import News from './pages/News';
import FullPost from './components/FullPost'; // Add this import
import Events from './pages/Events';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <Router>
      <div className={`app`}>
        <Header />
        <FloatingButtonsWrapper />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/manifesto" element={<Manifesto />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<FullPost />} /> {/* Add this route */}
            {/* <Route path="/events" element={<Events />} /> */}
            {/* <Route path="/volunteer" element={<Volunteer />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
        </ErrorBoundary>
        <Footer />
      </div>
    </Router>
  );
}

export default App;