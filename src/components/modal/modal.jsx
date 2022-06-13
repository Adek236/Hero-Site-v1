import React from 'react';
import './modal.css';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import GamepadIcon from '@mui/icons-material/Gamepad';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Modal(props) {

  const modalToggle = () => {
    props.showModalToggle();
  }

  const backgroundClick = (e) => {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        props.showModalToggle();
    }
  }
  
  return (
    <div 
      onClick={e => backgroundClick(e)}
      className={`modal-block ${props.showModal ? "modal-block--active" : ""}`}
    >
      <div className="modal-block__nav">
        <header>
          <GamepadIcon />
          <span onClick={modalToggle}>
            <CloseIcon />
          </span>
        </header>
        <nav>
          <Link onClick={modalToggle} to="/"> Home </Link>
          <Link onClick={modalToggle} to="/news"> News </Link>
          <Link onClick={modalToggle} to="/game"> Game </Link>
          <Link onClick={modalToggle} to="/heroes"> Heroes </Link>
          <Link onClick={modalToggle} to="/support"> Support </Link>
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