import React, { useCallback, useRef } from 'react';
import './contentBlock.css';

function ContentBlock(props) {

  const textDesc = useRef(null);

  const nextDesc = () => {
    const whichHeroBtnsActiv =
      props.whichHeroBtnsActiv != 3 ? props.whichHeroBtnsActiv + 1 : 0;
    props.setWhichHeroBtnsActiv(whichHeroBtnsActiv);
    textDesc.current.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
  }

  return (
    <div className="content-block">
      <div className="content-block__text">
        <section className="content-block__text-title">
          <p>{props.objData.name}</p>
        </section>
        <section
          ref={textDesc} 
          className="content-block__text-desc"
        >
          <p>{props.objData.desc[props.whichHeroBtnsActiv]}</p>
          <span
            role="button"
            aria-label="Read more about hero"
            tabIndex="0"
            ref={props.readMoreButtonRef}
            onClick={() => nextDesc()}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                  nextDesc();
                }
              }}
          >Read more...</span>
        </section>
      </div>
      <div className="content-block__img">
        <img src={props.objData.img} alt={props.objData.alt}></img>
      </div>
    </div>
  );
}

export default ContentBlock;