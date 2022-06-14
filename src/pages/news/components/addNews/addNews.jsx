import React, { useEffect } from 'react';
import './addNews.css';

function AddNews(props) {
  
  return (
          <div tabIndex="0" className="add-news-block">
            <img src={props.data.img} alt={props.data.alt} />
            <section className="add-news-block__title">
              <h1>{props.data.title}</h1>  
              <h2>{props.data.category}</h2>
            </section>
            <section className="add-news-block__desc">
              <p>
                {props.data.short_desc}
              </p>
              <p>
                {props.data.long_desc}
              </p>
            </section>
          </div>
  );
}

export default AddNews;