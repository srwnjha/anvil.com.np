import React from 'react';
import { Link } from 'react-router-dom';

const CaseSecOne = ({ className = '' }) => {
  return (
    <section className={className} id="process-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title"><span className="text">Latest Case Studies</span></span>
          <h2 className="sec-title">Our Ultimate Case Studies</h2>
        </div>
        <div className="row g-40">
          <div className="col-lg-auto">
            <div className="case-img-group">
              <div className="row gy-20">
                <div className="col-lg-12 col-6">
                  <img className="rounded-15 w-100" src="assets/img/normal/case_1.jpg" alt="Case Study" />
                </div>
                <div className="col-lg-12 col-6">
                  <img className="rounded-15 w-100" src="assets/img/normal/case_2.jpg" alt="Case Study" />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="case-card">
              <div className="box-content">
                <h3 className="box-title">Transparent Business Solution</h3>
                <p className="box-text">User Experience: The website design should be user-friendly, easy to navigate, and aesthetically pleasing. It should be optimized for fast loading times, and the layout should be consistent across all pages.</p>
                <Link to="/about" className="ot-btn">Discover More</Link>
              </div>
              <div className="box-img">
                <img className="rounded-20" src="assets/img/normal/case_3.jpg" alt="Case Study" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSecOne;
