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
          className={props.whichHeroBtnsActiv == 0 ? "hero-btn-activated" : ""}
          onClick={()=> activatedBtn(0)}
        >
          Button1
        </div>
        <div
          className={props.whichHeroBtnsActiv == 1 ? "hero-btn-activated" : ""}
          onClick={()=> activatedBtn(1)}
        >
          Button2
        </div>
        <div 
          className={props.whichHeroBtnsActiv == 2 ? "hero-btn-activated" : ""}
          onClick={()=> activatedBtn(2)}
        >
          Button3
        </div>
        <div 
          className={props.whichHeroBtnsActiv == 3 ? "hero-btn-activated" : ""}
          onClick={()=> activatedBtn(3)}
        >
          Button4
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