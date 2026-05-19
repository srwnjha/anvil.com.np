import React from 'react';
import { useSwiper } from '../hooks/useSwiper';
import TeamCard from './TeamCard';

const TeamSecOne = ({ className = '' }) => {
  const swiperRef = useSwiper('#teamSlider1');

  return (
    <section className={className}>
      <div className="container z-index-common">
        <div className="title-area text-center">
          <span className="sub-title"><span className="text">Team Members</span></span>
          <h2 className="sec-title">Our Top Skilled Experts</h2>
        </div>
        <div
          ref={swiperRef}
          className="swiper ot-react-slider has-shadow"
          id="teamSlider1"
          data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"2"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"3"},"1200":{"slidesPerView":"4"}}}'
        >
          <div className="swiper-wrapper">
            <TeamCard className="swiper-slide" limit={4} />
            <TeamCard className="swiper-slide" limit={4} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSecOne;
