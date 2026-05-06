import React from "react";
import '../styles/Resume.css'; // Create and style this CSS file as needed

const Resume = () => {
  return (
    <div className="resume-container">

      <div className="resume-preview">
        <iframe 
          src="/docs/Preston_Rogers_Resume.pdf" 
          width="100%" 
          height="800px" 
          title="Résumé PDF Preview"
        />
      </div>
    </div>

  );
};

export default Resume;
