import React from 'react';
import { useSwiper } from '../hooks/useSwiper';
import TestimonialCard from './TestimonialCard';

const TestimonialSecOne = ({ className = '' }) => {
  const swiperRef = useSwiper('#testiSlider1');

  return (
    <section className={className} id="testi-sec" data-bg-src="assets/img/bg/testi_bg_1.jpg">
      <div className="container">
        <div className="title-area">
          <span className="sub-title text-white"><span className="text">Client Testimonial</span></span>
          <h2 className="sec-title text-white">About Customer Stories</h2>
        </div>
        <div
          ref={swiperRef}
          className="swiper ot-react-slider has-shadow"
          id="testiSlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"1"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"2"}}}'
        >
          <div className="swiper-wrapper">
            <TestimonialCard className="swiper-slide" limit={4} />
          </div>
          <div className="slider-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSecOne;
