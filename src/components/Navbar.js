import React from "react";
import elkonlogo from '../elkonlogo.png';
import '../styles/navbar.css';
import searchicon from '../searchicon.png';


export default function Navbar() {
  return (
    <div className="navbar">
      <img src={elkonlogo} alt="elkonlogo" className="logo"></img>
      <div className="linkcontainer">
        <a href="#" className="tag">Corporate</a>
        <a href="#" className="tag">Products</a>
        <a href="#" className="tag">References</a>
        <a href="#" className="tag">Sustainability</a>
        <a href="#" className="tag">Media</a>
        <a href="#" className="tag">Career</a>
        <a href="#" className="tag">Contact</a>
        <select name="language-picker-select" id="language-picker-select" className="select" defaultValue="english">
          <option lang="en" value="english" selected>EN</option>
          <option lang="fr" value="francais">FR</option>
          <option lang="it" value="italiano">IT</option>
        </select>
        <a href="#" className="searchbutton">
          <img src={searchicon} alt="searchicon" className="searchicon"></img>
        </a>
      </div>
    </div>
  )
}
