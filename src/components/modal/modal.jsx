import React from 'react';
import './modal.css';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import GamepadIcon from '@mui/icons-material/Gamepad';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Modal() {
  return (
    <div className="modal-block">
      <div className="modal-block__nav">
        <header>
          <GamepadIcon />
          <CloseIcon />
        </header>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/news"> News </Link>
          <Link to="/game"> Game </Link>
          <Link to="/heroes"> Heroes </Link>
          <Link to="/support"> Support </Link>
        </nav>
        <footer>
          <FacebookIcon />   
          <InstagramIcon />   
          <TwitterIcon />
        </footer>
      </div>
    </div>
  );
}



export default Modal;