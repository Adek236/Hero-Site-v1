import React from 'react';
import './home.css';
import { news as data } from '../../data/data';
import Banner from './components/banner/banner';
import Latest from './components/latest/latest';

function Home(props) {
  return (
    <div className="home-block">
       <div className="home-block__banner">
        <Banner />
       </div>
       <div className="home-block__latest home-block__latest--bg">
        <Latest data={data[0]} border={true}/>
        <Latest data={data[1]} border={true}/>
        <Latest data={data[2]} border={false}/>
       </div>
    </div>
  );
}

export default Home;