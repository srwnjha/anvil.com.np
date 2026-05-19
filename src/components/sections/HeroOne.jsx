import { useState } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";

const Hero = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <div className="ot-hero-wrapper hero-1" id="hero">
      <div className="hero-circle"></div>
      <div className="hero-shape1"></div>
      <div className="hero-inner">
        <div className="container">
          <div className="hero-style1">
            <span className="sub-title">
              <span className="text">Welcome To Our Company</span>
            </span>
            <h1 className="hero-title">
              <span className="title1">Clear Thinking</span>
              <span className="title2">Makes <span>Bright Future!</span></span>
            </h1>
            <p className="hero-text">
              The website design should be user-friendly, easy to navigate, and
              aesthetically pleasing. It should be optimized for fast loading
              times, and the layout should be consistent across all pages.
            </p>
            <div className="btn-group">
              <Link to="/about" className="ot-btn">Discover More</Link>
              
              <button type="button"
                className="watch-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setToggler(!toggler);
                }}
              >
                <div className="play-btn">
                  <i className="fas fa-play"></i>
                </div>
                <span className="text">Watch Video</span>
              </button>

              <FsLightbox
                toggler={toggler}
                sources={["https://www.youtube.com/watch?v=U6fC4Ij608A"]}
              />
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={process.env.PUBLIC_URL + "/assets/img/hero/hero_1_1.jpg"} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;