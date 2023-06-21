import React from 'react'
import BannerImage from "../assets/pizza.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage}`}}>
        <div className="headerContainer">
            <h1>Viking Pizzeria</h1>
            <p>PIZZA  KEBAB  SALLAD  GRILL</p>
        </div>
    </div>
  )
}

export default Home