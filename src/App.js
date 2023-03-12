import React from 'react';

/* importing all the sections of the website!*/ 
import { About, Profiles, Contact, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header/>
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
