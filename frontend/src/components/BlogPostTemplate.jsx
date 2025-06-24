// components/BlogPostTemplate.jsx
import React from 'react';
import '../assets/styles/blog-post.css';

const BlogPostTemplate = ({ post }) => {
  // Format the date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="blog-post">
      <header className="post-header">
        <h1 className="post-title">{post.title.rendered}</h1>
        <div className="post-meta">
          <span className="post-date">{formattedDate}</span>
          {/* Add author, categories, etc. if needed */}
        </div>
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <div className="post-featured-image">
            <img
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              className="featured-image"
            />
          </div>
        )}
      </header>

      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: formatWordPressContent(post.content.rendered) }}
      />

      <footer className="post-footer">
        {/* Add tags, share buttons, author bio, etc. */}
      </footer>
    </article>
  );
};

// Helper function to format WordPress content
const formatWordPressContent = (content) => {
  // Add your custom formatting transformations here
  return content
    .replace(/<h1/g, '<h1 class="heading-1"')
    .replace(/<h2/g, '<h2 class="heading-2"')
    .replace(/<h3/g, '<h3 class="heading-3"')
    // Add more replacements as needed
    .replace(/<p>/g, '<p class="paragraph">');
};

export default BlogPostTemplate;