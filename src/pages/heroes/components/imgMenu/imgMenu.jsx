import React from 'react';
import './imgMenu.css';

function ImgMenu(props) {

  const executeScroll = (e) => e.target.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});
  
	return (
		<div 
      className="img-menu"
    >
			{props.data.map(obj => (
				<div
          tabIndex="0"
					key={obj.id}
					className={
							props.idActiveAvatar === obj.id
								? 'img-menu__el'
								: 'img-menu__el img-menu__el--brightness'
						}
          onFocus={(e) => {
            props.setIdActiveAvatar(obj.id);
            // TODO: if whichbtn is 0 do not this \/
            props.setWhichHeroBtnsActiv(0);
            executeScroll(e);
          }}
					onClick={(e) => {
            props.setIdActiveAvatar(obj.id);
            // TODO: if whichbtn is 0 do not this \/
            props.setWhichHeroBtnsActiv(0);
            executeScroll(e);
          }}
          onKeyDown={e => {
                if (e.key === 'Enter') {
                  props.setFocusReadMoreButton();
                }
              }}
				>
					<img src={obj.avatar} />
					<div
						className={
							props.idActiveAvatar === obj.id
								? 'img-menu__el-bg img-menu__el-bg--click'
								: 'img-menu__el-bg'
						}
					>
					</div>
          <div 
            className="img-menu__el-title"
            style={{display: 
              props.idActiveAvatar === obj.id
								? 'flex'
								: ''
            }}
          >
            {obj.name}
          </div>
				</div>
			))}
		</div>
	);
}

// e => {
//                 if (e.key === 'Enter') {
//                   props.showModalToggle()
//                 }
//               }
// style={{marginRight: spacing + 'em'}}

export default ImgMenu;
