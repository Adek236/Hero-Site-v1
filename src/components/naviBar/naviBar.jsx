import React from 'react';
import './naviBar.css';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import GamepadIcon from '@mui/icons-material/Gamepad';

function NaviBar() {
  return (
    <nav className="navi-bar navi-bar--font navi-bar--bg">
      <Link to="/"> Home </Link>
      <Link to="/news"> News </Link>
      <Link to="/game"> Game </Link>
      <Link to="/heroes"> Heroes </Link>
      <Link to="/support"> Support </Link>
      <div className="navi-bar__hidden">
      </div>
      <div className="navi-bar__hidden">
        <GamepadIcon />
      </div>
      <div className="navi-bar__hidden navi-bar__hidden--menu">  
        <MenuIcon />
      </div>
    </nav>
  );
}

export default NaviBar;