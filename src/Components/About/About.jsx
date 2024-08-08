import React from 'react'
import './About.css'
import profileIcon from '../../assets/profile_icon.jpg'
import aboutTitle from '../../assets/themeTitle.png'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-me">
                <h1>About Me</h1>
                <img src={aboutTitle} alt="" />
            </div>
            <div className="about-section">
                <div className="left-section">
                    <img style={{ width: "150px" }} src={profileIcon} alt="" />
                </div>
                <div className="right-section">
                    <div className="desc">
                        <p>Versatile full stack web developer with expertise in both front-end and back-end technologies. Passionate about creating dynamic, user-centric web applications and optimizing performance across diverse platforms.</p>
                    </div>
                    <div className="skills">
                        <div className="my-skills">
                            <p>HTML & CSS</p><hr className='skill-html' />
                        </div>
                        <div className="my-skills">
                            <p>React JS</p><hr className='skill-react' />
                        </div>
                        <div className="my-skills">
                            <p>JavaScript</p><hr className='skill-js' />
                        </div>
                        <div className="my-skills">
                            <p>Node JS,<br /> Express JS</p><hr className='skill-NE' />
                        </div>
                        <div className="my-skills">
                            <p>MongoDB</p><hr className='skill-mongodb' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-achievements">
                <div className="achievement">
                    <h1>2+</h1>
                    <p>Years of Experience</p>
                </div>
                <hr />
                <div className="achievement">
                    <h1>10+</h1>
                    <p>Projects Compleated</p>
                </div>
                <hr />
                <div className="achievement">
                    <h1>6+</h1>
                    <p>Happy Clients</p>
                </div>
            </div>


        </div>
    )
}


export default About;