import React from 'react';
import '../styles/AboutMe.css'; // Make sure to import your CSS file

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* Text overlay */}
      <div className="about-me-text">
        About Me
      </div>

      {/* Content below the image */}
      <div className="about-me-content">
        <p>
          Here is some content about yourself. As you scroll down, the text will scroll up, and the background image will scroll at a slower rate.
        </p>
        {/* Add more content as needed */}
      </div>

      {/* The red bar */}
      <div className="red-bar"></div>
    </div>
  );
};

export default AboutMe;