import React, { useState, useEffect, useRef } from 'react';
import './heroes.css';
import ImgMenu from './components/imgMenu/imgMenu';
import ContentBlock from './components/contentBlock/contentBlock';
import { heroes } from '../../data/data';

function Heroes(props) {
  const [idActiveAvatar, setIdActiveAvatar] = useState(1);
  const readMoreButtonRef = useRef(null);

  const getObjFromData = () => {
    return heroes.find(obj => obj.id === idActiveAvatar)
  }

  const setFocusReadMoreButton = () => {
    readMoreButtonRef.current.focus();
  }
  
	useEffect(() => {
	  props.setShowHeroBtns(true);
	}, []);
  
  return (
    <div className="heroes-block">
        <ImgMenu
          setFocusReadMoreButton={setFocusReadMoreButton}
          idActiveAvatar={idActiveAvatar}
          setIdActiveAvatar={setIdActiveAvatar}
          data={heroes}
          setWhichHeroBtnsActiv={props.setWhichHeroBtnsActiv}
        />
        <ContentBlock
          readMoreButtonRef={readMoreButtonRef}
          objData={getObjFromData()} 
          whichHeroBtnsActiv={props.whichHeroBtnsActiv}
          setWhichHeroBtnsActiv={props.setWhichHeroBtnsActiv}
          />
      </div>
  );
}

export default Heroes;