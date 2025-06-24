import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/aboutpage.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import all images
import GeoffreyImage from '../assets/images/geoffrey-bio.jpg';
import Gallery1 from '../assets/images/gallery1.jpg';
import Gallery2 from '../assets/images/gallery2.jpg';
import Gallery3 from '../assets/images/gallery3.jpg';
import Gallery4 from '../assets/images/gallery4.jpg';
import Gallery5 from '../assets/images/gallery5.jpg';
import Gallery6 from '../assets/images/gallery6.png';

const About = ({ language }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardHover = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const galleryImages = [
    { id: 1, src: Gallery1, alt: "Geoffrey at community event" },
    { id: 2, src: Gallery2, alt: "Geoffrey speaking at conference" },
    { id: 3, src: Gallery3, alt: "Meeting with youth group" },
    { id: 4, src: Gallery4, alt: "Award ceremony" },
    { id: 5, src: Gallery5, alt: "Farmers cooperative meeting" },
    { id: 6, src: Gallery6, alt: "Financial literacy workshop" }
  ];

  return (
    <main className="page about-page">
      {/* Hero Header */}
      <motion.section 
        className="page-header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="header-title"
          >
            About Geoffrey Gitau Mwangi
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="header-subtitle"
          >
            Learn about Geoffrey's background, values, and vision for Nakuru County
          </motion.p>
        </div>
      </motion.section>
      
      {/* Bio Section - Enhanced */}
      <motion.section 
        className="section bio-section"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <div className="container">
          <div className="bio-content">
            {/* Bio Image with Animation */}
            <motion.div 
              className="bio-image-container"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              <div className="bio-image-frame" style={{ borderColor: "#3B82F6" }}>
                <img src={GeoffreyImage} alt="Geoffrey Gitau Mwangi" />
              </div>
              <motion.div 
                className="image-dots"
                animate={{
                  rotate: [0, 360],
                  transition: { duration: 60, repeat: Infinity, ease: "linear" }
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <span key={i} style={{ backgroundColor: "#3B82F6" }}></span>
                ))}
              </motion.div>
            </motion.div>

            {/* Bio Text Sections */}
            <motion.div className="bio-text" variants={staggerContainer}>
              {/* Early Life & Education */}
              <motion.div 
                className="bio-card"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                style={{ borderLeft: "4px solid #10B981" }}
              >
                <div className="bio-card-header" style={{ color: "#10B981" }}>
                  <motion.span 
                    className="bio-icon"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    🎓
                  </motion.span>
                  <h2>Early Life & Education</h2>
                </div>
                <motion.p variants={fadeIn}>
                  Geoffrey Gitau Mwangi was born in Kamwaura Village, Nakuru City. He attended primary school at Tarakwet Primary before joining Afraha High School for his A-Levels. His academic excellence earned him a place at United States International University, USIU where he pursued a Bachelor of Science in Business Administration,Bsc BA - Accounting Option, graduating with honors in 2003.
                </motion.p>
              </motion.div>
              
              {/* Professional Career */}
              <motion.div 
                className="bio-card"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                style={{ borderLeft: "4px solid #F59E0B" }}
              >
                <div className="bio-card-header" style={{ color: "#F59E0B" }}>
                  <motion.span 
                    className="bio-icon"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    💼
                  </motion.span>
                  <h2>Professional Career</h2>
                </div>
                <motion.p variants={fadeIn}>
                  Geoffrey is a dedicated professional with over 25 years' post qualification experience in Finance and Accounting. He possess valuable experience in Social Security Financing and extensive knowledge of Healthcare Provider Payment Mechanisms. He is soft spoken easily approachable but detail oriented with a strong desire to excel.
                </motion.p>
              </motion.div>
              
              {/* Community Leadership */}
              <motion.div 
                className="bio-card"
                variants={fadeIn}
                whileHover={{ y: -5 }}
                style={{ borderLeft: "4px solid #8B5CF6" }}
              >
                <div className="bio-card-header" style={{ color: "#8B5CF6" }}>
                  <motion.span 
                    className="bio-icon"
                    animate={{ 
                      y: [0, -5, 0],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  >
                    🤝
                  </motion.span>
                  <h2>Community Leadership</h2>
                </div>
                <motion.p variants={fadeIn}>
                  Beyond his professional work, Geoffrey has been actively involved in community development initiatives, working with local organizations to improve education access and economic opportunities for residents of Nakuru County.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Objective Section - Enhanced */}
      <motion.section 
        className="section objective-section"
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.div 
            className="objective-card"
            variants={fadeIn}
            whileHover={{ 
              y: -5,
              boxShadow: "0 15px 30px rgba(59, 130, 246, 0.15)"
            }}
            style={{ 
              background: "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
              borderTop: "4px solid #3B82F6"
            }}
          >
            <motion.div 
              className="floating-circle"
              animate={{
                x: [0, 10, 0, -10, 0],
                y: [0, -5, 0, 5, 0],
                transition: { duration: 8, repeat: Infinity }
              }}
            ></motion.div>
            
            <motion.h2 
              className="section-title"
              variants={fadeIn}
              style={{ color: "#3B82F6" }}
            >
              <span className="title-icon">🎯</span> Objective
            </motion.h2>
            <motion.div 
              className="objective-content"
              variants={fadeIn}
            >
              <p>A leadership position in which acquired expertise, resourcefulness and commitment to excellence will have valuable application.</p>
            </motion.div>
            
            <motion.div 
              className="sparkles"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                transition: { duration: 3, repeat: Infinity }
              }}
            >
              {[...Array(6)].map((_, i) => (
                <motion.span 
                  key={i}
                  style={{ 
                    backgroundColor: "#3B82F6",
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Core Competencies */}
      <motion.section 
        className="section competencies-section"
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 
            className="section-title center-title"
            variants={fadeIn}
          >
            Core Competencies
          </motion.h2>
          <motion.p 
            className="section-subtitle center-subtitle"
            variants={fadeIn}
          >
            Key strengths that drive effective leadership
          </motion.p>

          <motion.div 
            className="competencies-grid"
            variants={staggerContainer}
          >
            {[
              {
                title: "Strategic Leadership",
                icon: "🗺️",
                color: "#3B82F6",
                items: [
                  "Strategic Planning",
                  "Decision Making",
                  "Clarity in Vision",
                  "Innovation & R&D"
                ]
              },
              {
                title: "People Skills",
                icon: "👥",
                color: "#10B981",
                items: [
                  "Interpersonal communication",
                  "Active Listening",
                  "Mentorship",
                  "Networking"
                ]
              },
              {
                title: "Professional Excellence",
                icon: "🎯",
                color: "#F59E0B",
                items: [
                  "Professional Standards",
                  "Industry Knowledge",
                  "Negotiation",
                  "Understanding Technology"
                ]
              },
              {
                title: "Personal Attributes",
                icon: "💎",
                color: "#8B5CF6",
                items: [
                  "Resiliency, Flexibility & Humility",
                  "Conflict management",
                  "Value Management",
                  "Cost Control"
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="competency-category"
                variants={fadeIn}
                whileHover={{
                  y: -5,
                  boxShadow: `0 10px 25px ${category.color}20`,
                  transition: { duration: 0.3 }
                }}
                style={{ 
                  borderTop: `4px solid ${category.color}`,
                  '--category-color': category.color 
                }}
              >
                <div className="category-header">
                  <motion.span 
                    className="category-icon"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1.1, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    {category.icon}
                  </motion.span>
                  <h3 style={{ color: category.color }}>{category.title}</h3>
                </div>
                
                <ul className="competency-items">
                  {category.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * itemIndex }}
                      whileHover={{
                        x: 5,
                        color: category.color,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <span className="item-bullet" style={{ backgroundColor: category.color }}></span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
        {/* Skills Matrix */}
        <motion.section 
          className="section skills-section"
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
        >
          <div className="container">
            <motion.h2 
              className="section-title center-title"
              variants={fadeIn}
            >
              Professional Expertise
            </motion.h2>
            <motion.p 
              className="section-subtitle center-subtitle"
              variants={fadeIn}
            >
              Key skills and specialized knowledge areas
            </motion.p>
            
            <motion.div 
              className="skills-matrix-container"
              variants={staggerContainer}
            >
              {[
                {
                  category: "Financial Management",
                  color: "#3498db",
                  skills: [
                    "Financial accounting",
                    "Financial Planning",
                    "Cash Flow Management",
                    "Asset Management",
                    "Corporate Financial Affairs"
                  ]
                },
                {
                  category: "Healthcare Finance",
                  color: "#2ecc71",
                  skills: [
                    "Health Care Financing",
                    "Provider Payment Mechanism",
                    "Behavioral Finance"
                  ]
                },
                {
                  category: "Public Sector",
                  color: "#e74c3c",
                  skills: [
                    "Central Government Accounting",
                    "Public Finance",
                    "Tax Planning",
                    "Auditing"
                  ]
                },
                {
                  category: "Process & Systems",
                  color: "#f39c12",
                  skills: [
                    "Process Flow Design",
                    "Systems Analysis",
                    "Value Management"
                  ]
                }
              ].map((category, index) => (
                <motion.div 
                  key={index}
                  className="skill-category"
                  variants={fadeIn}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  style={{ borderTopColor: category.color }}
                >
                  <h3 style={{ color: category.color }}>{category.category}</h3>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="skill-item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * skillIndex }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: category.color,
                          color: 'white',
                          transition: { duration: 0.2 }
                        }}
                        style={{ 
                          borderLeft: `3px solid ${category.color}`,
                          boxShadow: `0 2px 10px ${category.color}20`
                        }}
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
        {/* Core Values */}
<motion.section 
  className="section values-section"
  initial="hidden"
  animate={controls}
  variants={staggerContainer}
  style={{
    background: "linear-gradient(135deg, #f5f7fa 0%, #e4f0fb 100%)",
    padding: "80px 0"
  }}
>
  <div className="container">
    <motion.h2 
      className="section-title center-title"
      variants={fadeIn}
      style={{
        color: "#2c3e50",
        position: "relative",
        display: "inline-block",
        marginBottom: "60px"
      }}
    >
      Core Values
      <motion.span 
        style={{
          position: "absolute",
          bottom: "-10px",
          left: "0",
          width: "100%",
          height: "4px",
          background: "linear-gradient(90deg, #3498db, #9b59b6)",
          borderRadius: "2px"
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.h2>
    
    <motion.div 
      className="values-grid"
      variants={staggerContainer}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "30px"
      }}
    >
      {[
        {
          title: "Integrity",
          description: "Commitment to transparency and accountability in all dealings",
          icon: "🧭",
          color: "#3498db"
        },
        {
          title: "Innovation",
          description: "Implementing creative solutions to Nakuru's challenges",
          icon: "💡",
          color: "#2ecc71"
        },
        {
          title: "Inclusivity",
          description: "Ensuring all communities have a voice in county affairs",
          icon: "🤝",
          color: "#9b59b6"
        },
        {
          title: "Service",
          description: "Putting the needs of Nakuru residents first",
          icon: "❤️",
          color: "#e74c3c"
        }
      ].map((value, index) => (
        <motion.div 
          key={index}
          className="value-card modern-card"
          variants={fadeIn}
          whileHover={{
            y: -10,
            boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
          }}
          custom={index}
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "30px",
            textAlign: "center",
            transition: "all 0.3s ease",
            borderBottom: `4px solid ${value.color}`,
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
          }}
        >
          <motion.div 
            className="value-icon"
            style={{
              fontSize: "48px",
              marginBottom: "20px",
              display: "inline-block"
            }}
            animate={{
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1.1, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          >
            {value.icon}
          </motion.div>
          <h3 style={{
            color: value.color,
            marginBottom: "15px",
            fontSize: "22px"
          }}>{value.title}</h3>
          <p style={{
            color: "#7f8c8d",
            lineHeight: "1.6"
          }}>{value.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>

{/* Gallery Section */}
<motion.section 
  className="section gallery-section"
  initial="hidden"
  animate={controls}
  variants={staggerContainer}
  style={{
    padding: "80px 0",
    background: "#2c3e50"
  }}
>
  <div className="container">
    <motion.h2 
      className="section-title center-title"
      variants={fadeIn}
      style={{
        color: "white",
        position: "relative",
        display: "inline-block",
        marginBottom: "20px"
      }}
    >
      Gallery
    </motion.h2>
    
    <motion.p 
      className="section-subtitle center-subtitle"
      variants={fadeIn}
      style={{
        color: "#bdc3c7",
        textAlign: "center",
        maxWidth: "700px",
        margin: "0 auto 40px",
        fontSize: "18px"
      }}
    >
      Moments from Geoffrey's journey of service
    </motion.p>
    
    <motion.div 
      className="gallery-container"
      variants={staggerContainer}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px"
      }}
    >
      {galleryImages.map((image, index) => (
        <motion.div 
          key={image.id}
          className="gallery-item"
          variants={fadeIn}
          whileHover={{ 
            scale: 1.05,
            zIndex: 1
          }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 400,
            damping: 10
          }}
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)"
          }}
        >
          <div className="gallery-image-container" style={{
            position: "relative",
            paddingTop: "100%",
            overflow: "hidden"
          }}>
            <img 
              src={image.src} 
              alt={image.alt} 
              className="gallery-image"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform 0.5s ease"
              }}
            />
            <motion.div 
              className="image-overlay"
              initial={{ 
                opacity: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)"
              }}
              whileHover={{ 
                opacity: 1,
                background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)"
              }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                padding: "20px",
                color: "white"
              }}
            >
              <motion.p 
                className="overlay-text"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
                style={{
                  margin: "0",
                  fontSize: "16px",
                  fontWeight: "500"
                }}
              >
                {image.alt}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</motion.section>
    </main>
  );
};

export default About;