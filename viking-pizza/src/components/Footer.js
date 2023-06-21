import React from 'react'
import "../styles/Footer.css";
import logojcbs from "../assets/logo-jcbs.png";

function Footer() {
  return (
    <div className="footer">
        <div className="footername">
            <img src={logojcbs} alt='logo'></img>
            <p>Priser uppdaterades 2023-05-16</p>
        </div>
    </div>
  )
}

export default Footer