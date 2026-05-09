// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/pictures/earth_at_night.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="navbar-photo-container">
        <img
            src={`${process.env.PUBLIC_URL}/pictures/waco_pic.jpeg`}
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