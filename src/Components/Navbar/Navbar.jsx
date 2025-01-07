import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/navLogo.png'
import openIcon from '../../assets/open_icon1.png'
import coseIcon from '../../assets/crose_icon.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';




const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right = "-350px";
  }


  return (
    <div className='navbar'>
      
      <a href="#home"><img className='nav-logo' src={logo} alt="" /></a>
      <img className='nav-open' src={openIcon} onClick={openMenu} alt="" />

      <ul className='nav-menu' ref={menuRef}>
        <img className='nav-close' src={coseIcon} onClick={closeMenu} alt="" />
        <li><AnchorLink className='link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <hr /> : <></>}</li>
        <li><AnchorLink className='link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About</p></AnchorLink>{menu === "about" ? <hr /> : <></>}</li>
        <li><AnchorLink className='link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <hr /> : <></>}</li>
        <li><AnchorLink className='link' offset={50} href='#work'><p onClick={() => setMenu("work")}>My Work</p></AnchorLink>{menu === "work" ? <hr /> : <></>}</li>
        <li><AnchorLink className='link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact Me</p></AnchorLink>{menu === "contact" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='link' offset={50} href='#contact'>Let's Connect</AnchorLink></div>

    </div>
  )
}

export default Navbar;