
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSecTwo = ({ className }) => {
  return (
    <section className={className} data-bg-src="assets/img/hero/hero-bg1-1.png">
        <div className="shape-mockup bg-gradient-shape1" data-top={0} data-left={0} />
        <div className="container">
            <div className="row gy-30">
                <ProjectCard className="col-lg-4 col-md-6" limit={9} />
            </div>
        </div>
    </section>

  );
};

export default ProjectSecTwo;