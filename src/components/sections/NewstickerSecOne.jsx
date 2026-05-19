import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

const NewstickerSecOne = () => {
  const swiperRef = useRef(null);
  const tickerItems = [
    'Get Our Service',
    '24/7 Customer Service',
    'Happy Customer Feedback',
    'Get A Quote',
    'Get Our Service',
    '24/7 Customer Service',
    'Happy Customer Feedback',
    'Get A Quote',
    'Get Our Service',
    '24/7 Customer Service',
    'Happy Customer Feedback',
    'Get A Quote',
  ];

  useEffect(() => {
    if (swiperRef.current) {
      const SwiperTicker = new Swiper(swiperRef.current, {
        modules: [Autoplay],
        spaceBetween: 130,
        slidesPerView: 'auto',
        speed: 4000,
        autoplay: {
          delay: 2,
          disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        },
        loop: true,
        allowTouchMove: false,
        disableOnInteraction: true,
      });

      return () => {
        SwiperTicker.destroy(true, true);
      };
    }
  }, []);

  return (
    <div className="newsticker-area">
      <div ref={swiperRef} className="swiper swiper-newsticker">
        <div className="swiper-wrapper">
          {tickerItems.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <Link to="/contact" className="newsticker-title">{item}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewstickerSecOne;
