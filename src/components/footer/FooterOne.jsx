import React from "react";
import { Link } from "react-router-dom";
import useFooterScripts from "./FooterScripts";
import useCommonScripts from "./CommonScripts";
import ScrollTop from "./ScrollTop";
import blogPosts from "../data/blog-posts";

const Footer = () => {
  useFooterScripts();
  useCommonScripts();
  return (
    <>
      <footer
        className="footer-wrapper footer-layout1"
        // data-bg-src="assets/img/bg/B.jpg"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg/footer.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "100px 0",
        }}
      >
        {/* Dark Overlay - Reduced opacity for brighter image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.1)", // Reduced from 0.6 → 0.45
            zIndex: 1,
          }}
        />
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              {/* About Us */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About Us</h3>
                  <div className="ot-widget-about">
                    <p className="footer-text">
                      An IT consultancy can help you assess your technology
                      needs and develop a technology strategy that aligns with
                      your business
                    </p>
                    <div className="ot-social">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a
                        href="https://www.whatsapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-whatsapp"></i>
                      </a>
                      <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fab fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/about">Our Mission</Link>
                      </li>
                      <li>
                        <Link to="/team">Meet The Teams</Link>
                      </li>
                      <li>
                        <Link to="/project">Our Projects</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Explore */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Explore</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li>
                        <Link to="/service">What We Offer</Link>
                      </li>
                      <li>
                        <Link to="/about">Our Story</Link>
                      </li>
                      <li>
                        <Link to="/blog">Latest Posts</Link>
                      </li>
                      <li>
                        <Link to="/about">Help Center</Link>
                      </li>
                      <li>
                        <Link to="/contact">Get Support</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="col-md-6 col-xl-auto">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Recent Posts</h3>
                  <div className="recent-post-wrap">
                    {blogPosts.slice(0, 2).map((post) => (
                      <div className="recent-post" key={post.id}>
                        <div className="media-img">
                          <Link to={`/blog/${post.slug}`}>
                            <img src={post.smallimage} alt={post.title} />
                          </Link>
                        </div>
                        <div className="media-body">
                          <h4 className="post-title">
                            <Link
                              className="text-inherit"
                              to={`/blog/${post.slug}`}
                            >
                              {post.title}
                            </Link>
                          </h4>
                          <div className="recent-post-meta">
                            <Link to="/blog">{post.date}</Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="footer-contact-wrap">
              <div className="footer-contact">
                <div className="box-icon icon-btn">
                  <i className="fal fa-location-dot"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Location</h4>
                  <p className="box-text">
                    Gangalal Marg, Kathmandu-19, Nepal{" "}
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="footer-contact">
                <div className="box-icon icon-btn">
                  <i className="fal fa-clock"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Working Hours</h4>
                  <p className="box-text">
                    <span>Weekdays 8am - 22pm</span> <br />
                    <span>Weekend 10am - 12pm</span>
                  </p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="footer-contact">
                <div className="box-icon icon-btn">
                  <i className="fa-light fa-phone-volume"></i>
                </div>
                <div className="media-body">
                  <h4 className="box-title">Contact Us</h4>
                  <p className="box-text">
                    <span>info@anvil.com.np</span> <br />
                    <span>(970) 52-363-88</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-wrap">
          <div className="container text-center">
            <p className="copyright-text">
              Copyright <i className="fal fa-copyright"></i> 2026{" "}
              <Link to="/">Anvil Technologies</Link>. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <ScrollTop />
    </>
  );
};

export default Footer;
