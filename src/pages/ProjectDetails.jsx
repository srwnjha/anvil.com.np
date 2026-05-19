import React from 'react';
import { useParams, Navigate } from "react-router-dom";

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import ProjectDetailsSec from '../components/sections/ProjectDetailsSec';
import projects from '../components/data/projects';

const ProjectDetails = () => {
  const { slug } = useParams();

  // Find the project by slug
  const project = projects.find(p => p.slug === slug);

  // If no slug is provided (accessing /project-details directly), use the first project
  const currentProject = slug ? project : projects[0];

  // If slug is provided but project not found, redirect to portfolio page
  if (slug && !project) {
    return <Navigate to="/project" replace />;
  }
  
  // Get project title from project data
  const projectTitle = currentProject ? currentProject.title : 'Project Details';
  
  return (
    <>
      <Header />
        <Breadcrumb 
          title={projectTitle}
          subtitle={projectTitle}
        />
        <ProjectDetailsSec 
          className="position-relative overflow-hidden space-top space-extra-bottom"
        />
        
      <Footer />
    </>
  );
};

export default ProjectDetails;
