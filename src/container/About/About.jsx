import React from 'react';
import {images} from '../../constants';
import './About.css';

const About = () => (
  <div className='about' id='aboutID'>
    <hr className='line'/>
    <div className='aboutInfo_flex__center'>
        <h1>†  ABOUT  †</h1>
      </div>
      <img src={images.smoke} alt="smoke" className='imgAb'/>
      <div className='test'>
     <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </h2>
        
      </div>
    
  </div>
  
);

export default About;
