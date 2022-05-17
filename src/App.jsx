import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LeftBlock from './components/leftBlock/leftBlock'
import RightBlock from './components/rightBlock/rightBlock'
import NaviBar from './components/naviBar/naviBar';
import Heroes from './pages/heroes/heroes'

function App() {
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
              <Route exact path='/heroes' element={<Heroes />} />
            </Routes>
          </div>
        </div>
        <RightBlock />
      </BrowserRouter>
    </main>
  );
}

export default App;