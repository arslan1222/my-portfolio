import React, { useState } from "react";
import "./Services.css";
import { servicesData } from "../../assets/services.js";
import { motion } from "framer-motion";

const Services = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      id="services"
      className="services"
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <div className="services-title">
        <h2>My Services</h2>
      </div>
      <div className="services-container">
        {servicesData.map((service, index) => {
          return (
            <div key={index} className="format">
              <h2>{service.sName}</h2>
              <p className="lg-screen">
                {service.sDescription}
              </p>
              
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Services;
