import React from 'react';
import { useParams, Navigate } from "react-router-dom";

import Header from '../components/header/HeaderOne';
import Footer from '../components/footer/FooterOne';

import Breadcrumb from '../components/sections/Breadcrumb';

import ServiceDetailsSec from '../components/sections/ServiceDetailsSec';
import services from '../components/data/services';

const ServiceDetails = () => {
  const { slug } = useParams();

  // Find the service by slug
  const service = services.find(p => p.slug === slug);

  // If no slug is provided (accessing /service-details directly), use the first service
  const currentService = slug ? service : services[0];

  // If slug is provided but service not found, redirect to services page
  if (slug && !service) {
    return <Navigate to="/services" replace />;
  }
  
  // Get service title from service data
  const serviceTitle = currentService ? currentService.title : 'Service Details';
  
  return (
    <>
      <Header />
        <Breadcrumb 
          title={serviceTitle}
          subtitle={serviceTitle}
        />
        <ServiceDetailsSec 
          className="position-relative overflow-hidden space-top space-extra-bottom"
          service={currentService}
        />
        
      <Footer />
    </>
  );
};

export default ServiceDetails;