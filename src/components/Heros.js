import React, { useState } from "react";
import Hero from "./Hero";
import '../styles/heros.css';
import buttonright from '../buttonright.png';
import buttonleft from '../buttonleft.png';

export default function Heros() {
    var [activeSlide, setActiveSlide] = useState(0);
    function rightSlide() {
        if (activeSlide < 2) {
            setActiveSlide(activeSlide + 1);
        }
        else {
            setActiveSlide(0);
        }
    }
    function leftSlide() {
        if (activeSlide === 0) {
            setActiveSlide(2);
        }
        else {
            setActiveSlide(activeSlide - 1);
        }
    }
    return (
        <div id="heroscontainer" >
            <Hero activeSlide={activeSlide} />
            <div id="slidebuttoncontainer">
                <img src={buttonleft} alt="buttonleft" className="slidebutton" onClick={rightSlide}></img>
                <img src={buttonright} alt="buttonright" className="slidebutton" onClick={rightSlide}></img>
            </div>
            <div id="indicatorcontainer">
                {
                    (activeSlide === 0) &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="3" viewBox="0 0 100 3" fill="none" className="indicator">
                        <rect x="0" width="30" height="3" rx="1.5" fill="#009FE3" onClick={() => setActiveSlide(0)} />
                        <rect x="40" width="30" height="3" rx="1.5" fill="white" onClick={() => setActiveSlide(1)} />
                        <rect x="80" width="30" height="3" rx="1.5" fill="white" onClick={() => setActiveSlide(2)} />
                    </svg>

                }
                {
                    (activeSlide === 1) &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="3" viewBox="0 0 100 3" fill="none" className="indicator">
                        <rect x="0" width="30" height="3" rx="1.5" fill="white" onClick={() => setActiveSlide(0)} />
                        <rect x="40" width="30" height="3" rx="1.5" fill="#009FE3" onClick={() => setActiveSlide(1)} />
                        <rect x="80" width="30" height="3" rx="1.5" fill="white" onClick={() => setActiveSlide(2)} />
                    </svg>
                }
                {
                    (activeSlide === 2) &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="3" viewBox="0 0 100 3" fill="none" className="indicator">
                        <rect x="0" width="30" height="3" rx="1.5" fill="white" onClick={() => setActiveSlide(0)} />
                        <rect x="40" width="30" height="3" rx="1.5" fill="white" onClick={() => setActiveSlide(1)} />
                        <rect x="80" width="30" height="3" rx="1.5" fill="#009FE3" onClick={() => setActiveSlide(2)} />
                    </svg>
                }
            </div>
        </div>
    )

}