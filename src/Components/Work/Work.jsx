import React from 'react'
import './Work.css'
import themeIcon from '../../assets/themeTitle.png'
import { workData } from '../../assets/workData'
import arrowIcon from '../../assets/arrow_icon.png'

const Work = () => {
  return (
    <div id='work' className='work'>
        <div className="work-title">
            <h1>My Latest Work</h1>
            <img src={themeIcon} alt="" />
        </div>
        <div className="work-container">
            {
                workData.map((work, index)=>{
                    return <img key={index} src={work.wImage} alt=""/>
                })
            }
        </div>
        <div className="work-showmore">
            <p>Show More</p>
            <img src={arrowIcon} alt="" />
        </div>
    </div>
  )
}

export default Work