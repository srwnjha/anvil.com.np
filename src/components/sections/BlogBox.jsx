import React from 'react';
import { Link } from 'react-router-dom';

const BlogBox = ({ className = '', limit = null }) => {
  const blogs = [
    {
      title: 'Top Cybertronixity Trends to Watch in 2024 See Overview',
      img: 'assets/img/blog/blog_2_1.jpg',
      date: 'January 26',
      detailsLink: "/blog/top-cybertronixity-trends-2024",
    },
    {
      title: 'AI in Cybertronixity: A Double-Edged You Ever Find Sword?',
      img: 'assets/img/blog/blog_2_2.jpg',
      date: 'March 05',
      detailsLink: "/blog/ai-in-cybertronixity",
    },
    {
      title: 'The Importance of Regular Tronixity Audits',
      img: 'assets/img/blog/blog_1_3.jpg',
      date: 'April 15',
      detailsLink: "/blog/strong-password-guide",
    },
  ];

  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;
  const currentYear = new Date().getFullYear();

  return (
    <>
      {displayedBlogs.map((blog, index) => (
        <div className={className} key={index}>
          <div className="blog-card">
            <div className="blog-img">
              <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <Link to="/blog">{blog.date}, {currentYear}</Link>
              </div>
              <h3 className="box-title">
                <Link to={blog.detailsLink}>{blog.title}</Link>
              </h3>
              <Link to={blog.detailsLink} className="link-btn style-gradient">
                Read More<i className="far fa-long-arrow-right ms-2"></i>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogBox;
