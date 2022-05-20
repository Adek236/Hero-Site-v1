import React from 'react';
import './home.css';
import { heroes } from '../../data/data';

function Home(props) {
  return (
    <div className="home-block">
       <div className="home-block__banner">
        Video
       </div>
       <div className="home-block__latest">
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