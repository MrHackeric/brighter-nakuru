import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/pages.css';

const News = () => {
  const [posts, setPosts] = useState([]);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://brighternakuru.com';
  const POSTS_PER_PAGE = 6;

  const fetchPosts = async (categoryId = '', page = 1) => {
    try {
      setLoading(true);
      
      let apiUrl = `${WORDPRESS_URL}/wp-json/wp/v2/posts?_embed&per_page=${POSTS_PER_PAGE}&page=${page}`;
      
      if (categoryId && categoryId !== 'all') {
        apiUrl += `&categories=${categoryId}`;
      }

      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const totalPages = parseInt(response.headers.get('X-WP-TotalPages')) || 1;
      setTotalPages(totalPages);

      const data = await response.json();
      
      const transformedPosts = data.map(post => ({
        id: post.id,
        title: post.title.rendered,
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        category: post.categories?.[0] || 'uncategorized',
        excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 150) + '...',
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/images/default-news.jpg',
        slug: post.slug
      }));

      setPosts(transformedPosts);
      
      if (transformedPosts.length > 0) {
        setFeaturedPost(transformedPosts[0]);
      }
      
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/categories`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch categories');
      }

      const data = await response.json();
      
      const transformedCategories = data.map(cat => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug
      }));

      setCategories([{ id: 'all', name: 'All News', slug: 'all' }, ...transformedCategories]);
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchCategories();
      await fetchPosts();
    };
    
    fetchData();
  }, []);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
    fetchPosts(categoryId);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchPosts(activeCategory, page);
  };

  if (loading && posts.length === 0) {
    return (
      <main className="page news-page">
        <div className="container loading">Loading news...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page news-page">
        <div className="container error">
          Error: {error}
          <button onClick={() => window.location.reload()} className="btn">
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="page news-page">
      <section className="page-header">
        <div className="container">
          <h1>News & Updates</h1>
          <p>Latest from Geoffrey's campaign trail</p>
        </div>
      </section>
      
      {featuredPost && (
        <section className="section featured-news">
          <div className="container">
            <div className="featured-story">
              <div className="featured-image">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  onError={(e) => {
                    e.target.src = '/assets/images/default-news.jpg';
                  }}
                />
              </div>
              <div className="featured-content">
                <span className="news-date">{featuredPost.date}</span>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <Link to={`/news/${featuredPost.slug}`} className="btn">
                  Read Full Story
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      
      <section className="section news-listing">
        <div className="container">
          <div className="news-categories">
            {categories.map(category => (
              <button 
                key={category.id} 
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {posts.length === 0 ? (
            <div className="no-results">
              <p>No news articles found for this category.</p>
            </div>
          ) : (
            <>
              <div className="news-grid">
                {posts.map(post => (
                  <div key={post.id} className="news-card">
                    <div className="news-image">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        onError={(e) => {
                          e.target.src = '/assets/images/default-news.jpg';
                        }}
                      />
                      <span className="news-category">
                        {categories.find(cat => cat.id === post.category)?.name || 'News'}
                      </span>
                    </div>
                    <div className="news-content">
                      <span className="news-date">{post.date}</span>
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <Link to={`/news/${post.slug}`} className="read-more">
                        Read Full Story →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {totalPages > 1 && (
                <div className="pagination">
                  <button 
                    className="page-btn" 
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                  
                  {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        className={`page-btn ${currentPage === pageNum ? 'active' : ''}`}
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <span className="page-ellipsis">...</span>
                  )}
                  
                  <button 
                    className="page-btn" 
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default News;