import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../data/blog-posts";

const BlogBoxV2 = ({ className = "", limit = null }) => {
  // Get first two blog posts and use incrementing images (blog_2_1.jpg, blog_2_2.jpg)
  const blogs = blogPosts.slice(0, 2).map((post, index) => ({
    title: post.title,
    slug: post.slug,
    img: `assets/img/blog/blog_2_${index + 1}.jpg`,
    date: post.date,
    tag: post.category,
    comment: "2 Comments",
    text: post.excerpt,
    category: post.category,
  }));

  const displayedBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <>
      {displayedBlogs.map((blog, index) => (
        <div className={className} key={index}>
          <div className="blog-box">
            <div className="blog-img">
              <img src={blog.img} alt={blog.title} />
            </div>
            <div className="blog-content">
              <div className="blog-meta">
                <Link to="/blog">
                  <i className="far fa-calendar"></i>
                  {blog.date}
                </Link>
                <Link className="author" to="/blog">
                  <i className="far fa-user"></i>
                  By ANVIL TECHNOLOGIES
                </Link>
              </div>
              <h3 className="box-title">
                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
              </h3>
              <p className="box-text">{blog.text}</p>
              <Link to={`/blog/${blog.slug}`} className="ot-btn btn-sm">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogBoxV2;
