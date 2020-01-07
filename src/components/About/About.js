import React from 'react';
import KP from '../images/KP.jpg'
import './About.css';

const About = () => {
    return (
        <div className="About">
            <div>
                <div className="imageBorder">
                <img src={KP} className="KP" alt="KP" />
                </div>
            </div>
            <div>
                <div>
                    <h3>
                        Hi, my name is Kelly Pressley. I am curently attending a Full-Stack Bootcamp at the University
                        of Arizon. Thank you for checking out my website. Please feel free to look at my Porfolio link
                        for all my projects. Contact page will be working soon! But until then my GitHub, LinkedIn, and
                        StackOverflow are other ways to contact me.
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default About;