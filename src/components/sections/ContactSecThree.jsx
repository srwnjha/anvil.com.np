import React, { useState } from 'react';

const ContactSecThree = ({ className = "space-bottom overflow-hidden" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const [formMessage, setFormMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');

    // Replace with your own key from https://web3forms.com
    const data = {
      ...formData,
      access_key: "YOUR_WEB3FORMS_ACCESS_KEY"
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setFormMessage('✅ Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          number: '',
          subject: '',
          message: ''
        });
      } else {
        setFormMessage('❌ Failed to send message. Please try again.');
      }
    } catch (error) {
      setFormMessage('❌ An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className} id="contact-sec">
      <div
        className="shape-mockup bg-gradient-shape1 contact-bg-gradient1"
        data-top="auto"
        data-bottom="25%"
        data-right="3%"
        data-left="auto"
      ></div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">Get in Touch</span>
          <h2 className="sec-title">
            Ready to discuss your cyber <br /> tronixity needs?
          </h2>
        </div>
        <div className="row gy-40 gx-60">
          <div className="col-xl-6">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="contact-form1">
              <h2 className="contact-form-title mb-30">How May We Help You!</h2>
              <form onSubmit={handleSubmit} className="input-label ajax-contact">
                <div className="row">
                  <div className="form-group col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                    <i className="far fa-user text-theme"></i>
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                    <i className="far fa-envelope text-theme"></i>
                  </div>
                  <div className="form-group col-sm-6">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Number"
                      name="number"
                      id="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                    <i className="far fa-phone text-theme"></i>
                  </div>
                  <div className="form-group col-sm-6">
                    <select
                      name="subject"
                      id="subject"
                      className="form-select"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>Service</option>
                      <option value="Tronixity Consulting">Tronixity Consulting</option>
                      <option value="Tronixity Training">Tronixity Training</option>
                      <option value="Data Tronixity">Data Tronixity</option>
                      <option value="Tronixity Assessment">Tronixity Assessment</option>
                    </select>
                    <i className="far fa-angle-down text-theme"></i>
                  </div>
                  <div className="form-group col-12">
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      placeholder="Write Message"
                      rows="3"
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  <div className="form-btn col-12 mt-10">
                    <button type="submit" className="ot-btn w-100" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Submit Now'}
                      <i className="far fa-long-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
                {formMessage && (
                  <p className="form-messages d-block mb-0 mt-3" style={{
                    color: formMessage.includes('✅') ? '#069845' : '#dc3545',
                    fontWeight: '500'
                  }}>
                    {formMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSecThree;
