
import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSecOne = ({ className }) => {

  return (
    <section className={className} id="service-sec" data-bg-src={process.env.PUBLIC_URL + "/assets/img/bg/service_bg_1.png"}>
        <div className="container">
            <div className="row justify-content-center"> 
                <div className="col-xl-6 col-lg-7 col-md-8">
                    <div className="title-area text-center">
                        <span className="sub-title"><span className="text">Our services</span></span>
                        <h2 className="sec-title">Service We Provide</h2>
                        <p className="sec-text">Website and mobile sit amet, consectetur adipiscing elit. Morbi obortis ligula euismod sededesty am augue nisl.</p>
                    </div>
                </div>
            </div>
            <div className="row gy-4 justify-content-center">
                <ServiceCard className="col-xl-3 col-md-6" limit={4} />
            </div>
        </div>
    </section>
  );
};

export default ServiceSecOne;