import nutradata_logo from '../assets/nutradata_logo.png';
import './Projects.css';


function NutraData(props) {

    props.parentCallback(false);

    return (
        <div class="Project">
            <h2>NutraData</h2>
            <div className="Project-nutradata-parent">
                <img className="Project-nutradata-logo" src={nutradata_logo} alt="nutradata_logo" />
            </div>
            <div className="Project-content">
                <br />
                During the summer of 2022, I worked as a Full Stack Software Engineering Intern for NutraData, a start up based in the Lehigh Valley.
                <br />
                <br />
                I built an administrative user interface for their dietary supplement tracking system. Its components provided the abilities to manually insert, update, and disable database products. 
                It also provided the ability to download products from the National Institute of Health's Dietary Supplement Label Database (DSLD). 
                This functionality was fully automated through the creation of a script that generated scalable self-terminating AWS Elastic Compute Cloud instances. These instances would
                update any current products that had been modified in the DSLD, insert any new products, ensure the latest versions of each product was stored, all while not modifying any disabled products. 
                Any currently running instance could have its status checked, and cancelled if need be. 
                Following the completion of a full download, various metrics would be stored, and could be displayed on the website.
                <br />
                <br />
                During the course of my internship I also identified critical database issues that rendered the site almost entirely unusable. 
                I swiftly developed a feature to iterate through all products to correct the data inaccuracies, which modified nearly 70% of the current data.
            </div>
            <div class="Project-return" onClick={() => { window.location = "/work" }}>
                See other work
            </div>
        </div>
    );
}

export default NutraData;