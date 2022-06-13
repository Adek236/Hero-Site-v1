import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LeftBlock from './components/leftBlock/leftBlock';
import RightBlock from './components/rightBlock/rightBlock';
import NaviBar from './components/naviBar/naviBar';
import Footer from './components/footer/footer';
import Modal from './components/modal/modal';
import Heroes from './pages/heroes/heroes';
import Home from './pages/home/home';
import News from './pages/news/news';
import Game from './pages/game/game';
import Support from './pages/support/support';
import Credits from './pages/credits/credits';

function App() {
  const [showHeroBtns, setShowHeroBtns] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [whichHeroBtnsActiv, setWhichHeroBtnsActiv] = useState(0);

  const showModalToggle = () => {
    setShowModal(prev => !prev);
  }

  return (
    <main className="container container--font container--bg">
      <BrowserRouter>
        <LeftBlock />
        <div className="container__main">
          <div className="container__main-top">
            <NaviBar
              showModalToggle={showModalToggle}
            />
          </div>
          <div className="container__main-bottom">
            <Routes>
              <Route
                exact
                path='/'
                element={
                  <Home
                    setShowHeroBtns={setShowHeroBtns}
                  />
                }
              />
              <Route
                exact
                path='/news'
                element={
                  <News
                    setShowHeroBtns={setShowHeroBtns}
                  />
                }
              />
              <Route
                exact
                path='/game'
                element={
                  <Game
                    setShowHeroBtns={setShowHeroBtns}
                  />
                }
              />
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
                path='/support'
                element={
                  <Support
                    setShowHeroBtns={setShowHeroBtns}
                  />
                }
              />
              <Route
                exact
                path='/credits'
                element={
                  <Credits
                    setShowHeroBtns={setShowHeroBtns}
                  />
                }
              />
            </Routes>
          </div>
          <div className="container__main-footer">
            <Footer />
          </div>
        </div>
        <RightBlock
          showHeroBtns={showHeroBtns}
          whichHeroBtnsActiv={whichHeroBtnsActiv}
          setWhichHeroBtnsActiv={setWhichHeroBtnsActiv}
        />
        <Modal
          showModal={showModal}
          showModalToggle={showModalToggle}
        />
      </BrowserRouter>
    </main>
  );
}

export default App;