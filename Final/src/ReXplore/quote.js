import '../css/Profile.css';
import '../css/style.css';
import '../css/Project.css';


export default function Quote(props) { /* style a quote */

    return (
            <div className="content-container">
                <div className="entry-title">{props.quote}</div>
                <div className="quote-src">{props.src}</div>
            </div>
    );

};