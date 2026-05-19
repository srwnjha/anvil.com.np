import React from 'react';
import { useSwiper } from '../hooks/useSwiper';
import TestiGrid from './TestiGrid';

const TestiSecThree = ({ className = '' }) => {
    const swiperRef = useSwiper('#testiSlide3');
  return (
    <section className={`overflow-hidden ${className}`} id="testi-sec" data-bg-src="assets/img/bg/testi_bg_3.jpg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="testi-img1">
              <img src="assets/img/normal/testi_big_1.jpg" alt="Testimonial" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="pe-xxl-5">
              <div className="title-area mb-45">
                <span className="sub-title"><span className="text">Our Client Feedbacks</span></span>
                <h2 className="sec-title">What They're Saying</h2>
              </div>
              <div className="testi-grid-area">
                <div ref={swiperRef} className="swiper ot-react-slider has-shadow" id="testiSlide3" data-slider-options='{"effect":"slide"}'>
                  <div className="swiper-wrapper">
                    <TestiGrid className="swiper-slide" limit={5} />
                  </div>
                </div>
                <div className="icon-box">
                  <button data-slider-prev="#testiSlide3" className="slider-arrow default"><i className="far fa-arrow-left"></i></button>
                  <button data-slider-next="#testiSlide3" className="slider-arrow default"><i className="far fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestiSecThree;
