import {EvidenceData} from "./ReXploreData"
import Quote from "./quote"

export default function Evidence (){ /* evidence section for ReXplore*/
    return (
        <div className="profile-section">
            <div className="section-title">Evidence</div>
            {EvidenceData.map(p => (
            <Quote {...p} />
            ))
            }
        </div>

      );
}