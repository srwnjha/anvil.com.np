import React from "react";
import { Link } from "react-router-dom";

import services from "../data/services";

const ServiceCard = ({ className, limit }) => {
  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <>
      {displayedServices.map((service) => {
        return (
          <div className={className} key={service.id}>
            <div
              className="service-card"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/servicebg.png)`,
                backgroundPosition: "center -10px",
                backgroundSize: "70% auto",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="box-icon">
                <img src={service.icon} alt="Icon" />
              </div>
              <h3 className="box-title">
                <Link to={`/service/${service.slug}`}>{service.title}</Link>
              </h3>
              <p className="box-text">{service.text}</p>
              <Link to={`/service/${service.slug}`} className="box-btn">
                <i className="fas fa-arrow-up-right"></i>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceCard;
