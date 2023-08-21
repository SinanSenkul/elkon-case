import React, { useState } from "react";
import Video from './Video.js';
import '../styles/profile.css';
import playicon from '../playicon.png';
import Header from './Header.js';
import arrow from '../arrow.png';

export default function Profile() {
    var [isOpen, setOpen] = useState(false);

    function setModalOpen() {
        setOpen(true);
    }

    function setModalClose() {
        setOpen(false);
    }

    return (
        <div id="profile_container">
            <div id="profile_header_container">
                <Header header={'About Us'} />
            </div>
            <div id="profile_info_container">
                <div id="profile_text_container">
                    <p id="profile_text">
                        elkon was established in 1980 to design, manufacture,
                        integrate and commission low-voltage electrical equipment
                        and automation systems for the maritime industry. elkon is
                        an international and global brand and has an engineering and
                        production center in Turkey, but the operation area is the
                        whole of Europe. Closely following the trends in developed
                        countries, elkon considers the concept of decarbonization,
                        which means emission reduction and the greenhouse effect,
                        as the company's vision.
                    </p>
                    <button id="profile_readmore_button">
                        <img src={arrow} alt="playicon"></img>
                        read more
                    </button>
                </div>
                <div id="profile_video_container">
                    <Video
                        isOpen = {isOpen}
                        setModalOpen={setModalOpen}
                        setModalClose={setModalClose}
                    />
                    <div id="profile_button_container">
                        <button id="profile_playbutton" onClick={() => setOpen(true)}>
                            <img src={playicon} alt="playicon"></img>
                        </button>
                        <span id="profile_watchvideo">elkon promotional film</span>
                    </div>
                </div>
            </div>
        </div>

    )
}