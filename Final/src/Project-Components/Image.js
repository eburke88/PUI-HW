import '../css/Profile.css';
import '../css/style.css';
import '../css/Project.css';

import React, {useState} from 'react';
import { Modal } from "./ImageModal";


export default function Image(props) { /* standardizing the styling of image */

    const [hover, setHover]=useState(false)

    const [showModal, setShowModal]=useState(false); 

    const openModal=() => { /* change state of modal when image clicked */
          setShowModal(true);
    };
    

    return (

        <div class="image-container">
            <button className="image" onClick={openModal} onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)}>
                <img className="project-image" src={"./content/" + props.headerSrc} alt={props.alt}/> 
                <img className={`play-image-button ${hover ? "Show" : ""}`} src="./content/Images-Profile/playbutton.png"/>
            </button>
            {showModal ? <Modal setShowModal={setShowModal} img={"./content/" + props.headerSrc} /> : null}
        </div>

    );

};


