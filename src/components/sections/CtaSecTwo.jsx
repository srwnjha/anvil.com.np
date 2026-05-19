import React from 'react';
import { Link } from 'react-router-dom';

const CtaSecTwo = ({ className = '' }) => {
  return (
    <section className={`${className}`} data-bg-src="assets/img/bg/cta_bg_2.jpg">
      <div className="container">
        <div className="row gy-30 align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <div className="title-area mb-37">
              <span className="sub-title">
                <span className="text">Start Work With Us</span>
              </span>
              <h2 className="sec-title">
                The Best <span className="text-theme">IT Service</span> <br /> Provider.
              </h2>
              <p className="sec-text">
                Managed IT services can help you outsource your IT needs to a third-party provider. This includes IT support, network monitoring, and maintenance, and disaster recovery and business continuity planning
              </p>
            </div>
            <Link to="/about" className="ot-btn style4">
              Take Support
            </Link>
          </div>
          <div className="col-lg-6">
            <div className="img-box2">
              <img src="assets/img/normal/cta_1.png" alt="cta" />
            </div>
          </div>
        </div>
      </div>
      <div className="cta-texts">
        <span className="text">Fast 24/7 Customer Service</span>
        <div className="line"></div>
        <span className="text">Save time & valuable money</span>
      </div>
    </section>
  );
};

export default CtaSecTwo;
