import React, { useState, useRef } from 'react';
import './addNews.css';

function AddNews(props) {
  const [focusedNews, setFocusedNews] = useState(false);
  const textDescRef = useRef(null);

  const setFocusTextDesc = () => {
    textDescRef.current.focus();
  }

  return (
    <div
      tabIndex="0"
      className="add-news-block"
      onFocus={()=>setFocusedNews(true)}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          setFocusTextDesc();
        }
      }}
    >
      <img
        className={focusedNews ? "add-news-block__img--focus" : ""}
        src={props.data.img} 
        alt={props.data.alt} />
      <section
        className={focusedNews ? "add-news-block__title add-news-block__title--focus" : "add-news-block__title"}
      >
        <h1>{props.data.title}</h1>
        <h2>{props.data.category}</h2>
      </section>
      <section
        ref={textDescRef}
        tabIndex="0"
        className={focusedNews ? "add-news-block__desc add-news-block__desc--focus" : "add-news-block__desc"}
        onKeyDown={e => {
          if (e.key === 'Tab') {
            setFocusedNews(false);
          }
        }}
      >
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