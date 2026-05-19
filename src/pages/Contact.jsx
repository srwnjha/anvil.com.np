import React from 'react';

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import ContactInfoSec from '../components/sections/ContactInfoSec';
import ContactSecOne from '../components/sections/ContactSecOne';

const ProjectPage = () => {
  
  return (
    <>
      <Header />
        <Breadcrumb 
          title='Contact Us'
          subtitle='Contact Us'
        />
        <ContactInfoSec className="space-top" />
        <ContactSecOne className="space" />
        
      <Footer />
    </>
  );
};

export default ProjectPage;