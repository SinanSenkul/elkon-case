import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import '../styles/heros.css';

export default function Heros() {
    var [activeSlide, setActiveSlide] = useState(0);

    var timeOut;
    function rightSlide() {
        timeOut = setTimeout(() => {
            if (activeSlide < 2) {
                setActiveSlide(activeSlide + 1);
            }
            else {
                setActiveSlide(0);
            }
        }, 8000)
    }

    function handleClick(val) {
        clearTimeout(timeOut);
        setActiveSlide(val);
        rightSlide();
    }

    useEffect(() => {
        rightSlide();
    });

    return (
        <div id="heroscontainer" >
            <Hero activeSlide={activeSlide} />
            <div id="indicatorcontainer">
                {
                    (activeSlide === 0) &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="3" viewBox="0 0 100 3" fill="none" className="indicator">
                        <rect x="0" width="30" height="3" rx="1.5" fill="#009FE3" onClick={() => handleClick(0)} />
                        <rect x="40" width="30" height="3" rx="1.5" fill="white" onClick={() => handleClick(1)} />
                        <rect x="80" width="30" height="3" rx="1.5" fill="white" onClick={() => handleClick(2)} />
                    </svg>

                }
                {
                    (activeSlide === 1) &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="3" viewBox="0 0 100 3" fill="none" className="indicator">
                        <rect x="0" width="30" height="3" rx="1.5" fill="white" onClick={() => handleClick(0)} />
                        <rect x="40" width="30" height="3" rx="1.5" fill="#009FE3" onClick={() => handleClick(0)} />
                        <rect x="80" width="30" height="3" rx="1.5" fill="white" onClick={() => handleClick(2)} />
                    </svg>
                }
                {
                    (activeSlide === 2) &&
                    <svg xmlns="http://www.w3.org/2000/svg" width="230" height="3" viewBox="0 0 100 3" fill="none" className="indicator">
                        <rect x="0" width="30" height="3" rx="1.5" fill="white" onClick={() => handleClick(0)} />
                        <rect x="40" width="30" height="3" rx="1.5" fill="white" onClick={() => handleClick(1)} />
                        <rect x="80" width="30" height="3" rx="1.5" fill="#009FE3" onClick={() => handleClick(2)} />
                    </svg>
                }
            </div>
        </div>
    )

}