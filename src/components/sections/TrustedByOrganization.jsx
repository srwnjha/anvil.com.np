import React from "react";

const TrustedByOrganization = () => {
  const stats = [
    { icon: "fas fa-rocket", number: "150+", label: "Projects Delivered" },
    { icon: "fas fa-users", number: "50+", label: "Enterprise Clients" },
    { icon: "fas fa-shield-alt", number: "99.9%", label: "Uptime Reliability" },
    { icon: "fas fa-headset", number: "24/7", label: "Support Coverage" },
  ];

  const clients = [
    "assets/img/anvil/clients/janak.png",
    "assets/img/anvil/clients/tribhuvan.png",
    "assets/img/anvil/clients/archiro.png",
    "assets/img/anvil/clients/batas.png",
    "assets/img/anvil/clients/gorkha.png",
    "assets/img/anvil/clients/nepal-investment.png",
    "assets/img/anvil/clients/ime-pay.png",
    "assets/img/anvil/clients/hams.png",
  ];

  return (
    <section className="trusted-section trusted-by-org py-5">
      <div className="dark-bg pt-5 pb-4">
        <div className="container">
          <div className="text-center mb-5">
            <span className="sub-title text-white">OUR CLIENTS</span>
            <h2 className="sec-title text-white">
              Trusted by Organizations That Inspire Us
            </h2>
            <p className="text-light">
              We're proud to collaborate with forward-thinking organizations
              across various industries, delivering solutions that create
              impact.
            </p>
          </div>

          {/* Stats */}
          <div className="row g-4 justify-content-center mb-5">
            {stats.map((stat, i) => (
              <div key={i} className="col-md-3 col-6 text-center">
                <i className={`${stat.icon} fa-3x text-primary mb-3`}></i>
                <h3 className="fw-bold text-white mb-1">{stat.number}</h3>
                <p className="text-light small">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients Logos */}
      <div className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h4 className="fw-bold">ORGANIZATIONS WE WORK WITH</h4>
          </div>
          <div className="row g-4 justify-content-center">
            {clients.map((logo, i) => (
              <div key={i} className="col-auto">
                <div className="client-logo">
                  <img src={`${process.env.PUBLIC_URL}/${logo}`} alt="Client" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="text-primary">And many more...</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByOrganization;
