import React from 'react';
import { Link } from 'react-router-dom';

const PricingCard = ({ className = '', title, price, img, features, active = false, tag = '' }) => {
  return (
    <div className={className}>
      <div className={`price-card ${active ? 'active' : ''}`}>
        {tag && <div className="price-tag">{tag}</div>}
        <div className="box-header">
          <div className="box-img">
            <img src={img || 'assets/img/normal/price_card_1.png'} alt="price" />
          </div>
          <div className="box-price">${price}</div>
          <h3 className="box-title">{title}</h3>
        </div>
        <div className="box-content">
          <div className="check-list">
            <ul>
              {features && features.map((feature, index) => (
                <li key={index} className={feature.unavailable ? 'unavailable' : ''}>
                  <i className={feature.unavailable ? 'far fa-circle-xmark' : 'far fa-circle-check'}></i>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <Link to="/contact" className="ot-btn">Choose Plan</Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
