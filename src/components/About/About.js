import React from 'react';
import logo from '../images/orb.gif';
import KP from '../images/KP.jpg'
import './About.css';

const About = () => {
    return (
        <div className="About">
            <div className="border1">
                <div className="border2">
                    <div className="imageBorder">
                        <img src={KP} className="KP" alt="KP" />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>
                        Hi, my name is Kelly Pressley. I am curently attending a Full-Stack Bootcamp at the University
                        of Arizon. Thank you for checking out my website. Please feel free to look at my Porfolio link
                        for all my projects. Contact page will be working soon! But until then my GitHub, LinkedIn, and
                        StackOverflow are other ways to conect with me.
                    </h3>
                </div>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default About;