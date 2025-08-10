import React from "react";
import "./Hero.css";
// import profile_img from '../../assets/profile_img.svg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import ModelViewer from "../ModelViewer";
import RepelParticles from "../Particles/RepelParticles";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      {/* <ParticleCanvas /> */}
      <div className="parallax-wrapper">
        <div className="sky"></div>
        <div className="particle-overlay">
          <RepelParticles />
        </div>
        {/* <div className="moon"></div>
        <div className="clouds"></div>
        <div className="reflection"></div> */}
        <div className="main-content">
          {/* <img src={profile_img} alt="Hero" /> */}
          <h1 className="title">ALLISON LEE</h1>
          <h2>Game Designer & Programmer | Web Developer | 2D Artist </h2>
          <h2 className="education">
            Computer Science Games B.S. at University of Southern California
          </h2>
          <p>
            Passionate about storytelling and social impact, I thrive in
            creating experiences that blend technology, design, narrative, and
            programming. As previous Programming Lead and now Co-president of
            USC Open Alpha, I lead teams in developing and releasing original
            games every semester.
          </p>
          <p>
            Along with my pursuit of game and software development, I work
            part-time as a Python coding instructor, compete in hackathons and
            game jams, and tinker with web development. I also enjoy exploring
            AR/VR, computer vision, and physical hardware.
          </p>

          <div className="hero-action">
            {/* <div className="hero-connect">
              <AnchorLink className="anchor-link" offset={50} href="#contact">
                Connect With Me
              </AnchorLink>
            </div> */}
            <a
              href="https://drive.google.com/file/d/1mysaV-asHCwXbLOnrbqfj20_nGu3jmgF/view?usp=sharing"
              className="hero-resume"
            >
              See my resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
