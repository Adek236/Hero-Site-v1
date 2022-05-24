import React from 'react';
import './news.css';

function News(props) {
  return (
    <div className={`home-news-block ${props.border ? "home-news-block--border" : ""}`}>
      <img src={props.data.img} alt="News logo" />
      <div className="home-news-block__info-box">
        <div className="home-news-block__wrapper">
          <div className="home-news-block__info-box__alert">
            <span>N</span>ew!
          </div>
          <div className="home-news-block__info-box__category">
            {props.data.category}
          </div>
        </div>
        <div className="home-news-block__info-box__title">
          {props.data.title}
        </div>
        <div className="home-news-block__info-box__desc">
          {props.data.short_desc}
        </div>
      </div>
    </div>

  );
}

export default News;