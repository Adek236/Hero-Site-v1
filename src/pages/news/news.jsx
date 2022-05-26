import React from 'react';
import './news.css';
import { news as data } from '../../data/data';

function News(props) {
  return (
    <div className="news-block">
      <div className="news-block__box">
        <div className="news-block__box__el news-block__box__el--grow news-block__box__el--border">
          <img src="https://res.cloudinary.com/yaif/image/upload/c_scale,w_1200/v1653547319/133Z_2106.w026.n002.491B.p1.491_ik1fyz.jpg" alt="Night forest with moon"/> 
        </div>
        <div className="news-block__box__el">
          <div className="news-block__box__el__s">
            <img src="https://res.cloudinary.com/yaif/image/upload/v1653485029/kindpng_651951_ac8pu1.png"/> 
          </div>
          <div className="news-block__box__el__s">
            <img src="https://res.cloudinary.com/yaif/image/upload/v1652096363/game-console-6603120_640_uvktla.jpg"/> 
          </div>
        </div>
      </div>
      <div className="news-block__box">
        <div className="news-block__box__el news-block__box__el--mod">
          <div className="news-block__box__el__xs"></div>  
          <div className="news-block__box__el__xs"></div>  
          <div className="news-block__box__el__xs"></div>  
          <div className="news-block__box__el__xs"></div>  
        </div>
        <div className="news-block__box__el news-block__box__el--border">
          <img src="https://res.cloudinary.com/yaif/image/upload/v1653485029/kindpng_1759554_ejjkn6.png"/> 
        </div>
      </div>
    </div>
  );
}

          // <img src="https://res.cloudinary.com/yaif/image/upload/v1653547319/133Z_2106.w026.n002.491B.p1.491_ik1fyz.jpg" alt="Night forest with moon"/>  

export default News;