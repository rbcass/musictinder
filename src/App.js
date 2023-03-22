import React from 'react';

/* importing all the sections of the website!*/ 
import { About, Profiles, Contact, Footer, Gallery, Header, Intro,SignIn } from './container';
import { Navbar } from './components';
import './App.css';

/**sign-in element seperate page  */
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

const App = () => (
  <div>
    <Navbar />
    <Header/>
    <About/>
    {/* <SignIn/> */}
    {/* <About />
    <SpecialMenu />
    <Profiles/>
    <Intro />
    <Laurels />
    <Gallery />
    <Contact />
    <Footer /> */}
  </div>

  


);

export default App;
