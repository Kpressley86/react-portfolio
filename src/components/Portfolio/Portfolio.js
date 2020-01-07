import React from 'react';
import './Portfolio.css';
import Crystal from '../images/crystal2.gif'

const Portfolio = () => {
    return (
        <div className="Portfolio">

            {/* <!-- ROW 1 --> */}
            <div className="row">

                <div className="item">
                    <img src={Crystal} className="Crystal" alt="Crystal" />
                    <h5 type="button" onClick="parent.open('https://kpressley86.github.io/crystalCollector/')"
                        className="neon z-up">Crystal Collector</h5>
                </div>

                <div className="item">
                    <h5 type="button" onClick="parent.open('https://kpressley86.github.io/Greyjoys-Project-1/')"
                        className="neon">Golf Pro</h5>
                </div>
            </div>

            {/* <!-- ROW 2 --> */}
            <div className="row">

                <div className="item">
                    <h5 type="button" onClick="parent.open('https://kpressley86.github.io/train-schedule/')"
                        className="neon">Train Schedule</h5>
                </div>

                <div className="item">
                    <h5 type="button" onClick="parent.open('https://kpressley86.github.io/TriviaGame/')"
                        className="neon"> Trivia Game</h5>
                </div>
            </div>

            {/* <!-- ROW 3 --> */}
            <div className="row">

                <div className="item">
                    <div className="d-md-block">
                        <h5 type="button" onClick="parent.open('https://kpressley86.github.io/Word-Guess-Game/')"
                            className="neon">Word Guess</h5>
                    </div>
                </div>

                <div className="item">
                    <h5 type="button" onClick="parent.open('https://kpressley86.github.io/GifTastic/')"
                        className="neon">Giphy</h5>
                </div>
            </div>

            {/* <!-- ROW 4 --> */}
            <div className="row">

                <div className="item">
                    <h5 type="button" onClick="parent.open('https://kpressley86.github.io/unit-4-game/')"
                        className="neon">RPG Game</h5>
                </div>

                <div className="item">
                    <h5 type="button" onClick="parent.open('https://github.com/Kpressley86/liri-node-app')"
                        className="neon">Liri-Bot</h5>
                </div>
            </div>

            {/* <!-- ROW 5 --> */}
            <div className="row">

                <div className="item">
                    <h5 type="button" onClick="parent.open('https://github.com/Kpressley86/bamazon')"
                        className="neon">Bamazon App</h5>
                </div>

                <div className="item">
                    <h5 type="button" onClick="parent.open('https://desperate-people.herokuapp.com/')"
                        className="neon">Friend Finder App</h5>
                </div>
            </div>

        </div>
    );
}

export default Portfolio;