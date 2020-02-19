import React from 'react';
import Header from './components/Header/Header';
import SideNav from './components/SideNavPage/SideNav';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
// import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App"> 
    <div className="header"><Header /></div>
    <div className="sideNav"><SideNav /></div>
    <div id="About" className="about" ><About /></div>
    <div id="Portfolio" className="portfolio"><Portfolio /></div>
    {/* <div id="Resume" className="resume"><Resume /></div> */}
    <div id="Contact" className="contact"><Contact /></div>
    <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
