import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages.css';

const Manifesto = ({ language }) => {
  const [activeSection, setActiveSection] = useState('jobs');
  
  const manifesto = {
    vision: "A prosperous Nakuru County where every resident has access to quality services, economic opportunities, and a government that serves with integrity and accountability.",
    pillars: [
      {
        id: 'jobs',
        title: 'Jobs & Youth Empowerment',
        icon: '💼',
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
    <main className="page manifesto-page">
      <section className="page-header">
        <div className="container">
          <h1>Manifesto</h1>
          <p>Geoffrey's comprehensive plan for Nakuru County</p>
        </div>
      </section>
      
      <section className="section vision-section">
        <div className="container">
          <div className="vision-statement">
            <h2>Our Vision</h2>
            <blockquote>
              "{manifesto.vision}"
              <footer>- Geoffrey Gitau Mwangi</footer>
            </blockquote>
            <div className="download-manifesto">
              <a href="/assets/docs/geoffrey-gitau-manifesto.pdf" className="btn" download>
                Download Full Manifesto (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section pillars-section">
        <div className="container">
          <h2 className="section-title">The Six Pillars</h2>
          
          <div className="pillars-nav">
            {manifesto.pillars.map(pillar => (
              <button
                key={pillar.id}
                className={`pillar-btn ${activeSection === pillar.id ? 'active' : ''}`}
                onClick={() => setActiveSection(pillar.id)}
              >
                <span className="pillar-icon">{pillar.icon}</span>
                {pillar.title}
              </button>
            ))}
          </div>
          
          <div className="pillar-details">
            <div className="pillar-header">
              <h3>{activePillar.title}</h3>
              <div className="pillar-icon-large">{activePillar.icon}</div>
            </div>
            
            <div className="pillar-content">
              <div className="pillar-column">
                <h4>Key Objectives</h4>
                <ul className="pillar-list">
                  {activePillar.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              </div>
              
              <div className="pillar-column">
                <h4>Major Initiatives</h4>
                <ul className="pillar-list">
                  {activePillar.initiatives.map((initiative, index) => (
                    <li key={index}>{initiative}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section implementation-section">
        <div className="container">
          <h2 className="section-title">Implementation Plan</h2>
          
          <div className="implementation-grid">
            <div className="plan-card">
              <div className="plan-phase">Phase 1</div>
              <h3>First 100 Days</h3>
              <ul>
                <li>Establish transition teams for all departments</li>
                <li>Conduct comprehensive county audit</li>
                <li>Launch emergency service improvement program</li>
                <li>Initiate public participation forums</li>
              </ul>
            </div>
            
            <div className="plan-card">
              <div className="plan-phase">Phase 2</div>
              <h3>Year 1</h3>
              <ul>
                <li>Implement priority infrastructure projects</li>
                <li>Roll out digital government services</li>
                <li>Establish youth empowerment centers</li>
                <li>Begin agricultural transformation program</li>
              </ul>
            </div>
            
            <div className="plan-card">
              <div className="plan-phase">Phase 3</div>
              <h3>Years 2-5</h3>
              <ul>
                <li>Complete all manifesto commitments</li>
                <li>Establish sustainable development systems</li>
                <li>Position Nakuru as economic hub</li>
                <li>Implement legacy projects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section endorsement-section">
        <div className="container">
          <h2 className="section-title">Endorsements</h2>
          
          <div className="endorsements-grid">
            <div className="endorsement-card">
              <div className="endorser-image">
                <img src="/assets/images/endorser1.jpg" alt="Prof. James Mwangi" />
              </div>
              <blockquote>
                "Geoffrey's manifesto presents the most comprehensive and practical plan for Nakuru's development I've seen in decades."
              </blockquote>
              <div className="endorser-info">
                <strong>Prof. James Mwangi</strong>
                <span>Economist, University of Nairobi</span>
              </div>
            </div>
            
            <div className="endorsement-card">
              <div className="endorser-image">
                <img src="/assets/images/endorser2.jpg" alt="Mary Wambui" />
              </div>
              <blockquote>
                "The focus on women's economic empowerment and healthcare is exactly what Nakuru needs to move forward."
              </blockquote>
              <div className="endorser-info">
                <strong>Mary Wambui</strong>
                <span>Women Leaders Forum</span>
              </div>
            </div>
            
            <div className="endorsement-card">
              <div className="endorser-image">
                <img src="/assets/images/endorser3.jpg" alt="David Ochieng" />
              </div>
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
      </section>
    </main>
  );
};

export default Manifesto;