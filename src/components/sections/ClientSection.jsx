import React from "react";

const ClientSection = () => {
  const clients = [
    "assets/img/anvil/clients/1.png",
    "assets/img/anvil/clients/2.png",
    "assets/img/anvil/clients/3.png",
    "assets/img/anvil/clients/4.png",
    "assets/img/anvil/clients/5.png",
    "assets/img/anvil/clients/6.png",
    "assets/img/anvil/clients/7.png",
    "assets/img/anvil/clients/8.png",
    "assets/img/anvil/clients/9a.png",
    "assets/img/anvil/clients/10.png",
    "assets/img/anvil/clients/11.jpeg",
  ];

  return (
    <section className="client-section trusted-by-org py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h4 className="fw-bold">Our Clients</h4>
        </div>
        <div className="row g-5 justify-content-center">
          {clients.map((logo, i) => (
            <div key={i} className="col-auto">
              <div className="client-logo">
                <img src={`${process.env.PUBLIC_URL}/${logo}`} alt="Client" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
