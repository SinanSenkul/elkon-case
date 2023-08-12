import React from "react";
import Statistic from "./Statistic";
import '../styles/statistics.css';

export default function Statistics() {
    const data = [
        {
            image: require('../statistics1.png'),
            number: 283,
            text: 'Automation Projects'
        },
        {
            image: require('../statistics2.png'),
            number: 266,
            text: 'Electrical Projects'
        },
        {
            image: require('../statistics3.png'),
            number: 170,
            text: 'Happy Employees'
        },
        {
            image: require('../statistics4.png'),
            number: 25,
            text: 'Automation Engineers'
        }
    ]
    return (
        <div className="statisticscontainer">
            {
                data.map((dt, i) =>
                    <Statistic key={i}
                        image={dt.image}
                        number={dt.number}
                        text={dt.text}
                    />)
            }
        </div>
    )
}