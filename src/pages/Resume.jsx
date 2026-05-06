import React from "react";
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">

      {/* Header Section */}
      <header className="resume-header">
        <h1 className="resume-title">Résumé</h1>
        <p className="resume-subtitle">Robotics Technologist · NASA JPL</p>
        <a
          href="/docs/Preston_Rogers_Resume.pdf"
          download="Preston_Rogers_Resume.pdf"
          className="resume-download-button"
        >
          <span className="download-icon">⬇</span> Download PDF
        </a>
      </header>

      {/* PDF Preview Section */}
      <div className="resume-content">
        <div className="resume-preview-container">
          <div className="resume-preview">
            <iframe
              src="/docs/Preston_Rogers_Resume.pdf#view=FitH"
              width="100%"
              height="100%"
              title="Preston Rogers Résumé"
              className="resume-iframe"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Resume;
