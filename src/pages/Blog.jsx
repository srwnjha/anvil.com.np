import React from 'react';

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import BlogMain from '../components/sections/BlogMain';

const BlogPage = () => {
  
  return (
    <>
      <Header />
        <Breadcrumb 
          title='Blog Standard'
          subtitle='Blog Standard'
        />
        <BlogMain />
        
      <Footer />
    </>
  );
};

export default BlogPage;