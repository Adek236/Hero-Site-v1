import React from 'react';
import './leftBlock.css';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GamepadIcon from '@mui/icons-material/Gamepad';

function LeftBlock() {
  return (
    <div className="left-block left-block--bg">
      <header className="left-block__logo">
        <GamepadIcon />   
      </header>
      <nav
        aria-label="Secondary"
        className="left-block__socials"
      >
       <ul>
          <li>
            <Link to="/credits"> CREDITS </Link> 
          </li>
          <li>
            <Link to="/"> <FacebookIcon /> </Link>   
          </li>
          <li>
            <Link to="/"> <InstagramIcon /> </Link> 
          </li>
          <li>
            <Link to="/"> <TwitterIcon /> </Link>  
          </li>
        </ul>   
      </nav>
    </div>
  );
}

export default LeftBlock;