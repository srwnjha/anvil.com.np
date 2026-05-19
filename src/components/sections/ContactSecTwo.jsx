import React from 'react';

const ContactSecTwo = ({ className = "space overflow-hidden" }) => {
  return (
    <div className={className}>
      <div
        className="shape-mockup bg-gradient-shape1 contact-bg-gradient1"
        data-top="-10%"
        data-left="3%"
      ></div>
      <div className="container">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="contact-feature">
              <div className="box-icon icon-btn">
                <i className="far fa-location-dot"></i>
              </div>
              <div className="media-body">
                <h3 className="box-title">Our Address</h3>
                <p className="box-text">
                  932 Dogwood Road, Chapel Hill, North Carolina
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-feature">
              <div className="box-icon icon-btn">
                <i className="far fa-address-book"></i>
              </div>
              <div className="media-body">
                <h3 className="box-title">Contact Us</h3>
                <p className="box-text">
                  Phone: <a href="tel:+1655778749">+165-5577-8749</a>
                </p>
                <p className="box-text">
                  Email: <a href="mailto:info@tronix.com">info@tronix.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-feature">
              <div className="box-icon icon-btn">
                <i className="far fa-clock"></i>
              </div>
              <div className="media-body">
                <h3 className="box-title">Opening Hour</h3>
                <p className="box-text">Mon - Sat: 10.00 AM - 4.00 PM</p>
                <p className="box-text">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSecTwo;
