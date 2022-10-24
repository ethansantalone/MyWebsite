import {useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NutraData from './Work/NutraData.js';
import Home from './Home.js';
import Work from './Work/Work.js';
import TeachingAssistant from './Work/TeachingAssistant.js';
import HungryHawks from './Work/HungryHawks.js';
import React, { useState } from 'react';

function App() {

  const [home, setHome] = useState();
  // const [scrollProjects, setScrollProjects] = useState(false,() => { window.location = '/'});
  // if(scrollProjects) {
  //   setScrollProjects(false, () => {window.scrollTo({ top: window.innerHeight * .92, left: 0, behavior: 'smooth' })})
  // }

  return (
    <Router>
      <div className="App">
        <div className="navigation-overlay-blur"></div>
        <div className="navigation-overlay-line"></div>
        <div className="navigation">
          <div className="navigation-left" onClick={() => {home? window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }): window.location = '/'}}>Ethan Santalone</div>
          <div className="navigation-right" onClick={() => {home? window.scrollTo({ top: window.innerHeight * .92, left: 0, behavior: 'smooth' }): window.location = '/work'}}>Projects</div>
          <div className="navigation-right" onClick={() => { window.open("mailto:ethansantalone@outlook.com") }}>Contact</div>
        </div>
        <Routes>
          <Route path="/" element={<Home parentCallback={setHome} />} />
          <Route path="/work" element={<Work parentCallback={setHome} />} />
          <Route path="/work/nutradata" element={<NutraData parentCallback={setHome}/>} />
          <Route path="/work/hungryhawks" element={<HungryHawks parentCallback={setHome}/>} />
          <Route path="/work/teachingassistant" element={<TeachingAssistant parentCallback={setHome}/>} />
        </Routes>
        <footer className="App-footer">
          © 2022 — Designed & developed by Ethan Santalone
        </footer>
      </div>
    </Router>
  );
}

export default App;
