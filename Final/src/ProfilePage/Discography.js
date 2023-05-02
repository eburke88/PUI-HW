import React, { useState } from "react";

import '../css/Profile.css';
import '../css/style.css';
import '../css/Project.css';

import {Projects} from "../Project-Components/ProjectData"
import ProjectEntry from "./ProjectEntry";
import Toggles from "./Toggles.js";



export default function Discography() { /* the function for the discography section */

  const allCategories=[...new Set(Object.values(Projects).map((z) => z.category))];
  const [currentCat, setCurrentCat]=useState("UI/UX Design") /* use this category at first */

  

  const currentProjects=Object.values(Projects).filter((newProject) => { /* getting an array of project values based on toggle clicked */
    return newProject.category === currentCat; 
  });

  return (
    <div className="profile-section">

      <div className="section-title">Discography</div> 
      <Toggles currentCat={currentCat} setCurrentCat={setCurrentCat} allCategories={allCategories} />  {/* render toggles */}

      <div className="section-row">
          {currentProjects.map(p => {
            
            return <ProjectEntry {...p}/> /* create project entries based on the projects in currentProjects, and put them in flex box */
            
          })
          }
          
      </div>

    </div>
  );
}


