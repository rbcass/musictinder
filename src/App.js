import React from 'react';

/* importing all the sections of the website!*/ 
import {SignIn,Match } from './container';
import { Navbar } from './components';
import Content from "./content";
import './App.css';

/**sign-in element seperate page  */
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

    //routing//
    //each page is rendered in this order//
    export default function App() {
      return (
        <>
          <Router>
            
            <Routes>
              <Route path="*" element={<Content />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/Match" element={<Match/>}/>
            </Routes>
          </Router>
        </>
      );
    }


