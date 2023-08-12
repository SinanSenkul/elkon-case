import React from "react";
import Video from './Video.js';
import '../styles/profile.css';
import playicon from '../playicon.png';

export default function Profile() {
    return (
        <div className="profile">
            <h1 className="profile_header">Company Profile</h1>
            <div className="profile_container">
                <div className="profile_info">
                    <p className="profile_p">
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
                    <button className="profile_readmore">read more</button>
                </div>
                <div className="profile_video">
                    <Video />
                    <div className="profile_buttoncontainer">
                        <button className="profile_playbutton">
                            <img src={playicon} alt="playicon"></img>
                        </button>
                        <span className="profile_watchvideo">watch video</span>
                    </div>
                </div>
            </div>
        </div>

    )
}