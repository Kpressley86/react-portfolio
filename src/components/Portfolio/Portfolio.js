import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className="Portfolio">
            <div>

                {/* <!-- ROW 1 --> */}
                <div className="row">
                    <div>
                        <div className="item">
                            <h5 type="button" onClick="parent.open('https://kpressley86.github.io/crystalCollector/')"
                                className="neon z-up">CLICK<br />Crystal Collector</h5>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h5 type="button" onClick="parent.open('https://kpressley86.github.io/Greyjoys-Project-1/')"
                                className="neon">CLICK<br />Golf Pro</h5>
                        </div>
                    </div>

                </div>

                {/* <!-- ROW 2 --> */}
                <div className="row">

                    <div>
                        <div className="item">
                            <h5 type="button" onClick="parent.open('https://kpressley86.github.io/train-schedule/')"
                                className="neon">CLICK<br />Train Schedule</h5>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h5 type="button" onClick="parent.open('https://kpressley86.github.io/TriviaGame/')" className="neon">CLICK<br />Trivia Game</h5>
                        </div>
                    </div>

                </div>

                {/* <!-- ROW 3 --> */}
                <div className="row">

                    <div>
                        <div className="item">
                            <div className="d-md-block">
                                <h5 type="button" onClick="parent.open('https://kpressley86.github.io/Word-Guess-Game/')"
                                    className="neon">CLICK<br />Word Guess</h5>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h5 type="button" onClick="parent.open('https://kpressley86.github.io/GifTastic/')" className="neon">CLICK<br />Giphy</h5>
                        </div>
                    </div>

                </div>

                {/* <!-- ROW 4 --> */}
                <div className="row">

                    <div>
                        <div className="item">
                            <h5 type="button" onClick="parent.open('https://kpressley86.github.io/unit-4-game/')" className="neon">CLICK<br />RPG Game</h5>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h5 type="button" onClick="parent.open('https://github.com/Kpressley86/liri-node-app')"
                                className="neon">CLICK<br />Liri-Bot</h5>
                        </div>
                    </div>

                </div>

                {/* <!-- ROW 5 --> */}
                <div className="row">

                    <div>
                        <div className="item">
                            <h5 type="button" onClick="parent.open('https://github.com/Kpressley86/bamazon')" className="neon">CLICK<br />Bamazon App</h5>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <h5 type="button" onClick="parent.open('https://desperate-people.herokuapp.com/')" className="neon">CLICK<br />Friend Finder App</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;