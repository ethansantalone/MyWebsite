import nutradata_logo from '../assets/nutradata_logo.png';
import hungry_hawks_image from '../assets/hungry_hawks_image.jpeg';
// import carina_nebula_image from './carina_nebula.png';
import lehigh_image from '../assets/lehigh_logo.png';
import '../App.css';

import {useRef, useState} from 'react';

import useIsInViewport from '../useIsInViewport';

function Work(props) {

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const isInViewport1 = useIsInViewport(ref1);
    const isInViewport2 = useIsInViewport(ref2);
    const isInViewport3 = useIsInViewport(ref3);
    const [animateRef1, setAnimateRef1] = useState(false);
    const [animateRef2, setAnimateRef2] = useState(false);
    const [animateRef3, setAnimateRef3] = useState(false);
    if (isInViewport1 && !animateRef1) {
        setAnimateRef1(isInViewport1);
    }
    if (isInViewport2 && !animateRef2) {
        setAnimateRef2(isInViewport2);
    }
    if (isInViewport3 && !animateRef3) {
        setAnimateRef3(isInViewport3);
    }

    props.parentCallback(false);

    return (
        <div>
            <div className="projects-container">
                <div className="projects-container-work"></div>
                <h1 className="projects-title">Recent Projects</h1>
                <div className={animateRef1 ? "projects-animation" : "projects-invisible"}>
                    <div ref={ref1} className="projects-item" onClick={() => { window.location = "/work/nutradata" }}>
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
                </div>

                <div className={animateRef2 ? "projects-animation" : "projects-invisible"}>
                    <div ref={ref2} className="projects-item" onClick={() => { window.location = "/work/hungryhawks" }}>
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
                </div>
                <div className={animateRef3 ? "projects-animation" : "projects-invisible"}>
                    <div ref={ref3} className="projects-item" onClick={() => { window.location = "/work/teachingassistant" }}>
                        <div className="projects-item-caption">
                            <h4 className="projects-item-caption-type">
                                Job
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
        </div>
    );
}

export default Work;