// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger button - only visible on mobile */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
        <span className={isOpen ? "open" : ""}></span>
      </button>

      {/* Overlay for mobile - closes menu when clicked */}
      {isOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}

      <nav
        className={`navbar ${isOpen ? "open" : ""}`}
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
          <li><Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>About Me</Link></li>
          <li><Link to="/nasa-projects" className={location.pathname === "/nasa-projects" ? "active" : ""} onClick={closeMenu}>NASA Projects</Link></li>
          <li><Link to="/masters-projects" className={location.pathname === "/masters-projects" ? "active" : ""} onClick={closeMenu}>Master's Projects</Link></li>
          <li><Link to="/publications" className={location.pathname === "/publications" ? "active" : ""} onClick={closeMenu}>Publications</Link></li>
          <li><Link to="/resume" className={location.pathname === "/resume" ? "active" : ""} onClick={closeMenu}>Résumé</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;