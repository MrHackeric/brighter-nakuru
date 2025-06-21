import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages.css';

const Contact = ({ language }) => {
  return (
    <main className="page contact-page">
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with Geoffrey's campaign team</p>
        </div>
      </section>
      
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Campaign Headquarters</h2>
              <ul className="contact-details">
                <li>
                  <strong>Address:</strong>
                  <p>Geoffrey Gitau Campaign HQ<br />Kenyatta Avenue, Nakuru Town</p>
                </li>
                <li>
                  <strong>Phone:</strong>
                  <p>+254 700 123 456</p>
                </li>
                <li>
                  <strong>Email:</strong>
                  <p>info@geoffreygitau.com</p>
                </li>
                <li>
                  <strong>Office Hours:</strong>
                  <p>Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                </li>
              </ul>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#"><span className="icon-facebook">FB</span></a>
                  <a href="#"><span className="icon-twitter">TW</span></a>
                  <a href="#"><span className="icon-instagram">IG</span></a>
                  <a href="#"><span className="icon-youtube">YT</span></a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donation">Donation Inquiry</option>
                    <option value="event">Event Invitation</option>
                    <option value="media">Media Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required></textarea>
                </div>
                
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="county-offices">
            <h2>County Constituency Offices</h2>
            <div className="office-grid">
              <div className="office-card">
                <h3>Nakuru Town East</h3>
                <p>Biashara Plaza, 3rd Floor<br />Phone: +254 723 456 789</p>
              </div>
              
              <div className="office-card">
                <h3>Nakuru Town West</h3>
                <p>Prestige Mall, Ground Floor<br />Phone: +254 722 987 654</p>
              </div>
              
              <div className="office-card">
                <h3>Molo</h3>
                <p>Molo Town Center<br />Phone: +254 720 112 233</p>
              </div>
              
              <div className="office-card">
                <h3>Naivasha</h3>
                <p>Naivasha Main Street<br />Phone: +254 724 334 455</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            {/* Google Map iframe would go here */}
            <div className="map-placeholder">
              <p>Campaign Headquarters Map</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;