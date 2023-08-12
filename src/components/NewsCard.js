import React from "react";
import '../styles/newscard.css';

export default function NewsCard(props) {
    const { header, date, info } = props;
    return (
        <div className="newscard">
            <h3 className="newscard_header">
                {header}
            </h3>
            <p className="newscard_date">
                {date}
            </p>
            <div className="info_holder">
                <p className="newscard_info">
                    {info}
                </p>
            </div>
            <button className="news_readmore">
                read more
            </button>
        </div>
    )
}