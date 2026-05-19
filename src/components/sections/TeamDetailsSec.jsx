import React from 'react';

const TeamDetailsSec = ({ className = "space" }) => {
  return (
    <section className={className}>
      <div className="container">
        <div className="about-card-wrap">
          <div className="about-card-img box-img">
            <img src="assets/img/team/team_details.jpg" alt="Milano Digits" />
          </div>
          <div className="about-card box-content">
            <h2 className="about-card_title page-title">Milano Digits</h2>
            <p className="about-card_desig page-desig">Network Engineer</p>
            <p className="about-card_text page-content">Milano is a certified network engineer with over 10 years of experience in designing and deploying network solutions</p>

            <div className="ot-social mb-3">
              <a target="_blank" href="https://facebook.com/" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a target="_blank" href="https://twitter.com/" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a target="_blank" href="https://instagram.com/" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a target="_blank" href="https://linkedin.com/" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a target="_blank" href="https://pinterest.com/" rel="noopener noreferrer"><i className="fab fa-pinterest-p"></i></a>
            </div>

            <div className="team-info-wrap">
              <div className="team-info">
                <div className="box-icon icon-btn" data-theme-color="#069845">
                  <i className="fas fa-user"></i>
                </div>
                <div className="media-body">
                  <p className="box-text">Experience</p>
                  <h3 className="box-title">More Than 10 Years</h3>
                </div>
              </div>
              <div className="team-info">
                <div className="box-icon icon-btn" data-theme-color="#F0A230">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="media-body">
                  <p className="box-text">Phone</p>
                  <h3 className="box-title"><a href="tel:+2562145821456">+(256) 21458-21456</a></h3>
                </div>
              </div>
              <div className="team-info">
                <div className="box-icon icon-btn" data-theme-color="#E0009B">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="media-body">
                  <p className="box-text">Email</p>
                  <h3 className="box-title"><a href="mailto:info@tronix.com">info@tronix.com</a></h3>
                </div>
              </div>
              <div className="team-info">
                <div className="box-icon icon-btn" data-theme-color="#8F54FF">
                  <i className="fas fa-fax"></i>
                </div>
                <div className="media-body">
                  <p className="box-text">Fax</p>
                  <h3 className="box-title"><a href="fax:+2568145632">+2568145632</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h4 className="fw-semibold mb-20 pt-5 mt-xl-4">About Milano Digits</h4>
        <p className="mb-4">Milano is a certified network engineer with over 10 years of experience in designing and deploying network solutions. She specializes in configuring and optimizing network devices and protocols to ensure maximum performance and security. Jane has extensive experience working with Cisco and Juniper network devices and is always up-to-date with the latest networking technologies.</p>
        <p className="mb-n2">Our team has the skills and expertise to provide comprehensive and effective IT solutions for small businesses. We are committed to delivering high-quality services and building long-term partnerships with our clients.</p>
      </div>
    </section>
  );
};

export default TeamDetailsSec;