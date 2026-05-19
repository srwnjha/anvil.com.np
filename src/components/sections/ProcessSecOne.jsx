import React from 'react';

const ProcessSecOne = ({ className = '' }) => {
  const processes = [
    {
      number: '01',
      title: 'Project Discussion',
      text: 'They may offer a range of services, from project-based work to ongoing support and maintenance.',
      icon: 'assets/img/icon/process_card_1.svg'
    },
    {
      number: '02',
      title: 'Testing & Trying',
      text: 'They may offer a range of services, from project-based work to ongoing support and maintenance.',
      icon: 'assets/img/icon/process_card_1.svg'
    },
    {
      number: '03',
      title: 'Execute & install',
      text: 'They may offer a range of services, from project-based work to ongoing support and maintenance.',
      icon: 'assets/img/icon/process_card_1.svg'
    }
  ];

  return (
    <section className={className}>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title"><span className="text">Quick Steps</span></span>
          <h2 className="sec-title">Our Work Feature</h2>
        </div>
        <div className="row gy-40 justify-content-between">
          {processes.map((process, index) => (
            <div key={index} className="col-xxl-auto col-lg-4 col-md-4 process-card-wrap">
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
