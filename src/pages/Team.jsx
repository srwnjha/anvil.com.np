import React from 'react';

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import TeamBox from '../components/sections/TeamBox';

const TeamPage = () => {
  
  return (
    <>
      <Header />
        <Breadcrumb 
          title='Team Members'
          subtitle='Team Members'
        />
        <section className="space">
            <div className="container">
                <div className="row gy-4">
                    <TeamBox className="col-lg-4 col-md-6" limit={6} />
                </div>
            </div>
        </section>
        
      <Footer />
    </>
  );
};

export default TeamPage;