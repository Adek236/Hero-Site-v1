import React from 'react';
import './naviBar.css';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import GamepadIcon from '@mui/icons-material/Gamepad';

function NaviBar(props) {
  return (
    <nav
      aria-label="Primary"
      className="navi-bar navi-bar--font navi-bar--bg"
    >
      <ul>
        <li>
          <Link to="/"> HOME </Link>  
        </li>
        <li>
          <Link to="/news"> NEWS </Link>
        </li>
        <li>
          <Link to="/game"> GAME </Link>
        </li>
        <li>
          <Link to="/heroes"> HEROES </Link>
        </li>
        <li>
          <Link to="/support"> SUPPORT </Link>
        </li>
      </ul>
      <div className="navi-bar__hidden">
        <GamepadIcon />
      </div>
      <div
        role="button"
        aria-label="Open navigation"
        tabIndex="0"
        className="navi-bar__hidden navi-bar__hidden--menu"
        onClick={()=>props.showModalToggle()}
        onKeyDown={e => {
                if (e.key === 'Enter') {
                  props.showModalToggle();
                }
              }}
      >
        <MenuIcon />
      </div>
    </nav>
  );
}

export default NaviBar;