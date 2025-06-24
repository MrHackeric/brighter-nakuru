import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from 'react-icons/md';
import '../assets/styles/contact.css';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    
    if (response.ok) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } else {
      throw new Error(data.error || 'Submission failed');
    }
  } catch (error) {
    console.error('Error:', error);
    alert(error.message || 'There was an error submitting your form. Please try again.');
  }
};

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
                  <span className="contact-icon"><MdLocationOn /></span>
                  <div>
                    <strong>Address:</strong>
                    <p>Campaign HQ<br />Nakuru</p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon"><MdPhone /></span>
                  <div>
                    <strong>Phone:</strong>
                    <p>+254</p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon"><MdEmail /></span>
                  <div>
                    <strong>Email:</strong>
                    <p>info@brighternakuru.com</p>
                  </div>
                </li>
                <li>
                  <span className="contact-icon"><MdAccessTime /></span>
                  <div>
                    <strong>Office Hours:</strong>
                    <p>Monday - Friday: 9:00 AM - 4:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                  </div>
                </li>
              </ul>
              
              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="https://www.facebook.com/profile.php?id=61565106599119" aria-label="Facebook"><FaFacebook /></a>
                  <a href="https://x.com/Geff_GMwangi" aria-label="Twitter"><FaTwitter /></a>
                  {/* <a href="#" aria-label="Instagram"><FaInstagram /></a> */}
                  {/* <a href="#" aria-label="YouTube"><FaYoutube /></a> */}
                  <a href="https://www.tiktok.com/@geoffrey_gitau_mwangi" aria-label="TikTok"><FaTiktok /></a>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
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
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
          
          <div className="county-offices">
            <h2>County Constituency Offices</h2>
            {/* <div className="office-grid">
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
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;