import React from 'react';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App"> <Header />
    <div><About /></div>
    <div><SideBar /></div>
    <div><Portfolio /></div>
    <div><Resume /></div>
    <div><Contact /></div>
    <div><Footer /></div>
    </div>
  );
}

export default App;
