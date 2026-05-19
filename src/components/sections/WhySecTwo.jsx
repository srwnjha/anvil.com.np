import React from 'react';
import { Link } from 'react-router-dom';

const WhySecTwo = ({ className = '' }) => {
  const features = [
    {
      title: 'Highly Expert Team Members',
      subtitle: 'Feature-01',
      img: 'assets/img/normal/feature_box_1.png',
    },
    {
      title: 'Fastest Customer Service',
      subtitle: 'Feature-02',
      img: 'assets/img/normal/feature_box_2.png',
    },
    {
      title: 'Competitive Pricing For All Service',
      subtitle: 'Feature-03',
      img: 'assets/img/normal/feature_box_3.png',
    },
  ];

  return (
    <section className={`bg-top-center ${className}`} data-bg-src="assets/img/bg/why_bg_1.jpg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="title-area text-center">
              <span className="sub-title">
                <span className="text">Case Studies</span>
              </span>
              <h2 className="sec-title">Why People Choose Us?</h2>
              <p className="sec-text">
                Website and mobile sit amet, consectetur adipiscing elit. Morbi obortis ligula euismod sededesty am augue nisl.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="feature-box" data-bg-src="assets/img/bg/vector_bg_1.png">
                <span className="box-subtitle">{feature.subtitle}</span>
                <h3 className="box-title">{feature.title}</h3>
                <Link to="/about" className="link-btn">
                  Learn More<i className="fa-solid fa-arrow-up-right"></i>
                </Link>
                <div className="box-img">
                  <img src={feature.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySecTwo;