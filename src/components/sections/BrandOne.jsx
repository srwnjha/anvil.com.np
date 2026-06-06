import React from "react";

const BrandOne = ({ className = "" }) => {
  const brandLogos = [
    // "assets/img/brand/brand_1_1.png",
    // "assets/img/brand/brand_1_2.png",
    // "assets/img/brand/brand_1_3.png",
    // "assets/img/brand/brand_1_4.png",
    // "assets/img/brand/brand_1_5.png",
    // "assets/img/brand/brand_1_6.png",
    // "assets/img/brand/brand_1_7.png",
    // "assets/img/brand/brand_1_8.png",
    "assets/img/anvil/brands/1.png",
    "assets/img/anvil/brands/2.png",
    "assets/img/anvil/brands/3.png",
    "assets/img/anvil/brands/4.png",
    "assets/img/anvil/brands/5.png",
    "assets/img/anvil/brands/6.png",
    "assets/img/anvil/brands/7.png",
    "assets/img/anvil/brands/8.png",
    "assets/img/anvil/brands/9.png",
    "assets/img/anvil/brands/10.png",
    "assets/img/anvil/brands/11.png",
    "assets/img/anvil/brands/12.png",
    "assets/img/anvil/brands/13.png",
    "assets/img/anvil/brands/14.png",
    "assets/img/anvil/brands/15.png",
  ];

  return (
    <div className={`${className}`}>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <span className="text">Brand We Work With</span>
          </span>
          <h2 className="sec-title">Technology We Integrate</h2>
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
