import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
      <div className="footer footer--bg">
       <Link to="/credits"> CREDITS </Link> 
       <Link to="/"> <FacebookIcon /> </Link>   
       <Link to="/"> <InstagramIcon /> </Link> 
       <Link to="/"> <TwitterIcon /> </Link>  
      </div>
  );
}

// <div className="left-block__btn">c</div>

export default Footer;