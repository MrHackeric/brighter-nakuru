import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../assets/styles/fullposts.css';

const FullPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Format WordPress content with consistent styling
  const formatContent = (content) => {
    return content
      .replace(/<h1/g, '<h1 class="heading-1"')
      .replace(/<h2/g, '<h2 class="heading-2"')
      .replace(/<h3/g, '<h3 class="heading-3"')
      .replace(/<p>/g, '<p class="paragraph">')
      .replace(/<ul>/g, '<ul class="wp-list">')
      .replace(/<ol>/g, '<ol class="wp-list">')
      .replace(/<table/g, '<table class="wp-table"')
      .replace(/<blockquote/g, '<blockquote class="wp-quote"');
  };

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${import.meta.env.VITE_WORDPRESS_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`
        );
        
        if (!response.ok) throw new Error('Failed to fetch post');
        
        const data = await response.json();
        if (data.length === 0) throw new Error('Post not found');

        const postData = data[0];
        setPost({
          title: postData.title.rendered,
          content: formatContent(postData.content.rendered),
          date: new Date(postData.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          image: postData._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/images/default-news.jpg',
          categories: postData.categories || [],
          author: postData._embedded?.author?.[0]
        });

        // Fetch related posts if categories exist
        if (postData.categories?.length > 0) {
          const relatedResponse = await fetch(
            `${import.meta.env.VITE_WORDPRESS_URL}/wp-json/wp/v2/posts?categories=${postData.categories[0]}&per_page=3&exclude=${postData.id}&_embed`
          );
          const relatedData = await relatedResponse.json();
          setRelatedPosts(relatedData);
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPostData();
  }, [slug]);

  if (loading) {
    return (
      <div className="container">
        <div className="loading">Loading post...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="error">Error: {error}</div>
        <Link to="/news" className="btn">Back to News</Link>
      </div>
    );
  }

  return (
    <main className="page full-post-page">
      <article className="container">
        <header className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            {post.author && (
              <span className="post-author">By {post.author.name}</span>
            )}
          </div>
          {post.image && (
            <div className="post-featured-image">
              <img 
                src={post.image} 
                alt={post.title}
                onError={(e) => {
                  e.target.src = '/assets/images/default-news.jpg';
                }}
              />
            </div>
          )}
        </header>
        
        <div 
          className="post-content" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {relatedPosts.length > 0 && (
          <div className="related-posts">
            <h3 className="related-title">You Might Also Like</h3>
            <div className="related-grid">
              {relatedPosts.map(related => (
                <div key={related.id} className="related-post">
                  <Link to={`/news/${related.slug}`}>
                    {related._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                      <img 
                        src={related._embedded['wp:featuredmedia'][0].source_url}
                        alt={related.title.rendered}
                        className="related-image"
                      />
                    )}
                    <h4>{related.title.rendered}</h4>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="post-footer">
          <Link to="/news" className="btn back-btn">
            Back to News
          </Link>
        </footer>
      </article>
    </main>
  );
};

export default FullPost;