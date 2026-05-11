import React from "react";
import ImageLightbox from '../components/ImageLightbox';
import '../styles/NasaProjects.css';

const NasaProjects = () => {
  return (
    <div className="nasa-projects-page">
      <header className="nasa-header">
        <img src={`${process.env.PUBLIC_URL}/pictures/nasa_projects_logo.png`} className="nasa-logo" alt="NASA Projects" />
      </header>

      {/* High-Frequency Real-Time Control Project */}
      <div className="nasa-project-card">
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

            <div className="project-visual smaller-image">
              <ImageLightbox
                src={`${process.env.PUBLIC_URL}/pictures/high_speed_control/tnet_testbed_real.jpg`}
                alt="Real-Time Control Testbed"
                caption="Experimental testbed hardware setup"
              />
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
                    <source src={`${process.env.PUBLIC_URL}/videos/high_speed_control/high_speed_leds_precise_2_0-002x_first30s.mp4`} type="video/mp4" />
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
                    <source src={`${process.env.PUBLIC_URL}/videos/high_speed_control/high_speed_leds-demonstration.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* High-Fidelity Actuator Model Project */}
      <div className="nasa-project-card">
        <div className="project-content">
          <h2>High-Fidelity Actuator Model for Robotic Autonomy in Space</h2>
          <p className="project-meta">MATLAB Simulink · Modeling & Simulation · NASA JPL · Mars Sample Return</p>

          <div className="project-layout">
            <div className="project-text">
              <p>
                The Sample Retrieval Lander's (SRL) seven-degree-of-freedom Sample Transfer Arm (STA) was a single point of failure for the Mars Sample Return mission — without it, sample tubes could not be transferred from the Perseverance rover to the Mars Ascent Vehicle. With Earth–Mars communication delays of 8–40+ minutes, direct teleoperation was impractical; the arm had to execute autonomously via onboard controllers. To ensure these autonomous motions would succeed before commanding real flight hardware, we developed a high-fidelity actuator model in MATLAB Simulink that captures dynamics most simulations idealize away.
              </p>

              <div className="project-highlights">
                <h3>Model Architecture:</h3>
                <p>The model is structured into three modular sub-models mirroring the real control system:</p>
                <ul>
                  <li><strong>Motor Dynamics (Plant):</strong> Models the electromechanical conversion (torque constant, cogging torque), rotor mechanics with Stribeck friction, gearbox torsional stiffness with a backlash deadband, and output shaft inertia/damping</li>
                  <li><strong>Motor Controller:</strong> A cascaded position–velocity–current controller with P (position), PI (velocity), and unity-gain current loops, plus back-calculation anti-windup to handle saturation</li>
                  <li><strong>Sensor Feedback:</strong> Models Hall sensor misplacement errors on velocity estimation and resolver noise with moving-average filtering on position measurement</li>
                </ul>
              </div>

              <div className="project-highlights">
                <h3>Design Philosophy:</h3>
                <ul>
                  <li><strong>Mission-Conservative:</strong> Damping parameters are tuned so the model intentionally underperforms real hardware — ensuring that manipulation sequences passing in simulation transfer to hardware with margin</li>
                  <li><strong>Parameterizable:</strong> Each actuator is fully described by three YAML files (controller, physical, toggles) enabling the same model to represent any actuator in the arm by swapping configuration</li>
                  <li><strong>Toggle-able Nonlinearities:</strong> Individual nonlinear effects (friction, backlash, cogging, sensor noise) can be enabled or disabled to trade accuracy for computation speed</li>
                </ul>
              </div>

              <div className="project-highlights">
                <h3>Validation:</h3>
                <p>
                  The model was validated against three physical actuators via Bode plot comparison. Both linear and nonlinear configurations consistently underpredicted hardware bandwidth across the tested frequency range — confirming the mission-conservative design goal.
                </p>
              </div>
            </div>

            <div className="project-visual">
              <ImageLightbox
                src={`${process.env.PUBLIC_URL}/pictures/actuator_model/model_high_level_usage.png`}
                alt="Actuator model integration in the robot arm V&V pipeline"
                caption="The actuator model within the larger robot arm simulation — desired joint trajectories go in, realistic actuator behavior comes out, allowing engineers to verify motion feasibility before execution on Mars"
              />
              <p className="image-caption">The actuator model within the larger robot arm simulation — desired joint trajectories go in, realistic actuator behavior comes out, allowing engineers to verify motion feasibility before execution on Mars</p>
            </div>
          </div>

          {/* Landing Gear Demo */}
          <div className="project-demos">
            <div className="demo-grid single-item">
              <div className="demo-item">
                <h4>Landing Gear Demo — Generalizability Beyond Space Robotics</h4>
                <p className="demo-description">
                  To demonstrate applicability beyond robotic arms, a simplified aircraft landing gear system was built in MATLAB Simscape with two actuators: a main actuator for extending the gear (high torque loads) and a locking actuator to secure it at full extension. Each actuator uses the same model structure but different YAML parameter files — differing primarily in gear ratio to reflect their distinct torque requirements. The video shows the main actuator tracking a desired position trajectory; it follows closely but with a peak tracking error of ~0.4 rad at maximum angular velocity, exactly the kind of realistic limitation the model is designed to expose.
                </p>
                <div className="video-wrapper">
                  <video controls>
                    <source src={`${process.env.PUBLIC_URL}/videos/actuator_model/aelg_model.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SuperLimbs Project */}
      <div className="nasa-project-card">
        <div className="project-content">
          <h2>SuperLimbs: Supernumerary Robotic Limbs for Astronaut Augmentation</h2>
          <p className="project-meta">Robotics · ROS2 · EtherCAT · NASA JPL · Artemis</p>

          <div className="project-layout">
            <div className="project-text">
              <p>
                SuperLimbs are wearable robotic appendages designed to augment astronauts during lunar Extra-Vehicular Activities. Unlike exoskeletons, they provide entirely new limbs with an independent kinematic structure. The high-priority use case: helping an astronaut recover from a fall — identified by NASA as a high-risk event during suited EVAs, where the bulk of a pressurized suit makes self-recovery exhausting or impossible. The prototype (SuperLimbs-T1.0) consists of two 4-DoF arms mounted on a backpack frame, powered by JPL EELS 2.0 actuators originally designed for a snake robot meant to explore Enceladus for signs of life.
              </p>
              <p>
                Featured in <a href="https://www.cnn.com/science/superlimbs-wearable-robotic-limbs-astronauts-hnk-spc/index.html" target="_blank" rel="noopener noreferrer">CNN</a> as a wearable robotic system that could serve future Artemis astronauts on the Moon.
              </p>

              <div className="project-highlights">
                <h3>My Contributions:</h3>
                <ul>
                  <li><strong>Actuator Assembly:</strong> Assembled the EELS 2.0 actuators (160:1 gear ratio, 400 Nm peak torque) — hardware originally built for a snake robot destined for Enceladus, repurposed for SuperLimbs</li>
                  <li><strong>Motor Driver Tuning:</strong> Tuned the cascade controller gains on the ELMO Platinum Twitter drivers — sequentially tuning current, velocity, and position loops for each actuator</li>
                  <li><strong>Wiring & Brakes:</strong> Handled system wiring via the 70V umbilical harness and verified brake functionality post-assembly</li>
                  <li><strong>Software & Controls Lead:</strong> Set up the full control stack using JPL's CASAH framework — from ROS2 commander modules down through Fastcat and JSD (EtherCAT drivers) to the ELMO Platinum hardware</li>
                  <li><strong>Visualization & Trajectory:</strong> Built the RVIZ backpack visualization for real-time joint state monitoring, and created CSV-based trajectory software allowing operators to specify sequences of full joint configurations</li>
                  <li><strong>Primary Operator:</strong> Served as the primary system operator during testing, including the post-fall recovery demonstrations with a 155 N mannequin load</li>
                </ul>
              </div>

              <div className="project-highlights">
                <h3>Results:</h3>
                <ul>
                  <li>Successfully demonstrated post-fall astronaut recovery with a weighted mannequin</li>
                  <li>Reduced human bracing contribution by ~55% at the kneeling pose</li>
                  <li>Power consumption remained below 30 W per actuator during operation</li>
                </ul>
              </div>
            </div>

            <div className="project-visual smaller-image">
              <ImageLightbox
                src={`${process.env.PUBLIC_URL}/pictures/superlimbs/superlimbs_team_photo.png`}
                alt="The B-Team: Erik Ballesteros, Preston Rogers, and Kalind Carpenter with the SuperLimbs prototype"
                caption="The 'B-Team' — Erik Ballesteros, Preston Rogers, and Kalind Carpenter with the SuperLimbs-T1.0 prototype"
              />
              <p className="image-caption">The "B-Team" — Erik Ballesteros, Preston Rogers, and Kalind Carpenter with the SuperLimbs-T1.0 prototype</p>
            </div>
          </div>

          {/* SuperLimbs Video */}
          <div className="project-demos">
            <div className="demo-grid single-item">
              <div className="demo-item">
                <h4>Post-Fall Recovery Demonstration</h4>
                <p className="demo-description">
                  SuperLimbs assisting an astronaut surrogate in recovering from a fall. The arms brace against the ground and push the wearer upright, dramatically reducing the physical effort required to stand in a bulky pressurized suit.
                </p>
                <div className="video-wrapper">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/byLhhDbOsq4"
                    title="SuperLimbs Post-Fall Recovery Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ borderRadius: '6px' }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* TYMPO Project */}
      <div className="nasa-project-card">
        <div className="project-content">
          <h2>TYMPO: Tethered Power for Lunar Mobility</h2>
          <p className="project-meta">ROS2 · Control Systems · CASAH · NASA JPL · Lunar Exploration</p>

          <div className="project-layout">
            <div className="project-text">
              <p>
                TYMPO (Tethered Power Systems for Lunar Mobility and Power Transmission) is a tether-based power transmission system designed to deliver power and communications over distances up to 10 km on the lunar surface. The primary use case: enabling rovers to explore permanently shadowed regions — lunar craters, pits, caves, and lava tubes — where solar power is unavailable. A stationary power source (such as a lander with fission or solar generation) remains in sunlight while the tethered rover ventures into darkness, maintaining power and communication through the tether.
              </p>
              <p>
                I contributed to the prototype rover, specifically developing the Tether Management System (TMS) — the autonomous system that maintains constant tether tension as the rover drives toward or away from the power source.
              </p>

              <div className="project-highlights">
                <h3>Tether Management System (TMS):</h3>
                <p>The TMS autonomously controls tether tension and placement during rover operation:</p>
                <ul>
                  <li><strong>Tension Sensing:</strong> A potentiometer-based lever measures real-time tether tension and outputs an analog voltage signal</li>
                  <li><strong>Active Spooling Control:</strong> A PD controller takes the tension measurement as input and commands the spool actuator velocity (clockwise or counterclockwise) to maintain constant tension — automatically spooling in as the rover approaches the lander, and spooling out as it moves away</li>
                  <li><strong>Level Winder System:</strong> As the spool rotates, a level winder translates vertically to ensure even tether placement across the spool width, preventing tangles or uneven winding</li>
                  <li><strong>Real-Time Control Logic:</strong> I wrote the software that synchronizes the level winder position with the spool's angular position, ensuring the level winder responds immediately to spool rotation</li>
                </ul>
              </div>

              <div className="project-highlights">
                <h3>My Contributions:</h3>
                <ul>
                  <li><strong>Component Selection:</strong> Specified and integrated hardware to read the analog tension sensor and command the spool and level winder actuators</li>
                  <li><strong>PD Controller Implementation:</strong> Designed and tuned the proportional-derivative controller that converts tension error into desired spool velocity</li>
                  <li><strong>Level Winder Synchronization:</strong> Developed the control logic to position the level winder based on real-time spool angular position feedback</li>
                  <li><strong>CASAH Integration:</strong> Built the system on JPL's CASAH framework (ROS2-based) with user commands for calibration, enabling/disabling the tension controller, and manual override</li>
                  <li><strong>Telemetry & Visualization:</strong> Configured PlotJuggler to monitor tension sensor readings, commanded vs. achieved spool velocity, and level winder position in real time</li>
                </ul>
              </div>

              <div className="project-highlights">
                <h3>Testing & Validation:</h3>
                <ul>
                  <li>Outdoor field test at JPL Mesa deploying approximately 300 meters of the 1 km tether, validating system performance over extended distances</li>
                  <li>Rover powered via high-voltage DC tether during autonomous operation</li>
                  <li>System successfully maintained tension autonomy throughout all test scenarios</li>
                </ul>
              </div>
            </div>
          </div>

          {/* TYMPO Demonstrations */}
          <div className="project-demos">
            <div className="demo-grid">
              <div className="demo-item">
                <h4>Mesa Field Test</h4>
                <p className="demo-description">
                  TYMPO rover during outdoor field testing at JPL Mesa with large amount of tether already paid out. The rover is powered via high-voltage DC tether and autonomously manages tension as it traverses the terrain.
                </p>
                <div className="video-wrapper">
                  <video controls>
                    <source src={`${process.env.PUBLIC_URL}/videos/tympo/tympo_tms_payout_outdoors.MP4`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>

              <div className="demo-item">
                <h4>TYMPO Robot Team</h4>
                <p className="demo-description">
                  The robot team — Preston Rogers, Travis Brown, and Clara MacFarland — responsible for the TMS, power systems, and rover motion control software.
                </p>
                <ImageLightbox
                  src={`${process.env.PUBLIC_URL}/pictures/tympo/tympo_robot_team.jpeg`}
                  alt="TYMPO robot team: Preston Rogers, Travis Brown, and Clara MacFarland"
                  caption="TYMPO robot team — Preston Rogers, Travis Brown, and Clara MacFarland"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SRL Lander Mechanical — BlueBox Actuator Testing */}
      <div className="nasa-project-card">
        <div className="project-content">
          <h2>SRL Lander Mechanical: BlueBox Actuator Test Software</h2>
          <p className="project-meta">ROS2 · EtherCAT · Fastcat · JSD · NASA JPL · Mars Sample Return</p>

          <div className="project-layout">
            <div className="project-text">
              <p>
                The Sample Retrieval Lander required rigorous ground testing of every actuator before flight. The "BlueBox" is JPL's standardized avionics box — containing Elmo motor controllers, Beckhoff I/O modules, and power converters on an EtherCAT bus — used across Mars 2020 testbeds since 2014. Working with the Lander Mechanical (LMech) team, I repurposed spare BlueBoxes and built high-level test software enabling LMech engineers and Lockheed Martin to characterize actuators for the SRL's Orbiting Sample Access Door, Mars Launch System bay door, and landing gear — without needing to understand the underlying EtherCAT architecture.
              </p>

              <div className="project-highlights">
                <h3>Software Stack — The Motor Primitive Node:</h3>
                <p>I authored the "motprim" ROS2 node: a high-level behavior module built on JPL's FCAT (ROS2 wrappers on Fastcat) that exposed simple service commands to operators while managing the full complexity of the hardware underneath.</p>
                <ul>
                  <li><strong>Voltage-Based Motor Control:</strong> Implemented open-loop voltage commands by setting max current (via V=IR) and adjusting PWM duty cycle — enabling operators to simply specify a desired voltage and target position</li>
                  <li><strong>Tiered Command Architecture:</strong> Tier 0 for atomic operations (brake open/close, run voltage, set position) and Tier 1 for compound motions (run until contact switch, run until position, run until stall, run for duration)</li>
                  <li><strong>State Machine & Fault Handling:</strong> Motor states (initializing, inactive, active) and fault states (propagated from Fastcat or triggered by high-level conditions like over-temperature) with reset capability</li>
                  <li><strong>Contact Switch Integration:</strong> Hall-sensor-based contact switches for actuators requiring run-until-trip behavior (e.g., door mechanisms at end-of-travel)</li>
                  <li><strong>Custom Telemetry:</strong> Commanded voltage, three-node thermal model temperatures, and contact switch states streamed as ROS2 messages and visualized in PlotJuggler</li>
                </ul>
              </div>

              <div className="project-highlights">
                <h3>Low-Level Contributions:</h3>
                <ul>
                  <li><strong>New JSD/Fastcat Drivers:</strong> Wrote drivers and device classes for Beckhoff EL1008 (8-channel digital input for contact switches) and EL2809 (16-channel digital output for heater MOSFET gates)</li>
                  <li><strong>Motor Driver Tuning:</strong> Used Elmo Application Studio to tune non-volatile parameters on the Elmo Platinum controllers — commutation type, current limits, speed limits, and cascade loop gains</li>
                  <li><strong>Three-Node Thermal Model Debugging:</strong> Resolved bugs in Fastcat's internal motor temperature model that produced inaccurate temperature readings, ensuring proper fault triggering at thermal limits</li>
                  <li><strong>Hardware Debugging:</strong> Opened BlueBoxes, compared internal PCBs against schematics, and soldered jumper wires to fix issues (e.g., a missing resistor causing the electrical fault PCB to always trip)</li>
                </ul>
              </div>

              <div className="project-highlights">
                <h3>Outcome:</h3>
                <p>
                  Delivered a turnkey system where LMech engineers and Lockheed Martin operators could characterize M32 (Acadia) and M45 (Saguaro) flight actuators — finding motor constants, startup/steady-state behavior, speed-torque curves, and back-EMF characteristics — using simple text commands without any knowledge of EtherCAT, Fastcat, or the underlying driver stack.
                </p>
              </div>
            </div>

            <div className="project-visual side-by-side">
              <div>
                <ImageLightbox
                  src={`${process.env.PUBLIC_URL}/pictures/srl_lander_mech_project/bluebox_exterior.png`}
                  alt="JPL BlueBox — standardized avionics box for actuator testing"
                  caption="The BlueBox: JPL's standardized EtherCAT avionics system containing Elmo controllers, Beckhoff I/O, and power distribution"
                />
                <p className="image-caption">The BlueBox: JPL's standardized EtherCAT avionics system containing Elmo controllers, Beckhoff I/O, and power distribution</p>
              </div>
              <div>
                <ImageLightbox
                  src={`${process.env.PUBLIC_URL}/pictures/srl_lander_mech_project/bluebox_internals.png`}
                  alt="BlueBox internals showing Motor Channel PCBs, Distribution PCB, Beckhoff modules, and Elmo controllers"
                  caption="BlueBox internals — Motor Channel PCBs, Distribution PCB, Beckhoff modules, and ELMO controllers"
                />
                <p className="image-caption">BlueBox internals — Motor Channel PCBs, Distribution PCB, Beckhoff modules, and ELMO controllers</p>
              </div>
            </div>

            <div className="project-visual" style={{ marginTop: '30px' }}>
              <ImageLightbox
                src={`${process.env.PUBLIC_URL}/pictures/srl_lander_mech_project/three_node_thermal_model_telemetry.jpg`}
                alt="PlotJuggler telemetry showing commanded current and three-node thermal model temperatures"
                caption="PlotJuggler telemetry showing commanded current and three-node thermal model temperatures"
              />
              <p className="image-caption">PlotJuggler telemetry: commanded current (top) and three-node thermal model temperatures rising during motor operation (bottom)</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default NasaProjects;
