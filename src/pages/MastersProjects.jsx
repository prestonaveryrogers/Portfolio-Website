import React from "react";
import '../styles/MastersProjects.css';

const MastersProjects = () => {
  return (
    <div>
      <header className="masters-header">
        <img src="/pictures/masters_projects_logo.png" className="masters-logo" alt="Masters Logo" />
      </header>

      {/* Convex Heuristics Project */}
      <div className="project-container">
        <div className="project-description">
          <h2>Convex Heuristics for Limb Placement and Navigation</h2>
          <p>
          One of the contemporary challenges in robotic locomotion
is the efficient calculation of the movements necessary both for
limb collocation and navigation, such that the agent can react
to its environment and effectively maneuver to a target location
with minimal or no guidance from a human operator. This
project casts this as two optimization problems: the problem
of tracing a path between two locations while dodging an
obstacle is cast as a cost minimization problem with convex
approximations of nonconvex constraints, while the problem
of calculating the movements necessary to move a limb to
a certain position and take a step is also structured as a
cost minimization problem with quasilinearized dynamics. The
combination of these two approaches allows the agent to use
principles of cost minimization to model its environment and
thus react to its surroundings, using only details of its goal
and environmental geometry to inform its decisions.
          </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/pictures/convex_heuristics.png" alt="Convex Heuristics Picture" />
          <a href="/docs/Convex_Heuristics_Paper.pdf" target="_blank" rel="noopener noreferrer">
            <button className="read-more-button">READ MORE</button>
          </a>
        </div>
      </div>

      {/* Robot Arm Project */}
      <div className="project-container">
        <div className="project-description">
          <h2>Rigid Body Control Via Muscle Activity Interpretation</h2>
          <p>
          Commonly the prosthetics given to individuals post-amputation do not provide 
            the needed dexterity to carry out everyday activities. And this loss of 
            dexterity diminishes the overall quality of life to the individual. This project 
            works to resolve this by providing an AI-based solution that can give back 
            much of this dexterity in a non-invasive way by making use of electroencephalograms (EEGs) and machine-learning classification.
          </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/pictures/robot_arm_ml.png" alt="Machine learning classification" />
          <a href="/docs/Robot_Arm_Paper.pdf" target="_blank" rel="noopener noreferrer">
            <button className="read-more-button">READ MORE</button>
          </a>
        </div>
      </div>

      {/* Neural Network Copycat Project */}
      <div className="project-container">
        <div className="project-description">
          <h2>A DNN with Confidence Measure as an MPC Copycat</h2>
          <p>
          The project consisted of the implementation of three parts:
the implementation of a Model Predictive Controller to solve
a constrained navigation problem, the use of that controller
to train a neural network to imitate its behavior, and the
conjunction of this network with tools used to classify the
reliability of the network output. The aim of the project is
to use a neural network to reduce the amount of computation
used to solve a stochastic problem, particularly the type of
problem which would regularly require multiple iterations for
a solution (e.g. non-convex problems), while being able to
ensure during deployment that the outputs of the controller
are reliable. The results achieved so far have shown that the
implemented MPC optimizer can reliably solve the specified
problem, that the neural network can learn using information
from the solver as training and validation datasets, and that
the added tools can estimate a measure of confidence (using
out-of-distribution detection) for each prediction so, if there
is a low degree of confidence in network predictions for a
particular situation, the original solver can be called upon to
solve the problem.
          </p>
        </div>
        <div className="project-image-wrapper">
          <img src="/pictures/neural_network_copycat.png" alt="Neural Network Copycat" />
          <a href="/docs/Neural_Network_Copycat_Paper.pdf" target="_blank" rel="noopener noreferrer">
            <button className="read-more-button">READ MORE</button>
          </a>
        </div>
      </div>








      


    </div>
  );
};

export default MastersProjects;
