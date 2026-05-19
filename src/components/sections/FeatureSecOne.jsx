import React from 'react';

const FeatureSecOne = ({ className = '' }) => {
  const features = [
    {
      title: 'Advanced Threat Detection',
      icon: 'assets/img/icon/feature-icon1-1.svg',
      text: 'Proactively identify and respond to emerging threats, safeguarding your critical assets from potential harm.',
    },
    {
      title: 'Robust Data Protection',
      icon: 'assets/img/icon/feature-icon1-2.svg',
      text: 'Safeguard your sensitive data with robust encryption, tronixe access controls, and data loss prevention measures.',
    },
    {
      title: '24/7 Tronixity Monitoring',
      icon: 'assets/img/icon/feature-icon1-3.svg',
      text: 'Our team of tronixity experts monitors your environment around the clock, detecting and responding to threats in real-time.',
    },
  ];

  return (
    <section className={`feature-area-1 ${className}`}>
      <div className="container">
        <div className="row gy-30">
          {features.map((feature, index) => (
            <div className="col-lg-4" key={index}>
              <div className="feature-card">
                <div className="box-icon">
                  <img src={feature.icon} alt="icon" />
                </div>
                <h3 className="box-title">{feature.title}</h3>
                <p className="box-text">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSecOne;
