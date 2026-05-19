import React from "react";
import { Link } from "react-router-dom";

const AboutFour = ({ className = "" }) => {
  return (
    <div className={className} id="about-sec">
      <div
        className="shape-mockup jump d-none d-sm-block"
        data-bottom="20%"
        data-right="8%"
      >
        <img src="assets/img/shape/shape_2.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-35 mb-lg-0">
            <div className="img-box6">
              <div className="img1">
                <img src="assets/img/normal/Group-46.webp" alt="About" />
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-7 text-center text-lg-start">
            <div className="ps-xl-5">
              <div className="title-area mb-37">
                <span className="sub-title">
                  <span className="text">More About Us</span>
                </span>
                <h2 className="sec-title">
                  Quality & Experience IT Solution Company
                </h2>
                <p className="sec-text">
                  IT service ipsum dolor sit amet consectur adipiscing elit sed
                  eiusmod ex tempor incididunt labore dolore magna aliquaenim ad
                  minim veniam quis nostrud exercitation laboris.
                </p>
              </div>
              <div className="about-content-box">
                <div className="about-media">
                  <div className="icon-btn">
                    <i className="fas fa-check"></i>
                  </div>
                  <div className="media-body">
                    <h3 className="box-title">The best agency solution 2023</h3>
                    <p className="box-text">
                      These tools will allow you to handle tasks such hanging
                      sves assemble furniture
                    </p>
                  </div>
                </div>
                <div className="btn-group">
                  <Link to="/contact" className="ot-btn">
                    Contact Us
                  </Link>
                  <div className="call-btn style2">
                    <div className="box-icon">
                      <i className="fas icon-btn fa-phone"></i>
                    </div>
                    <div className="media-body">
                      <span className="box-subtitle">Call Us 24/7</span>
                      <h4 className="box-title">
                        <a href="tel:+9041236625">(904) 12-366-25</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
