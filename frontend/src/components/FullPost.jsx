import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../assets/styles/fullposts.css';

const FullPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);
  const [commentForm, setCommentForm] = useState({
    author_name: '',
    author_email: '',
    content: '',
    parent: 0
  });
  const [replyingTo, setReplyingTo] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Format WordPress content
  const formatContent = (content) => {
    return content
      .replace(/<h1/g, '<h1 class="heading-1"')
      .replace(/<h2/g, '<h2 class="heading-2"')
      .replace(/<h3/g, '<h3 class="heading-3"')
      .replace(/<p>/g, '<p class="paragraph">')
      .replace(/<ul>/g, '<ul class="wp-list">')
      .replace(/<ol>/g, '<ol class="wp-list">')
      .replace(/<table/g, '<table class="wp-table"')
      .replace(/<blockquote/g, '<blockquote class="wp-quote"')
      .replace(/<img/g, '<img class="wp-image"');
  };

  const fetchComments = async (postId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_WORDPRESS_URL}/wp-json/wp/v2/comments?post=${postId}&order=desc&_embed`
      );
      
      if (!response.ok) throw new Error('Failed to fetch comments');
      
      const data = await response.json();
      setComments(data);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const authString = btoa(`${import.meta.env.VITE_WORDPRESS_USERNAME}:${import.meta.env.VITE_WORDPRESS_APP_PASSWORD}`);
      
      const response = await fetch(
        `${import.meta.env.VITE_WORDPRESS_URL}/wp-json/wp/v2/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${authString}`
          },
          body: JSON.stringify({
            post: post.id,
            author_name: commentForm.author_name,
            author_email: commentForm.author_email,
            content: commentForm.content,
            parent: commentForm.parent,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit comment');
      }

      const newComment = await response.json();
      setComments([newComment, ...comments]);
      setCommentForm({ author_name: '', author_email: '', content: '', parent: 0 });
      setReplyingTo(null);
    } catch (err) {
      console.error('Error:', err);
      alert(`Comment submission failed: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReplyClick = (commentId, authorName) => {
    setReplyingTo(commentId);
    setCommentForm({
      ...commentForm,
      parent: commentId,
      content: `@${authorName} `
    });
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
          id: postData.id,
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

        // Fetch related posts
        if (postData.categories?.length > 0) {
          const relatedResponse = await fetch(
            `${import.meta.env.VITE_WORDPRESS_URL}/wp-json/wp/v2/posts?categories=${postData.categories[0]}&per_page=3&exclude=${postData.id}&_embed`
          );
          const relatedData = await relatedResponse.json();
          setRelatedPosts(relatedData.map(post => ({
            id: post.id,
            title: post.title.rendered,
            slug: post.slug,
            image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/images/default-news.jpg',
            excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 100) + '...'
          })));
        }

        // Fetch comments
        await fetchComments(postData.id);

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
      <main className="page full-post-page loading-state">
        <div className="container">
          <div className="loading-spinner"></div>
          <p className="loading-text">Loading post...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page full-post-page error-state">
        <div className="container">
          <div className="error-content">
            <div className="error-icon">!</div>
            <h3>Error loading content</h3>
            <p className="error-message">{error}</p>
            <Link to="/news" className="btn btn-primary">
              Back to News
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="page full-post-page">
      <article className="container">
        <header className="post-header">
          <div className="breadcrumb">
            <Link to="/news" className="breadcrumb-link">News</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{post.title}</span>
          </div>
          
          <h1 className="post-title animate-fade-up">{post.title}</h1>
          
          <div className="post-meta">
            <span className="post-date">{post.date}</span>
            {post.author && (
              <span className="post-author">
                <span className="by-text">By</span> 
                <span className="author-name">{post.author.name}</span>
              </span>
            )}
          </div>
          
          {post.image && (
            <div className="post-featured-image animate-fade-in">
              <img 
                src={post.image} 
                alt={post.title}
                className="featured-img"
                onError={(e) => {
                  e.target.src = '/assets/images/default-news.jpg';
                }}
              />
              <div className="image-overlay"></div>
            </div>
          )}
        </header>
        
        <div 
          className="post-content animate-fade-in" 
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
        
        {/* Comments Section */}
        <section className="comments-section animate-fade-in">
          <h3 className="section-title">Comments ({comments.length})</h3>
          
          {/* Comment Form */}
          <div className={`comment-form-container ${replyingTo ? 'replying' : ''}`}>
            <h4>{replyingTo ? 'Leave a Reply' : 'Leave a Comment'}</h4>
            <form onSubmit={handleCommentSubmit} className="comment-form">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={commentForm.author_name}
                  onChange={(e) => setCommentForm({...commentForm, author_name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={commentForm.author_email}
                  onChange={(e) => setCommentForm({...commentForm, author_email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Comment"
                  value={commentForm.content}
                  onChange={(e) => setCommentForm({...commentForm, content: e.target.value})}
                  rows="4"
                  required
                ></textarea>
              </div>
              {replyingTo && (
                <div className="replying-to">
                  Replying to: {comments.find(c => c.id === replyingTo)?.author_name}
                  <button 
                    type="button" 
                    className="cancel-reply"
                    onClick={() => {
                      setReplyingTo(null);
                      setCommentForm({
                        ...commentForm,
                        parent: 0,
                        content: ''
                      });
                    }}
                  >
                    Cancel
                  </button>
                </div>
              )}
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Post Comment'}
              </button>
            </form>
          </div>
          
          {/* Comments List */}
          <div className="comments-list">
            {comments.length === 0 ? (
              <p className="no-comments">No comments yet. Be the first to comment!</p>
            ) : (
              <>
                {(showAllComments ? comments : comments.slice(0, 3)).map(comment => (
                  <div 
                    key={comment.id} 
                    className={`comment ${comment.parent > 0 ? 'reply' : ''}`}
                  >
                    <div className="comment-header">
                      <div className="comment-author">{comment.author_name}</div>
                      <div className="comment-date">
                        {new Date(comment.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                    </div>
                    <div 
                      className="comment-content" 
                      dangerouslySetInnerHTML={{ __html: comment.content.rendered }} 
                    />
                    <button 
                      className="reply-btn"
                      onClick={() => handleReplyClick(comment.id, comment.author_name)}
                    >
                      Reply
                    </button>
                    
                    {/* Nested replies */}
                    {comments.filter(c => c.parent === comment.id).map(reply => (
                      <div key={reply.id} className="comment reply">
                        <div className="comment-header">
                          <div className="comment-author">
                            {reply.author_name} <span className="reply-to">→ @{comment.author_name}</span>
                          </div>
                          <div className="comment-date">
                            {new Date(reply.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </div>
                        </div>
                        <div 
                          className="comment-content" 
                          dangerouslySetInnerHTML={{ __html: reply.content.rendered }} 
                        />
                        <button 
                          className="reply-btn"
                          onClick={() => handleReplyClick(comment.id, reply.author_name)}
                        >
                          Reply
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
                
                {comments.length > 3 && (
                  <button 
                    className="view-comments-btn"
                    onClick={() => setShowAllComments(!showAllComments)}
                  >
                    {showAllComments ? 'Show Fewer Comments' : `View All Comments (${comments.length})`}
                  </button>
                )}
              </>
            )}
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="related-posts animate-fade-in">
            <h3 className="related-title">You Might Also Like</h3>
            <div className="related-grid">
              {relatedPosts.map((related, index) => (
                <div 
                  key={related.id} 
                  className="related-post-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={`/news/${related.slug}`} className="related-post-link">
                    <div className="related-image-container">
                      <img 
                        src={related.image}
                        alt={related.title}
                        className="related-image"
                      />
                      <div className="image-overlay"></div>
                    </div>
                    <div className="related-content">
                      <h4 className="related-post-title">{related.title}</h4>
                      <p className="related-post-excerpt">{related.excerpt}</p>
                      <span className="read-more">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"/>
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}
        
        <footer className="post-footer animate-fade-in">
          <Link to="/news" className="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z"/>
            </svg>
            Back to News
          </Link>
        </footer>
      </article>
    </main>
  );
};

export default FullPost;