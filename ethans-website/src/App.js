import nutradata_logo from './nutradata_logo.png';
import hungry_hawks_image from './hungry_hawks_image.jpeg';
import carina_nebula_image from './carina_nebula.png';
import lehigh_image from './lehigh_logo.png';
import new_self_portrait from './self_portrait.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={carina_nebula_image} class="App-header-img" alt="Carina_Nebula"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div class="navigation-overlay-blur"></div>
        <div class="navigation-overlay-line"></div>
        <div class="navigation">
            <div class="navigation-left" onClick={() => {window.scrollTo({top: 0, left: 0, behavior: 'smooth' })}}>Ethan Santalone</div>
            <div class="navigation-right" onClick={() => {window.scrollTo({top: window.innerHeight * .92, left: 0, behavior: 'smooth' })}}>Projects</div>
            <div class="navigation-right" onClick={() => {window.open("https://github.com/ethansantalone")}}>Github</div>
            <div class="navigation-right" onClick={() => {window.open("mailto:ethansantalone@outlook.com")}}>Contact</div>
        </div>
        <div class="App-header-portrait">
          <img src={new_self_portrait} class="App-header-portrait-img" alt="self_portrait"/>
        </div>
        <div class="App-header-description">
          <div class="App-header-description-hello">Hello, I'm</div>
          <div class="App-header-description-name">Ethan.</div>
          <div class="App-header-description-content">A passionate Lehigh University senior looking to shape the future of software development.</div>
        </div>
        <div class="App-header-fade"></div>
      </div>
      <div class="projects-container">
        <h1 class="projects-title">Recent Projects</h1>
        <div class="projects-item">
          <div class="projects-item-caption">
            <h4 class="projects-item-caption-type">
              Job / Internship
            </h4>
            <h1 class="projects-item-caption-header">
              NutraData
            </h1>
            <div class="projects-item-caption-description">
              Full Stack Software Engineering intern. Developed an administrative user interface and resolved critical database issues.
            </div>
            <div class="projects-item-caption-more">Learn more</div>
          </div>
          <div class="projects-item-img">
            <div class="nutradata-parent">
              <img class="nutradata-logo" src={nutradata_logo} alt="nutradata_logo" />
            </div>
          </div>
        </div>
        <div class="projects-item">
          <div class="projects-item-caption">
            <h4 class="projects-item-caption-type">
              Technical Project
            </h4>
            <h1 class="projects-item-caption-header">
              Hungry Hawks
            </h1>
            <div class="projects-item-caption-description">
            Wrote Flutter application to allow Lehigh students to access leftover food around campus to address food insecurity in partnership with Office of Sustainability
            </div>
            <div class="projects-item-caption-more">Learn more</div>
          </div>
          <div class="projects-item-img">
              <img class="hawks-logo" src={hungry_hawks_image} alt="hungry_hawks_image" />
          </div>
        </div>
        <div class="projects-item">
          <div class="projects-item-caption">
            <h4 class="projects-item-caption-type">
              Job / Internship
            </h4>
            <h1 class="projects-item-caption-header">
              Software Engineering Teaching Assistant
            </h1>
            <div class="projects-item-caption-description">
            Mentoring and guiding 3 teams in the development of an Agile full stack project by leading team meetings, ensuring best practices, suggesting software implementations, and helping debug code.
            </div>
            <div class="projects-item-caption-more">Learn more</div>
            {/* <div class="projects-item-caption-more">
              Learn more
            </div> */}
          </div>
          <div class="projects-item-img">
            <div class="nutradata-parent">
              <img class="hawks-logo" src={lehigh_image} alt="lehigh_image" />
            </div>
          </div>
        </div>
      </div>
      <footer class="App-footer">
        © 2022 — Designed & developed by Ethan Santalone
      </footer>
    </div>
  );
}

export default App;
