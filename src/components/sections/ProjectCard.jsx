import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

const ProjectCard = ({ className, limit }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <>
      {displayedProjects.map((project) => (
        <div className={className} key={project.id}>
          <div className="gallery-card">
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