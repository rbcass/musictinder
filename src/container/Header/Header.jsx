import React from 'react';
import Chatbot from "react-chatbot-kit";

import config from "./config";
import MessageParser from "./messageParser";
import ActionProvider from "./ActionProvider";
import {images} from '../../constants';
import './Header.css';

//this element is for the "homepage", we are going to try an implement scroll

//scroll bug at home element (scrolls downwards too much when home is clicked)
const Header = () => {

  {/**function to check element */}
  const clickHandle = () =>{
    console.log('clicked')
  }

  return(
  <div className='header' id="home">
    <h1 className='title'>JAM-MATCH</h1>
    
    
    <div className='headerImg'>
       
      

    </div>
    <div className='headerInfo'>
      <h1 className='subtitle'>One match away from a world tour...</h1>
      <a href="\SignIn"><button className='mainbutt' onClick={clickHandle}>Match Me!</button></a>

</div>
{/**welcome element. will decide whether to delete or save */}
<img src={images.guitar} className="img" alt = "guitargif"/>  
{/* 
<Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/> */}
  </div>
  
)};

export default Header;
