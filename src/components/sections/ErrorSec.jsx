import React from 'react';
import { Link } from 'react-router-dom';

const ErrorSec = ({ className = "space overflow-hidden" }) => {
  return (
    <section className={className}>
      <div
        className="shape-mockup bg-gradient-shape1 contact-bg-gradient1"
        data-top="15%"
        data-left="3%"
      ></div>
      <div
        className="shape-mockup bg-gradient-shape1 contact-bg-gradient1"
        data-top="auto"
        data-bottom="15%"
        data-left="auto"
        data-right="3%"
      ></div>
      <div className="container">
        <div className="error-content">
          <h1 className="error-title">
            PAGE NOT FOUND
          </h1>
          <p className="error-text">
            Oops, it seems like this page doesn't exist. You might want to try searching or explore one of the links below.
          </p>
          <Link to="/" className="ot-btn">
            Back To Home <i className="fal fa-home ms-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorSec;
