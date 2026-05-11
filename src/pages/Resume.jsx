import React from "react";
import '../styles/Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">

      {/* Header Section */}
      <header className="resume-header">
        <h1 className="resume-title">Résumé</h1>
      </header>

      {/* Resume Card */}
      <div className="resume-card">
        <div className="resume-card-header">
          <div className="resume-info">
            <h2>Preston Rogers</h2>
            <p className="resume-subtitle">Robotics Technologist · NASA JPL</p>
          </div>
          <a
            href={`${process.env.PUBLIC_URL}/docs/Preston_Rogers_Resume.pdf`}
            download="Preston_Rogers_Resume.pdf"
            className="resume-download-button desktop-download"
          >
            Download PDF →
          </a>
        </div>

        {/* PDF Preview Section - Desktop Only */}
        <div className="resume-preview-container">
          <iframe
            src={`${process.env.PUBLIC_URL}/docs/Preston_Rogers_Resume.pdf#view=FitH&navpanes=0`}
            width="100%"
            height="100%"
            title="Preston Rogers Résumé"
            className="resume-iframe"
          />
        </div>

        {/* Mobile View Section */}
        <div className="resume-mobile-view">
          <div className="mobile-resume-message">
            <svg className="pdf-icon" width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="#0B3D91"/>
              <path d="M14 2V8H20" fill="#5D91FF"/>
              <text x="12" y="17" fontSize="8" fill="white" textAnchor="middle" fontWeight="bold">PDF</text>
            </svg>
            <h3>View Full Resume</h3>
            <p>For the best viewing experience on mobile, open the PDF in your browser or download it.</p>
            <div className="mobile-button-group">
              <a
                href={`${process.env.PUBLIC_URL}/docs/Preston_Rogers_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-view-button"
              >
                Open in Browser →
              </a>
              <a
                href={`${process.env.PUBLIC_URL}/docs/Preston_Rogers_Resume.pdf`}
                download="Preston_Rogers_Resume.pdf"
                className="resume-download-button mobile-download"
              >
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Resume;
