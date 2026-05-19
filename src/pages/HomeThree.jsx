import React from 'react';
import Header from '../components/header/HeaderThree';
import Footer from '../components/footer/FooterThree';

import HeroThree from '../components/sections/HeroThree';
import ProcessSecOne from '../components/sections/ProcessSecOne';
import AboutSecThree from '../components/sections/AboutSecThree';
import ServiceSecThree from '../components/sections/ServiceSecThree';
import WhySecThree from '../components/sections/WhySecThree';
import ProcessSecTwo from '../components/sections/ProcessSecTwo';
import CtaSecOne from '../components/sections/CtaSecOne';
import TeamSecThree from '../components/sections/TeamSecThree';
import TestiSecThree from '../components/sections/TestiSecThree';
import CaseSecOne from '../components/sections/CaseSecOne';
import BlogSecTwo from '../components/sections/BlogSecTwo';
import SubscribeSecOne from '../components/sections/SubscribeSecOne';

const HomeThree = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <HeroThree />
        <ProcessSecOne className="space" />
        <AboutSecThree className="space" />
        <ServiceSecThree className="space" />
        <WhySecThree className="space" />
        <ProcessSecTwo className="space-extra-top space" />
        <CtaSecOne className="space" />
        <TeamSecThree className="space" />
        <TestiSecThree className="space" />
        <CaseSecOne className="space-top" />
        <BlogSecTwo className="space" />
        <SubscribeSecOne className="space-bottom" />
      </div>
      <Footer />
    </>
  );
};

export default HomeThree;
