import React from "react";
import '../styles/Publications.css';

const Publications = () => {
  return (
    <div>
      <header className="publications-header">
        <h1 className="publications-title">Publications</h1>
      </header>

      {/* High-Fidelity Actuator Model Paper */}
      <div className="publication-card">
        <div className="pub-content">
          <h2>A High-Fidelity Actuator Model for Robotic Autonomy in Space and Beyond</h2>
          <p className="pub-authors">Preston Rogers, Joseph Bowkett, Paul Backes</p>
          <p className="pub-venue">NASA Jet Propulsion Laboratory</p>

          <div className="pub-body">
            <div className="pub-text">
              <p>
                This paper presents a generalized actuator model developed for the Mars Sample Return mission at NASA's Jet Propulsion Laboratory. The model provides high-fidelity simulation capabilities for robotic actuators operating in space environments, enabling improved control algorithms and mission planning for autonomous robotic systems.
              </p>
              <p>
                The work addresses critical challenges in actuator modeling for space applications, where precision and reliability are paramount for mission success. The model incorporates detailed dynamics, sensor characteristics, and environmental factors specific to Mars operations.
              </p>
            </div>

            <div className="pub-visual">
              <img src="/pictures/sample_transfer_arm.jpg" alt="Mars Sample Return Mission Sample Transfer Arm" />
              <p className="caption">Mars Sample Return Mission - Sample Transfer Arm</p>
            </div>
          </div>

          <a href="/docs/A_High_Fidelity_Actuator_Model_for_Robotic_Autonomy_in_Space_and_Beyond.pdf" target="_blank" rel="noopener noreferrer" className="pub-button">
            View Publication →
          </a>
        </div>
      </div>

      {/* SuperLimbs Paper */}
      <div className="publication-card">
        <div className="pub-content">
          <h2>Design of Supernumerary Robotic Limbs for the Augmentation of Astronauts Performing Partial Gravity EVA</h2>
          <p className="pub-authors">Erik Ballesteros, Preston Rogers, Justin Jenkins, Kalind Carpenter, H. Harry Asada</p>
          <p className="pub-venue">International Journal of Robotics Research, 2026</p>

          <div className="pub-body">
            <div className="pub-text">
              <p>
                This article presents a methodology for the design of wearable robotic appendages, known as Supernumerary Robotic Limbs (SuperLimbs), specifically designed to assist astronauts during Extra-Vehicular Activities (EVAs) on the Moon.
              </p>
              <p>
                NASA has identified recovering from a fall as a high-risk process that requires effective countermeasures. Based on biomechanical analysis and human studies, this paper presents a comprehensive design optimization approach for SuperLimbs that can assist astronauts in recovering from falls and performing tasks in lunar gravity environments.
              </p>
              <p>
                The research includes human subject studies, biomechanical modeling, parametric design optimization, and prototype development and testing at NASA JPL.
              </p>
            </div>

            <div className="pub-visual">
              <img src="/pictures/superlimbs_fig7_design_prototype.png" alt="SuperLimbs Design and Prototype" />
              <p className="caption">CAD design and physical prototype testing</p>
            </div>
          </div>

          <a href="/docs/ballesteros-et-al-2026-design-of-supernumerary-robotic-limbs-for-the-augmentation-of-astronauts-performing-partial.pdf" target="_blank" rel="noopener noreferrer" className="pub-button">
            View Publication →
          </a>
        </div>
      </div>

    </div>
  );
};

export default Publications;
