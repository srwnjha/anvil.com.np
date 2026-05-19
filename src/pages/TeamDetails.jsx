import React from 'react';

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import TeamDetailsSec from '../components/sections/TeamDetailsSec';

const TeamDetails = () => {
  return (
    <>
      <Header />
      <Breadcrumb 
        title='Team Details'
        subtitle='Team Details'
      />
      <TeamDetailsSec className="space" />
      <Footer />
    </>
  );
};

export default TeamDetails;
