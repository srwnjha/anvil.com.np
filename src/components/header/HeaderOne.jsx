import { Link } from "react-router-dom";
import HeaderPopupSearch from "./HeaderPopupSearch";
import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <>
      <HeaderPopupSearch />
      <MobileMenu />
      <header className="ot-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <p className="header-notice">Mon-Fri: 8:00 AM - 6:30 PM</p>
              </div>
              <div className="col-auto">
                <div className="header-links2">
                  <ul>
                    <li className="d-none d-sm-inline-block">
                      <div className="links-menu">
                        <ul>
                          <li>
                            <Link to="/service">All Services</Link>
                          </li>
                          <li>
                            <Link to="/about">Careers</Link>
                          </li>
                          <li>
                            <Link to="/blog">News</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i>
                      <a href="mailto:media@tronix.com">media@tronix.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-wrapper">
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/img/anvil/anvilfooter.png"
                        }
                        alt="Tronix"
                        style={{
                          width: "190px",
                          height: "auto",
                        }}
                      />
                    </Link>
                  </div>
                </div>

                <div className="col-auto">
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

                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <div className="call-btn">
                      <div className="icon-btn">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="media-body">
                        <span className="box-subtitle">Quick Call</span>
                        <h4 className="box-title">
                          <a href="tel:+9041236625">(904) 12-366-25</a>
                        </h4>
                      </div>
                    </div>
                    <Link to="/contact" className="ot-btn btn-sm">
                      Get Started
                    </Link>
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

export default Header;
