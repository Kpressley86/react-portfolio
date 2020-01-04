import React from 'react';
import logo from '../images/orb.gif';
import './Header.css';

const Header = () => {
    return (
<div className="Header">
      <header className="App-header">       
        <h2 className="name">KELLY
        <img src={logo} className="App-logo" alt="logo" />
          PRESSLEY
        </h2>
      </header>
    </div>
    );
}

export default Header;