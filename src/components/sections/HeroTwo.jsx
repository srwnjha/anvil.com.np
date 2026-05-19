import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FsLightbox from "fslightbox-react";

const HeroTwo = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="ot-hero-wrapper hero-2" id="hero" data-bg-src="assets/img/hero/hero_bg_2_1.jpg">
        <div className="hero-inner">
          <div className="container">
            <div className="hero-style2">
              <span className="sub-title">
                <span className="text">Welcome To Our Company</span>
              </span>
              <h1 className="hero-title">
                <span className="title1">Affordable Big IT &</span>
                <span className="title2">Technology Solutions</span>
              </h1>
              <p className="hero-text">
                The goal of IT services is to provide efficient and effective technology solutions that help businesses achieve their objectives.
              </p>
              <div className="btn-group">
                <Link to="/about" className="ot-btn">Discover More</Link>
                <a
                  href="https://www.youtube.com/watch?v=U6fC4Ij608A"
                  className="watch-btn popup-video"
                  onClick={(e) => {
                    e.preventDefault();
                    setToggler(!toggler);
                  }}
                >
                  <div className="play-btn style2">
                    <i className="fas fa-play"></i>
                  </div>
                  <span className="text">Watch Video</span>
                </a>
                <FsLightbox
                  toggler={toggler}
                  sources={[
                    "https://www.youtube.com/watch?v=U6fC4Ij608A"
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img src="assets/img/hero/hero_2_1.png" alt="Hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroTwo;