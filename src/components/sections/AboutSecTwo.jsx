import React from 'react';
import { Link } from 'react-router-dom';

const AboutSecTwo = ({ className = '' }) => {
  return (
    <div className={className} id="about-sec">
      <div className="shape-mockup jump d-none d-sm-block" data-bottom="20%" data-right="8%">
        <img src="assets/img/shape/shape_2.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-6 mb-35 mb-lg-0">
            <div className="img-box3">
              <div className="img1">
                <img src="assets/img/normal/about_2_1.png" alt="About" />
              </div>
              <div className="shape1">
                <img src="assets/img/normal/about_2_2.png" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 text-center text-lg-start">
            <div className="ps-xxl-5">
              <div className="title-area mb-37">
                <span className="sub-title">
                  <span className="text">More About Our Company</span>
                </span>
                <h2 className="sec-title">Our Application Features.</h2>
                <p className="sec-text">
                  IT service providers work closely with clients to understand their unique needs and develop customized
                </p>
              </div>
              <div className="dot-list style-center">
                <ul>
                  <li>Amazing communication.</li>
                  <li>Best trending designing experience.</li>
                  <li>Email & Live chat.</li>
                </ul>
              </div>
              <div className="mt-45">
                <Link to="/contact" className="ot-btn style4">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSecTwo;
