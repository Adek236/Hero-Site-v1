import React from 'react';
import './home.css';
import { heroes } from '../../data/data';
import Banner from './components/banner/banner';


function Home(props) {
  return (
    <div className="home-block">
       <div className="home-block__banner">
        <Banner />
       </div>
       <div className="home-block__latest home-block__latest--bg">
        <div>News1</div>
        <div>News2</div>
        <div>News3</div>
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