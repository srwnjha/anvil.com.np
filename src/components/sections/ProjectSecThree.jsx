
import React from 'react';
import ProjectCard from './ProjectCardV2';
import { Link } from 'react-router-dom';

const ProjectSecThree = ({ className }) => {
  return (
    <section className={className}>
        <div className="shape-mockup bg-gradient-shape1" data-top={0} data-left={0} />
        <div className="container">
            <div className="row gy-30 gallery-row filter-active">
                <ProjectCard className="col-md-6 col-xxl-auto filter-item" limit={6} />
            </div>
            <div className="text-center mt-5">
              <Link to="/project" className='ot-btn'>View More</Link>
          </div>
        </div>
    </section>

  );
};

export default ProjectSecThree;