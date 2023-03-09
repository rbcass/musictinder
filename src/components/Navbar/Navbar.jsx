import React from 'react';
//** react-icons installed,  */
import {GiHamburgerMenu} from 'react-icons/gi';
import {MDOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images'

import './Navbar.css';

/** NavBar component  */

const Navbar = () => (
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
        <GiHamburgerMenu color='#fff' fontSize={25} onClick={() => {}}/>
      </div>


  </nav>
);

export default Navbar;
