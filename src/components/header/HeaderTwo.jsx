import React from "react";
import { Link } from "react-router-dom";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import HeaderSidemenu from "./HeaderSidemenu";
import logo from "../../assets/img/logo.svg";

const HeaderTwo = () => {
  return (
    <>
      <HeaderSidemenu />
      <MobileMenu />
      <header className="ot-header header-layout2">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li className="d-none d-xl-inline-block">
                      <i className="far fa-phone"></i>
                      <a href="tel:+13276435676">Have any Question?</a>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      Mail Us:{" "}
                      <a href="mailto:info@anvil.com.np">info@anvil.com.np</a>
                    </li>
                    <li>
                      <i className="far fa-clock"></i>
                      Mon - Fri: 8:00AM - 6:00PM
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="social-links">
                  <span className="social-title">Follow Us On : </span>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img src={logo} alt="Tronix" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto ms-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <MainMenu />
                  </nav>
                  <button
                    type="button"
                    className="ot-menu-toggle d-block d-lg-none"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <Link to="/contact" className="ot-btn btn-sm">
                      Get Started
                    </Link>
                    <button type="button" className="icon-btn sideMenuInfo">
                      <i className="far fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderTwo;
