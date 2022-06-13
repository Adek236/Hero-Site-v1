import React, { useCallback } from 'react';
import './banner.css';
import { useNavigate } from 'react-router-dom';

function Banner() {
  
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/game', {replace: true}), [navigate]);

  const link = "https://res.cloudinary.com/yaif/video/upload/v1653055556/Mountain_baajzf.mp4";
  
  return (
    <div className="banner">
       <video className="banner__video" loop muted autoPlay>
        <source
          src={link}
          type="video/mp4"
        />
        Your browser does not support the video tag.
       </video>
      <div className="banner__video--mod"></div>
      <div className="banner__box">
        <h1 className="banner__box__logo">Hero <span>G</span>ame</h1>  
        <button 
          className="banner__box__btn"
          onClick={handleOnClick}
        >
          Let's play...
        </button>  
      </div>
    </div>
     
  );
}

export default Banner;
