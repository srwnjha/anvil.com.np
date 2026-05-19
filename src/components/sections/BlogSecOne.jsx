import React from 'react';
import BlogCard from './BlogCard';

const BlogSecOne = ({ className = '' }) => {
  return (
    <section className={className} id="blog-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <span className="text">Blog Updates</span>
          </span>
          <h2 className="sec-title">Latest News Posts</h2>
        </div>
        <div className="row gy-4 justify-content-center">
          <BlogCard className="col-xl-4 col-md-6" limit={3} />
        </div>
      </div>
    </section>
  );
};

export default BlogSecOne;
