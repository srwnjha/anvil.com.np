import React from 'react';
import { Link } from 'react-router-dom';

const PriceBox = ({ className = '', limit = null }) => {
  const prices = [
    { 
        name: 'Basic Plan', 
        img: 'assets/img/normal/price_card_1.png', 
        priceValue: '$39' 
    },
    { 
        name: 'Starter Plan', 
        img: 'assets/img/normal/price_card_1.png', 
        priceValue: '$49' 
    },
    { 
        name: 'Gold Plan', 
        img: 'assets/img/normal/price_card_1.png', 
        priceValue: '$59' 
    },
    { 
        name: 'Premium Plan', 
        img: 'assets/img/normal/price_card_1.png', 
        priceValue: '$89' 
    },
  ];

  const displayedPrices = limit ? prices.slice(0, limit) : prices;

  return (
    <>
      {displayedPrices.map((price, index) => (
        <div className={`price-box-wrap ${className}`} key={index}>
          <div className="price-box">
            <div className="box-img">
              <img src={price.img} alt="Price" />
            </div>
            <h3 className="box-title">{price.name}</h3>
            <div className="box-content">
                <div className="check-list">
                    <ul>
                        <li><i className="far fa-check"></i> 30 Days Trial Features</li>
                        <li><i className="far fa-check"></i> Unlimited Features</li>
                        <li><i className="far fa-check"></i> Multi-Language Content</li>
                        <li><i className="far fa-check"></i> Data backup and recovery</li>
                        <li><i className="far fa-check"></i> Synced To Cloud Database</li>
                    </ul>
                </div>
            </div>
            <div className="box-price"><span className="price">{price.priceValue}</span> /mon</div>
            <p className="box-text">Great for large <br/> business</p>
            <Link to="/contact" className="ot-btn btn-sm">Get Started</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default PriceBox;