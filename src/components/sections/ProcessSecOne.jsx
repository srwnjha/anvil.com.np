import React from "react";

const ProcessSecOne = ({ className = "" }) => {
  const processes = [
    {
      number: "01",
      title: "Analysis & Consultation",
      text: "We discuss business needs, technical requirements, and objectives to design solutions.",
      icon: "assets/img/icon/process_card_1.svg",
    },
    {
      number: "02",
      title: "Solution Design & Validation",
      text: "Our team designs architecture, validates solutions, and ensures performance and scalability.",
      icon: "assets/img/icon/process_card_1.svg",
    },
    {
      number: "03",
      title: "Deployment & Support",
      text: "We implement, configure, integrate solutions, provide training, maintenance, and support.",
      icon: "assets/img/icon/process_card_1.svg",
    },
  ];

  return (
    <section className={className}>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <span className="text">Quick Steps</span>
          </span>
          <h2 className="sec-title">Our Work Process</h2>
        </div>
        <div className="row gy-40 justify-content-between">
          {processes.map((process, index) => (
            <div
              key={index}
              className="col-xxl-auto col-lg-4 col-md-4 process-card-wrap"
            >
              <div className="process-card">
                <div className="box-number">{process.number}</div>
                <div className="box-line"></div>
                <div className="box-content">
                  <h3 className="box-title">{process.title}</h3>
                  <p className="box-text">{process.text}</p>
                  <div className="box-icon">
                    <img src={process.icon} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSecOne;
