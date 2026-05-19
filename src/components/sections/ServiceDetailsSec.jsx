import React from 'react';
import { Link } from 'react-router-dom';
import services from '../data/services';

const ServiceDetailsSec = ({ className = '', service }) => {
  // Get service from props or use first service as fallback
  const currentService = service || services[0];

  const {
    title = 'Service Details',
    detailsImage = '/assets/img/service/service_details.jpg',
    description = '',
    features = [],
    innerImages = [],
    challengeTitle = '',
    challengeText = '',
    faqs = []
  } = currentService || {};

  return (
    <>
      <section className={className}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-lg-8">
              <div className="page-single mb-30">
                <div className="page-img">
                  <img src={detailsImage} alt={title} />
                </div>
                <div className="page-content">
                  <h2 className="sec-title page-title">{title}</h2>
                  <p className="">{description}</p>

                  {features && features.length > 0 && (
                    <div className="bg-smoke rounded-15 mt-40 mb-40">
                      <div className="row">
                        <div className="col-md-6">
                          {innerImages[0] && (
                            <img 
                              src={innerImages[0]} 
                              alt="Service Feature" 
                              className="rounded-15 h-100 w-100"
                            />
                          )}
                        </div>
                        <div className="col-md-6 align-self-center">
                          <div className="ps-4 py-4">
                            <h4 className="box-title">Service Features</h4>
                            <div className="check-list">
                              <ul>
                                {features.map((feature, index) => (
                                  <li key={index}>
                                    <i className="far fa-circle-check"></i> {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {challengeTitle && (
                    <>
                      <h4>{challengeTitle}</h4>
                      <p className="mb-4">{challengeText}</p>
                      <p className="mb-4">
                        Completely unleash frictionless data via end-to-end services. 
                        Continually unleash virtual e-tailers through magnetic core competencies. 
                        Interactively engage distributed alignments via focused alignments.
                      </p>
                    </>
                  )}

                  {innerImages && innerImages.length > 1 && (
                    <div className="row mt-40">
                      {innerImages.slice(1, 3).map((img, index) => (
                        <div className="col-md-6 mb-30" key={index}>
                          <img 
                            className="rounded-15 w-100" 
                            src={img} 
                            alt={`Service ${index + 1}`} 
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {faqs && faqs.length > 0 && (
                    <div className="accordion mt-20" id="faqAccordion">
                      {faqs.map((faq, index) => (
                        <div className="accordion-card" key={index}>
                          <div className="accordion-header" id={`collapse-item-${index + 1}`}>
                            <button 
                              className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapse-${index + 1}`}
                              aria-expanded={index === 0 ? 'true' : 'false'}
                              aria-controls={`collapse-${index + 1}`}
                            >
                              {faq.question}
                            </button>
                          </div>
                          <div 
                            id={`collapse-${index + 1}`}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            aria-labelledby={`collapse-item-${index + 1}`}
                            data-bs-parent="#faqAccordion"
                          >
                            <div className="accordion-body">
                              <p className="faq-text">{faq.answer}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4">
              <aside className="sidebar-area">
                <div className="widget widget_categories bg-smoke">
                  <h3 className="widget_title">All Services</h3>
                  <ul>
                    {services.map((s) => (
                      <li key={s.id}>
                        <Link to={`/service/${s.slug}`}>
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="widget widget_contact_info bg-smoke">
                  <h3 className="widget_title">Need Any Help?</h3>
                  <div className="widget-availability">
                    <p className="info"><i className="far fa-clock"></i> Monday – Friday 1.00 – 2:00 pm</p>
                    <p className="info"><i className="far fa-clock"></i> Saturday 8.00 – 12:00 pm</p>
                    <p className="info closed"><i className="far fa-clock"></i> Sunday closed</p>
                    </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsSec;
