import React from "react";
import { Link } from "react-router-dom";

const ServiceList = ({ className = "", limit = null }) => {
  const services = [
    {
      title: "Infrastructure Design & Optimization",
      text: "They may offer a range of services, from project-based work to ongoing support and maintenance.",
      icon: "assets/img/icon/service_box_1.svg",
      img: "assets/img/service/service_box_1.png",
    },
    {
      title: "Data Center Modernization & Cloud Enablement",
      text: "They may offer a range of services, from project-based work to ongoing support and maintenance.",
      icon: "assets/img/icon/service_box_2.svg",
      img: "assets/img/service/service_box_1.png",
    },
    {
      title: "Technology Solution",
      text: "We can diagnose and repair all types of air conditioning issues.",
      icon: "assets/img/icon/service_box_3.svg",
      img: "assets/img/service/service_box_3.png",
    },
    {
      title: "Product Development",
      text: "Regular maintenance is key to ensuring that your air conditioning.",
      icon: "assets/img/icon/service_box_4.svg",
      img: "assets/img/service/service_box_4.png",
    },
  ];

  const displayedServices = limit ? services.slice(0, limit) : services;

  return (
    <>
      {displayedServices.map((service, index) => (
        <div className={className} key={index}>
          <div className="service-box">
            <h3 className="box-title">
              <Link to="/service-details">{service.title}</Link>
            </h3>
            <p className="box-text">{service.text}</p>
            <div className="box-icon">
              <img src={service.img} alt="Icon" />
            </div>
            <Link to="/service-details" className="link-btn style-black">
              Learn More <i className="fas fa-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceList;
