import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
      <div className="SideBar">
              <div>
                <nav>
                    <a href="#about">About</a> |
                    <a href="#portfolio">Portfolio</a> |
                    <a href="#resume">Resume</a> |
                    <a href="#contact">Contact</a>
                </nav>
            </div>
      </div>
    );
  }
  
  export default SideBar;