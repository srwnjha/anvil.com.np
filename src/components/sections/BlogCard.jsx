import React from 'react';
import { Link } from 'react-router-dom';
import blogPosts from '../data/blog-posts';

const BlogCard = ({ className, limit }) => {
  
  // Apply limit if provided, otherwise show all posts
  const postsToDisplay = limit ? blogPosts.slice(0, limit) : blogPosts;
  
  return (
    <>
      {postsToDisplay.map((post, index) => (
        <div className={className} key={index}>
          <div className="blog-card">
            <div className="blog-img">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <Link to="/blog"><i className="far fa-calendar"></i> {post.date}</Link>
                <Link to="/blog"><i className="far fa-user"></i> By {post.author}</Link>
              </div>
              <h3 className="box-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className='box-text'>{post.excerpt}</p>
              <Link to={`/blog/${post.slug}`} className="link-btn">
                Read More <i className="far fa-long-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
