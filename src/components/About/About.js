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
                        of Arizon. I'm pretty fluent in JavaScript whether its DOM manipulation or making API calls. I built 
                        this website using React and a lot of help from Google.
                        Please feel free to look at my <a href="#Portfolio">Portfolio </a> for some of my recent projects. 
                        <a href="#Contact"> Contact</a> me if you have any questions or comments. Also my GitHub, LinkedIn, and
                        StackOverflow are other ways to conect with me. Links are at the bottom of the page.
                    </h3>
                </div>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    );
}

export default About;