import React from 'react'
import './Services.css'
import bgIcon from '../../assets/themeTitle.png'
import arrowIcon from '../../assets/arrow_icon.png'
import { servicesData }  from '../../assets/services.js'
import { motion } from "framer-motion";


const Services = () => {
  return (
    <motion.div id='services' className='services' 
    
    initial={{opacity: 0, x: -200}}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        viewport={{once: true}}
    >
        <div className="services-title">
            <h1>My Services</h1>
            <img src={bgIcon} alt="" />
        </div>
        <div className="services-container">
            {servicesData.map((service, index)=>{
                return <div key={index} className="format">
                    <h3>{service.sNo}</h3>
                    <h2>{service.sName}</h2>
                    <p>{service.sDescription}</p>
                    <div className="readmore">
                        <p>Read More</p>
                        <img src={arrowIcon} alt="" />
                    </div>
                </div>
            })}
        </div>

    </motion.div>
  )
}

export default Services