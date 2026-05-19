import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = ({ className = '', limit = null }) => {
  const teamData = [
    { title: 'Rocky Morgan', img: 'assets/img/team/team_1_1.jpg', desig: 'CEO Founder' },
    { title: 'Eliana Bellin', img: 'assets/img/team/team_1_2.jpg', desig: 'Marketer' },
    { title: 'Emanuel Macu', img: 'assets/img/team/team_1_3.jpg', desig: 'Designer' },
    { title: 'Donne Joanne', img: 'assets/img/team/team_1_4.jpg', desig: 'Developer' },
  ];

  const displayTeam = limit !== null ? teamData.slice(0, limit) : teamData;

  return (
    <>
      {displayTeam.map((member, index) => (
        <div className={className} key={index}>
          <div className="ot-team team-card">
            <div className="box-img">
              <img src={member.img} alt="Team" />
            </div>
            <div className="box-content">
              <h3 className="box-title">
                <Link to="/team-details">{member.title}</Link>
              </h3>
              <span className="box-desig">{member.desig}</span>
              <div className="ot-social">
                <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamCard;
