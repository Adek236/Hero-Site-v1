import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LeftBlock from './components/leftBlock/leftBlock'
import RightBlock from './components/rightBlock/rightBlock'
import NaviBar from './components/naviBar/naviBar';
import Heroes from './pages/heroes/heroes'
import Home from './pages/home/home'
import News from './pages/news/news'

function App() {
  // showHeroBtns need to change from true/false to string with which page
  const [showHeroBtns, setShowHeroBtns] = useState(false);
  const [whichHeroBtnsActiv, setWhichHeroBtnsActiv] = useState(0);

  return (
    <main className="container container--font container--bg">
      <BrowserRouter>
        <LeftBlock />
        <div className="container__main">
          <div className="container__main-top">
            <NaviBar />
          </div>
          <div className="container__main-bottom">
            <Routes>
              <Route
                exact
                path='/heroes'
                element={
                  <Heroes
                    setShowHeroBtns={setShowHeroBtns}
                    whichHeroBtnsActiv={whichHeroBtnsActiv}
                    setWhichHeroBtnsActiv={setWhichHeroBtnsActiv}
                  />
                }
              />
              <Route
                exact
                path='/'
                element={
                  <Home />
                }
              />
              <Route
                exact
                path='/news'
                element={
                  <News />
                }
              />
            </Routes>
          </div>
        </div>
        <RightBlock
          showHeroBtns={showHeroBtns}
          whichHeroBtnsActiv={whichHeroBtnsActiv}
          setWhichHeroBtnsActiv={setWhichHeroBtnsActiv}
        />
      </BrowserRouter>
    </main>
  );
}

export default App;