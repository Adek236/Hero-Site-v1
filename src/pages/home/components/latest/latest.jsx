import React from 'react';
import './latest.css';

function Latest(props) {
  return (
    <div className={`home-latest-block ${props.border ? "home-latest-block--border" : ""}`}>
      <img src={props.data.img} alt="News logo" />
      <div className="home-latest-block__info-box">
        <div className="home-latest-block__wrapper">
          <div className="home-latest-block__info-box__alert">
            <span>N</span>ew!
          </div>
          <div className="home-latest-block__info-box__category">
            {props.data.category}
          </div>
        </div>
        <div className="home-latest-block__info-box__title">
          {props.data.title}
        </div>
        <div className="home-latest-block__info-box__desc">
          {props.data.short_desc}
        </div>
      </div>
    </div>

  );
}

export default Latest;