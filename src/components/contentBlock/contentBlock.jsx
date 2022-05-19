import React from 'react';
import './contentBlock.css';

function ContentBlock(props) {
  return (
    <div className="content-block">
      <div className="content-block__text">
        <div className="content-block__text-title">
          <p>{props.objData.name}</p>
        </div>
        <div className="content-block__text-desc">
          {props.objData.desc[props.whichHeroBtnsActiv]}
          <p>Read more...</p>
        </div>
      </div>
      <div className="content-block__img">
      <img src={props.objData.img}></img>
      </div>
    </div>
  );
}

export default ContentBlock;