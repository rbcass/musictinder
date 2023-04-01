import React from 'react'
import {images} from '../../constants';
import { Navbar } from '../../components';
import {useNavigate} from 'react-router-dom';
import { Component } from 'react';
import { Redirect } from "react-router";
import {Ticker} from '../../components';
import { useState } from 'react';
import {Match} from '../../container'
import axios from 'axios';
import './SignIn.css'
import { Link } from 'react-scroll';
//js file crashes the app lol
// import './SI.js'




const SignIn = () => {

  
// let navigate = useNavigate();
// const routeChange = () => {
//   let path = `Match`;
//   navigate(path);
// }

//redirect to match after submit
const reRoute =() =>{
  
  const navigate = useNavigate;
  navigate('/Match')
 
}


  //form data for backend
  //we can change the name
  
  const [formData, setFormData] = useState({
    //see if we need this
  "name": "",
  "type": "Musician",
  "genre": "Rock",
  "instrument": "Guitar",
  "url": "",
  "about": "",
  "pref_type": "Musician",
  "pref_genre": "Rock",
  "pref_instrument": "Guitar",
  "matches": []
  })




//backend re-direction
const handleSubmit = (e) => {
  e.preventDefault();
  //axios is a link to server side, we will send our data using axios
  axios.post('http://localhost:8000/submit-form', formData)
    .then((response) => {
      console.log(response);
      console.log(response.data)
      
    })
    .catch((error) => {
      console.log(error);
    });
};




//initialising values when there's a change
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


  return (
    
    <div className='SignUp' style=  {{background: `url(${images.sign})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',}}>
      {/**manually import navbar */}
      <div>
      <Navbar/>
      <Ticker/>
    </div>


      
      <h2>SiGN UP</h2>
      <form className='form' onSubmit={handleSubmit}>

 {/** input for photo */}
      
      
      <section>
        <h3>My profile:</h3>
        <section className='photo'>
          <input type={"url"} id="url"name="url" placeholder='url for photo' required={true} onChange={handleChange}/>
         <div></div>
        </section>
        {/** input for name  */}
      <label htmlFor='name'> Name: </label>
      <input id='name' type={"text"} name="name" placeholder='First Name'
      required={true} onChange={handleChange}/>

      

      {/** input for person type  */}
      <label htmlFor='type'> Identity: </label>
      
      <select  id='type' name='type' onChange={handleChange}>
        <option value={"Musician"}>Musician</option>
        <option value={"Engineer"}>Engineer</option>
        <option value={"Establishment"}>Establishment</option>
        <option value={"Band"}>Band</option>
      </select>
      

       {/** input for person genre  */}
      <label htmlFor='genre' > Genre: </label>
      <select  id='genre' name='genre' onChange={handleChange} >
        <option value={"Rock"}>Rock</option>
        <option value={"Pop"}>Pop</option>
        <option value={"Jazz"}>Jazz</option>
        <option value={"Blues"}>Blues</option>
      </select>

      {/** input for person instrument  */}
      <label htmlFor='instrument'> Instrument: </label>
      <select id='instrument' name='instrument' onChange={handleChange}>
        <option value={"Guitar"}>Guitar</option>
        <option value={"Voice"}>Voice</option>
        <option value={"Drum"}>Drum</option>
        <option value={"Bass"}>Bass</option>
        
      </select>

      {/**About profile desc */}
      <section></section>
      
      <label htmlFor='bio' > Bio: </label>
      <textarea id='bio' name='about' rows={3} type={"text"} required={false} placeholder="I am a rock drummer..." onChange={handleChange}
      />
   


      
      <div className='pref-content'>
      <h3>Preferences</h3>
         {/** input for person type  */}
      <label htmlFor='p_type'>Identity: </label>
      <select  id='p_type' name='pref_type' onChange={handleChange} >
        <option value={"Musician"}>Musician</option>
        <option value={"Engineer"}>Engineer</option>
        <option value={"Establishment"}>Establishment</option>
        <option value={"Band"}>Band</option>
      </select>

       {/** input for person genre  */}
      <label htmlFor='p_genre'> Genre: </label>
      <select  id='p_genre' name='pref_genre' onChange={handleChange} >
        <option value={"Rock"}>Rock</option>
        <option value={"Pop"}>Pop</option>
        <option value={"Jazz"}>Jazz</option>
        <option value={"Blues"}>Blues</option>
      </select>

      {/** input for person instrument  */}
      <label htmlFor='p_instrument'> Instrument: </label>
      <select id='p_instrument' name='pref_instrument' onChange={handleChange} >
        <option value={"Guitar"}>Guitar</option>
        <option value={"Voice"}>Voice</option>
        <option value={"Drum"}>Drum</option>
        <option value={"Bass"}>Bass</option>
        
      </select>
   
      </div>
        
      


      </section>

      <input type={"submit"} id="submit" />
      </form>
      {/**gifs! */}
      <img src={images.metal} alt="metal" className='metal'/>
      <img src={images.yuri} alt="yuri" className='yuri'/>
      {/* <button width='500px' onClick={reRoute()}>CLICK CLIKC</button> */}
      
    </div>

   
  )
}

export default SignIn
