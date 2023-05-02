

import Overview from "./Overview"
import ResearchMethods from "./ResearchMethods"
import Evidence from "./Evidence"
import Insights from "./Insights"

import {Projects} from "../Project-Components/ProjectData.js"

import Header from "../Pages/Header.js"

import {useLocation }
    from "react-router-dom";


export default function ReXplore() { /* compiling the ReXplore page */

    const { search }=useLocation();
    const query=new URLSearchParams(search);
    const name=query.get("name");

    const currentProject=Projects["ReXplore"];

  return (

    <div>
      <Header type={currentProject.category} title={currentProject.name} desc={currentProject.headerTag} src={ "./content/" + currentProject.headerSrc} link={currentProject.link}/>
      <div className="page-content">
        <Overview/>
        <ResearchMethods />
        <Evidence />
        <Insights />
      </div>
      <div id="song-description"></div>
    </div>

  );
}
