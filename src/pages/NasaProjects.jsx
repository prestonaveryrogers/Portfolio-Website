import React from "react";
import '../styles/NasaProjects.css'; // Make sure to import your CSS file

const NasaProjects = () => {
  return (
    <div>
      <header className="nasa-header">
        <img src="/pictures/nasa_projects_logo.png" className="nasa-logo" />
      </header>

      <h1>NASA Projects</h1>
      <p>Here are some video clips from my work with NASA:</p>

      <div style={{ marginTop: "20px" }}>
        <video width="640" height="360" controls>
          <source src="/videos/aelg_model.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={{ marginTop: "20px" }}>
        <video width="640" height="360" controls>
          <source src="/videos/collision_precheck_joint_boundary.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default NasaProjects;