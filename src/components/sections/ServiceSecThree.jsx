import React from "react";
import { Link } from "react-router-dom";
import ServiceList from "./ServiceList";

const ServiceSecThree = ({ className = "" }) => {
  return (
    <section className={className} id="service-sec">
      <div className="container">
        <div className="row gy-40">
          <div className="col-lg-4">
            <div className="pe-xxl-4 text-center text-lg-start">
              <div className="title-area mb-37">
                <span className="sub-title">
                  <span className="text">Our Featured Services</span>
                </span>
                <h2 className="sec-title">Professional Services</h2>
                <p className="sec-text">
                  Expert consulting, implementation, integration, and support
                  services to optimize your IT infrastructure, enhance
                  operational efficiency, and accelerate business growth.
                </p>
              </div>
              <Link to="/service" className="link-btn style-black">
                See All Services <i className="fas fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row gy-4 justify-content-center">
              <ServiceList className="col-md-6" limit={2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSecThree;
