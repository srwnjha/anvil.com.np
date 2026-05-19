import React from 'react';

const TestiGrid = ({ className = '', limit = null }) => {
  const testimonials = [
    {
      name: 'Meliano Smith',
      designation: 'CEO, Hosak Int. Ltd.',
      image: 'assets/img/testimonial/testi_3_1.jpg',
      text: 'Completely formulate user-centric partnerships and cross top benefits and team driven is services edefine after cross capital. Intrinsicly engage integrated intellectual.',
    },
    {
      name: 'Jasline Hiseel',
      designation: 'CEO, Hosak Int. Ltd.',
      image: 'assets/img/testimonial/testi_3_2.jpg',
      text: 'Completely formulate user-centric partnerships and cross top benefits and team driven is services edefine after cross capital. Intrinsicly engage integrated intellectual.',
    },
    {
      name: 'Martin Danial',
      designation: 'CEO, Hosak Int. Ltd.',
      image: 'assets/img/testimonial/testi_3_3.jpg',
      text: 'Completely formulate user-centric partnerships and cross top benefits and team driven is services edefine after cross capital. Intrinsicly engage integrated intellectual.',
    },
  ];

  const displayedTestimonials = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <>
      {displayedTestimonials.map((testimonial, index) => (
        <div className={className} key={index}>
          <div className="testi-grid">
            <p className="box-text">{testimonial.text}</p>
            <div className="box-profile">
              <div className="box-img">
                <img src={testimonial.image} alt={testimonial.name} />
              </div>
              <div className="media-body">
                <h3 className="box-title">{testimonial.name}</h3>
                <span className="box-desig">{testimonial.designation}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestiGrid;
