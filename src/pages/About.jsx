import React from 'react';

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import AboutFour from '../components/sections/AboutFour';
import CounterSecOne from '../components/sections/CounterSecOne';
import TeamSecOne from '../components/sections/TeamSecOne';
import WhySecOne from '../components/sections/WhySecOne';
import TestiSecTwo from '../components/sections/TestiSecTwo';
import BrandOne from '../components/sections/BrandOne';

const About = () => {
  return (
    <>
      <Header />
      <Breadcrumb 
        title='About Us'
        subtitle='About Us'
      />
      <AboutFour className="space" />
      <CounterSecOne className="counter-sec-border" />
      <TeamSecOne className="space" />
      <WhySecOne className="space-bottom" />
      <TestiSecTwo className="space" />
      <BrandOne className="space" />
      <Footer />
    </>
  );
};

export default About;
