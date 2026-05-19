import React from 'react';
import { Link } from 'react-router-dom';

const AboutOne = ({ className = '' }) => {
  return (
    <div className={`about-sec1`} id="about-sec">
      <div className={`container ${className}`}>
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="title-area mb-37">
              <span className="sub-title"><span className="text">Welcome To Our Company</span></span>
              <h2 className="sec-title">We Are Increasing Business Success With Technology</h2>
              <p className="sec-text">An IT solution service company may serve clients from various industries such as healthcare, finance, education, and manufacturing. They may work on a project basis, providing services for a specific project or on a long-term basis...</p>
            </div>
            <div className="dot-list">
              <ul>
                <li>Amazing communication.</li>
                <li>Best trending designing experience.</li>
                <li>Email & Live chat.</li>
              </ul>
            </div>
            <div className="mt-45">
              <Link to="/about" className="ot-btn">Discover More</Link>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6">
            <div className="img-box1">
              <div className="img1">
                <img src="assets/img/normal/about_1_1.jpg" alt="About" />
              </div>
              <div className="img2">
                <img src="assets/img/normal/about_1_2.jpg" alt="About" />
              </div>
              <div className="shape1 jump-reverse">
                <img src="assets/img/normal/about_1_3.png" alt="About" />
              </div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
