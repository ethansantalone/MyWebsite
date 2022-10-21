import logo from './logo.svg';
import nutradata_logo from './nutradata_logo.png';
import hungry_hawks_image from './hungry_hawks_image.jpeg';
import carina__nebula_image from './carina_nebula.png';
import lehigh_image from './lehigh_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={carina__nebula_image} class="App-header-img" alt="Carina_Nebula"/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <div class="App-header-portrait"></div> */}
        <div class="App-header-description">
          Hello, my name is Ethan Santalone.
        </div>
      </header>
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
          </div>
          <div class="projects-item-img">
            <div class="nutradata-parent">
              <img class="hawks-logo" src={lehigh_image} alt="lehigh_image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
