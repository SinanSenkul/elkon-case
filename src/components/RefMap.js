import React, { useState } from "react";
import map_frame from '../map_frame.png';
import map_ship from '../map_ship.png';
import '../styles/refmap.css';
import closeicon from '../closeicon.png';
import Header from './Header.js';
import refmap_dialogbox from '../refmap_dialogbox.png';

export default function RefMap() {
    var [mapOn, setMapOn] = useState(false);
    function handleMapOn() {
        setMapOn(!mapOn);
    }
    return (
        <div id="refmap_container">
            <div id="refmap_header_container">
                <Header header={'Reference Map'} />
            </div>
            <div id="refmap_buttonmap_container">
                <div id="refmap_button_container">
                    <button id="refmap_button" onClick={handleMapOn}>
                        {mapOn &&
                            <img src={closeicon} alt="closeicon" id="map_close"></img>
                        }
                        {!mapOn &&
                            <>
                                <img src={map_frame} alt="map_frame" id="map_frame"></img>
                                <img src={map_ship} alt="map_ship" id="map_ship"></img>
                            </>
                        }
                    </button>
                    <img src={refmap_dialogbox} alt="refmap_dialogbox" id="refmap_dialogbox"></img>
                    <span id="refmap_openmap">Open Map</span>
                </div>
                <div id="refmap_top" className={mapOn ? "refmap_top_mapOn" : "refmap_top_mapOff"}>
                </div>
                <div id="refmap_map_container" className={mapOn ? "refmap_mapOn" : "refmap_mapOff"}>
                    <iframe
                        id="refmap_iframe"
                        frameborder="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%C4%B0stanbul%20Anadolu%20Yakas%C4%B1%20OSB%201.Sanayi%20Cad.%20No:6,%2034953%20Tuzla/%C4%B0stanbul+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                </div>
            </div>
        </div>
    )
}