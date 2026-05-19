import React from 'react';
import { Link } from 'react-router-dom';
import projectsLoop from '../data/projects';

const ProjectCard = ({ className, limit = null }) => {
  const projects = projectsLoop.slice(0, 6).map((project, index) => ({
    title: project.title,
    detailsLink: project.detailsLink,
    img: `assets/img/gallery/gallery_2_${index + 1}.jpg`,
    subtitle: project.subtitle,
  }));

  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <>
      {displayedProjects.map((project, index) => (
        <div className={className} key={index}>
          <div className="gallery-card style2">
            <div className="box-img">
              <img src={project.img} alt="gallery" />
              <Link className="icon-btn popup-image" to={project.detailsLink}><i className="far fa-search"></i></Link>
            </div>
            <div className="box-content">
              <p className="box-subtitle">{project.subtitle}</p>
              <h3 className="box-title"><Link to={project.detailsLink}>{project.title}</Link></h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;