import React from 'react'
import { About, Profiles, Contact, Footer, Gallery, Header, Intro,SignIn } from './container';
import { Navbar } from './components';
import './App.css';

const content = () => {
  return (
    <div>
       <Navbar />
    <Header/>
    <About/>
    </div>
  )
}

export default content
