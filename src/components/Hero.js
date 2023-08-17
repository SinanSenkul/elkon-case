import React from "react";
import playicon from '../playicon.png';
import '../styles/hero.css';
import arrow from '../arrow.png';

export default function Hero(props) {
    const { activeSlide } = props;

    const data = [
        {
            header1: 'Powering',
            header2: 'Shipbuilding Industry',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati soluta ullam doloribus culpa cupiditate sed nobis quae vitae excepturi aspernatur modi aliquam suscipit',
            cover: require('../herocover0.jpg')
        },
        {
            header1: 'Creating',
            header2: 'New Ideas For Future',
            text: 'Distinctio voluptatibus quo fugiat. Adipisci, laborum laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati soluta ullam doloribus culpa cupiditate sed nobis quae vitae excepturi aspernatur modi aliquam suscipit, distinctio voluptatibus quo fugiat. Adipisci, laborum laudantium?',
            cover: require('../herocover1.jpg')
        },
        {
            header1: 'Competitive',
            header2: 'In Every Aspect',
            text: 'Obcaecati soluta ullam doloribus culpa cupiditate sed nobis quae vitae excepturi aspernatur modi aliquam suscipit, distinctio voluptatibus quo fugiat. Adipisci, laborum laudantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
            cover: require('../herocover2.jpg')
        },
    ]

    return (
        <div id="herocontainer">
            <img src={data[activeSlide].cover} alt="background" id="herocover"></img>
            <div id="infocontainer">
                <p id="header1">{data[activeSlide].header1}</p>
                <p id="header2">{data[activeSlide].header2}</p>
                <div id="textcontainer">
                    <p id="text">{data[activeSlide].text}</p>
                </div>
            </div>
            <div id="buttoncontainer">
                <button id="readmorebutton" className="readmorebutton">
                    <img src={arrow} alt="playicon"></img>
                    read more
                </button>
                <div id="watchvideocontainer">
                    <button id="playbutton">
                        <img src={playicon} alt="playicon"></img>
                    </button>
                    <span id="watchvideotext">watch video</span>
                </div>
            </div>
        </div>
    )
}