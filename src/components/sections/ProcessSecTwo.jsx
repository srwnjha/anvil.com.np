import React from 'react';

const ProcessSecTwo = ({ className = '' }) => {
  const processes = [
    {
      number: '01',
      title: 'Project Discussion',
      text: 'Extensible for web iterate process before meta services impact with olisticly enable client.',
      icon: 'assets/img/icon/process_box_1.svg'
    },
    {
      number: '02',
      title: 'Testing & Trying',
      text: 'Vulnerable for web iterate process before meta services impact with olisticly enable geting.',
      icon: 'assets/img/icon/process_box_2.svg'
    },
    {
      number: '03',
      title: 'Execute & install',
      text: 'Of setting for web iterate process before meta services impact with olisticly enable power.',
      icon: 'assets/img/icon/process_box_3.svg'
    },
    {
      number: '04',
      title: 'We Care About',
      text: 'Getting on for web iterate process before meta services impact with olisticly enable silent.',
      icon: 'assets/img/icon/process_box_4.svg'
    }
  ];

  return (
    <section className={className} id="process-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title"><span className="text">WORKING CYCLE</span></span>
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
