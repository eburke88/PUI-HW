import '../css/Profile.css';
import '../css/style.css';
import '../css/Project.css';

export default function Toggles({ currentCat, setCurrentCat, allCategories }) { /* function for toggles in discography */
 
  return (
    <>
      <div className="toggles">
        {allCategories.map((catname) => { /* map from all categories to fill each button */
          return (
            <button
              className={catname === currentCat ? "selected-toggle" : "default-toggle"}
              onClick={() => setCurrentCat(catname)} /* set current category to the name of toggle clicked */
              key={catname}
            >
              {catname}
            </button>
          );
        })}
      
      </div>
    </>
  );
}
 

