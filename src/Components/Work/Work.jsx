import React from "react";
import "./Work.css";
import themeIcon from "../../assets/themeTitle.png";
import { workData } from "../../assets/workData";
import arrowIcon from "../../assets/arrow_icon.png";
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
        <h1>My Latest Work</h1>
        <img src={themeIcon} alt="" />
      </div>
      <div className="work-container">
        {workData.map((work, index) => {
          return (
            <a
              key={index}
              href={work.wLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={work.wImage} alt={work.wName} />
            </a>
          );
        })}
      </div>
      <div className="work-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="" />
      </div>
    </motion.div>
  );
};

export default Work;
