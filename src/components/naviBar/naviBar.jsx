import React from 'react';
import './naviBar.css';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import GamepadIcon from '@mui/icons-material/Gamepad';

function NaviBar(props) {
  return (
    <nav className="navi-bar navi-bar--font navi-bar--bg">
      <Link to="/"> HOME </Link>
      <Link to="/news"> NEWS </Link>
      <Link to="/game"> GAME </Link>
      <Link to="/heroes"> HEROES </Link>
      <Link to="/support"> SUPPORT </Link>
      <div className="navi-bar__hidden">
      </div>
      <div className="navi-bar__hidden">
        <GamepadIcon />
      </div>
      <div className="navi-bar__hidden navi-bar__hidden--menu"
        onClick={()=>props.showModalToggle()}
      >  
        <MenuIcon />
      </div>
    </nav>
  );
}

export default NaviBar;