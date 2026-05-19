import React from 'react';
import TeamBox from './TeamBox';

const TeamSecTwo = ({ className = '' }) => {
  return (
    <section className={className} id="team-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <span className="text">Team Members</span>
          </span>
          <h2 className="sec-title">Our Top Skilled Experts</h2>
        </div>
        <div className="row gy-4">
          <TeamBox className="col-lg-4 col-md-6" limit={3} />
        </div>
      </div>
    </section>
  );
};

export default TeamSecTwo;
