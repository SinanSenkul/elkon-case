import React from "react";
import '../styles/event.css';

export default function Event(props) {
    const { event_name, event_image, event_date } = props;
    return (
        <div className="event">
            <div className="imagecontainer">
                <img src={event_image} alt="event_image" className="event_image"></img>
            </div>
            <div className="infocontainer">
                <span>{event_name}</span>
                <span className="event_date">{event_date}</span>
            </div>
        </div>
    )

}