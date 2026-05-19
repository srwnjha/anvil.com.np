import React from 'react';

const BrandOne = ({ className = '' }) => {
  const brandLogos = [
    'assets/img/brand/brand_1_1.png',
    'assets/img/brand/brand_1_2.png',
    'assets/img/brand/brand_1_3.png',
    'assets/img/brand/brand_1_4.png',
    'assets/img/brand/brand_1_5.png',
    'assets/img/brand/brand_1_6.png',
    'assets/img/brand/brand_1_7.png',
    'assets/img/brand/brand_1_8.png',
  ];

  return (
    <div className={`${className}`}>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <span className="text">Brand We Work With</span>
          </span>
          <h2 className="sec-title">Trusted by thousands Business</h2>
        </div>
        <div className="brand-grid-wrap">
          {brandLogos.map((logo, index) => (
            <div className="brand-grid" key={index}>
              <img src={logo} alt="Brand Logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandOne;