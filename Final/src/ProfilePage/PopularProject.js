import '../css/Profile.css';
import '../css/style.css';
import '../css/Project.css';

import { Link } from "react-router-dom";

import React, {useState} from 'react';

export default function PopularProject(props) { /* */

  let link;
  if (props.name === "ReXplore") { /* creating path for custom page */
    link=`ReXplore`
  } else {
    link=`/Project?name=${props.name}`
  } /* create unique link for each project entry*/

  const [hover, setHover]=useState(false)
  const showBtn=hover ? "Show" : "";
  
  return (
    <Link to={link}>  {/* link to unique link */}
      <div onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth'});}} className="song" key={props.id} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
        <div className="song-info">
            <div className ="song-number" id="song-number">{props.id}</div>
            <img className={`play-button ${hover ? "Show" : ""}`} src="./content/Images-Profile/playbuttonsmall.png"/> {/* show play button on hover */}
            <img className="popular-image" src={"./content/" + props.src}/>
            <div className ="song-title">{props.name}</div>
        </div>
            <div className="song-desc">{props.categories}</div>
           
    
      </div>
    </Link>
  );
  
}