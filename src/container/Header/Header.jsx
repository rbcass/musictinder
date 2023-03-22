import React from 'react';

import {images} from '../../constants';
import './Header.css';

//this element is for the "homepage", we are going to try an implement scroll

//scroll bug at home element
const Header = () => (

  
  <div className='header' id="home">
    <h1 className='title'>JAM-MATCH</h1>
    <div className='headerImg'>
       
      

    </div>
    <div className='headerInfo'>
      <h1 className='subtitle'>One match away from a world tour...</h1>
      <a href="#"><button className='mainbutt'>Match Me!</button></a>

</div>
{/**welcome element. will decide whether to delete or save */}
<img src={images.guitar} className="img" alt = "guitargif"/>  
  </div>
);

export default Header;
