import React from 'react';
import { Link } from "react-router-dom";

const BlogAuthor = ({ 
  authorName = 'William Benjamin',
  authorDesignation = 'Author',
  authorText = 'Re-engineer multimedia based internal or "organic" sources for progressive vortals. Assertively leverage existing economically sound total linkage whereas global best practices.',
  authorLink = '/team-details',
  authorImage = '/assets/img/blog/blog-author.jpg'
}) => {
  return (
    <div className="blog-author">
      <div className="auhtor-img">
        <img src={authorImage} alt="Blog Author" />
      </div>
      <div className="media-body">
        <h3 className="author-name">
          <Link className="text-inherit" to={authorLink}>{authorName}</Link>
        </h3>
        <span className="author-desig">{authorDesignation}</span>
        <p className="author-text">{authorText}</p>
      </div>
    </div>
  );
};

export default BlogAuthor;
