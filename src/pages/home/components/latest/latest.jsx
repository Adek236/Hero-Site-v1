import React, {useCallback} from 'react';
import './latest.css';
import { useNavigate, Link } from 'react-router-dom';


function Latest(props) {

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/news', {replace: true}), [navigate]);
  
  return (
    <div
      className="home-latest-block"
      onClick={handleOnClick}
    >
      <img src={props.data.img} alt={props.data.alt} />
      <div className="home-latest-block__info-box">
        <div className="home-latest-block__wrapper">
          <div className="home-latest-block__info-box__alert">
            <span>N</span>ew!
          </div>
          <div className="home-latest-block__info-box__category">
            {props.data.category}
          </div>
        </div>
        <div className="home-latest-block__info-box__title">
          <Link to="/news">{props.data.title}</Link>
        </div>
        <div className="home-latest-block__info-box__desc">
          <p>{props.data.short_desc}</p>
        </div>
      </div>
    </div>
  );
}

export default Latest;