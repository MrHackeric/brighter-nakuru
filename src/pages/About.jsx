import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages.css';

const About = ({ language }) => {
  return (
    <main className="page about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Geoffrey Gitau Mwangi</h1>
          <p>Learn about Geoffrey's background, values, and vision for Nakuru County</p>
        </div>
      </section>
      
      <section className="section bio-section">
        <div className="container">
          <div className="bio-content">
            <div className="bio-image">
              <img src="/assets/images/geoffrey-bio.jpg" alt="Geoffrey Gitau Mwangi" />
            </div>
            <div className="bio-text">
              <h2>Early Life & Education</h2>
              <p>
                Geoffrey Gitau Mwangi was born in Nakuru County in 1978. He attended primary school at Nakuru Primary before joining Nakuru High School for his secondary education. His academic excellence earned him a place at the University of Nairobi where he pursued a Bachelor of Commerce degree, graduating with honors in 2001.
              </p>
              
              <h2>Professional Career</h2>
              <p>
                After university, Geoffrey qualified as a Certified Public Accountant (CPA) and began his career at a leading audit firm in Nairobi. He later served as the Finance Director for Nakuru County between 2013-2017, where he implemented groundbreaking financial reforms that earned national recognition.
              </p>
              
              <h2>Community Leadership</h2>
              <p>
                Beyond his professional work, Geoffrey has been actively involved in community development initiatives. He founded the Nakuru Youth Empowerment Program in 2010 which has trained over 5,000 young people in vocational skills. He also chairs the Nakuru Farmers Cooperative, helping small-scale farmers access better markets.
              </p>
              
              <h2>Family Life</h2>
              <p>
                Geoffrey is married to Dr. Wanjiru Gitau, a pediatrician at Nakuru County Hospital. They have three children and are active members of their local church. Geoffrey enjoys reading, playing chess, and mentoring young professionals in his free time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>Commitment to transparency and accountability in all dealings</p>
            </div>
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Implementing creative solutions to Nakuru's challenges</p>
            </div>
            <div className="value-card">
              <h3>Inclusivity</h3>
              <p>Ensuring all communities have a voice in county affairs</p>
            </div>
            <div className="value-card">
              <h3>Service</h3>
              <p>Putting the needs of Nakuru residents first</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section gallery-section">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <div className="gallery-grid">
            {/* Gallery images would go here */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;