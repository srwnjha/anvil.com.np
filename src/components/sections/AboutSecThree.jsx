import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AboutSecThree = ({ className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <div
      className={`bg-left-full ot-hero-wrapper hero-1 ${className}`}
      id="about-sec"
      // data-bg-src="assets/img/anvil/1bgabout.webp"
      // style={{
      //   backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/anvil/1bgabout.webp)`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   position: "relative",
      //   padding: "100px 0",
      // }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* <div className="hero-circle"></div> */}
          <div className="hero-shape1"></div>
          <div className="col-lg-6 mb-35 mb-lg-0">
            <div className="img-box4">
              <div className="img1">
                <img src="assets/img/anvil/moreabout1.png" alt="About" />
              </div>
              <div className="img2 jump">
                <img src="assets/img/anvil/moreabout2.png" alt="About" />
              </div>
              <div className="about-award">
                <div className="box-content">
                  <div className="box-icon">
                    <i className="fat fa-award"></i>
                  </div>
                  <div className="media-body">
                    <div className="box-number">
                      <span ref={ref}>
                        {inView && (
                          <CountUp
                            className="counter-number"
                            end={100}
                            duration={2}
                          />
                        )}
                      </span>
                      +
                    </div>
                    <span className="box-text">Awards We Won</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <div className="ps-xxl-5 ms-xl-4 me-xxl-4">
              <div className="title-area mb-37">
                <span className="sub-title">
                  <span className="text">More About Our Company</span>
                </span>
                <h2 className="sec-title">
                  We Deliver Reliable IT Solutions & Technology Services for
                  Businesses of All Sizes
                </h2>
                <p className="sec-text ">
                  As a trusted System Integrator and Service Provider, we help
                  organizations modernize their IT infrastructure, strengthen
                  security, and accelerate digital transformation. Our team
                  delivers and-to-end-solutions tailored to your business needs,
                  ensuring performance, reliability, and long-term success.
                </p>
              </div>
              <div className="about-feature-wrap">
                <div className="about-feature">
                  <div className="box-icon">
                    <img src="assets/img/icon/about_feature_1.svg" alt="icon" />
                  </div>
                  <h3 className="box-title">
                    Provide Skilled <br /> Services
                  </h3>
                </div>
                <div className="about-feature">
                  <div className="box-icon">
                    <img src="assets/img/icon/about_feature_2.svg" alt="icon" />
                  </div>
                  <h3 className="box-title">
                    Dedicated <br /> 24×7 Support
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSecThree;
