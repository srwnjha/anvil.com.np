import React from 'react';
import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Hero from '../components/sections/HeroOne';
import ServiceSecOne from '../components/sections/ServiceSecOne';
import BrandOne from '../components/sections/BrandOne';
import AboutOne from '../components/sections/AboutOne';
import CtaSecOne from '../components/sections/CtaSecOne';
import CtaSecTwo from '../components/sections/CtaSecTwo';
import WhySecOne from '../components/sections/WhySecOne';
import CounterSecOne from '../components/sections/CounterSecOne';
import TestimonialSecOne from '../components/sections/TestimonialSecOne';
import TeamSecOne from '../components/sections/TeamSecOne';

import ProjectSecOne from '../components/sections/ProjectSecOne';
import BlogSecTwo from '../components/sections/BlogSecTwo';

const HomeOne = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <Hero />
        <ServiceSecOne className="service-sec1" />
        <AboutOne className="space" />
        <CtaSecOne className="space" />
        <WhySecOne className="space" />
        <CounterSecOne />
        <TestimonialSecOne className="space" />
        <TeamSecOne className="space" /> 
        <ProjectSecOne className="space-bottom" />
        <CtaSecTwo className="cta-sec2" />
        <BlogSecTwo className="space" />
        <BrandOne className="space-bottom" />
      </div>
      <Footer />
    </>
  );
};

export default HomeOne;
