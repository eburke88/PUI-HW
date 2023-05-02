import '../css/Profile.css';
import '../css/style.css';
import '../css/Project.css';

import React from 'react';

import ProfileHeader from "./ProfileHeader.js"
import Discography from "./Discography.js";
import Popular from "./Popular.js";
import About from "./About.js"


export default function ProfilePage() { /* function for compiling the whole profile page*/
    return (
 
  <div>
     <img className="header-background-image" src="./content/Images-Profile/slide.jpg"/>
     <ProfileHeader type={"UX Designer and Web Developer"} title={"Eamonn Burke"} desc={"View Resume"} src={"./content/Images-Profile/profile.png"}/>
     <div className="page-content">
      <Popular />
      <Discography />
     </div>
     <About />
  </div>
    );
   
}


