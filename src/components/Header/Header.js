import React from 'react';
import logo from '../images/orb.gif';
import './Header.css';

const Header = () => {
    return (
<div className="Header">
      <header className="App-header">       
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <h1 className="name">KELLY PRESSLEY</h1>
      </header>
    </div>
    );
}

export default Header;