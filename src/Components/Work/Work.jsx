import React from "react";
import "./Work.css";
import { workData } from "../../assets/workData";
import { motion } from "framer-motion";


const Work = () => {
  return (
    <motion.div
      id="work"
      className="work"
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="work-title">
        <h2>My Latest Work</h2>
      </div>
      <div className="work-container">
        {workData.map((work, index) => {
          return (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.wImage} />
            </a>
          );
        })}
      </div>

    </motion.div>
  );
};

export default Work;
