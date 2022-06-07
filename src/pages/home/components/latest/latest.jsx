import React from 'react';
import './latest.css';

function Latest(props) {
  return (
    <div className="home-latest-block">
      <img src={props.data.img} alt={props.data.alt} />
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
          <p>{props.data.short_desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Latest;