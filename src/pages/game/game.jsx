import React, { useEffect } from 'react';
import './game.css';

function Game(props) {
  
	useEffect(() => {
	  props.setShowHeroBtns(false);
	}, []);
  
  return (
    <div className="game-block">
        <h1>Hero <span>G</span>ame</h1>
        <h2>Get started and play for free.</h2>
        <button>Download Now</button>
    </div>
  );
}

export default Game;