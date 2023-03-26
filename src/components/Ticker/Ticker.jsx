import React from 'react';
import './Ticker.css';

//to make the pages less boring I will try to implement a ticker


const Ticker = () => {
  return (
    <div className='ticker-container'>
        <div className='ticker'>
            {/**each line in the ticker should have its own element */}
            <div className='tline'>Jam-Match is free of preservatives 
            &nbsp; &nbsp; &nbsp;
               </div>
            <div className='tline'>Stop asking for our autographs 
            &nbsp; &nbsp; &nbsp;
               </div>
            <div className='tline'>Voted best website by 3 people 
            &nbsp; &nbsp; &nbsp;
               </div>
        </div>
      
    </div>
  )
}

export default Ticker
