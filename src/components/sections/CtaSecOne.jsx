import React from 'react';
import { Link } from 'react-router-dom';

const CtaSecOne = ({ className = '' }) => {
  return (
    <section className={`${className}`} data-bg-src="assets/img/bg/cta_bg_1.jpg">
      <div className="container">
        <div className="row gy-30 align-items-center justify-content-center justify-content-md-between">
          <div className="col-md-auto">
            <div className="title-area mb-0 text-center text-md-start">
              <span className="sub-title text-white">We are here to answer your questions 24/7</span>
              <h2 className="sec-title text-white">Need A Consultation?</h2>
            </div>
          </div>
          <div className="col-md-auto text-center">
            <Link to="/contact" className="ot-btn style3">Let's Get Started</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSecOne;
