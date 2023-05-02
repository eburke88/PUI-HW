
import '../css/Project.css';

import React, { useRef } from "react";
import ReactDom from "react-dom";

export const Modal=({ setShowModal, img }) => {
  const modalRef=useRef();
  
  const closeModal=(e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(

    <div className="modal-background" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <img class="modal-img" src={img}></img>
        <img className="close-modal-button-image" src="./content/Images-Profile/closebutton.png" onClick={() => setShowModal(false)}/>
      </div>
    </div>,

    document.getElementById("portal")
  );
}