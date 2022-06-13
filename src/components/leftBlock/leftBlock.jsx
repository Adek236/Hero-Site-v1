import React from 'react';
import './leftBlock.css';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import GamepadIcon from '@mui/icons-material/Gamepad';


function LeftBlock() {
  return (
    <div className="left-block left-block--bg">
      <div className="left-block__logo">
        <GamepadIcon />   
      </div>
      <div className="left-block__socials">
       <Link to="/credits"> CREDITS </Link>
       <FacebookIcon />   
       <InstagramIcon />   
       <TwitterIcon />   
      </div>
      
    </div>
  );
}

// <div className="left-block__btn">c</div>

export default LeftBlock;