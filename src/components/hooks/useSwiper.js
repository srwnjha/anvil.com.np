// hooks/useSwiper.js
import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Thumbs, FreeMode, EffectFade } from 'swiper/modules';

export const useSwiper = (sliderId, thumbsSwiperId = null) => {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    const element = swiperRef.current;
    const dataOptions = element.getAttribute('data-slider-options');
    const settings = dataOptions ? JSON.parse(dataOptions) : {};

    const prevArrow = document.querySelector(`[data-slider-prev="${sliderId}"]`) || 
                      element.querySelector('.slider-prev');
    const nextArrow = document.querySelector(`[data-slider-next="${sliderId}"]`) || 
                      element.querySelector('.slider-next');
    const paginationEl = element.querySelector('.slider-pagination');

    // Wait for thumbs slider if specified
    let thumbsSwiper = null;
    if (thumbsSwiperId && settings.thumbs) {
      const thumbsElement = document.querySelector(thumbsSwiperId);
      if (thumbsElement && thumbsElement.swiper) {
        thumbsSwiper = thumbsElement.swiper;
      }
    }

    const sliderDefault = {
      modules: [Navigation, Pagination, Autoplay, Thumbs, FreeMode, EffectFade],
      slidesPerView: 1,
      spaceBetween: settings.spaceBetween || 30,
      loop: settings.loop !== false,
      speed: settings.speed || 1000,
      autoplay: settings.autoplay !== false ? (settings.autoplay || { delay: 6000, disableOnInteraction: false }) : false,
      navigation: {
        nextEl: nextArrow,
        prevEl: prevArrow,
      },
      pagination: {
        el: paginationEl,
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}" aria-label="Go to Slide ${index + 1}"></span>`;
        },
      },
      ...(thumbsSwiper && { thumbs: { swiper: thumbsSwiper } })
    };

    const finalOptions = { ...sliderDefault, ...settings };
    swiperInstance.current = new Swiper(element, finalOptions);
    
    // Store swiper instance on element for other sliders to reference
    element.swiper = swiperInstance.current;

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
      }
    };
  }, [sliderId, thumbsSwiperId]);

  return swiperRef;
};