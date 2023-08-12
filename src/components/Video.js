import React, { useState } from "react";
import YouTube from 'react-youtube';
import '../styles/video.scss';
import ModalVideo from "react-modal-video";
import { ReactDOM } from "react";
import video_cover from '../video_cover.jpg'

export default function Video() {
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="video_container">
            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="NWt-rIGS8Kc"
                onClose={() => setOpen(false)}
                modalVideoCloseBtn
            />

            <div className="btn-primary" onClick={() => setOpen(true)}>
                <img src={video_cover} alt="video_cover" className="video_cover"></img>
            </div>
        </div>
    )
}