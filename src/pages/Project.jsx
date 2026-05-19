import React from 'react';

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import ProjectSecThree from '../components/sections/ProjectSecThree';

const ProjectPage = () => {
  
  return (
    <>
      <Header />
        <Breadcrumb 
          title='Our Projects'
          subtitle='Our Projects'
        />
        <ProjectSecThree className="space" />
        
      <Footer />
    </>
  );
};

export default ProjectPage;