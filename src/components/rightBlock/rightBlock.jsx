import React from 'react';
import './rightBlock.css';
import MenuIcon from '@mui/icons-material/Menu';

function RightBlock(props) {
  
  const HeroBtns = () => {
    return (
      <div className="hero-btns">
        <div>Button1</div>
        <div>Button2</div>
        <div>Button3</div>
        <div>Button4</div>
      </div>
    );
  }
  
  
  return (
    <div className="right-block right-block--bg">
      <div className="right-block__menu">
        <MenuIcon />
      </div>
      <div className="right-block__btns">
        {props.showHeroBtns ? <HeroBtns /> : ""}
      </div>
    </div>
  );
}
// <div className={props.showHeroBtns ? "test": ""}>A</div>
export default RightBlock;