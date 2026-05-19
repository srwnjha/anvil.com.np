import React from 'react';

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import BlogCard from '../components/sections/BlogCard';

const BlogGrid = () => {
  
  return (
    <>
      <Header />
        <Breadcrumb 
          title='Blog Grid Style'
          subtitle='Blog Grid Style'
        />
        <section className="space" id="blog-sec">
            <div className="container">
                <div className="row gy-4 justify-content-center">
                    <BlogCard className="col-xl-4 col-md-6" limit={9} />
                </div>
            </div>
        </section>
        
      <Footer />
    </>
  );
};

export default BlogGrid;