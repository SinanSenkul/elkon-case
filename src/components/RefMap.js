import React, { useState } from "react";
import map_frame from '../map_frame.png';
import map_ship from '../map_ship.png';
import '../styles/refmap.css';
import map from '../map.jpg';
import closeicon from '../closeicon.png'

export default function RefMap() {
    var [mapOn, setMapOn] = useState(false);
    function handleMapOn() {
        setMapOn(!mapOn);
    }
    return (
        <div className="refmap">
            <h1 className="refmap_header">
                References Map
            </h1>
            {!mapOn &&
                <div className="refmap_buttoncontainer" onClick={handleMapOn}>
                    <img src={map_frame} alt="map_frame" className="map_frame"></img>
                    <img src={map_ship} alt="map_ship" className="map_ship"></img>
                </div>
            }
            {mapOn &&
                <div className="refmap_buttoncontainer" onClick={handleMapOn}>
                    <img src={closeicon} alt="map_frame" className="closeicon"></img>
                </div>
            }
            {
                mapOn &&
                <div className="map">
                    <img src={map} alt=""></img>
                </div>
            }
        </div>
    )
}