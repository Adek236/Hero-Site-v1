import React, { useState, useEffect } from 'react';
import './heroes.css';
import ImgMenu from '../../components/imgMenu/imgMenu';
import ContentBlock from '../../components/contentBlock/contentBlock';
import { heroes } from '../../data/data';

function Heroes(props) {
  const [idActiveAvatar, setIdActiveAvatar] = useState(1);

  const getObjFromData = () => {
    return heroes.find(obj => obj.id === idActiveAvatar)
  }
  
	useEffect(() => {
	  props.setShowHeroBtns(true);
	}, []);
  
  return (
    <div className="main-block">
        <ImgMenu 
          idActiveAvatar={idActiveAvatar}
          setIdActiveAvatar={setIdActiveAvatar}
          data={heroes}
          setWhichHeroBtnsActiv={props.setWhichHeroBtnsActiv}
        />
        <ContentBlock 
          objData={getObjFromData()} 
          whichHeroBtnsActiv={props.whichHeroBtnsActiv}
          />
      </div>
    
  );
}

export default Heroes;