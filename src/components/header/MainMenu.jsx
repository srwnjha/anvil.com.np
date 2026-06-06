import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
        {/* <ul className="sub-menu">
          <li><Link to="/">Home One</Link></li>
          <li><Link to="/home-two">Home Two</Link></li>
          <li><Link to="/home-three">Home Three</Link></li>
        </ul> */}
      </li>

      <li>
        <Link to="/about">About Us</Link>
      </li>

      <li>
        <Link to="/service">Service</Link>
        {/* <ul className="sub-menu">
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/service-details">Service Details</Link>
          </li>
        </ul> */}
      </li>

      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <ul className="sub-menu">
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/team-details">Team Details</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing Plans</Link>
          </li>
          <li>
            <Link to="/project">Project Gallery</Link>
          </li>
          <li>
            <Link to="/project-details">Project Details</Link>
          </li>
          <li>
            <Link to="/error404">Error 404 Page</Link>
          </li>
        </ul>
      </li>

      <li className="menu-item-has-children">
        <Link to="/blog">Blog</Link>
        <ul className="sub-menu">
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/blog-grid">Blog Grid Style</Link>
          </li>
          <li>
            <Link to="/blog-details">Blog Details</Link>
          </li>
        </ul>
      </li>

      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default MainMenu;
