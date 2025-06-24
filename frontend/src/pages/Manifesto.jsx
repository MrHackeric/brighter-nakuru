import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/manifestopages.css';
import hman from '../assets/images/hman.png';
import man from '../assets/images/man.png';
import woman from '../assets/images/woman.png';

const Manifesto = ({ language }) => {
  const [activeSection, setActiveSection] = useState('jobs');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const manifesto = {
    vision: "A prosperous Nakuru County where every resident has access to quality services, economic opportunities, and a government that serves with integrity and accountability.",
    pillars: [
      {
        id: 'jobs',
        title: 'Jobs & Youth Empowerment',
        icon: '💼',
        color: '#4a6bdf',
        objectives: [
          'Create 50,000 new jobs through county investment programs',
          'Establish county innovation hubs in all constituencies',
          'Launch digital skills training for 10,000 youth annually',
          'Support youth entrepreneurship with startup grants and mentorship'
        ],
        initiatives: [
          'Nakuru Youth Employment Program',
          'County Internship Program',
          'Digital Skills for All Initiative',
          'Small Business Support Fund'
        ]
      },
      {
        id: 'health',
        title: 'Healthcare for All',
        icon: '🏥',
        color: '#e74c3c',
        objectives: [
          'Upgrade all county health facilities to Level 4 status',
          'Establish specialized maternal and child health centers',
          'Implement universal health coverage for all residents',
          'Triple county health budget allocation'
        ],
        initiatives: [
          'Healthcare Infrastructure Improvement Plan',
          'Mobile Clinics for Remote Areas',
          'Free Maternal Healthcare Program',
          'Mental Health Support Initiative'
        ]
      },
      {
        id: 'education',
        title: 'Education Excellence',
        icon: '📚',
        color: '#2ecc71',
        objectives: [
          'Modernize all county ECDE centers with digital learning tools',
          'Establish vocational training centers in all sub-counties',
          'Provide scholarships for 5,000 needy students annually',
          'Implement school feeding program county-wide'
        ],
        initiatives: [
          'Education Quality Improvement Program',
          'Digital Classroom Initiative',
          'County Scholarship Fund',
          'Teachers Professional Development'
        ]
      },
      {
        id: 'agriculture',
        title: 'Agricultural Transformation',
        icon: '🌾',
        color: '#f39c12',
        objectives: [
          'Double agricultural productivity within 5 years',
          'Establish modern storage facilities in all wards',
          'Connect farmers directly to markets through digital platforms',
          'Provide subsidized inputs to all registered farmers'
        ],
        initiatives: [
          'Smart Agriculture Program',
          'Nakuru Farmers Cooperative',
          'County Value Addition Centers',
          'Irrigation Expansion Project'
        ]
      },
      {
        id: 'governance',
        title: 'Transparent Governance',
        icon: '⚖️',
        color: '#9b59b6',
        objectives: [
          'Implement open budgeting and expenditure tracking',
          'Establish citizen participation forums in all wards',
          'Digitize all county services for efficiency',
          'Create anti-corruption watchdog with citizen representation'
        ],
        initiatives: [
          'Open Government Initiative',
          'County Service Delivery App',
          'Participatory Budgeting Program',
          'Accountability Portal'
        ]
      },
      {
        id: 'infrastructure',
        title: 'Modern Infrastructure',
        icon: '🏗️',
        color: '#1abc9c',
        objectives: [
          'Complete road tarmacking in all wards',
          'Establish reliable water supply to all households',
          'Develop county-wide public transport system',
          'Expand renewable energy access to 90% of residents'
        ],
        initiatives: [
          'Roads Rehabilitation Program',
          'Water for All Initiative',
          'Nakuru Metro Transport System',
          'Clean Energy Access Project'
        ]
      }
    ]
  };

  const activePillar = manifesto.pillars.find(pillar => pillar.id === activeSection);

  return (
    <main className={`page manifesto-page ${isVisible ? 'visible' : ''}`}>
      {/* Animated Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" style={{ backgroundColor: activePillar.color }}></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-word title-word-1">Manifesto</span>
              <span className="title-word title-word-2">For</span>
              <span className="title-word title-word-3">Nakuru</span>
            </h1>
            <p className="hero-subtitle">Geoffrey's comprehensive transformation plan for Nakuru County</p>
            {/* <div className="hero-cta">
              <a href="/assets/docs/geoffrey-gitau-manifesto.pdf" className="btn btn-hero" download>
                Download Full Manifesto
                <span className="btn-icon">↓</span>
              </a>
            </div> */}
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow arrow-first"></div>
          <div className="arrow arrow-second"></div>
        </div>
      </section>
      
      {/* Vision Section with Floating Elements */}
      <section className="section vision-section">
        <div className="container">
          <div className="vision-card">
            <div className="vision-quote-mark">"</div>
            <div className="vision-content">
              <h2 className="section-title">Our Vision</h2>
              <blockquote className="vision-statement">
                {manifesto.vision}
                <footer>- Geoffrey Gitau Mwangi</footer>
              </blockquote>
            </div>
            <div className="vision-pattern" style={{ backgroundColor: activePillar.color }}></div>
          </div>
        </div>
      </section>
      
      {/* Interactive Pillars Section */}
      <section className="section pillars-section">
        <div className="container">
          <h2 className="section-title">The Six Pillars of Transformation</h2>
          <p className="section-subtitle">Tap on each pillar to explore Geoffrey's comprehensive plan</p>
          
          <div className="pillars-nav">
            {manifesto.pillars.map(pillar => (
              <button
                key={pillar.id}
                className={`pillar-btn ${activeSection === pillar.id ? 'active' : ''}`}
                onClick={() => setActiveSection(pillar.id)}
                style={{
                  backgroundColor: activeSection === pillar.id ? pillar.color : '#f8f9fa',
                  color: activeSection === pillar.id ? '#fff' : '#333'
                }}
              >
                <span className="pillar-icon">{pillar.icon}</span>
                <span className="pillar-title">{pillar.title}</span>
                <span className="pillar-underline" style={{ backgroundColor: pillar.color }}></span>
              </button>
            ))}
          </div>
          
          <div className="pillar-details" style={{ borderTopColor: activePillar.color }}>
            <div className="pillar-header">
              <div className="pillar-icon-container" style={{ backgroundColor: activePillar.color }}>
                <span className="pillar-icon-large">{activePillar.icon}</span>
              </div>
              <h3 className="pillar-title">{activePillar.title}</h3>
            </div>
            
            <div className="pillar-content">
              <div className="pillar-column">
                <h4 className="pillar-subtitle">
                  <span className="subtitle-icon">🎯</span>
                  Key Objectives
                </h4>
                <ul className="pillar-list">
                  {activePillar.objectives.map((objective, index) => (
                    <li key={index} className="list-item">
                      <span className="list-bullet" style={{ backgroundColor: activePillar.color }}></span>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pillar-column">
                <h4 className="pillar-subtitle">
                  <span className="subtitle-icon">🚀</span>
                  Major Initiatives
                </h4>
                <ul className="pillar-list">
                  {activePillar.initiatives.map((initiative, index) => (
                    <li key={index} className="list-item">
                      <span className="list-bullet" style={{ backgroundColor: activePillar.color }}></span>
                      {initiative}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Implementation Timeline with Animated Cards */}
      <section className="section implementation-section">
        <div className="container">
          <h2 className="section-title">Implementation Roadmap</h2>
          <p className="section-subtitle">A clear, actionable plan to deliver on our promises</p>
          
          <div className="timeline">
            <div className="timeline-progress" style={{ backgroundColor: activePillar.color }}></div>
            
            <div className="timeline-item">
              <div className="timeline-phase" style={{ backgroundColor: activePillar.color }}>Phase 1</div>
              <div className="timeline-card">
                <h3>First 100 Days</h3>
                <ul>
                  <li>Establish transition teams for all departments</li>
                  <li>Conduct comprehensive county audit</li>
                  <li>Launch emergency service improvement program</li>
                  <li>Initiate public participation forums</li>
                </ul>
                <div className="timeline-dot" style={{ backgroundColor: activePillar.color }}></div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-phase" style={{ backgroundColor: activePillar.color }}>Phase 2</div>
              <div className="timeline-card">
                <h3>Year 1</h3>
                <ul>
                  <li>Implement priority infrastructure projects</li>
                  <li>Roll out digital government services</li>
                  <li>Establish youth empowerment centers</li>
                  <li>Begin agricultural transformation program</li>
                </ul>
                <div className="timeline-dot" style={{ backgroundColor: activePillar.color }}></div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-phase" style={{ backgroundColor: activePillar.color }}>Phase 3</div>
              <div className="timeline-card">
                <h3>Years 2-5</h3>
                <ul>
                  <li>Complete all manifesto commitments</li>
                  <li>Establish sustainable development systems</li>
                  <li>Position Nakuru as economic hub</li>
                  <li>Implement legacy projects</li>
                </ul>
                <div className="timeline-dot" style={{ backgroundColor: activePillar.color }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Endorsements Carousel */}
      <section className="section endorsement-section">
        <div className="container">
          <h2 className="section-title">What Leaders Are Saying</h2>
          <p className="section-subtitle">Endorsements from respected community figures</p>
          
          <div className="endorsements-carousel">
            <div className="endorsement-card" style={{ borderTopColor: activePillar.color }}>
              <div className="endorser-image">
                <img src={man} alt="Prof. James Mwangi" />
                <div className="image-overlay" style={{ backgroundColor: activePillar.color }}></div>
              </div>
              <div className="endorsement-content">
                <blockquote>
                  "Geoffrey's manifesto presents the most comprehensive and practical plan for Nakuru's development I've seen in decades."
                </blockquote>
                <div className="endorser-info">
                  <strong>Prof. James Mwangi</strong>
                  <span>Economist, University of Nairobi</span>
                </div>
              </div>
            </div>
            
            <div className="endorsement-card" style={{ borderTopColor: activePillar.color }}>
              <div className="endorser-image">
                <img src={woman} alt="Mary Wambui" />
                <div className="image-overlay" style={{ backgroundColor: activePillar.color }}></div>
              </div>
              <div className="endorsement-content">
                <blockquote>
                  "The focus on women's economic empowerment and healthcare is exactly what Nakuru needs to move forward."
                </blockquote>
                <div className="endorser-info">
                  <strong>Mary Wambui</strong>
                  <span>Women Leaders Forum</span>
                </div>
              </div>
            </div>
            
            <div className="endorsement-card" style={{ borderTopColor: activePillar.color }}>
              <div className="endorser-image">
                <img src={hman} alt="David Ochieng" />
                <div className="image-overlay" style={{ backgroundColor: activePillar.color }}></div>
              </div>
              <div className="endorsement-content">
                <blockquote>
                  "As a youth representative, I'm impressed by the concrete job creation strategies in this manifesto."
                </blockquote>
                <div className="endorser-info">
                  <strong>David Ochieng</strong>
                  <span>Youth Empowerment Network</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      {/* <section className="section cta-section" style={{ backgroundColor: activePillar.color }}>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Nakuru?</h2>
            <p>Join Geoffrey's movement for positive change and a better future for all residents</p>
            <div className="cta-buttons">
              <Link to="/volunteer" className="btn btn-light">Volunteer</Link>
              <Link to="/donate" className="btn btn-outline-light">Donate</Link>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
};

export default Manifesto;