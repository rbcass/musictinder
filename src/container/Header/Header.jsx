import React from 'react';

import {images} from '../../constants';
import {headerInfo} from '../../components';
import './Header.css';

//this element is for the "homepage", we are going to try an implement scroll
const Header = () => (
  <div className='header' id="home">
    <h1 className='title'>JAM-MATCH</h1>
    <div className='headerImg'>
      {/* <img src={images.guitar} alt = "guitargif"/> */}
      

    </div>
    <div className='headerInfo'>
      <h1 className='subtitle'>One match away from a world tour...</h1>
      <a href="#"><button className='mainbutt'>Match Me!</button></a>

</div>
  </div>
);

export default Header;
