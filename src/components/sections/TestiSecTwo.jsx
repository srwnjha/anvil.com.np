import React from 'react';
import TestiBox from './TestiBox';

const TestiSecTwo = ({ className = '' }) => {
  return (
    <section className={`overflow-hidden ${className}`} id="testi-sec" data-bg-src={process.env.PUBLIC_URL + "/assets/img/bg/testi_bg_2.jpg"}>
      <div className="shape-mockup pulse" data-top="15%" data-left="2%">
        <div className="shape-circle circle1"></div>
      </div>
      <div className="shape-mockup pulse" data-bottom="12%" data-right="2%">
        <div className="shape-circle circle2"></div>
      </div>
      <div className="shape-mockup pulse d-none d-xl-block" data-top="45%" data-right="17%">
        <img src={process.env.PUBLIC_URL + "/assets/img/testimonial/testi_2_4.png"} alt="thumbnail" />
      </div>
      <div className="shape-mockup pulse d-none d-md-block" data-top="15%" data-right="6%">
        <img src={process.env.PUBLIC_URL + "/assets/img/testimonial/testi_2_5.png"} alt="thumbnail" />
      </div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <span className="text">Customer Feedback</span>
          </span>
          <h2 className="sec-title">People Talk About Us</h2>
        </div>
        <div className="testi-box-slide">
          <div className="swiper ot-slider" id="testiSlide2" data-slider-options='{"effect":"slide"}'>
            <div className="swiper-wrapper">
              <TestiBox className="swiper-slide" limit={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiSecTwo;
