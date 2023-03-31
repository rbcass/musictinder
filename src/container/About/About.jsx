import React from 'react';
import {images} from '../../constants';
import './About.css';

const About = () => (
  <div className='about' id='aboutID'>
    <hr className='line'/>
    <div className='styl'   style=  {{background: `url(${images.about})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',}}>
    <div 
    className='aboutInfo_flex__center'>
        <h1 className='tit' >†  ABOUT  †</h1>
        &nbsp;
        <h2 className='flip'>Loading.. loading...</h2>
      </div>
     
    
      
      {/* <img src={images.smoke} alt="smoke" className='imgAb'/> */}
      {/* <h2 className='sidetext'>matchmematchmematchmematchmematchme</h2> */}
      <div className='test'>
      
      
     <h3 id='aboutText'>You tell us, we match
      <br></br>We know how important finding the right members are
      <br></br>We do not sell your data to third parties
      <br></br>Happy matching
     </h3>
        &nbsp;
        &nbsp;
        &nbsp;
      </div>
      &nbsp;
      &nbsp;
      &nbsp;
      </div>
      
  </div>
  
);

export default About;
