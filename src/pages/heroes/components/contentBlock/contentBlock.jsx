import React, {useCallback} from 'react';
import './contentBlock.css';

function ContentBlock(props) {

  const nextDesc = () => {
    const whichHeroBtnsActiv =
      props.whichHeroBtnsActiv != 3 ? props.whichHeroBtnsActiv + 1 : 0;
    props.setWhichHeroBtnsActiv(whichHeroBtnsActiv);
  }

  return (
    <div className="content-block">
      <div className="content-block__text">
        <section className="content-block__text-title">
          <p>{props.objData.name}</p>
        </section>
        <section className="content-block__text-desc">
          <p>{props.objData.desc[props.whichHeroBtnsActiv]}</p>
          <span onClick={() => nextDesc()}>Read more...</span>
        </section>
      </div>
      <div className="content-block__img">
        <img src={props.objData.img}></img>
      </div>
    </div>
  );
}

export default ContentBlock;