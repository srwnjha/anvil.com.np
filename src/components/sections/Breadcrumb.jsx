import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ className = "", title = "", subtitle = "" }) => {
  return (
    <div
      className={`breadcumb-wrapper ${className}`}
      data-bg-src={process.env.PUBLIC_URL + "/assets/img/bg/aboutusbg.webp"}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
          <ul className="breadcumb-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{subtitle}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
