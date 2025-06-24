import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages.css';

const Volunteer = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ward: '',
    skills: [],
    availability: '',
    interests: []
  });
  
  const wards = [
    "Bahati", "Dundori", "Kabatini", "Kiamaina", "Kiptangich", "Langalanga", "Mariashoni", 
    "Mau Narok", "Mauche", "Mbaruk/Eburu", "Menengai", "Naivasha East", "Naivasha West", 
    "Nakuru East", "Nakuru West", "Nakuru North", "Njoro", "Nyota", "Olkaria", "Rongai", 
    "Solai", "Subukia", "Viwandani", "Waseges"
  ];
  
  const skillOptions = [
    "Canvassing", "Phone Banking", "Data Entry", "Social Media", "Graphic Design",
    "Photography", "Videography", "Event Planning", "Public Speaking", "Translation",
    "Transportation", "Fundraising", "Research", "Other"
  ];
  
  const interestOptions = [
    "Door-to-door Campaigning", "Event Support", "Voter Registration", 
    "Community Outreach", "Social Media Engagement", "Fundraising",
    "Policy Research", "Youth Engagement", "Women Outreach", 
    "Elderly Support", "Persons with Disabilities Outreach"
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckbox = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      setFormData(prev => ({ ...prev, [name]: [...prev[name], value] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: prev[name].filter(item => item !== value) }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for volunteering! We will contact you soon.');
  };

  return (
    <main className="page volunteer-page">
      <section className="page-header">
        <div className="container">
          <h1>Volunteer</h1>
          <p>Join our movement to transform Nakuru County</p>
        </div>
      </section>
      
      <section className="section volunteer-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Your Support Makes Change Possible</h2>
            <p>Become part of the team that will deliver better governance for Nakuru</p>
          </div>
        </div>
      </section>
      
      <section className="section volunteer-opportunities">
        <div className="container">
          <h2 className="section-title">Volunteer Opportunities</h2>
          
          <div className="opportunities-grid">
            <div className="opportunity-card">
              <div className="opportunity-icon">📱</div>
              <h3>Digital Team</h3>
              <p>Social media, content creation, and online engagement</p>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">🚪</div>
              <h3>Field Operations</h3>
              <p>Door-to-door canvassing and voter engagement</p>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">📋</div>
              <h3>Voter Registration</h3>
              <p>Help residents register and verify voter status</p>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">🎉</div>
              <h3>Events Team</h3>
              <p>Plan and execute campaign events across the county</p>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">📢</div>
              <h3>Community Outreach</h3>
              <p>Engage with community groups and organizations</p>
            </div>
            
            <div className="opportunity-card">
              <div className="opportunity-icon">💬</div>
              <h3>Communications</h3>
              <p>Writing, translation, and media relations</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section volunteer-form-section">
        <div className="container">
          <div className="form-container">
            <h2>Join Our Volunteer Team</h2>
            <p>Fill out the form below and we'll contact you about opportunities</p>
            
            <form onSubmit={handleSubmit} className="volunteer-form">
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
              
              <div className="form-row">
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
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="ward">Ward of Residence</label>
                <select 
                  id="ward" 
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your ward</option>
                  {wards.map(ward => (
                    <option key={ward} value={ward}>{ward}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Skills & Experience</label>
                <div className="checkbox-group">
                  {skillOptions.map(skill => (
                    <label key={skill} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="skills"
                        value={skill}
                        checked={formData.skills.includes(skill)}
                        onChange={handleCheckbox}
                      />
                      {skill}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label>Areas of Interest</label>
                <div className="checkbox-group">
                  {interestOptions.map(interest => (
                    <label key={interest} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="interests"
                        value={interest}
                        checked={formData.interests.includes(interest)}
                        onChange={handleCheckbox}
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="availability">Availability</label>
                <select 
                  id="availability" 
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Why do you want to volunteer? (Optional)</label>
                <textarea 
                  id="message" 
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Join the Volunteer Team</button>
            </form>
          </div>
        </div>
      </section>
      
      <section className="section volunteer-testimonials">
        <div className="container">
          <h2 className="section-title">Volunteer Stories</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Volunteering with Geoffrey's campaign has been incredibly rewarding. I've connected with so many amazing people who share my passion for a better Nakuru."</p>
                <div className="testimonial-author">
                  <strong>Sarah Kimani</strong>
                  <span>College Student, Nakuru Town East</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"As a retired teacher, I appreciate Geoffrey's focus on education. I'm proud to contribute my skills to help get our message to every voter."</p>
                <div className="testimonial-author">
                  <strong>John Mwangi</strong>
                  <span>Retired Teacher, Njoro</span>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The campaign team makes every volunteer feel valued. I started as a canvasser and now help coordinate events in my ward."</p>
                <div className="testimonial-author">
                  <strong>Grace Atieno</strong>
                  <span>Business Owner, Naivasha</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Volunteer FAQ</h2>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How much time do I need to commit?</h3>
              <p>We appreciate any amount of time you can give - from a few hours a month to full-time volunteering. We'll work with your schedule.</p>
            </div>
            
            <div className="faq-item">
              <h3>Do I need previous experience?</h3>
              <p>No experience is necessary! We provide training for all volunteer roles.</p>
            </div>
            
            <div className="faq-item">
              <h3>Will I receive training?</h3>
              <p>Yes, all volunteers receive comprehensive training for their roles, with ongoing support from team leaders.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are there age restrictions?</h3>
              <p>Volunteers must be at least 16 years old. Those under 18 need parental consent.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I volunteer remotely?</h3>
              <p>Yes! Many of our digital and research roles can be done from home.</p>
            </div>
            
            <div className="faq-item">
              <h3>How will I be contacted?</h3>
              <p>Our volunteer coordinator will contact you within 48 hours of submitting your form.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Volunteer;