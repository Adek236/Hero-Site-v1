import React from 'react';
import './news.css';
import { news as data } from '../../data/data';

function News(props) {
  return (
    <div className="news-block">
      <div className="news-block__box">
        <div className="news-block__box__el-big">el-a</div>
        <div className="news-block__box__el-big">
          <div>el-el-a</div>
          <div>el-el-b</div>
          <div>el-el-c</div>
        </div>
      </div>
      <div className="news-block__box">
        <div className="news-block__box__el-med">a</div>
        <div className="news-block__box__el-med">ba</div>
      </div>
      <div className="news-block__box">
        <div className="news-block__box__el-med">a</div>
        <div className="news-block__box__el-med">ba</div>
      </div>
    </div>
  );
}


export default News;