import nutradata_logo from '../assets/nutradata_logo.png';
import hungry_hawks_image from '../assets/hungry_hawks_image.jpeg';
// import carina_nebula_image from './carina_nebula.png';
import lehigh_image from '../assets/lehigh_logo.png';
import new_self_portrait from '../assets/self_portrait.jpeg';
import instagram_icon from '../assets/instagram_icon.png';
import linkedin_icon from '../assets/linkedin_icon.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';

function Work(props) {

    props.parentCallback(false);

    return (
        <div>
            <div className="projects-container">
                <div className="projects-container-work"></div>
                <h1 className="projects-title">Recent Projects</h1>
                <div className="projects-item" onClick={() => { window.location = "/work/nutradata" }}>
                    <div className="projects-item-caption">
                        <h4 className="projects-item-caption-type">
                            Job / Internship
                        </h4>
                        <h1 className="projects-item-caption-header">
                            NutraData
                        </h1>
                        <div className="projects-item-caption-description">
                            Full-Stack Software Engineering intern. Developed administrative functionality and resolved critical database issues.
                        </div>
                        <div className="projects-item-caption-more">Learn more</div>
                    </div>
                    <div className="projects-item-img">
                        <div className="nutradata-parent">
                            <img className="nutradata-logo" src={nutradata_logo} alt="nutradata_logo" />
                        </div>
                    </div>
                </div>
                <div className="projects-item" onClick={() => { window.location = "/work/hungryhawks" }}>
                    <div className="projects-item-caption">
                        <h4 className="projects-item-caption-type">
                            Technical Project
                        </h4>
                        <h1 className="projects-item-caption-header">
                            Hungry Hawks
                        </h1>
                        <div className="projects-item-caption-description">
                            Front end developer for application that provides Lehigh students with access to leftover food around campus. Addressing food insecurity in partnership with Office of Sustainability.
                        </div>
                        <div className="projects-item-caption-more">Learn more</div>
                    </div>
                    <div className="projects-item-img">
                        <img className="hawks-logo" src={hungry_hawks_image} alt="hungry_hawks_image" />
                    </div>
                </div>
                <div className="projects-item" onClick={() => { window.location = "/work/teachingassistant" }}>
                    <div className="projects-item-caption">
                        <h4 className="projects-item-caption-type">
                            Job / Internship
                        </h4>
                        <h1 className="projects-item-caption-header">
                            Software Engineering Teaching Assistant
                        </h1>
                        <div className="projects-item-caption-description">
                            Mentoring teams in the development of an Agile full stack project by leading team meetings, ensuring best practices, suggesting software implementations, and helping debug code.
                        </div>
                        <div className="projects-item-caption-more">Learn more</div>
                    </div>
                    <div className="projects-item-img">
                        <div className="nutradata-parent">
                            <img className="hawks-logo" src={lehigh_image} alt="lehigh_image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;