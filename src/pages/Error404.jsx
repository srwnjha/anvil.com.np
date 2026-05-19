import React from 'react';
import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';
import Breadcrumb from '../components/sections/Breadcrumb';
import ErrorSec from '../components/sections/ErrorSec';

const Error404 = () => {
  return (
    <>
      <Header />
      <Breadcrumb 
        title='Error 404'
        subtitle='Error 404'
      />
      <ErrorSec />
      <Footer />
    </>
  );
};

export default Error404;
