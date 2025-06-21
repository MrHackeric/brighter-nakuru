import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/events.css';

const EventsSection = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('https://api.brighternakuru.com/events?limit=3');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
        // Fallback to static events if API fails
        setEvents([
          {
            id: 1,
            title: 'Town Hall Meeting - Nakuru East',
            date: '2023-06-25',
            time: '10:00 AM',
            location: 'Nakuru East Social Hall',
            rsvpLink: '/events/1'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="section events-section">
      <div className="container">
        <h2 className="section-title">
          <span>Upcoming Events</span>
        </h2>
        
        {loading ? (
          <div className="events-loading">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            <div className="events-list">
              {events.map((event, index) => (
                <div 
                  key={event.id} 
                  className="event-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="event-date">
                    <span className="event-day">
                      {new Date(event.date).getDate()}
                    </span>
                    <span className="event-month">
                      {new Date(event.date).toLocaleString('default', { month: 'short' }).toUpperCase()}
                    </span>
                  </div>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <div className="event-meta">
                      <span className="event-info">
                        <i className="icon-calendar"></i> {formatDate(event.date)} at {event.time}
                      </span>
                      <span className="event-info">
                        <i className="icon-location"></i> {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="event-actions">
                    <Link to={event.rsvpLink || `/events/${event.id}`} className="btn-rsvp">
                      RSVP
                    </Link>
                    <Link to={`/events/${event.id}`} className="btn-more">
                      Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/events" className="btn-view-all">
                Full Events Calendar
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default EventsSection;