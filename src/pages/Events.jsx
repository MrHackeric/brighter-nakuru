import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages.css';

const Events = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const events = [
    {
      id: 1,
      title: 'Town Hall Meeting - Nakuru East',
      date: '2023-06-25',
      time: '10:00 AM',
      location: 'Nakuru East Social Hall',
      type: 'townhall',
      description: 'Join Geoffrey for an open discussion about issues affecting Nakuru East constituency.'
    },
    {
      id: 2,
      title: 'Women Empowerment Forum',
      date: '2023-07-02',
      time: '2:00 PM',
      location: 'Prestige Plaza, Nakuru',
      type: 'forum',
      description: 'Special event focusing on women\'s economic empowerment and safety initiatives.'
    },
    {
      id: 3,
      title: 'Youth Talent Showcase',
      date: '2023-07-10',
      time: '4:00 PM',
      location: 'Afraha Stadium',
      type: 'youth',
      description: 'Celebrating young talent in Nakuru with performances and skills exhibition.'
    },
    {
      id: 4,
      title: 'Farmers Cooperative Launch',
      date: '2023-07-15',
      time: '9:00 AM',
      location: 'Molo Town Hall',
      type: 'agriculture',
      description: 'Official launch of the new farmers cooperative program in Molo constituency.'
    },
    {
      id: 5,
      title: 'Business Leaders Breakfast',
      date: '2023-07-22',
      time: '8:00 AM',
      location: 'Sarova Woodlands Hotel',
      type: 'business',
      description: 'Networking and discussion with Nakuru business community leaders.'
    },
    {
      id: 6,
      title: 'Healthcare Policy Announcement',
      date: '2023-07-30',
      time: '11:00 AM',
      location: 'Nakuru County Hospital',
      type: 'policy',
      description: 'Major announcement about healthcare improvements for Nakuru County.'
    }
  ];

  const filteredEvents = activeFilter === 'all' 
    ? events 
    : events.filter(event => event.type === activeFilter);

  return (
    <main className="page events-page">
      <section className="page-header">
        <div className="container">
          <h1>Events</h1>
          <p>Join Geoffrey at campaign events across Nakuru County</p>
        </div>
      </section>
      
      <section className="section events-filter">
        <div className="container">
          <div className="filter-buttons">
            <button 
              className={activeFilter === 'all' ? 'active' : ''}
              onClick={() => setActiveFilter('all')}
            >
              All Events
            </button>
            <button 
              className={activeFilter === 'townhall' ? 'active' : ''}
              onClick={() => setActiveFilter('townhall')}
            >
              Town Halls
            </button>
            <button 
              className={activeFilter === 'forum' ? 'active' : ''}
              onClick={() => setActiveFilter('forum')}
            >
              Forums
            </button>
            <button 
              className={activeFilter === 'youth' ? 'active' : ''}
              onClick={() => setActiveFilter('youth')}
            >
              Youth Events
            </button>
            <button 
              className={activeFilter === 'agriculture' ? 'active' : ''}
              onClick={() => setActiveFilter('agriculture')}
            >
              Agriculture
            </button>
          </div>
        </div>
      </section>
      
      <section className="section events-listing">
        <div className="container">
          <div className="events-grid">
            {filteredEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-date">
                  <span className="event-day">{new Date(event.date).getDate()}</span>
                  <span className="event-month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <div className="event-meta">
                    <span><strong>When:</strong> {new Date(event.date).toLocaleDateString()} at {event.time}</span>
                    <span><strong>Where:</strong> {event.location}</span>
                  </div>
                  <p>{event.description}</p>
                </div>
                <div className="event-actions">
                  <a href="#" className="btn">RSVP</a>
                  <Link to={`/events/${event.id}`} className="btn btn-secondary">Details</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="past-events">
            <h2>Past Events</h2>
            <div className="event-gallery">
              <div className="gallery-item">
                <img src="/assets/images/event1.jpg" alt="Campaign Launch" />
                <div className="gallery-caption">
                  <h3>Campaign Launch Rally</h3>
                  <p>June 1, 2023</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src="/assets/images/event2.jpg" alt="Youth Forum" />
                <div className="gallery-caption">
                  <h3>Youth Engagement Forum</h3>
                  <p>May 25, 2023</p>
                </div>
              </div>
              <div className="gallery-item">
                <img src="/assets/images/event3.jpg" alt="Market Visit" />
                <div className="gallery-caption">
                  <h3>Gikomba Market Visit</h3>
                  <p>May 18, 2023</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Link to="/events/past" className="btn">View All Past Events</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section event-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Host an Event in Your Community</h2>
            <p>Invite Geoffrey to your constituency, ward, or community group</p>
            <Link to="/contact" className="btn">Request an Event</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;