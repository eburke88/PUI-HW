

import React,{useState} from 'react';
import { ResearchMethodModal} from "./ResearchMethodModal";

export default function ResearchMethod(props) { /* a div resembling a song to hold info in the ReXplore template*/

    let link=`/${props.name}`
    
    const [hover, setHover]=useState(false)

    const [showDesc, setShowDesc]=useState(false); 

    const openDesc=() => { /* change state of modal when image clicked */
          setShowDesc(true);
    };
    
    return (
      <div>
        <div className="song" key={props.id}  onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
          <div className="song-info-project" >
            <img className= {`play-button ${hover ? "Show" : ""}`} onClick={openDesc} src="./content/Images-Profile/playbuttonsmall.png"/>
            <div className ="song-number" id="song-number">{props.id}</div>
            {/* <div className="song-desc">{props.categories}</div> */}
            <div className ="song-title">{props.name}</div>
          </div>
            {showDesc ? <ResearchMethodModal setShowDesc={setShowDesc} img= {"./content/" + props.src} desc={props.desc} name={props.name} /> : null}
            
          </div>

        </div>
    );
    
  }