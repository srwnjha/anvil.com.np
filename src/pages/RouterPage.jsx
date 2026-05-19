import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeOne from './HomeOne'
import HomeTwo from './HomeTwo'
import HomeThree from './HomeThree'
import About from './About'
import Service from './Service'
import ServiceDetails from './ServiceDetails'
import Project from './Project'
import ProjectDetails from './ProjectDetails'
import Team from './Team'
import TeamDetails from './TeamDetails'
import Pricing from './Pricing'
import BlogGrid from './BlogGrid'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import Contact from './Contact'
import Error404 from './Error404'


function RouterPage() {
  const rawPublicUrl = process.env.PUBLIC_URL;
  const basename = rawPublicUrl && rawPublicUrl !== '.' ? rawPublicUrl : '/';

  return (
    <div>
      <Router basename={basename}>
        {/* <LoadTop /> */}
        <Routes>
          <Route path="/" element={<HomeOne />}></Route>
          <Route path="/home-two" element={<HomeTwo />}></Route>
          <Route path="/home-three" element={<HomeThree />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/service-details" element={<ServiceDetails />}></Route>
          <Route path="/service/:slug" element={<ServiceDetails />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/project/:slug" element={<ProjectDetails />}></Route>
          <Route path="/project-details" element={<ProjectDetails />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog-grid" element={<BlogGrid />}></Route>
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/team" element={<Team />}></Route>
          <Route path="/team-details" element={<TeamDetails />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default RouterPage