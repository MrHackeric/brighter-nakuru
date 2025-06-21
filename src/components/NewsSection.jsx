import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/news.css';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Replace with your WordPress site URL
        const response = await fetch('https://yourdomain.com/wp-json/wp/v2/posts?per_page=3&_embed');
        const data = await response.json();
        
        const formattedNews = data.map(post => ({
          id: post.id,
          title: post.title.rendered,
          date: new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }),
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 100) + '...',
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/images/news-default.jpg',
          link: `/news/${post.slug}`
        }));
        
        setNewsItems(formattedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback data if API fails
        setNewsItems([
          {
            id: 1,
            title: 'Latest Campaign Updates',
            date: new Date().toLocaleDateString(),
            excerpt: 'Stay tuned for the latest news from our campaign.',
            image: '/assets/images/news-default.jpg',
            link: '/news'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="section news-section">
      <div className="container">
        <h2 className="section-title">
          <span>Latest News & Updates</span>
        </h2>
        
        {loading ? (
          <div className="news-loading">
            <div className="loading-spinner"></div>
          </div>
        ) : (
          <>
            <div className="news-grid">
              {newsItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="news-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="news-image">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      loading="lazy"
                    />
                    <div className="image-overlay"></div>
                  </div>
                  <div className="news-content">
                    <span className="news-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <Link to={item.link} className="read-more">
                      Read More <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link to="/news" className="btn btn-news">
                View All News
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSection;