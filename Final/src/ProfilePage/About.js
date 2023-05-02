import '../css/Profile.css';
import '../css/style.css';

export default function About() { /* A function for the about section of the profile page */


    return (
        <div className="profile-section">
            
            <div className="description-box">
                <div className="about">
                    <div className="section-title">About</div>
                    <div className="entry-desc">I am currently a senior at Carnegie Mellon University studying at the intersection of design, computer science, behavioral science, and statistics. My specific area of interest is in the development and design of music streaming platforms, but I have experience designing and developing interfaces for a wide variety of use cases, including healthcare, social involvement, and security technologies. </div>
                    <div className="contact">
                        <img className="contact-image" src="./content/Images-Profile/mail.png"/>
                        <div className="contact-desc">eamonnpame@gmail.com</div>
                    </div>
                </div>
            </div>

        </div>

    );

};

