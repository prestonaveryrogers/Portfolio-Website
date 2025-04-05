import React from "react";
import '../styles/Resume.css'; // Create and style this CSS file as needed

const Resume = () => {
  return (
    <div>
      <header className="resume-header">
        <img src="/pictures/resume_logo.png" className="resume-logo" alt="Resume Logo" />
      </header>

      <h1>Résumé</h1>
      <p>You can download or view my resume below:</p>

      <div className="resume-preview">
        <iframe 
          src="/docs/Preston_Rogers_Resume.pdf" 
          width="100%" 
          height="800px" 
          title="Résumé PDF Preview"
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <a 
          href="/docs/Preston_Rogers_Resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="resume-button"
        >
          View/Download Resume (PDF)
        </a>
      </div>
    </div>


  );
};

export default Resume;
