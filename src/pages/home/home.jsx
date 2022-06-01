import React, { useEffect } from 'react';
import './home.css';
import { news as data } from '../../data/data';
import Banner from './components/banner/banner';
import Latest from './components/latest/latest';

function Home(props) {

  useEffect(() => {
	  props.setShowHeroBtns(false);
	}, []);
  
  return (
    <div className="home-block">
       <div className="home-block__banner">
        <Banner />
       </div>
       <div className="home-block__latest home-block__latest--bg">
        <Latest data={data[0]} border={false}/>
        <Latest data={data[1]} border={false}/>
        <Latest data={data[2]} border={false}/>
       </div>
    </div>
  );
}

export default Home;