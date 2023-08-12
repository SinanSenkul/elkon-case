import React from "react";
import Carousel from "react-grid-carousel";
import Event from "./Event";
import '../styles/events.css';

export default function Events() {
    return (
        <div className="events">
            <h1 className="events_header">Events</h1>
            <Carousel cols={3} rows={2} gap={10} loop>
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
                        event_name={'Interferry'}
                        event_image={require('../event_interferry.png')}
                        event_date={'01.01.2024'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Event
                        key={3}
                        event_name={'World Maritime Week'}
                        event_image={require('../event_wmw.jpg')}
                        event_date={'01.01.2024'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Event
                        key={4}
                        event_name={'Boat Virtual Event'}
                        event_image={require('../event_bve.jpg')}
                        event_date={'01.01.2024'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Event
                        key={5}
                        event_name={'Default Event'}
                        event_image={require('../event_bve.jpg')}
                        event_date={'01.01.2024'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Event
                        key={6}
                        event_name={'Default Event 2'}
                        event_image={require('../event_bve.jpg')}
                        event_date={'01.01.2024'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Event
                        key={7}
                        event_name={'Default Event 3'}
                        event_image={require('../event_bve.jpg')}
                        event_date={'01.01.2024'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Event
                        key={8}
                        event_name={'Default Event 4'}
                        event_image={require('../event_bve.jpg')}
                        event_date={'01.01.2024'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Event
                        key={9}
                        event_name={'Default Event 5'}
                        event_image={require('../event_bve.jpg')}
                        event_date={'01.01.2024'}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <Event
                        key={10}
                        event_name={'Default Event 6'}
                        event_image={require('../event_bve.jpg')}
                        event_date={'01.01.2024'}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
