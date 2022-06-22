import React from 'react';
import './rightBlock.css';
// import MenuIcon from '@mui/icons-material/Menu';

function RightBlock(props) {


  // need to separate into new file
  const HeroBtns = () => {
    
    const activatedBtn = (id) => {
      props.setWhichHeroBtnsActiv(id);
    }

    return (
      <div className="hero-btns">
        <div 
          role="button"
          aria-labelledby="btn-title1"
          tabIndex="0"
          className={props.whichHeroBtnsActiv == 0 ? "hero-btn-activated" : ""}
          onClick={()=> activatedBtn(0)}
          onKeyDown={e => {
                if (e.key === 'Enter') {
                  activatedBtn(0);
                }
              }}
        >
          <p id="btn-title1">Overview</p>
        </div>
        <div
          role="button"
          aria-labelledby="btn-title2"
          tabIndex="0"
          className={props.whichHeroBtnsActiv == 1 ? "hero-btn-activated" : ""}
          onClick={()=> activatedBtn(1)}
          onKeyDown={e => {
                if (e.key === 'Enter') {
                  activatedBtn(1);
                }
              }}
        >
          <p id="btn-title2">Lore</p>
        </div>
        <div
          role="button"
          aria-labelledby="btn-title3"
          tabIndex="0"
          className={props.whichHeroBtnsActiv == 2 ? "hero-btn-activated" : ""}
          onClick={()=> activatedBtn(2)}
          onKeyDown={e => {
                if (e.key === 'Enter') {
                  activatedBtn(2);
                }
              }}
        >
          <p id="btn-title3">Abilities</p>
        </div>
        <div
          role="button"
          aria-labelledby="btn-title4"
          tabIndex="0"
          className={props.whichHeroBtnsActiv == 3 ? "hero-btn-activated" : ""}
          onClick={()=> activatedBtn(3)}
          onKeyDown={e => {
                if (e.key === 'Enter') {
                  activatedBtn(3);
                }
              }}
        >
          <p id="btn-title4">Relations</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="right-block right-block--bg">
      <div className="right-block__menu">
      </div>
      <div className="right-block__btns">
        {props.showHeroBtns ? <HeroBtns /> : ""}
      </div>
    </div>
  );
}
        // <MenuIcon />
// props.showHeroBtns need to change from true/false to string with which page
export default RightBlock;