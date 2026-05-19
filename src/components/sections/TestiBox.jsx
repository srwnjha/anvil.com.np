import React from 'react';

const TestiBox = ({ className = '' }) => {
  const testimonials = [
    {
      heading: '"Elit penatibus curae aucto"',
      text: 'Sem a penatibus varius dui nostra vehicula gravida congue, potenti etiam erat justo faucibus fusce quis nulla eu, dignissim eget posuere blandit curabitur porta inceptos. Inceptos faucibus fringilla pharetra mi suscipit curabitu',
      title: 'Andrew Smith',
      desig: 'Designer at',
      company: 'Montan_Agency',
      companyUrl: 'https://www.google.com/',
      img: 'assets/img/testimonial/testi_2_1.jpg'
    },
    {
      heading: '"Elit penatibus curae aucto"',
      text: 'Sem a penatibus varius dui nostra vehicula gravida congue, potenti etiam erat justo faucibus fusce quis nulla eu, dignissim eget posuere blandit curabitur porta inceptos. Inceptos faucibus fringilla pharetra mi suscipit curabitu',
      title: 'Alexan Miceli',
      desig: 'Developer at',
      company: 'Atanu_Agency',
      companyUrl: 'https://www.google.com/',
      img: 'assets/img/testimonial/testi_2_2.jpg'
    },
    {
      heading: '"Elit penatibus curae aucto"',
      text: 'Sem a penatibus varius dui nostra vehicula gravida congue, potenti etiam erat justo faucibus fusce quis nulla eu, dignissim eget posuere blandit curabitur porta inceptos. Inceptos faucibus fringilla pharetra mi suscipit curabitu',
      title: 'Michael John',
      desig: 'Manager at',
      company: 'Shila_Tech',
      companyUrl: 'https://www.google.com/',
      img: 'assets/img/testimonial/testi_2_3.jpg'
    }
  ];

  return (
    <>
      {testimonials.map((testimonial, index) => (
        <div className={className} key={index}>
          <div className="testi-box">
            <div className="box-img">
              <img src={testimonial.img} alt="Avater" />
            </div>
            <h3 className="box-heading">{testimonial.heading}</h3>
            <p className="box-text">{testimonial.text}</p>
            <h4 className="box-title">{testimonial.title}</h4>
            <p className="box-desig">
              {testimonial.desig}{' '}
              <a href={testimonial.companyUrl} target="_blank" rel="noreferrer">
                ({testimonial.company})
              </a>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TestiBox;
