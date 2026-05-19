import React, { useState } from 'react';

const SubscribeSecOne = ({ className = '' }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // Replace with your own key from https://web3forms.com
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          subject: 'New Newsletter Subscription',
          email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('✅ You have been subscribed successfully!');
        setEmail('');
      } else {
        setMessage('❌ Subscription failed. Please try again.');
      }
    } catch {
      setMessage('❌ An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <div className="container">
        <div className="newsletter-area">
          <h3 className="box-title">Subscribe to our newsletter to always be in the top</h3>
          <div className="box-content">
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <button type="submit" className="ot-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {message ? (
              <p className="box-text" style={{ color: message.includes('✅') ? '#069845' : '#dc3545' }}>
                {message}
              </p>
            ) : (
              <p className="box-text">We will not spam you, we promise*</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSecOne;
