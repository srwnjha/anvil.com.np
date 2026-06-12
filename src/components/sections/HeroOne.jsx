import { useState } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";

const Hero = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="ot-hero-wrapper hero-1" id="hero">
      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes rotate {
            from {
              transform: translateY(-50%) rotate(0deg);
            }
            to {
              transform: translateY(-50%) rotate(360deg);
            }
          }
        `}
      </style>
      <div className="hero-circle"></div>
      <div className="hero-shape1"></div>
      {/* Decorative Background SVG - Left Side */}
      {/* <img
        src={process.env.PUBLIC_URL + "/assets/img/anvil/bg.svg"}
        alt=""
        style={{
          position: "absolute",
          left: "1%",
          top: "30%",
          transform: "translateY(-50%)",
          width: "180px",
          height: "auto",
          opacity: "0.85",
          zIndex: 1,
          pointerEvents: "none",
          animation: "rotate 25s linear infinite", // Infinite rotation
          display: "none", // Hidden by default (mobile)
        }}
        className="hero-bg-decor d-none d-lg-block" // Show only on large screens
      /> */}
      {/* <img
        src={process.env.PUBLIC_URL + "/assets/img/bg/designs/herobgm.png"}
        alt=""
        style={{
          position: "absolute",
          left: "40%",
          top: "60%",
          transform: "translateY(-50%)",
          filter: "brightness(1.5)", // brighter
          width: "700px",
          height: "auto",
          opacity: "1",
          zIndex: 1,
          pointerEvents: "none",
          display: "none",
        }}
        className="hero-bg-decor d-none d-lg-block" // Show only on large screens
      /> */}
      <div className="hero-inner">
        <div className="container">
          <div className="hero-style1">
            <span className="sub-title">
              <span className="text">
                Welcome To{" "}
                <span className="fw-bold text-primary">
                  Anvil Technologies Pvt. Ltd.
                </span>
              </span>
            </span>
            <h1 className="hero-title">
              <span className="title1">
                #ForgingIT<span>Excellence</span>
              </span>
              {/* <span className="title2">
                <span>#ForgingITExcellence</span>
              </span> */}
            </h1>
            <p className="hero-text">
              <span className="mb-3 d-inline-block fw-bold">
                System Integrator &bull; IT Consultation &bull; Service Provider
              </span>{" "}
              <br />
              We build resilient, secure, and high-performance infrastructure
              for the modern enterprise. From complex system integration to
              ironclad security, we craft the digital foundations that drive
              your business forward.
            </p>
            <div className="btn-group">
              <Link to="/about" className="ot-btn">
                Discover More
              </Link>

              <button
                type="button"
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

        <div className="">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/bg/designs/herobgm.png"}
            alt="Hero"
            style={{
              width: "700px",
              height: "auto",
              position: "absolute",
              top: "100px",
              right: "13%",
              filter: "brightness(1.5)",
            }}
            className="hero-bg-decor d-none d-lg-block" // Show only on large screens
          />
        </div>
        <div className="hero-img">
          <img
            src={process.env.PUBLIC_URL + "/assets/img/hero/Forging.png"}
            alt="Hero"
            style={{ width: "380px", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
