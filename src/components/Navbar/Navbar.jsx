import React from 'react';
import { useState } from 'react';
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
      <li className='sans'><a href="#">Home</a></li>
      <li className='sans'><a href="#">About</a></li>
      <li className='sans'><a href="#">Profiles</a></li>
      <li className='sans'><a href="#">Blog</a></li>
      <li className='sans'><a href="#">Contact</a></li>
      
    </ul>
    {/** seperate section for login section*/}
    <div className='login'>
      <a href="#" className='sans'>Log-In / Sign-Up</a>
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
