import React from "react";
import Carousel from "react-grid-carousel";
import Event from "./Event";
import '../styles/events.css';
import Header from './Header.js';

export default function Events() {
    return (
        <div id="events_container">
            <div id="events_header_container">
                <Header header={'Events'} />
            </div>
            <div id="events_carousel_container">
                <Carousel
                    id="events_carousel"
                    cols={3}
                    rows={2}
                    gap={10}
                    loop
                >
                    <Carousel.Item>
                        <Event
                            key={1}
                            event_name={'Dan-Fish International'}
                            event_image={require('../event_danfish.png')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={2}
                            event_name={'Int. World Boat Show'}
                            event_image={require('../event_iwbs.jpg')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={3}
                            event_name={'Europort'}
                            event_image={require('../event_ep.png')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={4}
                            event_name={'Tug Tech'}
                            event_image={require('../event_tt.jpg')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={5}
                            event_name={'NorShipping'}
                            event_image={require('../event_ns.jpg')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={6}
                            event_name={'CFA Show'}
                            event_image={require('../event_cfa.png')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={7}
                            event_name={'Electric Hybrid Marine'}
                            event_image={require('../event_ehm.jpg')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={8}
                            event_name={'World Maritime Week'}
                            event_image={require('../event_wmw.jpg')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={9}
                            event_name={'Dan-Fish International'}
                            event_image={require('../event_danfish.png')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={10}
                            event_name={'Int. World Boat Show'}
                            event_image={require('../event_iwbs.jpg')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={11}
                            event_name={'Europort'}
                            event_image={require('../event_ep.png')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Event
                            key={12}
                            event_name={'Tug Tech'}
                            event_image={require('../event_tt.jpg')}
                            event_date={'01.01.2024'}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div >
    )
}
