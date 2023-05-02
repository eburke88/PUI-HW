
import { InsightData } from "./ReXploreData"
import Insight from "../Project-Components/Insight"

export default function Insights (){ /* insights section for ReXplore*/
    return (
        <div className="profile-section">
            <div className="section-title">Insights</div>
            {InsightData.map(p => (
            <Insight {...p} />
            ))
            }
        </div>

      );
}