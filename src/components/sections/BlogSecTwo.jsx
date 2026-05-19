import React from 'react';
import BlogBoxV2 from './BlogBoxV2';

const BlogSecTwo = ({ className = '' }) => {
  return (
    <section className={`overflow-hidden ${className}`} id="blog-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <span className="text">News Posts</span>
          </span>
          <h2 className="sec-title">Latest Blog Updates</h2>
        </div>
        <div className="row gx-44 gy-30">
          <BlogBoxV2 className="col-lg-6" limit={2} />
        </div>
      </div>
    </section>
  );
};

export default BlogSecTwo;