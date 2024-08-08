import React from 'react'
import './Services.css'
import bgIcon from '../../assets/themeTitle.png'
import arrowIcon from '../../assets/arrow_icon.png'
import { servicesData }  from '../../assets/services.js'

const Services = () => {
  return (
    <div id='services' className='services'>
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

    </div>
  )
}

export default Services