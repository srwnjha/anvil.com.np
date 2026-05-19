import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';

const ProjectDetailsSec = ({ className = "space-top space-extra-bottom" }) => {
  const { slug } = useParams();
  const project = slug ? projects.find((p) => p.slug === slug) : null;

  const mainImage = project?.detailsImage || 'assets/img/gallery/project_details.jpg';
  const mainTitle = project?.title || 'Mobile Application Design';
  const tags = project?.tags || ['DEVELOPMENT', 'APP DESIGN'];
  const services = project?.services || 'Medical Design, Branding, App, Development';
  const client = project?.client || 'Microsoft App Holing Ltd, Australia Area';
  const startDate = project?.startDate || '29 April, 2023';
  const endDate = project?.endDate || '15 July, 2023';
  const content = project?.content || [];
  const additionalImages = project?.additionalImages || [
    'assets/img/gallery/project_inner_1.jpg',
    'assets/img/gallery/project_inner_2.jpg'
  ];

  return (
    <section className={className}>
      <div className="container project-details">
        <div className="page-img">
          <img src={mainImage} alt={mainTitle} />
        </div>
        <p className="page-tags">
          {tags.map((tag, index) => (
            <React.Fragment key={index}>
              <a href="/portfolio">{tag}</a>
              {index < tags.length - 1 && ', '}
            </React.Fragment>
          ))}
        </p>
        <h2 className="h3 page-title">{mainTitle}</h2>
        
        <div className="project-meta-wrap">
          <div className="row gx-10 gy-30">
            <div className="col-lg-4 col-md-6">
              <div className="project-meta">
                <div className="box-icon icon-btn">
                  <i className="fas fa-gear"></i>
                </div>
                <div className="media-body">
                  <p className="box-text">SERVICES</p>
                  <h3 className="box-title">{services}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-meta">
                <div className="box-icon icon-btn">
                  <i className="fas fa-user"></i>
                </div>
                <div className="media-body">
                  <p className="box-text">CLIENT</p>
                  <h3 className="box-title">{client}</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project-meta">
                <div className="box-icon icon-btn">
                  <i className="fas fa-calendar-days"></i>
                </div>
                <div className="media-body">
                  <p className="box-text">DATE</p>
                  <h3 className="box-title">Start: {startDate} & <br /> End: {endDate}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-xxl-8 col-lg-8">
            <div className="mb-30">
              <div className="project-content">
                {content.map((section, index) => (
                  <React.Fragment key={index}>
                    <h4 className={index === 0 ? 'mt-n2 mb-25' : 'mb-25'}>
                      {section.heading}
                    </h4>
                    <p className={index === content.length - 1 ? 'mb-n2' : 'mb-30'}>
                      {section.text}
                    </p>
                  </React.Fragment>
                ))}

                {additionalImages.length > 0 && (
                  <div className="row mt-30">
                    {additionalImages.map((image, index) => (
                      <div key={index} className="col-md-6 mb-30">
                        <img className="rounded-15 w-100" src={image} alt="project" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-xxl-4 col-lg-4 position-relative mb-40">
            <aside className="sidebar-area project-sidebar">
              <div className="widget project_info">
                <h3 className="widget_title">Need Any Help?</h3>
                <p className="box-text">Need Any Help, Call Us 24/7 For Support</p>
                
                <h4 className="box-link"><i className="fas fa-phone"></i> <a href="tel:+2352569321586">+(235) 2569-321586</a></h4>
                <h4 className="box-link"><i className="fas fa-envelope"></i> <a href="mailto:inside@tronix.com">inside@tronix.com</a></h4>
                <h4 className="box-link"><i className="fas fa-location-dot"></i> Malian Avenue, London SZ2 52H, <br /> United Kingdom</h4>
                </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsSec;
