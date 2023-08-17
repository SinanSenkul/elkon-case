import React from "react";
import Heros from "./Heros";
import Hero from "./Hero";
/* import Carousel from "react-material-ui-carousel"; */
import '../styles/maincontainer.css';
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import References from "./References";
import News from "./News";
import Events from "./Events";
import Profile from "./Profile";
import RefMap from "./RefMap";
import Carousel from 'react-grid-carousel'

export default function MainContainer() {
    return (
        <div id="maincontainer">
            <Navbar />
            <Heros />
            <Statistics />
            {/* <Statistics />
            <References />
            <Events />
            <Profile />
            <News />
            <RefMap /> */}
        </div>
    )
}