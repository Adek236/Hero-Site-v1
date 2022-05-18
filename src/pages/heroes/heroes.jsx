import React, { useState, useEffect } from 'react';
import './heroes.css';
import ImgMenu from '../../components/imgMenu/imgMenu';
import ContentBlock from '../../components/contentBlock/contentBlock';
import { heroes } from '../../data/data';

function Heroes(props) {
  const [idActiveBg, setIdActiveBg] = useState(1);

  const getObjFromData = () => {
    return heroes.find(obj => obj.id === idActiveBg)
  }

	useEffect(() => {
	  props.setShowHeroBtns(true);
	}, []);
  
  return (
    <div className="main-block">
        <ImgMenu 
          idActiveBg={idActiveBg}
          setIdActiveBg={setIdActiveBg}
          data={heroes}
        />
        <ContentBlock objData={getObjFromData()} />
      </div>
    
  );
}

export default Heroes;