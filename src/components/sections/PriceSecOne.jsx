import React from 'react';
import PriceCard from './PriceCard';

const PriceSecOne = ({ className = '' }) => {
  const pricingPlans = [
    {
      title: 'Great for small business',
      price: '39',
      img: 'assets/img/normal/price_card_1.png',
      active: false,
      tag: '',
      features: [
        { text: 'Design & Marketing', unavailable: false },
        { text: 'Project Management', unavailable: false },
        { text: 'Business Solution', unavailable: false },
        { text: 'Digital Product Design', unavailable: true },
      ]
    },
    {
      title: 'Great for large business',
      price: '99',
      img: 'assets/img/normal/price_card_1.png',
      active: false,
      tag: '',
      features: [
        { text: 'Design & Marketing', unavailable: false },
        { text: 'Project Management', unavailable: false },
        { text: 'Business Solution', unavailable: false },
        { text: 'Digital Product Design', unavailable: false },
      ]
    }
  ];

  return (
    <section className={className}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8">
            <div className="title-area text-center">
              <span className="sub-title">
                <span className="text">Pricing Plans</span>
              </span>
              <h2 className="sec-title">Pricing Packages</h2>
              <p className="sec-text">
                Website and mobile sit amet, consectetur adipiscing elit. Morbi obortis ligula euismod sededesty am augue nisl.
              </p>
            </div>
          </div>
        </div>
        <div className="row gy-4 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div className="col-lg-6" key={index}>
              <PriceCard
                title={plan.title}
                price={plan.price}
                img={plan.img}
                active={plan.active}
                tag={plan.tag}
                features={plan.features}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSecOne;
