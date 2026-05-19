import { useState } from "react";
import FsLightbox from "fslightbox-react";


const WhySecThree = ({ className = '' }) => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className={`overflow-hidden ${className}`} data-bg-src="assets/img/bg/why_bg_3.png">
      <div className="container pb-xxl-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="pe-xxl-4">
              <div className="title-area mb-37">
                <span className="sub-title text-white icon-white"><span className="text">Why Work With Us</span></span>
                <h2 className="sec-title text-white">World's No.1 Technology Solution Provider.</h2>
                <p className="sec-text text-white">The goal of IT services is to provide efficient and effective technology solutions that help businesses achieve their objectives.</p>
              </div>
              <button type="button"
                className="watch-btn popup-video"
                onClick={(e) => {
                  e.preventDefault();
                  setToggler(!toggler);
                }}
              >
                <span className="play-btn style2">
                  <i className="fas fa-play"></i>
                </span>
                <span className="text text-white">Video Showcase</span>
              </button>

              <FsLightbox
                toggler={toggler}
                sources={["https://www.youtube.com/watch?v=U6fC4Ij608A"]}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-box5">
              <img src="assets/img/normal/vector_1.png" alt="vector" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySecThree;
