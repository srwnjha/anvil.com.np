import React from "react";

const ProcessSecTwo = ({ className = "" }) => {
  const processes = [
    {
      number: "01",
      title: "Consultation & Requirement Gathering",
      text: "We analyze your business objectives, technical requirements, and operational challenges to design the most effective and scalable solution.",
      icon: "assets/img/icon/process_box_1.svg",
    },
    {
      number: "02",
      title: "Solution Design & Validation",
      text: "Our experts develop the solution architecture, perform testing and proof-of-concept validation, and ensure compatibility with your existing infrastructure.",
      icon: "assets/img/icon/process_box_2.svg",
    },
    {
      number: "03",
      title: "Deployment & Integration",
      text: "We implement, configure, and integrate the solution seamlessly into your environment while minimizing operational disruption.",
      icon: "assets/img/icon/process_box_3.svg",
    },
    {
      number: "04",
      title: "Support & Continuous Improvement",
      text: "We provide proactive monitoring, maintenance, optimization, and technical support to ensure long-term performance, security, and reliability.",
      icon: "assets/img/icon/process_box_4.svg",
    },
  ];

  return (
    <section className={className} id="process-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <span className="text">WORKING CYCLE</span>
          </span>
          <h2 className="sec-title">Our Working Cycle</h2>
        </div>
        <div className="row">
          {processes.map((process, index) => (
            <div key={index} className="col-md-6 col-lg-3 process-box-wrap">
              <div className="process-box">
                <div className="box-icon">
                  <img src={process.icon} alt="Process" />
                  <div className="box-number">{process.number}</div>
                </div>
                <h3 className="box-title">{process.title}</h3>
                <p className="box-text">{process.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSecTwo;
