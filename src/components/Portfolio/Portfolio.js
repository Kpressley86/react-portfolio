import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
    return (
      <div className="Portfolio">
          <div id="portfolio" class="container">

<!-- ROW 1 -->
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-4">
        <div class="item"
            style="background-image:url('./assets/images/crystal2.gif');padding:5px;border:1px solid black;">
            <h5 type=button onClick="parent.open('https://kpressley86.github.io/crystalCollector/')"
                class="neon z-up" style="background-color: black;text-align:center;">CLICK<br>Crystal Collector</h5>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="item"
            style="background-image:url('./assets/images/golf.gif');padding:5px;border:1px solid black;">
            <h5 type=button onClick="parent.open('https://kpressley86.github.io/Greyjoys-Project-1/')"
                class="neon" style="background-color: black;text-align:center;">CLICK<br>Golf Pro</h5>
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

<!-- ROW 2 -->
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-4">
        <div class="item"
            style="background-image:url('./assets/images/train.gif');padding:5px;border:1px solid black;">
            <h5 type=button onClick="parent.open('https://kpressley86.github.io/train-schedule/')"
                class="neon" style="background-color: black;text-align:center;">CLICK<br>Train Schedule</h5>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="item"
            style="background-image:url('./assets/images/trivia.gif');padding:5px;border:1px solid black;">
            <h5 type=button onClick="parent.open('https://kpressley86.github.io/TriviaGame/')" class="neon"
                style="background-color: black;text-align:center;">CLICK<br>Trivia Game</h5>
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

<!-- ROW 3 -->
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-4">
        <div class="item"
            style="background-image:url('./assets/images/dog.gif');padding:5px;border:1px solid black;">
            <div class="d-md-block">
                <h5 type=button onClick="parent.open('https://kpressley86.github.io/Word-Guess-Game/')"
                    class="neon" style="background-color: black;text-align:center;">CLICK<br>Word Guess</h5>
            </div>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="item"
            style="background-image:url('./assets/images/giphy.gif');padding:5px;border:1px solid black;">
            <h5 type=button onClick="parent.open('https://kpressley86.github.io/GifTastic/')" class="neon"
                style="background-color: black;text-align:center;">CLICK<br>Giphy</h5>
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

<!-- ROW 4 -->
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-4">
        <div class="item"
            style="background-image:url('./assets/images/jugger.gif');padding:5px;border:1px solid black;">
            <h5 type=button onClick="parent.open('https://kpressley86.github.io/unit-4-game/')" class="neon"
                style="background-color: black;text-align:center;">CLICK<br>RPG Game</h5>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="item"
            style="background-image:url('./assets/images/liri.gif');padding:5px;border:1px solid black;">
            <h5 type=button onClick="parent.open('https://github.com/Kpressley86/liri-node-app')"
                class="neon" style="background-color:black;text-align:center;">CLICK<br>Liri-Bot</h5>
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>

<!-- ROW 5 -->
<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm-4">
        <div class="item"
            style="background-image:url('./assets/images/bam.gif');padding:5px;border:1px solid black;">
            <h5 type=button onClick="parent.open('https://github.com/Kpressley86/bamazon')" class="neon"
                style="background-color: black;text-align:center;">CLICK<br>Bamazon App</h5>
        </div>
    </div>
    <div class="col-sm-4">
        <div class="item" style="background-image:url('');padding:5px;border:1px solid black;">
            <h5 type=button onClick="parent.open('https://desperate-people.herokuapp.com/')" class="neon"
                style="background-color: black;text-align:center;">CLICK<br>Friend Finder App</h5>
        </div>
    </div>
    <div class="col-sm-2"></div>
</div>
</div>
      </div>
    );
  }
  
  export default Portfolio;