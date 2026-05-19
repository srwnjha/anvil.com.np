import React from 'react';

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import PriceSecTwo from '../components/sections/PriceSecTwo';
import WhySecThree from '../components/sections/WhySecThree';
import BrandOne from '../components/sections/BrandOne';

const PricingPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb 
        title='Pricing Plans'
        subtitle='Pricing Plans'
      />
      <PriceSecTwo className="space" />
      <WhySecThree className='space' />
      <BrandOne className="space" />
      <Footer />
    </>
  );
};

export default PricingPage;
