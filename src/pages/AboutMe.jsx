import React from 'react';
import ImageLightbox from '../components/ImageLightbox';
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* Background image section */}
      <div className="about-me-hero">
        <div className="about-me-text">About Me</div>
      </div>

      {/* Content below the image */}
      <div className="about-me-content">

        {/* Main Bio */}
        <section className="bio-section">
          <p className="lead-paragraph">
            From building skate ramps under highways in undergrad to van life-ing in grad school, I've always applied my own creative flair of engineering. Resulting from a belief that engineering is more of an outlook than a career path, my career has brought joy and feelings of fulfillment to every aspect of my life.
          </p>

          <div className="story-with-image">
            <div className="story-text">
              <p>
                This philosophy is best exemplified by the time I blended two parts of my life: surfing and technology. During undergrad at UC Irvine, I co-founded <strong>Waterborne Skateboards</strong>, a surf/skate startup where I served as both a team rider and 3D designer. Graying the line between work and play taught me that you can connect various forms of craftsmanship in spectacular ways.
              </p>
              <p>
                This revelation is what gravitated me to the field of robotics during my transition from UCI to Stanford University. Amid the late nights studying and early mornings surfing, I honed the skills that would propel me into the world of autonomous systems.
              </p>
            </div>
            <div className="story-visual">
              <ImageLightbox
                src={`${process.env.PUBLIC_URL}/pictures/waterborne_skating.gif`}
                alt="Waterborne skateboarding in action"
                caption="Waterborne Skateboards in action"
              />
              <p className="image-caption">Waterborne Skateboards in action</p>
            </div>
          </div>

          <p>
            After graduating from Stanford, I joined <strong>Dexterity AI</strong>, where I automated repetitive tasks to free up people to do what they do best — be creative human beings. 
          </p>

          <p>
            Now, at <strong>NASA's Jet Propulsion Laboratory</strong>, I strive to see how far our creativity will take us.
          </p>
        </section>

        {/* Education */}
        <section className="education-section">
          <h2>Education</h2>
          <div className="edu-item">
            <h3>Stanford University</h3>
            <p className="degree">M.S. Electrical Engineering</p>
            <p className="specialization">Controls and Optimization · 2021</p>
          </div>
          <div className="edu-item">
            <h3>University of California, Irvine</h3>
            <p className="degree">B.S. Electrical Engineering</p>
            <p className="specialization">Digital Signal Processing · 2019</p>
          </div>
        </section>

        {/* Experience */}
        <section className="experience-section">
          <h2>Professional Experience</h2>

          <div className="exp-item">
            <div className="exp-header">
              <h3>Robotics Technologist</h3>
              <span className="exp-duration">2023 – Present</span>
            </div>
            <p className="exp-company">NASA JPL · Pasadena, CA</p>
            <p className="exp-description">
              Developing robotic systems for space exploration missions, including actuator modeling for Mars Sample Return and design optimization for astronaut-assistive wearable robots for lunar operations.
            </p>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <h3>Robotics Engineer</h3>
              <span className="exp-duration">2021 – 2023</span>
            </div>
            <p className="exp-company">Dexterity AI · Redwood City, CA</p>
            <p className="exp-description">
              Engineered autonomous robotic systems for warehouse automation, focusing on manipulation, perception, and human-robot collaboration to enhance operational efficiency.
            </p>
          </div>

          <div className="exp-item">
            <div className="exp-header">
              <h3>Electrical Engineering Intern</h3>
              <span className="exp-duration">2019</span>
            </div>
            <p className="exp-company">Glidewell Dental · Newport Beach, CA</p>
            <p className="exp-description">
              Contributed to the development of dental manufacturing automation systems and quality control processes.
            </p>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="interests-section">
          <h2>Beyond Robotics</h2>
          <p>
            When I'm not working on robots, you'll find me chasing waves along the California coast, snowboarding in the Sierras, or tinkering with skateboards. I believe that the best engineers draw inspiration from diverse experiences — whether that's understanding fluid dynamics through surfing or learning about balance and control systems through skating.
          </p>
          <p>
            My journey from building DIY skate ramps to designing robots for Mars has taught me that creativity knows no bounds. Engineering isn't just about solving technical problems; it's about imagining what's possible and having the courage to build it.
          </p>
        </section>

      </div>
    </div>
  );
};

export default AboutMe;
