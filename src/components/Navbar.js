import React from "react";
import elkonlogo from '../elkonlogo.png';
import '../styles/navbar.css';
import searchicon from '../searchicon.png';

export default function Navbar() {
  return (
    <div id="navbar">
      <div id="logocontainer">
        <img src={elkonlogo} alt="elkonlogo" id="logo"></img>
      </div>
      <div id="linkcontainer">
        <a href="#" className="tag">Corporate</a>
        <a href="#" className="tag">Products</a>
        <a href="#" className="tag">References</a>
        <a href="#" className="tag">Sustainability</a>
        <a href="#" className="tag">Media</a>
        <a href="#" className="tag">Career</a>
        <a href="#" className="tag">Contact</a>
        <div id="selectcontainer">
          <select id="select" className="select" defaultValue="english">
            <option className="option" lang="en" value="english" selected>EN</option>
            <option className="option" lang="fr" value="francais">FR</option>
            <option className="option" lang="it" value="italiano">IT</option>
          </select>
        </div>
        <a href="#" id="searchbutton" className="searchbutton">
          <img src={searchicon} alt="searchicon" className="searchicon"></img>
        </a>
      </div>
    </div>
  )
}
