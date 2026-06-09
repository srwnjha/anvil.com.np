import React from "react";
// import { Link } from "react-router-dom";

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
          <div className="col-xxl-7 col-lg-7 text-lg-start">
            <div className="ps-xl-5">
              <div className="title-area mb-37">
                <span className="sub-title text-center text-lg-start">
                  <span className="text">More About Us</span>
                </span>
                <h2 className="sec-title text-center text-lg-start">
                  The Anvil Overview
                </h2>
                <p className="sec-text">
                  The name <b>"ANVIL"</b> represents strength, resilience, and
                  craftsmanship—qualities that reflect our commitment to
                  building secure, dependable, and high-performing IT
                  infrastructure and technology solutions.
                </p>
                <p>
                  <b>Anvil Technologies Pvt. Ltd.</b>, headquartered in
                  Kathmandu, Nepal, is a certified IT solutions and services
                  provider dedicated to helping organizations navigate today's
                  evolving digital landscape. We specialize in delivering
                  comprehensive technology services, including networking,
                  cybersecurity, server and infrastructure solutions, IT
                  consulting, managed services, professional services, and cloud
                  technologies.
                </p>
                <p>
                  Our expertise serves a diverse range of sectors, including
                  banking, financial services, insurance, healthcare, education,
                  enterprises, and government organizations. Through innovative
                  solutions and industry best practices, we help clients
                  strengthen their operations, enhance security, and accelerate
                  business growth.
                </p>
              </div>
              {/* <div className="about-content-box">
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
                        <a href="tel:+9705236388">(970) 52-363-88</a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <p className="mt-0 mt-lg-4">
            At <b>Anvil Technologies</b> , we go beyond traditional product
            delivery by focusing on long-term partnerships and value-driven
            outcomes. Our team of experienced professionals provides
            round-the-clock support, ensuring reliable assistance for complex IT
            challenges whenever needed.
          </p>
          <p>
            We are committed to empowering organizations through digital
            transformation initiatives, enabling them to modernize their
            technology environments, improve operational efficiency, and achieve
            sustainable success in an increasingly digital world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
