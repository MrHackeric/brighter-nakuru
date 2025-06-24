import React from 'react';
import HeroBanner from '../components/HeroBanner';
import AboutSection from '../components/AboutSection';
import ManifestoHighlights from '../components/ManifestoHighlights';
import NewsSection from '../components/NewsSection';
import EventsSection from '../components/EventsSection';
import Testimonials from '../components/Testimonials';
import Engagement from '../components/Engagement';

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <AboutSection />
      <ManifestoHighlights />
      <NewsSection />
      {/* <EventsSection /> */}
      <Testimonials />
      {/* <Engagement /> */}
    </main>
  );
};

export default Home;