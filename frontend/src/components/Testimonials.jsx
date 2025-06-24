import React, { useState, useEffect } from 'react';
import '../assets/styles/testimonials.css';
import hman from '../assets/images/hman.png';
import man from '../assets/images/man.png';
import woman from '../assets/images/woman.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Geoffrey understands the challenges we face in Nakuru West. His plan for better roads and markets will transform our area.",
      name: "Jane Wanjiku",
      role: "Small Business Owner",
      location: "Nakuru West",
      image: woman
    },
    {
      id: 2,
      quote: "As a young person, I'm excited about Geoffrey's digital skills program. It will create opportunities for my peers and me.",
      name: "David Kimani",
      role: "Youth Representative",
      location: "Nakuru Town",
      image: man
    },
    {
      id: 3,
      quote: "His approach to agriculture is practical and will help small farmers like me increase our yields and incomes.",
      name: "Samuel Ngugi",
      role: "Local Farmer",
      location: "Molo",
      image: hman
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isAnimating, setIsAnimating] = useState(false);

  const navigateTestimonial = (index) => {
    if (index === currentTestimonial || isAnimating) return;
    
    setDirection(index > currentTestimonial ? 'next' : 'prev');
    setCurrentTestimonial(index);
    setIsAnimating(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      navigateTestimonial((currentTestimonial + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [currentTestimonial, testimonials.length]);

  const animationEnd = () => {
    setIsAnimating(false);
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">
          <span>Voices of Support</span>
          <span className="title-sub">What Nakuru Residents Are Saying</span>
        </h2>
        
        <div className="testimonial-container">
          <div 
            className={`testimonial-slide ${direction}`}
            onAnimationEnd={animationEnd}
            key={currentTestimonial}
          >
            <div className="testimonial-image-container">
              <div className="image-wrapper">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name} 
                  className="testimonial-image"
                  loading="lazy"
                />
                <div className="image-border"></div>
                <div className="image-overlay"></div>
              </div>
              <div className="quote-icon">“</div>
            </div>
            
            <div className="testimonial-content">
              <blockquote className="testimonial-quote">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <strong className="author-name">{testimonials[currentTestimonial].name}</strong>
                  <span className="author-role">{testimonials[currentTestimonial].role}</span>
                  <span className="author-location">{testimonials[currentTestimonial].location}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="testimonial-nav">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`nav-dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => navigateTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              >
                <span className="dot-progress"></span>
              </button>
            ))}
          </div>
          
          <div className="testimonial-controls">
            <button 
              className="control-btn prev"
              onClick={() => navigateTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <button 
              className="control-btn next"
              onClick={() => navigateTestimonial((currentTestimonial + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;