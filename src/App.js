import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { SignIn, Match } from './container';
import { Navbar } from './components';
import Content from './content';
import './App.css';

export default function App() {
  return (
    <Router>
     
      <AnimatePresence mode='wait'>
        <Routes>
          <Route path="*" element={<Content />} />
          <Route
            path="/SignIn"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <SignIn />
              </motion.div>
            }
          />
          <Route
            path="/Match"
            element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Match />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}