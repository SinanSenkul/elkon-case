import React from "react";
import '../styles/reference.css';

export default function Reference(props) {
    const { ref_name, ref_image } = props;
    return (
        <div className="reference">
            <img src={ref_image} alt="image" className="ref_image"></img>
            <p className="ref_name">{ref_name}</p>
            <button className="ref_button">→ view reference</button>
        </div>
    )
}