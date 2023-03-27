import React from 'react'
import {images} from '../../constants';
import { Navbar } from '../../components';
import {Ticker} from '../../components';

import './SignIn.css'
//js file crashes the app lol
// import './SI.js'

const SignIn = () => {

  //navbar does not appear on Sign Up page!
  const nav =() =>{
    <div>
      <Navbar/>
    </div>
  }
  return (
    
    <div className='SignUp'>
      {/**manually import navbar */}
      <div>
      <Navbar/>
      <Ticker/>
    </div>
      
      <h2>SiGN UP</h2>
      <form className='form'>

 {/** input for photo */}
        <section className='photo'>
          <input type={"url"} name="photo" required={true}/>
         <div></div>
        </section>
      
      <section>
        <h3>My profile:</h3>
        {/** input for name  */}
      <label htmlFor='name'> Name: </label>
      <input id='name' type={"text"} name="name" placeholder='First Name'
      required={true}>

      </input>

      {/** input for person type  */}
      <label htmlFor='type'> Identity: </label>
      
      <select  id='type' name='type' >
        <option value={"Musician"}>Musician</option>
        <option value={"Engineer"}>Engineer</option>
        <option value={"Establishment"}>Establishment</option>
        <option value={"Band"}>Band</option>
      </select>
      

       {/** input for person genre  */}
      <label htmlFor='genre'> Genre: </label>
      <select  id='genre' name='genre' >
        <option value={"Rock"}>Rock</option>
        <option value={"Pop"}>Pop</option>
        <option value={"Jazz"}>Jazz</option>
        <option value={"Blues"}>Blues</option>
      </select>

      {/** input for person instrument  */}
      <label htmlFor='instrument'> Instrument: </label>
      <select id='instrument' name='instrument' >
        <option value={"Guitar"}>Guitar</option>
        <option value={"Voice"}>Voice</option>
        <option value={"Drum"}>Drum</option>
        <option value={"Bass"}>Bass</option>
        
      </select>

      {/**About profile desc */}
      <section></section>
      
      <label htmlFor='bio' > Bio: </label>
      <textarea id='bio' name='bio' rows={3} type={"text"} required={"false"} placeholder="I am a rock drummer..."
      />
   


      
      <div className='pref-content'>
      <h3>Preferences</h3>
         {/** input for person type  */}
      <label htmlFor='p_type'>Identity: </label>
      <select  id='p_type' name='pref_type' >
        <option value={"Musician"}>Musician</option>
        <option value={"Engineer"}>Engineer</option>
        <option value={"Establishment"}>Establishment</option>
        <option value={"Band"}>Band</option>
      </select>

       {/** input for person genre  */}
      <label htmlFor='p_genre'> Genre: </label>
      <select  id='p_genre' name='pref_genre' >
        <option value={"Rock"}>Rock</option>
        <option value={"Pop"}>Pop</option>
        <option value={"Jazz"}>Jazz</option>
        <option value={"Blues"}>Blues</option>
      </select>

      {/** input for person instrument  */}
      <label htmlFor='p_instrument'> Instrument: </label>
      <select id='p_instrument' name='pref_instrument' >
        <option value={"Guitar"}>Guitar</option>
        <option value={"Voice"}>Voice</option>
        <option value={"Drum"}>Drum</option>
        <option value={"Bass"}>Bass</option>
        
      </select>
   
      </div>
        
      


      </section>

      <input type={"submit"} id="submit"/>
      </form>
      {/**gifs! */}
      <img src={images.metal} alt="metal" className='metal'/>
      <img src={images.yuri} alt="yuri" className='yuri'/>
      
    </div>

   
  )
}

export default SignIn
