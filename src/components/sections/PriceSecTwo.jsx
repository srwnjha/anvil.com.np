import React from 'react';
import PriceBox from './PriceBox';

const PriceSecTwo = ({ className = '' }) => {

  return (
    <section className={`overflow-hidden ${className}`}>
      <div className="container">
        <div className="row gx-0 align-items-center">
          <PriceBox className="col-xl-3 col-md-6" limit={4} />
        </div>
      </div>
    </section>
  );
};

export default PriceSecTwo;
