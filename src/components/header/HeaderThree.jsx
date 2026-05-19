import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import HeaderSidemenu from './HeaderSidemenu';
import logo from '../../assets/img/logo.svg';

const HeaderThree = () => {
  return (
    <>
      <HeaderSidemenu />
      <MobileMenu />
      {/*==============================
        Header Area
      ==============================*/}
      <header className="ot-header header-layout2">
        <div className="header-top" data-bg-src="assets/img/bg/header_top_bg.jpg">
          <div className="container text-center">
            <p className="header-notice">
              Get 50% off on Tronix theme. Limited time offer! <Link to="/contact">Purchase now</Link>
            </p>
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
                  <button type="button" className="ot-menu-toggle d-block d-lg-none">
                    <i className="far fa-bars"></i>
                  </button>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <Link to="/contact" className="ot-btn btn-sm">Get Started</Link>
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

export default HeaderThree;
