import React, { useState } from 'react';

const ContactSecOne = ({ className = '' }) => {
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
        // Clear the form
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
    <div className="" id="contact-sec">
      <div className={`container ${className}`}>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 text-center text-lg-start">
            <div className="pe-xxl-5 me-xl-4">
              <div className="title-area mb-50">
                <span className="sub-title">
                  <span className="text">Have Any Question?</span>
                </span>
                <h2 className="sec-title">Let's Discuss About Something</h2>
                <p className="sec-text">
                  At our IT solution company, we are committed to providing exceptional customer service and support. If you are experiencing technical difficulties or need assistance with one of our services
                </p>
              </div>
              <div className="social-card">
                <h3 className="box-title">Follow Us:</h3>
                <div className="ot-social">
                  <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/"><i className="fab fa-instagram"></i></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/"><i className="fab fa-youtube"></i></a>
                </div>
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps" className="box-link">Get Google Map Directions</a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-40 mt-xl-0">
            <div className="contact-form1" data-bg-src="assets/img/bg/contact_bg_2.png">
              <h3 className="box-title">Fill The Contact Form</h3>
              <p className="box-text">Feel free to contact with us, we don't spam your email</p>
              <form onSubmit={handleSubmit} className="input-label ajax-contact">
                <div className="row">
                  <div className="form-group line-input col-sm-6">
                    <input type="text" className="form-control" name="name" id="name" placeholder=" " required value={formData.name} onChange={handleChange} disabled={isSubmitting} />
                    <label htmlFor="name">Your Name*</label>
                  </div>
                  <div className="form-group line-input col-sm-6">
                    <input type="email" className="form-control" name="email" id="email" placeholder=" " required value={formData.email} onChange={handleChange} disabled={isSubmitting} />
                    <label htmlFor="email">Your Email*</label>
                  </div>
                  <div className="form-group line-input col-sm-6">
                    <input type="tel" className="form-control" name="number" id="number" placeholder=" " required value={formData.number} onChange={handleChange} disabled={isSubmitting} />
                    <label htmlFor="number">Phone Number*</label>
                  </div>
                  <div className="form-group line-input col-sm-6">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder=" " required value={formData.subject} onChange={handleChange} disabled={isSubmitting} />
                    <label htmlFor="subject">Subject...</label>
                  </div>
                  <div className="form-group line-input col-12">
                    <textarea name="message" id="message" cols="30" rows="3" className="form-control" placeholder=" " required value={formData.message} onChange={handleChange} disabled={isSubmitting}></textarea>
                    <label htmlFor="message">Your Message*</label>
                  </div>
                  <div className="form-btn col-12 mt-10">
                    <button className="ot-btn style3" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Get a Quote'}</button>
                  </div>
                </div>
                <p className="form-messages mb-0 mt-3">{formMessage}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSecOne;
