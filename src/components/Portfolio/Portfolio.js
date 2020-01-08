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
                        <a href="https://kpressley86.github.io/crystalCollector">
                            <img src={Crystal} className="portimg" alt="Crystal" />
                        </a>
                        <div>
                        <h2 className="neon1">Crystal Collector</h2>
                        </div>
                    </div>

                    <div className="item2">
                        <a href="https://kpressley86.github.io/Greyjoys-Project-1/">
                            <img src={Crystal} className="portimg" alt="GolfPro" />
                        </a>
                        <div>
                        <h2 className="neon1">Golf Pro</h2>
                        </div>
                    </div>
                </div>

                {/* <!-- ROW 2 --> */}
                <div className="row">

                    <div className="item1">
                    <a href="https://kpressley86.github.io/train-schedule/">
                        <img src={Crystal} className="portimg" alt="Train" />
                        </a>
                        <div>
                        <h2 className="neon1">Train Schedule</h2>
                        </div>
                    </div>

                    <div className="item2">
                    <a href="https://kpressley86.github.io/TriviaGame/">
                        <img src={Crystal} className="portimg" alt="TriviaGame" />
                        </a>
                        <div>
                        <h2 className="neon1">Trivia Game</h2>
                        </div>
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
                        <a href="https://kpressley86.github.io/GifTastic/">
                            <img src={Giphy} className="portimg" alt="Giphy" />
                        </a>
                        <div>
                        <h2 className="neon1">Giphy</h2>
                        </div>
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
                    <a href="https://github.com/Kpressley86/liri-node-app">
                        <img src={Liri} className="portimg" alt="Liri" />
                        </a>
                        <div>
                        <h2 className="neon1">Liri-Bot</h2>
                        </div>
                    </div>
                </div>

                {/* <!-- ROW 5 --> */}
                <div className="row">

                    <div className="item1">
                    <a href="https://github.com/Kpressley86/bamazon">
                        <img src={Bam} className="portimg" alt="Bam" />
                        </a>
                        <div>
                        <h2 className="neon1">Bamazon</h2>
                        </div>
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