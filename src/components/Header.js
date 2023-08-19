import React from "react";
import '../styles/header.css';

export default function Header(props) {
    const { header } = props;
    return (
        <div id="hdr_container">
            <p id="hdr1">{header}</p>
            <p id="hdr2">{header}</p>
            <div id="line"></div>
        </div>
    )

}