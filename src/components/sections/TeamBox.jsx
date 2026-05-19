import React from 'react';
import { Link } from 'react-router-dom';

const TeamBox = ({ className = '', limit = null }) => {
  const teams = [
    { name: 'Rocky Morgan', img: 'assets/img/team/team_2_1.jpg', desig: 'CEO Founder' },
    { name: 'Eliana Bellin', img: 'assets/img/team/team_2_2.jpg', desig: 'Marketer' },
    { name: 'Emanuel Macu', img: 'assets/img/team/team_2_3.jpg', desig: 'Designer' },
    { name: 'Donne Joanne', img: 'assets/img/team/team_2_4.jpg', desig: 'Developer' },
    { name: 'Henry Haninkot', img: 'assets/img/team/team_2_5.jpg', desig: 'Marketer' },
    { name: 'Saima Samuel', img: 'assets/img/team/team_2_6.jpg', desig: 'Designer' },
    { name: 'James Charles', img: 'assets/img/team/team_2_7.jpg', desig: 'Developer' },
    { name: 'Jessica Madison', img: 'assets/img/team/team_2_8.jpg', desig: 'Marketer' },
  ];

  const displayedTeams = limit ? teams.slice(0, limit) : teams;

  return (
    <>
      {displayedTeams.map((team, index) => (
        <div className={className} key={index}>
          <div className="ot-team team-box">
            <div className="box-img">
              <img src={team.img} alt="Team" />
            </div>
            <div className="box-content">
              <span className="box-desig">{team.desig}</span>
              <h3 className="box-title">
                <Link to="/team-details">{team.name}</Link>
              </h3>
              <div className="team-social">
                <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/">FB</a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/">TW</a>
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/">IG</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TeamBox;