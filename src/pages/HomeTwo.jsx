import React from 'react';
import Header from '../components/header/HeaderTwo';
import Footer from '../components/footer/FooterTwo';

import HeroTwo from '../components/sections/HeroTwo';
import WhySecTwo from '../components/sections/WhySecTwo';
import AboutSecTwo from '../components/sections/AboutSecTwo';
import ServiceSecTwo from '../components/sections/ServiceSecTwo';
import WhySecOne from '../components/sections/WhySecOne';
import TeamSecTwo from '../components/sections/TeamSecTwo';
import NewstickerSecOne from '../components/sections/NewstickerSecOne';
import SkillSecOne from '../components/sections/SkillSecOne';
import TestiSecTwo from '../components/sections/TestiSecTwo';
import PriceSecOne from '../components/sections/PriceSecOne';
import ContactSecOne from '../components/sections/ContactSecOne';
import BlogSecOne from '../components/sections/BlogSecOne';

const HomeTwo = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <HeroTwo />
        <WhySecTwo className="space" />
        <AboutSecTwo className="space-bottom" />
        <ServiceSecTwo className="" />
        <WhySecOne className="space" />
        <TeamSecTwo className="space-bottom" />
        <NewstickerSecOne />
        <SkillSecOne className="space" />
        <TestiSecTwo className="space" />
        <PriceSecOne className="space" />
        <ContactSecOne className="" />
        <BlogSecOne className="space" />
      </div>
      <Footer />
    </>
  );
};

export default HomeTwo;
