import React from "react";
import '../styles/newscard.css';

export default function NewsCard(props) {
    const { header, date, info } = props;
    return (
        <div id="newscard_container">
            <p id="newscard_header">
                {header}
            </p>
            <p id="newscard_date">
                {date}
            </p>
            <div id="newscard_info_container">
                <p id="newscard_info">
                    {info}
                </p>
            </div>
            <button id="newscard_readmore">
                read more
            </button>
        </div>
    )
}