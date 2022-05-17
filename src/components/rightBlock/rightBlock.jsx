import React from 'react';
import './rightBlock.css';
import MenuIcon from '@mui/icons-material/Menu';

function RightBlock() {
  return (
    <div className="right-block right-block--bg">
      <div className="right-block__menu">
        <MenuIcon />
      </div>
      <div className="right-block__btns"></div>
    </div>
  );
}

export default RightBlock;