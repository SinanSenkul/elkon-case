import React from "react";
import Reference from "./Reference";
import '../styles/references.css';
import Carousel from "react-grid-carousel";

export default function References() {
    return (
        <div className="references">
            <h1 className="ref_header">References</h1>
            <div className="ref_carousel">
                <Carousel cols={3} rows={1} gap={10} loop>
                    <Carousel.Item>
                        <Reference
                            ref_name={'Frigates'}
                            ref_image={require('../ref_tcg.jpg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Reference
                            ref_name={'Carriers'}
                            ref_image={require('../ref_phoenix.jpg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Reference
                            ref_name={'Fishing Vessels'}
                            ref_image={require('../ref_delicay.jpg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Reference
                            ref_name={'Yachts'}
                            ref_image={require('../ref_adl.jpg')}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}