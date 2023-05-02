import { PopularProjects } from "../Project-Components/ProjectData";
import PopularProject from "./PopularProject";


export default function Popular (){ /* function for the popular projects section */

    return (
        <div className="profile-section">
            <div className="section-title">Popular Releases</div>
            {PopularProjects.map(p => (
            <PopularProject {...p} /> /* pass objects in popularProjects to the section */
            ))
            }
        </div>

      );
}