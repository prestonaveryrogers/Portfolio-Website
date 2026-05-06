// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundImage: "url('/pictures/earth_at_night.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="navbar-photo-container">
        <img
            src="/pictures/hole_in_the_wall.jpg" 
            alt="My Photo"
            className="navbar-photo"
        />
      </div>
      <h2>Preston Rogers</h2>
      <div className="navbar-divider"></div>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/nasa-projects">NASA Projects</Link></li>
        <li><Link to="/masters-projects">Master's Projects</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/resume">Résumé</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;