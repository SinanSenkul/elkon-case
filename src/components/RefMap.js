import React, { useState } from "react";
import map_frame from '../map_frame.png';
import map_ship from '../map_ship.png';
import '../styles/refmap.css';
import closeicon from '../closeicon.png';
import Header from './Header.js';
import refmap_dialogbox from '../refmap_dialogbox.png';
import elkonlogo_white from '../elkonlogo_white.png';
import refmap_call from '../refmap_call.png';
import refmap_fax from '../refmap_fax.png';
import refmap_email from '../refmap_email.png';
import refmap_somed from '../refmap_somed.png';

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
                    <span id="refmap_openmap">
                        {!mapOn && 'Open Map'}
                        {mapOn && 'Close Map'}
                    </span>
                </div>
                <div id="refmap_top" className={mapOn ? "refmap_top_mapOn" : "refmap_top_mapOff"}>
                    <div id="refmap_tag_container" className={mapOn ? "refmap_tag_container_mapOn" : "refmap_tag_container_mapOff"}>
                        <a href="#" className="refmap_top_tag">Corporate</a>
                        <a href="#" className="refmap_top_tag">Products</a>
                        <a href="#" className="refmap_top_tag">References</a>
                        <a href="#" className="refmap_top_tag">Media</a>
                        <a href="#" className="refmap_top_tag">Human Resources</a>
                        <a href="#" className="refmap_top_tag">Contact</a>
                    </div>
                    <div id="refmap_contactinfo_container" className={mapOn ? "refmap_contactinfo_container_mapOn" : "refmap_contactinfo_container_mapOff"}>
                        <img src={elkonlogo_white} alt="elkonlogo" id="refmap_logo"></img>
                        <span className="refmap_span">
                            <img src={refmap_call} alt="refmap_call"></img>
                            <p className="refmap_contactinfo">+90 216 395 66 95</p>
                        </span>
                        <span className="refmap_span">
                            <img src={refmap_fax} alt="refmap_fax"></img>
                            <p className="refmap_contactinfo">+90 216 446 23 30</p>
                        </span>
                        <span className="refmap_span">
                            <img src={refmap_email} alt="refmap_email"></img>
                            <p className="refmap_contactinfo">info@elkon-tr.com</p>
                        </span>
                    </div>
                    <div id="refmap_footer" className={mapOn ? "refmap_footer_mapOn" : "refmap_footer_mapOff"}>
                        <span className="refmap_span">
                            <p className="refmap_reserved_text">2022 elkon All rights reserved.</p>
                        </span>
                        <span className="refmap_policy_span">
                            <a href="#" className="refmap_footer_tag">Cookie Policy</a>
                            <a href="#" className="refmap_footer_tag">Privacy Policy</a>
                            <a href="#" className="refmap_footer_tag">Application Text</a>
                        </span>
                        <span className="refmap_span">
                            <img src={refmap_somed} alt="refmap_somed"></img>
                        </span>
                    </div>
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