import React from 'react';
import './imgMenu.css';

function ImgMenu(props) {
	return (
		<div className="img-menu">
			{props.data.map(obj => (
				<div
					key={obj.id}
					className="img-menu__el"
					onClick={() => props.setIdActiveBg(obj.id)}
				>
					<img src={obj.avatar} />
					<div
						className={
							props.idActiveBg === obj.id
								? 'img-menu__el-bg img-menu__el-bg--click'
								: 'img-menu__el-bg'
						}
					>
						{obj.name}
					</div>
				</div>
			))}
		</div>
	);
}

export default ImgMenu;
