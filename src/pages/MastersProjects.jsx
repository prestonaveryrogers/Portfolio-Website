import React from "react";
import ImageLightbox from '../components/ImageLightbox';
import '../styles/MastersProjects.css';

const MastersProjects = () => {
  return (
    <div>
      <header className="masters-header">
        <img src={`${process.env.PUBLIC_URL}/pictures/masters_projects_logo.png`} className="masters-logo" alt="Master's Projects" />
      </header>

      {/* Convex Heuristics Project */}
      <div className="masters-project-card">
        <div className="project-content">
          <h2>Convex Heuristics for Limb Placement and Navigation</h2>
          <p className="project-meta">Robotics & Control Systems</p>

          <div className="project-layout">
            <div className="project-text">
              <p>
                This project addresses efficient calculation of movements for robotic locomotion, enabling agents to navigate autonomously with minimal human guidance.
              </p>
              <div className="project-highlights">
                <h3>Key Approaches:</h3>
                <ul>
                  <li><strong>Path Planning:</strong> Cost minimization with convex approximations for obstacle avoidance</li>
                  <li><strong>Limb Control:</strong> Quasilinearized dynamics for step calculation</li>
                  <li><strong>Environment Modeling:</strong> Reactive decision-making using goal and geometry data</li>
                </ul>
              </div>
            </div>

            <div className="project-visual">
              <ImageLightbox
                src={`${process.env.PUBLIC_URL}/pictures/convex_heuristics.png`}
                alt="Convex Heuristics Visualization"
                caption="Simulated robotic agent navigating obstacle field using convex optimization for path planning"
              />
              <p className="image-caption">Simulated robotic agent navigating obstacle field using convex optimization for path planning</p>
            </div>
          </div>

          <a href={`${process.env.PUBLIC_URL}/docs/Convex_Heuristics_Paper.pdf`} target="_blank" rel="noopener noreferrer" className="project-button">
            Read Full Paper →
          </a>
        </div>
      </div>

      {/* Robot Arm Project */}
      <div className="masters-project-card">
        <div className="project-content">
          <h2>Rigid Body Control Via Muscle Activity Interpretation</h2>
          <p className="project-meta">Machine Learning & Biomedical Engineering</p>

          <div className="project-layout">
            <div className="project-text">
              <p>
                Addressing the lack of dexterity in post-amputation prosthetics through non-invasive AI-based control systems.
              </p>
              <div className="project-highlights">
                <h3>Solution:</h3>
                <ul>
                  <li><strong>Sensor Input:</strong> Electroencephalogram (EEG) signal acquisition</li>
                  <li><strong>ML Classification:</strong> Real-time pattern recognition for control commands</li>
                  <li><strong>Impact:</strong> Restores dexterity and improves quality of life for amputees</li>
                </ul>
              </div>
            </div>

            <div className="project-visual">
              <ImageLightbox
                src={`${process.env.PUBLIC_URL}/pictures/robot_arm_ml.png`}
                alt="EEG-based Robot Control"
                caption="EMG signal classification for robotic arm control (K-means clustering visualization)"
              />
              <p className="image-caption">EMG signal classification for robotic arm control (K-means clustering visualization)</p>
            </div>
          </div>

          <a href={`${process.env.PUBLIC_URL}/docs/Robot_Arm_Paper.pdf`} target="_blank" rel="noopener noreferrer" className="project-button">
            Read Full Paper →
          </a>
        </div>
      </div>

      {/* Neural Network Copycat Project */}
      <div className="masters-project-card">
        <div className="project-content">
          <h2>Deep Neural Network with Confidence Measure as MPC Copycat</h2>
          <p className="project-meta">Control Theory & Deep Learning</p>

          <div className="project-layout">
            <div className="project-text">
              <p>
                Using neural networks to reduce computational load for constrained navigation problems while maintaining reliability through confidence estimation.
              </p>
              <div className="project-highlights">
                <h3>Methodology:</h3>
                <ul>
                  <li><strong>MPC Implementation:</strong> Solves constrained navigation with optimization</li>
                  <li><strong>Neural Network Training:</strong> Learns to imitate MPC behavior</li>
                  <li><strong>Confidence Measure:</strong> Out-of-distribution detection ensures reliability</li>
                  <li><strong>Fallback System:</strong> Triggers original solver when confidence is low</li>
                </ul>
              </div>
            </div>

            <div className="project-visual">
              <ImageLightbox
                src={`${process.env.PUBLIC_URL}/pictures/neural_network_copycat.png`}
                alt="Neural Network MPC Architecture"
                caption="MPC-guided trajectory planning for autonomous navigation with out-of-distribution detection"
              />
              <p className="image-caption">MPC-guided trajectory planning for autonomous navigation with out-of-distribution detection</p>
            </div>
          </div>

          <a href={`${process.env.PUBLIC_URL}/docs/Neural_Network_Copycat_Paper.pdf`} target="_blank" rel="noopener noreferrer" className="project-button">
            Read Full Paper →
          </a>
        </div>
      </div>

    </div>
  );
};

export default MastersProjects;
