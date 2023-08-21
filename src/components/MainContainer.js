import React from "react";
import Heros from "./Heros";
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import References from "./References";
import News from "./News";
import Events from "./Events";
import Profile from "./Profile";
import RefMap from "./RefMap";
import '../styles/maincontainer.css';

export default function MainContainer() {
    return (
        <div id="maincontainer">
            <Navbar />
            <Heros />
            <Statistics />
            <References />
            <Events />
            <Profile />
            <News />
            <RefMap />
        </div>
    )
}