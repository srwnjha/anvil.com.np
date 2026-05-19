import React from 'react';

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import BlogSecOne from '../components/sections/BlogSecOne';
import ServiceSecOne from '../components/sections/ServiceSecOneV2';
import WhySecThree from '../components/sections/WhySecThree';

const ServicePage = () => {
  
  return (
    <>
      <Header />
        <Breadcrumb 
          title='Services'
          subtitle='Services'
        />
        <ServiceSecOne className="space" />
        <WhySecThree className='space' />
        <BlogSecOne className="space" />
        
      <Footer />
    </>
  );
};

export default ServicePage;