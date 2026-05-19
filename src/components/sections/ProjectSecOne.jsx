import React from 'react';
import { useSwiper } from '../hooks/useSwiper';
import ProjectCard from './ProjectCard';

const ProjectSecOne = ({ className = "overflow-hidden" }) => {
    const swiperRef = useSwiper();
    
  return (
    <div className={className}>
        <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-end">
                <div className="col-lg">
                    <div className="title-area text-center text-lg-start">
                        <span className="sub-title"><span className="text">Quick Projects</span></span>
                        <h2 className="sec-title">Our Successful Projects</h2>
                    </div>
                </div>
                <div className="col-lg-auto d-none d-lg-block">
                    <div className="sec-btn">
                        <div className="icon-box">
                            <button data-slider-prev="#gallerySlider1" className="slider-arrow default"><i className="far fa-arrow-left"></i></button>
                            <button data-slider-next="#gallerySlider1" className="slider-arrow default"><i className="far fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <div className="">
            <div 
                ref={swiperRef}
                className="swiper ot-react-slider has-shadow" 
                id="gallerySlider1" 
                data-slider-options='{"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"},"1400":{"slidesPerView":"4"}}}'
            >
                <div className="swiper-wrapper">
                    <ProjectCard className="swiper-slide" limit={7} />
                </div>
            </div>
            <div className="d-block d-lg-none mt-40 text-center">
                <div className="icon-box">
                    <button data-slider-prev="#gallerySlider1" className="slider-arrow default"><i className="far fa-arrow-left"></i></button>
                    <button data-slider-next="#gallerySlider1" className="slider-arrow default"><i className="far fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectSecOne;
