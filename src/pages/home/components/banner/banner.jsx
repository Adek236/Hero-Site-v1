import React from 'react';
import './banner.css';

function Banner() {

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
        <div className="banner__box__logo">Hero <span>G</span>ame</div>  
        <div className="banner__box__btn">Let's play...</div>  
      </div>
    </div>
     
  );
}

export default Banner;
