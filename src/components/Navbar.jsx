// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-photo-container">
        <img
            src="/pictures/hole_in_the_wall.jpg" 
            alt="My Photo"
            className="navbar-photo"
        />
      </div>
      <h2>Preston Rogers</h2>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/nasa-projects">NASA Projects</Link></li>
        <li><Link to="/masters-projects">Masters Projects</Link></li>
        <li><Link to="/publications">Publications</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;