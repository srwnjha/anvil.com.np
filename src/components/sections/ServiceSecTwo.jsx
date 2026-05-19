import React from 'react';
import { useSwiper } from '../hooks/useSwiper';
import ServiceCard from './ServiceCard';

const ServiceSecTwo = ({ className = '' }) => {
  const swiperRef = useSwiper();
  const brandLogos = [
    'assets/img/brand/brand_1_1.png',
    'assets/img/brand/brand_1_2.png',
    'assets/img/brand/brand_1_3.png',
    'assets/img/brand/brand_1_4.png',
    'assets/img/brand/brand_1_5.png',
    'assets/img/brand/brand_1_6.png',
    'assets/img/brand/brand_1_7.png',
    'assets/img/brand/brand_1_8.png',
    'assets/img/brand/brand_1_1.png',
    'assets/img/brand/brand_1_2.png',
  ];

  return (
    <section className={`bg-top-center ${className}`} id="service-sec" data-bg-src={process.env.PUBLIC_URL + "/assets/img/bg/service_bg_2.jpg"}>
      <div ref={swiperRef} className="swiper ot-react-slider brand-slider1" id="brandSlider1" data-slider-options='{"breakpoints":{"0":{"slidesPerView":2},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"3"},"992":{"slidesPerView":"4"},"1200":{"slidesPerView":"5"},"1400":{"slidesPerView":"5"}}}'>
        <div className="swiper-wrapper">
          {brandLogos.map((logo, index) => (
            <div className="swiper-slide" key={index}>
              <div className="brand-card">
                <img src={logo} alt="Brand Logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center space-top">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="title-area text-center">
              <span className="sub-title">
                <span className="text">Our services</span>
              </span>
              <h2 className="sec-title">Awesome Services</h2>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          <ServiceCard className="col-xl-3 col-md-6" limit={4} />
        </div>
      </div>
      
    </section>
  );
};

export default ServiceSecTwo;
