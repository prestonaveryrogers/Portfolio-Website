import React from "react";

const NasaProjects = () => {
  return (
    <div>
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