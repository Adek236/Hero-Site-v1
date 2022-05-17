import React from 'react';
import './naviBar.css';
import { Link } from "react-router-dom";

function NaviBar() {
  return (
    <div className="navi-bar navi-bar--font navi-bar--bg">
      <div>
        <Link to="/"> Home </Link>
      </div>
      <div>
        <Link to="/news"> News </Link>
      </div>
      <div>
        <Link to="/game"> Game </Link>
      </div>
      <div>
        <Link to="/heroes"> Heroes </Link>
      </div>
      <div>
        <Link to="/support"> Support </Link>
      </div>
    </div>
  );
}
export default NaviBar;