import React, { useState, useEffect } from "react";
import elkonlogo from '../elkonlogo.png';
import '../styles/navbar.css';
import searchicon from '../searchicon.png';
import searchicon_black from '../searchicon_black.png';

export default function Navbar() {
  var [lastScroll, setLastScroll] = useState(0);
  var [scrolledUp, setScrolledUp] = useState(false);

  function handleScroll() {
    let currentScroll = window.scrollY;
    if (currentScroll - lastScroll > 0 || currentScroll === 0) {
      setScrolledUp(false);
    }
    else {
      setScrolledUp(true);
    }
    setLastScroll(currentScroll);
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <div id="navbar" className={scrolledUp ? "navbar_scrolledUp" : "navbar_scrolledDown"}>
      <div id="logocontainer">
        <img src={elkonlogo} alt="elkonlogo" id="logo"></img>
      </div>
      <div id="linkcontainer">
        <a href="#" className={scrolledUp ? "tag_scrolledUp" : "tag_scrolledDown"}>Corporate</a>
        <a href="#" className={scrolledUp ? "tag_scrolledUp" : "tag_scrolledDown"}>Products</a>
        <a href="#" className={scrolledUp ? "tag_scrolledUp" : "tag_scrolledDown"}>References</a>
        <a href="#" className={scrolledUp ? "tag_scrolledUp" : "tag_scrolledDown"}>Sustainability</a>
        <a href="#" className={scrolledUp ? "tag_scrolledUp" : "tag_scrolledDown"}>Media</a>
        <a href="#" className={scrolledUp ? "tag_scrolledUp" : "tag_scrolledDown"}>Career</a>
        <a href="#" className={scrolledUp ? "tag_scrolledUp" : "tag_scrolledDown"}>Contact</a>
        <div id="selectcontainer">
          <select id="select" className="select" defaultValue="english">
            <option className="option" lang="en" value="english" selected>EN</option>
            <option className="option" lang="fr" value="francais">FR</option>
            <option className="option" lang="it" value="italiano">IT</option>
          </select>
        </div>
        <a href="#" id="searchbutton" className="searchbutton">
          {!scrolledUp &&
            <img src={searchicon} alt="searchicon" className="searchicon"></img>
          }
          {scrolledUp &&
            <img src={searchicon_black} alt="searchicon" className="searchicon"></img>
          }
        </a>
      </div>
    </div>
  )
}
