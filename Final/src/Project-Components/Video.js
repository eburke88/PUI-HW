import React, {useState} from 'react';

export default function Video (props) { /* styling the appearance of video */

  let link=`/content/${props.src}`
  const [hover, setHover]=useState(false)

      return (
        <button className="project-entry"  onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
          <div className="section-title">{props.name}</div>
          <video src={link} width="600" height="300" controls></video>
        </button>
      );
    }

