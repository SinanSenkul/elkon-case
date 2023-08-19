import React, { useEffect, useState } from "react";
import statistics1 from '../statistics1.png';
import statistics2 from '../statistics1.png';
import statistics3 from '../statistics1.png';
import statistics4 from '../statistics1.png';
import '../styles/statistic.css';
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

export default function Statistic(props) {
    const { image, number, text } = props;
    var [counterOn, setCounterOn] = useState(false);
    return (
        <div id="statisticcontainer">
            <img src={image} alt="img" id="statisticimage"></img>
            <div>
                <ScrollTrigger onEnter={() => setCounterOn(true)} /* onExit={() => setCounterOn(false)} */>
                    {counterOn &&
                        <div id="countercontainer">
                            <div>
                                <CountUp className="countup" start={0} end={number} duration={2} delay={0} /><span id="plus">+</span>
                            </div>
                            <span id="statistictext">{text}</span>
                        </div>
                    }
                </ScrollTrigger>
            </div>
        </div>
    )
}