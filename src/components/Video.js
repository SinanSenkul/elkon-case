import React from "react";
import '../styles/video.scss';
import ModalVideo from "react-modal-video";
import video_cover from '../video_cover.jpg'

export default function Video(props) {
    const { isOpen, setModalOpen, setModalClose } = props;

    return (
        <div className="video_container">
            <ModalVideo
                channel='youtube'
                autoplay
                isOpen={isOpen}
                videoId="NWt-rIGS8Kc"
                onClose={setModalClose}
                modalVideoCloseBtn
            />

            <div className="btn-primary" onClick={setModalOpen}>
                <img src={video_cover} alt="video_cover" className="video_cover"></img>
            </div>
        </div>
    )
}