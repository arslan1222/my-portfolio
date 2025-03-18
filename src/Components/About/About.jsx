import React from "react";
import "./About.css";
import profileIcon from "../../assets/p_icon.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="about"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="about-me">
        <h2>About Me</h2>
      </div>
      <div className="about-desc">
        <p>
          <span className="lg-screen">
            My position as a graphic designer is to make eye catching successful
            designes withe the aim of having client goals and brand nees.
          </span>
          <br />
          Highly skilled and creating graphic designer with many years of
          expeirence poducing impressive designs that satisfy a wide range of clients demands.
        </p>
      </div>
      <div className="about-section">
        <div className="left-section">
          <img className="skill-img" src={profileIcon} alt="" />
        </div>
        <div className="right-section">
          <div className="desc">
            <p>
              Professional in making of design on industrial software:  
            </p>
          </div>
          <div className="skills">
            <div className="my-skills">
              <p>CorelDraw</p>
              <hr className="corel-draw" />
            </div>
            <div className="my-skills">
              <p>Photoshop</p>
              <hr className="photoshop" />
            </div>
            <div className="my-skills">
              <p>Illustrator</p>
              <hr className="illustrator" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-achievements">
        <div className="achievement">
          <h1>5+</h1>
          <p>Years of Experience</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
        <div className="achievement">
          <h1>10+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
