import hungry_hawks_image from '../assets/hungry_hawks_image4.png';
import './Projects.css';

function HungryHawks(props) {

    props.parentCallback(false);

    return (
        <div className="Project">
            <h2>Hungry Hawks</h2>
            <img className="Project-hawks-logo" src={hungry_hawks_image} alt="hungry_hawks_logo" />
            <div className="Project-content">
                <br />
                I am currently a developer for Hungry Hawks, a project focused on reducing food waste and tackling food insecurity at Lehigh University. 
                <br />
                <br />
                Users are notified about left over food from various campus events and they are then able to go to these locations and get the food, free of charge. 
                So far, we have amassed a growing active user base of over 1,500 users and have saved an estimated 5,000 lbs of food waste.
                <br />
                <br />
                My most recent efforts have been in both software and business development. 
                This includes refactoring the codebase to more actively handle asynchronous database calls and ensuring compliance with new app store guidelines. 
                Additionally, I am working with Lehigh's Office of Sustainability to increase platform awareness by reaching out to various clubs and organizations for interest in using the app.
                <br />
                <br />
                To learn more about our efforts, <a target="_blank" rel="noopener noreferrer" href="https://hungryhawks.lehigh.edu/">click here.</a>
            </div>
            <div class="Project-return" onClick={() => { window.location = "/work" }}>
                See other work
            </div>
        </div>
    );
}

export default HungryHawks;