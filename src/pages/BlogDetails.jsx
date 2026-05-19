import React from 'react';
import { useParams, Navigate } from "react-router-dom";

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import BlogDetailsSec from '../components/sections/BlogDetailsSec';
import blogs from '../components/data/blog-posts';

const BlogDetails = () => {
  const { slug } = useParams();

  // Find the blog by slug
  const blog = blogs.find(p => p.slug === slug);

  // If no slug is provided (accessing /blog-details directly), use the first blog
  const currentBlog = slug ? blog : blogs[0];

  // If slug is provided but blog not found, redirect to blogs page
  if (slug && !blog) {
    return <Navigate to="/blogs" replace />;
  }
  
  // Get blog title from blog data
  const blogTitle = currentBlog ? currentBlog.title : 'Blog Details';
  
  return (
    <>
      <Header />
        <Breadcrumb 
          title={blogTitle}
          subtitle={blogTitle}
        />
        <BlogDetailsSec 
          className="position-relative overflow-hidden space-top space-extra-bottom"
          post={currentBlog}
        />
        
      <Footer />
    </>
  );
};

export default BlogDetails;