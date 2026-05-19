import React from 'react';
import TeamGrid from './TeamGrid';

const TeamSecThree = ({ className = '' }) => {
  return (
    <section className={className} id="team-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title"><span className="text">Team Members</span></span>
          <h2 className="sec-title">Our Top Skilled Experts</h2>
        </div>
        <div className="row team-grid-area">
          <TeamGrid className="col-lg-auto col-sm-6" limit={4} />
        </div>
      </div>
    </section>
  );
};

export default TeamSecThree;
