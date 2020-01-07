import React from 'react';
import './Portfolio.css';
import Crystal from '../images/crystal2.gif';
import Bam from '../images/bam.gif';
import Liri from '../images/liri.gif';
import Giphy from '../images/giphy.gif';

const Portfolio = () => {





    
    return (
        <div><h1 className="port">PORTFOLIO</h1>
            <div className="Portfolio">

                {/* <!-- ROW 1 --> */}
                <div className="row">

                    <div className="item1">
                        <img src={Crystal} className="Crystal" alt="Crystal" />
                        <h5 type="button" onClick="parent.open('https://kpressley86.github.io/crystalCollector/')"
                            className="neon1 z-up">Crystal Collector</h5>
                    </div>

                    <div className="item2">
                    <img src={Crystal} className="Crystal" alt="Crystal" />
                        <h5 type="button" onClick="parent.open('https://kpressley86.github.io/Greyjoys-Project-1/')"
                            className="neon1">Golf Pro</h5>
                    </div>
                </div>

                {/* <!-- ROW 2 --> */}
                <div className="row">

                    <div className="item1">
                    <img src={Crystal} className="Crystal" alt="Crystal" />
                        <h5 type="button" onClick="parent.open('https://kpressley86.github.io/train-schedule/')"
                            className="neon1">Train Schedule</h5>
                    </div>

                    <div className="item2">
                    <img src={Crystal} className="Crystal" alt="Crystal" />
                        <h5 type="button" onClick="parent.open('https://kpressley86.github.io/TriviaGame/')"
                            className="neon1"> Trivia Game</h5>
                    </div>
                </div>

                {/* <!-- ROW 3 --> */}
                <div className="row">

                    <div className="item1">
                    <img src={Crystal} className="Crystal" alt="Crystal" />  
                            <h5 type="button" onClick="parent.open('https://kpressley86.github.io/Word-Guess-Game/')"
                                className="neon1">Word Guess</h5>
                    </div>

                    <div className="item2">
                    <img src={Giphy} className="Giphy" alt="Giphy" />
                        <h5 type="button" onClick="parent.open('https://kpressley86.github.io/GifTastic/')"
                            className="neon1">Giphy</h5>
                    </div>
                </div>

                {/* <!-- ROW 4 --> */}
                <div className="row">

                    <div className="item1">
                    <img src={Crystal} className="Crystal" alt="Crystal" />
                        <h5 type="button" onClick="parent.open('https://kpressley86.github.io/unit-4-game/')"
                            className="neon1">RPG Game</h5>
                    </div>

                    <div className="item2">
                    <img src={Liri} className="Liri" alt="Liri" />
                        <h5 type="button" onClick="parent.open('https://github.com/Kpressley86/liri-node-app')"
                            className="neon1">Liri-Bot</h5>
                    </div>
                </div>

                {/* <!-- ROW 5 --> */}
                <div className="row">

                    <div className="item1">
                    <img src={Bam} className="Bam" alt="Bam" />
                        <h5 type="button" onClick="parent.open('https://github.com/Kpressley86/bamazon')"
                            className="neon1">Bamazon App</h5>
                    </div>

                    <div className="item2">
                    <img src={Crystal} className="Crystal" alt="Crystal" />
                        <h5 type="button" onClick="parent.open('https://desperate-people.herokuapp.com/')"
                            className="neon1">Friend Finder App</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;