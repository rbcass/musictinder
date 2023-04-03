import React from 'react';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";
//** react-icons installed,  */
import {GiHamburgerMenu} from 'react-icons/gi';
import {GiGuitarBassHead} from 'react-icons/gi';

import images from '../../constants/images'

import './Navbar.css';

/** NavBar component  */

const Navbar = () => {

  {/**function for menu overlay toggle thing! */}
  const[toggleMenu, setToggleMenu] = useState(false);

  return(
  <nav className='navbar'>
    <div className="logo">
      <img src = {images.jam_match}/>
    </div>
    <ul className='navLinks'>
      <li >
      <Link 
             activeClass="active" 
            to="home" 
           spy={true} 
           smooth={true} 
           duration={500}>
            Home
           </Link>
           </li>
  

      <li>
      <Link 
             activeClass="active" 
            to="aboutID" 
           spy={true} 
           smooth={true} 
           duration={500}>
            About</Link></li>
     
     <li>
       <Link
       activeClass='active'
      to="lineP" 
           spy={true} 
           smooth={true} 
           duration={500}
       >Profiles</Link></li>
      <li className='sans'><a href="#">Blog</a></li>
      <li className='sans'><a href="#">Contact</a></li>
      
    </ul>
    {/** seperate section for login section*/}
    <div className='login'>
      {/**we can change this to RouterLink maybe */}
      <a href="SignIn" className='sans'>Log-In / Sign-Up</a>
    </div>
     
     {/**for better accessibility, a shrink menu should be added, so when people are using mobile/smaller screen the menu/navbar still appears  */}

      <div className='shrink'>
        <GiHamburgerMenu color='#fff' fontSize={25} onClick={() => setToggleMenu(true)}/>
        {/**this item is the overlay menu itself */}

      {/**logic = if toggle menu is true then elements are shown*/}
      {toggleMenu && (
      <div className='shrinkOverlay'>
        <GiGuitarBassHead fontSize={25} className="overlayIcon" onClick={() => setToggleMenu(false)}/>
        <ul className='shrinkNavLinks'>
      <li className='sans'><a href="#">Home</a></li>
      <li className='sans'><a href="#">About</a></li>
      <li className='sans'><a href="#">Profiles</a></li>
      <li className='sans'><a href="#">Blog</a></li>
      <li className='sans'><a href="#">Contact</a></li>
      
    </ul>
      </div>
      )}

      </div>

      

  </nav>
);
}

export default Navbar;
