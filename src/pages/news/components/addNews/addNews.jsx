import React, { useEffect } from 'react';
import './addNews.css';

function AddNews(props) {
  
  return (
          <div className="add-news-block">
            <img src={props.data.img} alt={props.data.alt} />
            <div className="add-news-block__title">
              <h1>{props.data.title}</h1>  
              <h2>{props.data.category}</h2>
            </div>
          </div>
  );
}

export default AddNews;