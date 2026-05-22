import React from "react";

const ContactInfoSec = ({ className = "" }) => {
  return (
    <div className={`${className}`}>
      <div className="container">
        <div className="contact-feature-wrap">
          <div className="contact-feature">
            <div className="box-icon icon-btn">
              <i className="fas fa-phone"></i>
            </div>
            <div className="media-body">
              <h3 className="box-title">Phone Number</h3>
              <p className="box-text">
                <a href="tel:+5695832593256">+569 (58) 3259-3256</a>
                <a href="tel:+5695832594652">+569 (58) 3259-4652</a>
              </p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="contact-feature">
            <div className="box-icon icon-btn">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="media-body">
              <h3 className="box-title">Email Address</h3>
              <p className="box-text">
                <a href="mailto:info@anvil.com.np">info@anvil.com.np</a>
                <a href="mailto:inside24@tronix.com">inside24@tronix.com</a>
              </p>
            </div>
          </div>

          <div className="divider"></div>

          <div className="contact-feature">
            <div className="box-icon icon-btn">
              <i className="fas fa-location-dot"></i>
            </div>
            <div className="media-body">
              <h3 className="box-title">Our Address</h3>
              <p className="box-text">25 Hilton Street, Miana Frankfurt. DE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSec;
