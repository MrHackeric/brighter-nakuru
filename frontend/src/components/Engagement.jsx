import React, { useState, useEffect } from 'react';
import '../assets/styles/engagement.css';

const Engagement = () => {
  const [activeTab, setActiveTab] = useState('ask');
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pollAnswer, setPollAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setQuestion('');
      setName('');
      setEmail('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setFormSuccess(false), 3000);
    }, 1500);
  };

  const handlePollSubmit = (e) => {
    e.preventDefault();
    if (!pollAnswer) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSuccess(true);
      setPollAnswer('');
      
      // Reset success message after 3 seconds
      setTimeout(() => setFormSuccess(false), 3000);
    }, 1500);
  };

  // Animation for tab content
  const [animation, setAnimation] = useState('fadeIn');

  useEffect(() => {
    setAnimation('fadeOut');
    const timer = setTimeout(() => {
      setAnimation('fadeIn');
    }, 300);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section className="section engagement-section">
      <div className="container">
        <h2 className="section-title">
          <span>Engage With The Campaign</span>
          <span className="title-sub">Your Voice Matters</span>
        </h2>
        
        <div className="engagement-tabs">
          <button 
            className={`tab-btn ${activeTab === 'ask' ? 'active' : ''}`}
            onClick={() => setActiveTab('ask')}
          >
            <span className="tab-icon">✉️</span>
            <span className="tab-text">Ask Geoffrey</span>
            <span className="tab-underline"></span>
          </button>
          <button 
            className={`tab-btn ${activeTab === 'poll' ? 'active' : ''}`}
            onClick={() => setActiveTab('poll')}
          >
            <span className="tab-icon">📊</span>
            <span className="tab-text">Weekly Poll</span>
            <span className="tab-underline"></span>
          </button>
        </div>
        
        <div className={`engagement-content ${animation}`}>
          {activeTab === 'ask' ? (
            <div className="ask-form">
              <div className="form-header">
                <h3>Have a question for Geoffrey?</h3>
                <p>We'll respond to selected questions in our weekly newsletter</p>
              </div>
              <form onSubmit={handleSubmitQuestion}>
                <div className="form-group floating">
                  <textarea
                    id="question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                  ></textarea>
                  <label htmlFor="question">Your question...</label>
                </div>
                <div className="form-group floating">
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="name">Your name</label>
                </div>
                <div className="form-group floating">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Your email</label>
                </div>
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Submit Question →'
                  )}
                </button>
              </form>
              {formSuccess && (
                <div className="form-success">
                  <span>✓</span> Thank you! Your question has been submitted.
                </div>
              )}
            </div>
          ) : (
            <div className="poll-form">
              <div className="form-header">
                <h3>This Week's Poll</h3>
                <p>What's your top priority for Nakuru County?</p>
              </div>
              <form onSubmit={handlePollSubmit}>
                <div className="poll-options">
                  <label className={`poll-option ${pollAnswer === 'jobs' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="pollOption"
                      value="jobs"
                      checked={pollAnswer === 'jobs'}
                      onChange={() => setPollAnswer('jobs')}
                    />
                    <span className="option-content">
                      <span className="option-icon">💼</span>
                      <span className="option-text">Job Creation</span>
                    </span>
                  </label>
                  <label className={`poll-option ${pollAnswer === 'health' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="pollOption"
                      value="health"
                      checked={pollAnswer === 'health'}
                      onChange={() => setPollAnswer('health')}
                    />
                    <span className="option-content">
                      <span className="option-icon">🏥</span>
                      <span className="option-text">Healthcare Improvement</span>
                    </span>
                  </label>
                  <label className={`poll-option ${pollAnswer === 'education' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="pollOption"
                      value="education"
                      checked={pollAnswer === 'education'}
                      onChange={() => setPollAnswer('education')}
                    />
                    <span className="option-content">
                      <span className="option-icon">📚</span>
                      <span className="option-text">Education Access</span>
                    </span>
                  </label>
                  <label className={`poll-option ${pollAnswer === 'infrastructure' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="pollOption"
                      value="infrastructure"
                      checked={pollAnswer === 'infrastructure'}
                      onChange={() => setPollAnswer('infrastructure')}
                    />
                    <span className="option-content">
                      <span className="option-icon">🏗️</span>
                      <span className="option-text">Infrastructure Development</span>
                    </span>
                  </label>
                </div>
                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting || !pollAnswer}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Submitting...
                    </>
                  ) : (
                    'Cast Your Vote →'
                  )}
                </button>
              </form>
              {formSuccess && (
                <div className="form-success">
                  <span>✓</span> Thank you for voting! Your response has been recorded.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Engagement;