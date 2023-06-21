import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home.js';
import Footer from './components/Footer';
import Menu from './Pages/Menu';
import Info from "./Pages/Info";
import Map from "./Pages/Map";
import Dagens from "./Pages/Dagens";

function App() {
  return (
    <div className="App">
      
      <Home/>
      <Dagens/>
      <Info/>
      <Menu/>
      
      <Footer/>
      <div className="float"><h3>Ring & beställ</h3><p>0501-142 42</p><p><a href='https://goo.gl/maps/UdEjSggb5TM831xE9' target='_blank'>Hitta till oss</a></p></div>
    </div>
  );
}

export default App;
