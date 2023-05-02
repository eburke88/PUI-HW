import '../css/Profile.css';
import '../css/style.css';
import '../css/Project.css';


export default function Header({type, title, src, alt, link, desc}) { /* A header template that will be filled by varying content*/

    return (
          
    <div className="header-box">
    <div className="header">

      <img className="header-image" src={src} alt={alt}/>

      <div className="header-info">
          <div className="header-type">{type}</div>
          <div className="header-title">{title}</div>
          <a className="header-desc" href={link} target="_blank" rel="noopener">{desc}</a>
      </div>

    </div>

  </div>
    );
}