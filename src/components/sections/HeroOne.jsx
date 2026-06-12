import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FsLightbox from "fslightbox-react";

const Hero = () => {
  const [toggler, setToggler] = useState(false);
  const [isHighRes, setIsHighRes] = useState(false);

  useEffect(() => {
    // Check if the device pixel ratio is high (Retina/Mac/High-DPI)
    // Most Macs are 2.0+, Windows 100% is 1.0
    const checkRes = () => {
      setIsHighRes(window.devicePixelRatio < 1.25);
    };

    checkRes();
    window.addEventListener("resize", checkRes);
    return () => window.removeEventListener("resize", checkRes);
  }, []);
  const desktopStyle = {
    position: "absolute",
    filter: "brightness(1.5)",
    width: "700px",
    height: "auto",
    opacity: "1",
    zIndex: 1,
    pointerEvents: "none",
    transform: "translateY(-50%)",
    // Dynamic values based on resolution
    left: isHighRes ? "50%" : "40%",
    top: isHighRes ? "47%" : "60%",
  };
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
      <img
        src={process.env.PUBLIC_URL + "/assets/img/bg/designs/herobgm.png"}
        alt=""
        style={desktopStyle}
        className="hero-bg-decor d-none d-lg-block" // Show only on large screens
      />
      {/* <img
        src={process.env.PUBLIC_URL + "/assets/img/bg/designs/herobg.png"}
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
