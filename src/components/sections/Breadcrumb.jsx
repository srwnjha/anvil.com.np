import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ className = "", title = "", subtitle = "" }) => {
  return (
    <div
      className={`breadcumb-wrapper ${className}`}
      style={{
        width: "100%",
        maxWidth: "1920px",
        height: "752px",
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg/aboutusbg.webp)`,
        backgroundSize: "contain",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
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
