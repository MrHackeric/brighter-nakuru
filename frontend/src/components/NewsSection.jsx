import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/newssection.css';

const NewsSection = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://brighternakuru.com';

  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed&per_page=3`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch latest news');
        }

        const data = await response.json();
        
        const transformedPosts = data.map(post => ({
          id: post.id,
          title: post.title.rendered,
          date: new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 100) + '...',
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/images/default-news.jpg',
          slug: post.slug
        }));

        setLatestPosts(transformedPosts);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLatestPosts();
  }, [WORDPRESS_URL]);

  if (loading) {
    return <div className="section loading">Loading latest news...</div>;
  }

  if (error) {
    return <div className="section error">Error loading news: {error}</div>;
  }

  return (
    <section className="news-section">
      <div className="container">
        <div className="section-header">
          <h2>Latest Updates</h2>
          <Link to="/news" className="view-all">View All News →</Link>
        </div>
        
        <div className="news-grid">
          {latestPosts.map(post => (
            <div key={post.id} className="news-card">
              <div className="news-image">
                <img 
                  src={post.image} 
                  alt={post.title}
                  onError={(e) => {
                    e.target.src = '/assets/images/default-news.jpg';
                  }}
                />
              </div>
              <div className="news-content">
                <span className="news-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/news/${post.slug}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;