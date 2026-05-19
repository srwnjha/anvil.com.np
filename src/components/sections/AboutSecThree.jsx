import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AboutSecThree = ({ className = '' }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });
  return (
    <div className={`bg-left-full ${className}`} id="about-sec" data-bg-src="assets/img/bg/about_bg_2.jpg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-35 mb-lg-0">
            <div className="img-box4">
              <div className="img1">
                <img src="assets/img/normal/about_3_1.jpg" alt="About" />
              </div>
              <div className="img2 jump">
                <img src="assets/img/normal/about_3_2.jpg" alt="About" />
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
                            <CountUp className="counter-number" end={100} duration={2} />
                        )}
                      </span>+
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
                <span className="sub-title"><span className="text">More About Our Company</span></span>
                <h2 className="sec-title">We provide perfect it solutions & technology for any startups.</h2>
                <p className="sec-text">An IT solution service company may serve clients from various industries such as healthcare, finance, education, and manufacturing. They may work on a project basis, providing services for a specific project or on a long-term basis...</p>
              </div>
              <div className="about-feature-wrap">
                <div className="about-feature">
                  <div className="box-icon">
                    <img src="assets/img/icon/about_feature_1.svg" alt="icon" />
                  </div>
                  <h3 className="box-title">Provide Skills <br /> Services</h3>
                </div>
                <div className="about-feature">
                  <div className="box-icon">
                    <img src="assets/img/icon/about_feature_2.svg" alt="icon" />
                  </div>
                  <h3 className="box-title">Urgent Support <br /> For Clients</h3>
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
