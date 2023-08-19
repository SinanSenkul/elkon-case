import React, { useState } from "react";
import '../styles/reference.css';
import arrow from '../arrow.png';

export default function Reference(props) {
    const { ref_name, ref_type, ref_image } = props;
    var [onHover, setOnHover] = useState(false);
    return (
        <div
            id="referencecontainer"
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
        >
            <div id="reference_image_container">
                <img src={ref_image} alt="image" id="reference_image"></img>
            </div>
            {/* <div className="reference_detail_container">
                <p className="reference_name">{ref_name}</p>
                <p className="reference_type">{ref_type}</p>
            </div> */}
            {!onHover &&
                <div className="reference_detail_container">
                <p className="reference_name">{ref_name}</p>
                <p className="reference_type">{ref_type}</p>
            </div>
            }
            {onHover &&
                <div id="reference_button_container">
                    <button id="referencebutton">
                        <img src={arrow} alt="arrow"></img>
                        view reference
                    </button>
                </div>
            }
        </div>
    )
}