import React from "react";

const Tech = ({ className = "" }) => {
  const categories = [
    {
      title: "NETWORK & SECURITY",
      icon: "fas fa-shield-alt",
      logos: [
        "assets/img/anvil/brands/1.png",
        "assets/img/anvil/brands/2.png",
        "assets/img/anvil/brands/3.png",
        "assets/img/anvil/brands/4.png",
        "assets/img/anvil/brands/5.png",
        "assets/img/anvil/brands/6.png",
        "assets/img/anvil/brands/7.png",
      ],
    },
    {
      title: "INFRASTRUCTURE & STORAGE",
      icon: "fas fa-server",
      logos: [
        "assets/img/anvil/brands/8.png",
        "assets/img/anvil/brands/9.png",
        "assets/img/anvil/brands/10.png",
      ],
    },
    {
      title: "OPEN PLATFORMS",
      icon: "fas fa-cubes",
      logos: [
        "assets/img/anvil/brands/11.png",
        "assets/img/anvil/brands/12.png",
        "assets/img/anvil/brands/13.png",
      ],
    },
  ];

  const stats = [
    {
      number: "15+",
      label: "Technology Partners",
      desc: "Strong ecosystem of industry-leading vendors",
    },
    {
      number: "100+",
      label: "Successful Projects",
      desc: "Delivered high-impact solutions worldwide",
    },
    {
      number: "10+",
      label: "Years of Partnership",
      desc: "Long-term relationships built on trust",
    },
    {
      number: "Global",
      label: "Reach",
      desc: "Serving clients across diverse industries",
    },
  ];

  return (
    <section className={`trusted-by-org py-5 ${className}`}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span className="sub-title d-block mb-2">BRAND WE WORK WITH</span>
          <h2 className="sec-title">Technology Partners</h2>
          <p className="text-muted">
            We collaborate with industry-leading technology partners to deliver
            secure, reliable and future-ready solutions.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category, idx) => (
          <div key={idx} className="mb-5">
            <div className="d-flex align-items-center gap-3 mb-4">
              <i className={`${category.icon} text-primary fs-4`}></i>
              <h5 className="fw-bold mb-0">{category.title}</h5>
            </div>

            <div className="row g-4 justify-content-start">
              {category.logos.map((logo, i) => (
                <div key={i} className="col-auto">
                  <div className="partner-logo">
                    <img
                      src={`${process.env.PUBLIC_URL}/${logo}`}
                      alt="Partner"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Stats Bar */}
        <div className="stats-bar mt-5 pt-4">
          <div className="row g-4 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3 col-6">
                <div className="stat-item">
                  <h3 className="fw-bold text-primary mb-1">{stat.number}</h3>
                  <h6 className="mb-2">{stat.label}</h6>
                  <p className="text-muted small mb-0">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
