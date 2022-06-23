import React from 'react';
import './footer.css';
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
      <nav
        aria-label="Secondary"
        className="footer footer--bg"
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
  );
}

export default Footer;