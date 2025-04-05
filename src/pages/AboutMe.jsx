import React from 'react';
import '../styles/AboutMe.css'; 

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* Background image section */}
      <div className="about-me-hero">
        <div className="about-me-text">About Me</div>
      </div>

      {/* Content below the image */}
      <div className="about-me-content">
        <p>
          Here is some content about yourself. As you scroll down, the text will scroll up, and the background image will scroll at a slower rate.
        </p>

        <div className="waterborne-skate-video">
          <img
            src="/pictures/waterborne_skating.gif" // <-- adjust path as needed
            alt="Waterborne skate animation"
            style={{ width: '25%', height: 'auto' }}
          />
        </div>
      </div>

      {/* Red bar */}
      <div className="red-bar"></div>
    </div>
  );
};


export default AboutMe;