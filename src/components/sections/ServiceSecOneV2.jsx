
import React from 'react';
import ServiceCard from './ServiceCard';

const ServiceSecOne = ({ className }) => {

  return (
    <section className={className} id="service-sec">
        <div className="container">
            <div className="row gy-4 justify-content-center">
                <ServiceCard className="col-xl-3 col-md-6" limit={8} />
            </div>
        </div>
    </section>
  );
};

export default ServiceSecOne;