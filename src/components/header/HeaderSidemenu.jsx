import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSideMenu from '../hooks/useSideMenu';
import logo from '../../assets/img/logo.svg';

const HeaderSidemenu = () => {
    useSideMenu('.sidemenu-info', '.sideMenuInfo', '.sideMenuCls', 'show');

    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleNewsletterSubmit = async (e) => {
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
                setMessage('✅ Subscribed successfully!');
                setEmail('');
            } else {
                setMessage('❌ Failed. Please try again.');
            }
        } catch {
            setMessage('❌ An error occurred.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="sidemenu-wrapper sidemenu-info d-none d-lg-block">
            <div className="sidemenu-content">
                <button className="closeButton sideMenuCls"><i className="far fa-times"></i></button>
                <div className="widget">
                    <div className="ot-widget-about">
                        <div className="about-logo">
                            <Link to="/"><img src={logo} alt="Tronix" /></Link>
                        </div>
                        <p className="about-text">
                            An IT consultancy can help you assess your technology needs and develop a technology strategy that
                            aligns with your business
                        </p>
                        <div className="ot-social">
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                            <a href="https://www.whatsapp.com/"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                </div>
                <div className="widget">
                    <h3 className="widget_title">Contact Us</h3>
                    <div className="ot-widget-contact">
                        <div className="info-box">
                            <div className="info-box_icon"><i className="fas fa-location-dot"></i></div>
                            <p className="info-box_text">Malian Avenue, London SZ2 52H, United Kingdom</p>
                        </div>
                        <div className="info-box">
                            <div className="info-box_icon"><i className="fas fa-phone"></i></div>
                            <p className="info-box_text">
                                <a href="tel:+2352569321586" className="info-box_link">+(235) 2569-321586</a>
                                <a href="tel:+2352569326254" className="info-box_link">+(235) 2569-326254</a>
                            </p>
                        </div>
                        <div className="info-box">
                            <div className="info-box_icon"><i className="fas fa-envelope"></i></div>
                            <p className="info-box_text">
                                <a href="mailto:help24/7@tronix.com" className="info-box_link">help24/7@tronix.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="widget newsletter-widget">
                    <h3 className="widget_title">Newsletter</h3>
                    <p className="footer-text">Sign up to get update news about us</p>
                    <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Enter Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isSubmitting}
                        />
                        <button type="submit" className="ot-btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                        </button>
                    </form>
                    {message && (
                        <p className="footer-text mt-2" style={{ color: message.includes('✅') ? '#069845' : '#dc3545' }}>
                            {message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HeaderSidemenu;
