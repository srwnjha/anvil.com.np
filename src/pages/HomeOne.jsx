import React from "react";
import Header from "../components/header/HeaderOne";
import Footer from "../components/footer/FooterOne";

import Hero from "../components/sections/HeroOne";
import ProcessSecOne from "../components/sections/ProcessSecOne";
import AboutSecThree from "../components/sections/AboutSecThree";
import ServiceSecThree from "../components/sections/ServiceSecThree";
import WhySecThree from "../components/sections/WhySecThree";
import ProcessSecTwo from "../components/sections/ProcessSecTwo";
import CtaSecOne from "../components/sections/CtaSecOne";
// import TeamSecThree from "../components/sections/TeamSecThree";
// import TestiSecThree from "../components/sections/TestiSecThree";
// import CaseSecOne from "../components/sections/CaseSecOne";
import BlogSecTwo from "../components/sections/BlogSecTwo";
import Clients from "../components/sections/Clients";
// import SubscribeSecOne from "../components/sections/SubscribeSecOne";
// import ServiceSecOne from "../components/sections/ServiceSecOne";
// import BrandOne from "../components/sections/BrandOne";
// import AboutOne from "../components/sections/AboutOne";
// import CtaSecOne from "../components/sections/CtaSecOne";
// import CtaSecTwo from "../components/sections/CtaSecTwo";
// import WhySecOne from "../components/sections/WhySecOne";
// import CounterSecOne from "../components/sections/CounterSecOne";
// import TestimonialSecOne from "../components/sections/TestimonialSecOne";
// import TeamSecOne from "../components/sections/TeamSecOne";

// import ProjectSecOne from "../components/sections/ProjectSecOne";
// import BlogSecTwo from "../components/sections/BlogSecTwo";

const HomeOne = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <Hero />
        <Clients />
        <AboutSecThree className="space" />
        <ProcessSecOne className="space" />
        <ServiceSecThree className="space" />
        <WhySecThree className="space" />
        <ProcessSecTwo className="space-extra-top space" />
        <CtaSecOne className="space" />
        {/* <TeamSecThree className="space" /> */}
        {/* <TestiSecThree className="space" /> */}
        {/* <CaseSecOne className="space-top" /> */}
        <BlogSecTwo className="space" />
        {/* <SubscribeSecOne className="space-bottom" /> */}
        {/* <ServiceSecOne className="service-sec1" />
        <AboutOne className="space" />
        <CtaSecOne className="space" />
        <WhySecOne className="space" />
        <CounterSecOne />
        <TestimonialSecOne className="space" />
        <TeamSecOne className="space" /> 
        <ProjectSecOne className="space-bottom" />
        <CtaSecTwo className="cta-sec2" />
        <BlogSecTwo className="space" />
        <BrandOne className="space-bottom" /> */}
      </div>
      <Footer />
    </>
  );
};

export default HomeOne;
