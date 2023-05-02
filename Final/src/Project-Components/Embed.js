
import React,{useState} from 'react';

export default function Embed (props) { /* standardizing the style for embeds */
  
    const [hover, setHover]=useState(false)

    return (
      <button className="project-entry"  onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
      <div className="section-title">{props.name}</div>
      <iframe class="project-entry-image" src= {props.src} frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      {/* <img className={`play-entry-button ${hover ? "Show" : ""}`} src="./content/Images-Profile/playbutton.png"/> */}
      </button>
    );
  }

