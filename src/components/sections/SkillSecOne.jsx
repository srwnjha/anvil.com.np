import React from 'react';

const SkillSecOne = ({ className = '' }) => {
  const skills = [
    { title: 'Business Security', percentage: '85', number: '85' },
    { title: 'Career Development', percentage: '95', number: '95' },
    { title: 'Business Inovation', percentage: '90', number: '90' },
  ];

  return (
    <div className={`bg-lines ${className}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="pe-xxl-5">
              <div className="title-area mb-50 text-center text-xl-start">
                <span className="sub-title">
                  <span className="text">More About Our Company</span>
                </span>
                <h2 className="sec-title">We're A Software And IT Company That Provides Solutions</h2>
              </div>
              <div>
                {skills.map((skill, index) => (
                  <div className="skill-feature" key={index}>
                    <h3 className="box-title">{skill.title}</h3>
                    <div className="progress">
                      <div className="progress-bar" style={{ width: `${skill.percentage}%` }}>
                        <div className="progress-value">
                          <span className="counter-number2">{skill.number}</span>%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 mt-40 mt-xl-0">
            <div className="skill-img">
              <img className="w-100" src="assets/img/normal/skill.jpg" alt="Skill" />
              <div className="ot-video">
                <img src="assets/img/normal/skill_2.jpg" alt="Video Thumbnail" />
                <a href="https://www.youtube.com/watch?v=U6fC4Ij608A" className="video-btn popup-video">
                  <i className="fas fa-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSecOne;
