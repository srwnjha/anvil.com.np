import React from 'react';
import { Link } from 'react-router-dom';

const TeamGrid = ({ className = '', limit = null }) => {
  const teamMembers = [
    {
      name: 'Ambert Daniel',
      designation: 'CEO Founder',
      image: 'assets/img/team/team_3_1.jpg',
    },
    {
      name: 'Monia Zillan',
      designation: 'Marketer',
      image: 'assets/img/team/team_3_2.jpg',
    },
    {
      name: 'Daniel Smith',
      designation: 'Designer',
      image: 'assets/img/team/team_3_3.jpg',
    },
    {
      name: 'Latina Lucas',
      designation: 'Developer',
      image: 'assets/img/team/team_3_4.jpg',
    },
  ];

  const displayedMembers = limit ? teamMembers.slice(0, limit) : teamMembers;

  return (
    <>
      {displayedMembers.map((member, index) => (
        <React.Fragment key={index}>
          <div className={className}>
            <div className="ot-team team-grid">
              <div className="box-img">
                <img src={member.image} alt="Team" />
                <div className="ot-social">
                  <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
              <h3 className="box-title">
                <Link to="/team-details">{member.name}</Link>
              </h3>
              <span className="box-desig">{member.designation}</span>
            </div>
          </div>
          <div className="box-line-ani"></div>
        </React.Fragment>
      ))}
    </>
  );
};

export default TeamGrid;
