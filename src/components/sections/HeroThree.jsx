import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FsLightbox from "fslightbox-react";

const HeroThree = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <div className="ot-hero-wrapper hero-3" id="hero" data-bg-src="assets/img/hero/hero_bg_3_1.jpg">
        <div className="ot-hero-bg">
          <img src="assets/img/hero/hero_overlay_3.png" alt="overlay" />
        </div>
        <div className="hero-inner">
          <div className="container">
            <div className="hero-style2">
              <span className="sub-title">
                <span className="text">Welcome To Our Company</span>
              </span>
              <h1 className="hero-title">
                <span className="title1">World's No.1 Technology</span>
                <span className="title2">Solution Provider.</span>
              </h1>
              <p className="hero-text">
                The goal of IT services is to provide efficient and effective technology solutions that help businesses achieve their objectives.
              </p>
              <div className="btn-group">
                <Link to="/about" className="ot-btn">Discover More</Link>
                <button type="button"
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
                </button>
                <FsLightbox
                  toggler={toggler}
                  sources={[
                    "https://www.youtube.com/watch?v=U6fC4Ij608A"
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroThree;
