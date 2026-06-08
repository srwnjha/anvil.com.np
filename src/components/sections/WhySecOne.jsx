import React from "react";
import { Link } from "react-router-dom";

const WhySecOne = ({ className = "" }) => {
  return (
    <div className={className}>
      <div className="shape-mockup spin" data-top="40%" data-left="4%">
        <img src="assets/img/shape/star.png" alt="shape" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 text-center text-lg-start">
            <div className="pe-xxl-5">
              <div className="title-area">
                <span className="sub-title">
                  <span className="text">Work With Us</span>
                </span>
                <h2 className="sec-title">
                  We Provide Secure Infrastructure Services For Modern
                  Enterprises
                </h2>
              </div>
              <div className="btn-group">
                <Link to="/contact" className="ot-btn">
                  Start A Projects
                </Link>
                <div className="call-text">
                  <h4 className="box-title">Email Us:info@anvil.com.np</h4>
                  <span className="box-text">For any question</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="text-center mt-40 mt-lg-5">
              <img
                src="assets/img/anvil/Services.png"
                alt="vector"
                style={{
                  width: "420px", // You can adjust size
                  height: "auto",
                  maxWidth: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySecOne;
