import React from 'react';
import logo from '../assets/logo.png';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftside">
            <img src={logo} />
        </div>
        <div className="rightside">
            <h2>Mariestads bästa pizzeria</h2>
        </div>
    </div>
  )
}

export default Navbar