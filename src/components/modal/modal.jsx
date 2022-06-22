import React, { useRef } from 'react';
import './modal.css';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import GamepadIcon from '@mui/icons-material/Gamepad';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Modal(props) {

  const closeButtonRef = useRef(null);

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
      className={`modal-block ${props.showModal ? "modal-block--active" : ""}`}
      tabIndex="0"
      onClick={e => backgroundClick(e)}
      onAnimationEnd={() => closeButtonRef.current.focus()}
    >
      <div className="modal-block__nav">
        <header>
          <GamepadIcon />
          <span
            role="button"
            aria-label="Close modal"
            tabIndex="0"
            ref={closeButtonRef}
            onClick={modalToggle}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                  modalToggle();
                }
              }}
          >
            <CloseIcon />
          </span>
        </header>
        <nav
          aria-label="Priority"
        >
          <ul>
            <li>
              <Link onClick={modalToggle} to="/"> Home </Link>  
            </li>
            <li>
              <Link onClick={modalToggle} to="/news"> News </Link>
            </li>
            <li>
              <Link onClick={modalToggle} to="/game"> Game </Link>
            </li>
            <li>
              <Link onClick={modalToggle} to="/heroes"> Heroes </Link>
            </li>
            <li>
              <Link onClick={modalToggle} to="/support"> Support </Link>
            </li>
          </ul>
        </nav>
        <footer>
          <nav
            aria-label="Secondary"  
          >
            <ul>
              <li>
                <Link onClick={modalToggle} to="/"> <FacebookIcon /> </Link>   
              </li>
              <li>
                <Link onClick={modalToggle} to="/"> <InstagramIcon /> </Link> 
              </li>
              <li>
                <Link onClick={modalToggle} to="/"> <TwitterIcon /> </Link>  
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default Modal;