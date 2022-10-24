import lehigh_image from '../assets/lehigh_logo2.jpg';
import './Projects.css';

function TeachingAssistant(props) {

    props.parentCallback(false);

    return (
        <div class="Project">
        <h2>Teaching Assistant</h2>
        <img className="Project-lehigh-logo" src={lehigh_image} alt="lehigh_logo" />
        <div className="Project-content">
            <br />
            I am currently a Teaching Assistant for Lehigh University's Software Engineering course. 
            <br />
            <br />
            My responsibilities include serving as a mentor, guide, and supporter of 3 teams in the development of an Agile full stack project.
            I lead team meetings by fostering productive conversation, ensure my groups are following best practices while developing their code, and help resolve issues in both the software and team dynamics.
            <br />
            <br />
            Helping others and being a leader has always been something I enjoy. I once was an eagle scout, and I still carry on the same leadership qualities. I find it rewarding to assist and advise students early in their academic career, while also learning new things from them.
        </div>
        <div class="Project-return" onClick={() => { window.location = "/work" }}>
            See other work
        </div>
    </div>
    );
}

export default TeachingAssistant;