import React from 'react';
import './home.css';
import { news as data } from '../../data/data';
import Banner from './components/banner/banner';
import News from './components/news/news';

function Home(props) {
  return (
    <div className="home-block">
       <div className="home-block__banner">
        <Banner />
       </div>
       <div className="home-block__latest home-block__latest--bg">
        <News data={data[0]} border={true}/>
        <News data={data[1]} border={true}/>
        <News data={data[2]} border={false}/>
       </div>
    </div>
     
  );
}

 // <video className="video" muted autoPlay>
 //        <source
 //          src="https://res.cloudinary.com/yaif/video/upload/v1653055556/Mountain_baajzf.mp4"
 //          type="video/mp4"
 //        />
 //        Your browser does not support the video tag.
 //      </video> 

export default Home;