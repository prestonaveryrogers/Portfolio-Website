import React from "react";
import '../styles/NasaProjects.css';

const NasaProjects = () => {
  return (
    <div>
      <header className="nasa-header">
        <img src="/pictures/nasa_projects_logo.png" className="nasa-logo" alt="NASA Projects" />
      </header>

      {/* High-Frequency Real-Time Control Project */}
      <div className="project-card">
        <div className="project-content">
          <h2>High-Frequency Real-Time Control for Space Robotics</h2>
          <p className="project-meta">Real-Time Systems · Embedded Control · NASA JPL</p>

          <div className="project-layout">
            <div className="project-text">
              <p>
                Developed a high-precision real-time control system achieving 10 kHz operation frequency, demonstrating microsecond-level timing accuracy for advanced robotic applications in space exploration.
              </p>

              <div className="project-highlights">
                <h3>Key Achievements:</h3>
                <ul>
                  <li><strong>6.7x Performance Increase:</strong> Modified JSD, Zephyr RTOS, and Fastcat to boost control frequency from 1.5 kHz to 10 kHz</li>
                  <li><strong>Precision Validation:</strong> Demonstrated microsecond-level LED timing synchronized with a high-speed spinning disk (390 RPM)</li>
                  <li><strong>Real-Time Integration:</strong> Implemented deterministic control on Polarfire Icicle FPGA with EtherCAT communication</li>
                  <li><strong>Space Applications:</strong> Enables precision manipulation critical for Mars Sample Return and lunar robotic operations</li>
                </ul>
              </div>

              <div className="project-highlights">
                <h3>System Demonstration:</h3>
                <ul>
                  <li>Dual-ring encoder system with 24 holes per ring</li>
                  <li>Synchronized LED timing validated via high-speed camera</li>
                  <li>Potentiometer-controlled velocity with encoder feedback</li>
                  <li>Real-time hardware integration via Beckhoff ADC modules</li>
                </ul>
              </div>
            </div>

            <div className="project-visual">
              <img src="/pictures/tnet_testbed_real.jpg" alt="Real-Time Control Testbed" />
              <p className="image-caption">Experimental testbed hardware setup</p>
            </div>
          </div>

          {/* Video Demos */}
          <div className="project-demos">
            <div className="demo-grid">
              <div className="demo-item">
                <h4>LED Timing Precision</h4>
                <p className="demo-description">
                  High-speed camera footage showing microsecond-accurate LED synchronization as disk holes pass by.
                </p>
                <div className="video-wrapper">
                  <video controls>
                    <source src="/videos/high_speed_leds_precise_2_0-002x_first30s.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="demo-item">
                <h4>Full System Demo</h4>
                <p className="demo-description">
                  Complete demonstration with real-time speed control via potentiometer (0-390 RPM).
                </p>
                <div className="video-wrapper">
                  <video controls>
                    <source src="/videos/high_speed_leds-demonstration.mov" type="video/quicktime" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default NasaProjects;
