import React, { useEffect } from 'react';
import './news.css';
import { news as data } from '../../data/data';
import AddNews from './components/addNews/addNews';

function News(props) {

  useEffect(() => {
	  props.setShowHeroBtns(false);
	}, []);
  
  return (
    <div className="news-block">
      <div className="news-block__box">
        <div className="news-block__box__el news-block__box__el--grow news-block__box__el--border"> 
          <AddNews data={data[0]}/>
        </div>
        <div className="news-block__box__el">
          <div className="news-block__box__el__s">
            <AddNews data={data[1]}/> 
          </div>
          <div className="news-block__box__el__s">
            <AddNews data={data[2]}/>
          </div>
        </div>
      </div>
      <div className="news-block__box">
        <div className="news-block__box__el news-block__box__el--mod">
          <div className="news-block__box__el__xs">
            <AddNews data={data[3]}/>
          </div>  
          <div className="news-block__box__el__xs">
            <AddNews data={data[4]}/>
          </div>  
          <div className="news-block__box__el__xs">
            <AddNews data={data[5]}/>
          </div>  
          <div className="news-block__box__el__xs">
            <AddNews data={data[6]}/>
          </div>  
        </div>
        <div className="news-block__box__el news-block__box__el--border">
          <AddNews data={data[7]}/> 
        </div>
      </div>
    </div>
  );
}

          // <img src="https://res.cloudinary.com/yaif/image/upload/v1653547319/133Z_2106.w026.n002.491B.p1.491_ik1fyz.jpg" alt="Night forest with moon"/>  

export default News;