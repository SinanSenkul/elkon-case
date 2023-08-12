import React from "react";
import playicon from '../playicon.png';
import '../styles/hero.css';
import { createUseStyles } from "react-jss";

export default function Hero(props) {
    const { header1, header2, text, background } = props;

    const useStyles = createUseStyles({
        hero: {
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            paddingTop: '12em',
            paddingLeft: '9em',
            paddingBottom: '0.5em',
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "1710px 1000px",
            backgroundSize: 'cover'
        }
    })

    const classes = useStyles();
    return (
        <div className={classes.hero}>
            <p className="header1">{header1}</p>
            <p className="header2">{header2}</p>
            <p className="text">{text}</p>
            <div className="buttoncontainer">
                <button className="readmorebutton">read more</button>
                <button className="playbutton">
                    <img src={playicon} alt="playicon"></img>
                </button>
                <span className="watch_video">watch video</span>
            </div>
        </div>
    )
}