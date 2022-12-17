import nutradata_logo from './assets/nutradata_logo.png';
import hungry_hawks_image from './assets/hungry_hawks_image.jpeg';
// import carina_nebula_image from './carina_nebula.png';
import lehigh_image from './assets/lehigh_logo.png';
import new_self_portrait from './assets/Ethan_headshot_1.jpg';
import instagram_icon from './assets/instagram_icon.png';
import linkedin_icon from './assets/linkedin_icon.png';
import './App.css';

function Home(props) {

    props.parentCallback(true);

    return (
        <div>
            <div className="App-header">
                {/* <img src={carina_nebula_image} className="App-header-img" alt="Carina_Nebula"/> */}
                {/* <img src={logo} className="App-logo" alt="logo" /> */}

                <div className="App-header-portrait">
                    <img src={new_self_portrait} className="App-header-portrait-img" alt="self_portrait" />
                </div>
                <div className="App-header-description">
                    <div className="App-header-description-hello">Hello, I'm</div>
                    <div className="App-header-description-name">Ethan.</div>
                    <div className="App-header-description-content">A passionate Lehigh University senior looking to shape the future of software development.</div>
                    <div className="App-header-description-links">
                        <div className="App-header-description-links-individual1" onClick={() => { window.open("https://linkedin.com/in/ethansantalone") }}>
                            <img src={linkedin_icon} className="linkedin" alt="linkedin_icon" />
                        </div>
                        <div className="App-header-description-links-individual2" onClick={() => { window.open("https://github.com/ethansantalone") }}>
                            <svg className="github" preserveAspectRatio="xMidYMid meet" viewBox="0 0 17 17">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </div>
                        <div className="App-header-description-links-individual3" onClick={() => { window.open("https://instagram.com/ethansantalone") }}>
                            <img src={instagram_icon} className="instagram" alt="instagram_icon" />
                        </div>
                    </div>
                </div>
                {/* <div className="App-header-fade"></div> */}
            </div>
            <div className="projects-container">
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
    );
}

export default Home;