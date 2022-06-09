import React from 'react';
import './imgMenu.css';

function ImgMenu(props) {
	return (
		<div className="img-menu">
			{props.data.map(obj => (
				<div
					key={obj.id}
					className={
							props.idActiveAvatar === obj.id
								? 'img-menu__el'
								: 'img-menu__el img-menu__el--brightness'
						}
					onClick={() => {
            props.setIdActiveAvatar(obj.id);
            // TODO: if whichbtn is 0 do not this \/
            props.setWhichHeroBtnsActiv(0);
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


// style={{marginRight: spacing + 'em'}}

export default ImgMenu;
