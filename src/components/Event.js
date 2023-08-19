import React, { useState } from "react";
import '../styles/event.css';
import arrow_right_blue from '../arrow_right_blue.png';

export default function Event(props) {
    const { event_name, event_image, event_date } = props;
    var [onHover, setOnHover] = useState(false);

    return (
        <div
            id="event_container"
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
        >
            <div id="event_image_container">
                <img src={event_image} alt="event_image" id="event_image"></img>
            </div>
            <div id="event_info_container">
                <span id="event_name">{event_name}</span>
                <span id="event_date">{event_date}</span>
                <span id="event_arrow">
                    <img src={arrow_right_blue} alt="arrow_right_blue"></img>
                </span>
            </div>
        </div>
    )

}