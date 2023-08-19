import React from "react";
import Reference from "./Reference";
import Header from "./Header";
import '../styles/references.css';
import Carousel from "react-grid-carousel";
import buttonleft from '../buttonleft.png';
import buttonright from '../buttonright.png';

export default function References() {
    return (
        <div id="references">
            {/* <div id="reference_header_container">
                <h1 id="referenceheader">References</h1>
            </div> */}
            <div id="reference_header_container">
                <Header header={'References'} />
            </div>
            <div id="reference_carousel_container">
                <Carousel
                    id="reference_carousel"
                    cols={4}
                    rows={1}
                    gap={30}
                    loop
                    arrowLeft={() => {
                        return <img src={buttonleft} alt="buttonleft" id="references_left_arrow"></img>
                    }}
                    arrowRight={() => {
                        return <img src={buttonright} alt="buttonright" id="references_right_arrow"></img>
                    }}
                >
                    <Carousel.Item>
                        <Reference
                            ref_name={'LCT (TCG C151 - TCG C158)'}
                            ref_type={'Frigates'}
                            ref_image={require('../ref_tcg.jpg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Reference
                            ref_name={'HB PHOENIX'}
                            ref_type={'Tug Boats'}
                            ref_image={require('../ref_phoenix.jpg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Reference
                            ref_name={'DELICAY'}
                            ref_type={'Fishing Boats'}
                            ref_image={require('../ref_delicay.jpg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Reference
                            ref_name={'ADL 249'}
                            ref_type={'Yachts'}
                            ref_image={require('../ref_adl.jpg')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Reference
                            ref_name={'NB 1119'}
                            ref_type={'Fishing Vessels'}
                            ref_image={require('../ref_nb1119.png')}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Reference
                            ref_name={'NB 75'}
                            ref_type={'Yachts'}
                            ref_image={require('../ref_nb75.jpg')}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}