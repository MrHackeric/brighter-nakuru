import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages.css';

const News = ({ language }) => {
  const newsCategories = [
    { id: 'all', name: 'All News' },
    { id: 'campaign', name: 'Campaign Updates' },
    { id: 'policy', name: 'Policy Announcements' },
    { id: 'events', name: 'Event Coverage' },
    { id: 'endorsements', name: 'Endorsements' }
  ];
  
  const newsItems = [
    {
      id: 1,
      title: 'Geoffrey Launches Ambitious Youth Empowerment Program',
      date: 'June 15, 2023',
      category: 'policy',
      excerpt: 'The program aims to train and equip 5,000 young people with digital skills by the end of the year.',
      image: '/assets/images/news1.jpg'
    },
    {
      id: 2,
      title: 'Historic Rally Draws Thousands in Nakuru Town',
      date: 'June 10, 2023',
      category: 'events',
      excerpt: 'Residents turned out in large numbers to hear Geoffrey outline his vision for the county.',
      image: '/assets/images/news2.jpg'
    },
    {
      id: 3,
      title: 'Farmers Cooperative Partnership Announced',
      date: 'June 5, 2023',
      category: 'policy',
      excerpt: 'New initiative will connect small-scale farmers directly with markets to improve incomes.',
      image: '/assets/images/news3.jpg'
    },
    {
      id: 4,
      title: 'Business Leaders Endorse Geoffrey\'s Economic Plan',
      date: 'May 28, 2023',
      category: 'endorsements',
      excerpt: 'Prominent Nakuru business owners express support for job creation strategy.',
      image: '/assets/images/news4.jpg'
    },
    {
      id: 5,
      title: 'Campaign Announces Ward Coordinators',
      date: 'May 20, 2023',
      category: 'campaign',
      excerpt: 'Team of 55 ward coordinators appointed to lead grassroots mobilization.',
      image: '/assets/images/news5.jpg'
    },
    {
      id: 6,
      title: 'Healthcare Policy Framework Released',
      date: 'May 15, 2023',
      category: 'policy',
      excerpt: 'Detailed plan to improve healthcare access across the county.',
      image: '/assets/images/news6.jpg'
    }
  ];

  return (
    <main className="page news-page">
      <section className="page-header">
        <div className="container">
          <h1>News & Updates</h1>
          <p>Latest from Geoffrey's campaign trail</p>
        </div>
      </section>
      
      <section className="section featured-news">
        <div className="container">
          <div className="featured-story">
            <div className="featured-image">
              <img src="/assets/images/featured-news.jpg" alt="Geoffrey addressing supporters" />
            </div>
            <div className="featured-content">
              <span className="news-date">June 18, 2023</span>
              <h2>Geoffrey Unveils Comprehensive Infrastructure Plan</h2>
              <p>Detailed proposal includes road improvements, water projects, and public transport upgrades across all 55 wards.</p>
              <Link to="/news/infrastructure-plan" className="btn">Read Full Story</Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section news-listing">
        <div className="container">
          <div className="news-categories">
            {newsCategories.map(category => (
              <button key={category.id} className="category-btn">
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="news-grid">
            {newsItems.map(item => (
              <div key={item.id} className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-content">
                  <span className="news-date">{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <Link to={`/news/${item.id}`} className="read-more">Read Full Story →</Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pagination">
            <button className="page-btn">Previous</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">Next</button>
          </div>
        </div>
      </section>
      
      <section className="section press-section">
        <div className="container">
          <h2 className="section-title">Press Resources</h2>
          
          <div className="press-resources">
            <div className="press-card">
              <h3>Media Kit</h3>
              <p>Download official campaign photos, logos, and biographies</p>
              <a href="/assets/press/media-kit.zip" className="btn" download>
                Download Media Kit
              </a>
            </div>
            
            <div className="press-card">
              <h3>Press Inquiries</h3>
              <p>Contact our communications team for interviews and information</p>
              <a href="mailto:press@geoffreygitau.com" className="btn">
                Contact Press Team
              </a>
            </div>
            
            <div className="press-card">
              <h3>Subscribe</h3>
              <p>Get press releases and media advisories directly to your inbox</p>
              <form className="press-subscribe">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section in-media-section">
        <div className="container">
          <h2 className="section-title">Geoffrey in the Media</h2>
          
          <div className="media-grid">
            <div className="media-item">
              <div className="media-logo">
                <img src="/assets/images/nation-logo.png" alt="Daily Nation" />
              </div>
              <h3>"Gitau Presents New Vision for Nakuru"</h3>
              <p>Daily Nation - June 12, 2023</p>
              <a href="#" className="read-article">Read Article →</a>
            </div>
            
            <div className="media-item">
              <div className="media-logo">
                <img src="/assets/images/standard-logo.png" alt="The Standard" />
              </div>
              <h3>"Youth Empowerment Takes Center Stage in Nakuru Race"</h3>
              <p>The Standard - June 8, 2023</p>
              <a href="#" className="read-article">Read Article →</a>
            </div>
            
            <div className="media-item">
              <div className="media-logo">
                <img src="/assets/images/citizen-logo.png" alt="Citizen TV" />
              </div>
              <h3>Interview on Sunday Live</h3>
              <p>Citizen TV - June 4, 2023</p>
              <a href="#" className="watch-video">Watch Segment →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default News;