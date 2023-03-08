import "./Navbar.css" 
import {Link} from 'react-router-dom'
import React, { useState } from "react";
const Navbar=()=> {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div
    className={
      showMediaIcons ? "menu-link mobile-navbar" : "navbar"
    }>
                <ul className='nav-links'>
                    <Link to='/' className='home'><li>Home</li></Link>
                    <Link to='about' className='about'><li>About</li></Link>
                    <Link to='mission' className='mission'><li>Mission</li></Link>
                    <Link to='planned' className='planned'><li>Planned-Mission</li></Link>
                    <Link to='contact' className='contact'><li>Contact</li></Link>
                </ul>
                <div className="icons">
                {/* <div class="fas fa-bars" id="menu-btn" onClick={() => {
          setShowMediaIcons(!showMediaIcons)
        }}></div> */}
                </div>
        </div>
  )
}
export default Navbar
