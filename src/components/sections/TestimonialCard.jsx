import React from 'react';

const TestimonialCard = ({ className = '', limit = null }) => {
  const testimonialData = [
    {
      title: 'Edward Daniel',
      img: 'assets/img/testimonial/testi_1_1.jpg',
      desig: 'Sales Engineer',
      text: 'Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty',
    },
    {
      title: 'Jussian Rose',
      img: 'assets/img/testimonial/testi_1_2.jpg',
      desig: 'Cloud Architect',
      text: 'Always review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty',
    },
    {
      title: 'Michael Matthew',
      img: 'assets/img/testimonial/testi_1_3.jpg',
      desig: 'Azore Expert',
      text: 'Customer review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty',
    },
    {
      title: 'Justin Dacosta',
      img: 'assets/img/testimonial/testi_1_4.jpg',
      desig: 'Cloud Architect',
      text: 'Positive review can help you measure customer satisfaction and identify areas where your IT solution service is meeting or exceeding expectations. This can help you build on those strengths and promote customer loyalty',
    },
  ];

  const displayTestimonials = limit !== null ? testimonialData.slice(0, limit) : testimonialData;

  return (
    <>
      {displayTestimonials.map((testimonial, index) => (
        <div className={className} key={index}>
          <div className="testi-card">
            <p className="box-text">{testimonial.text}</p>
            <div className="box-profile">
              <div className="box-img">
                <img src={testimonial.img} alt="Avater" />
              </div>
              <div className="media-body">
                <h3 className="box-title">{testimonial.title}</h3>
                <span className="box-desig">{testimonial.desig}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialCard;
