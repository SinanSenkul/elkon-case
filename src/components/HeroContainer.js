import React from "react";
import Hero from "./Hero";
import Carousel from "react-material-ui-carousel";
import '../styles/herocontainer.css';
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import References from "./References";
import News from "./News";
import Events from "./Events";
import Profile from "./Profile";
import RefMap from "./RefMap";

export default function HeroContainer() {
    var heros = [
        {
            header1: 'Powering',
            header2: 'Shipbuilding Industry',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati soluta ullam doloribus culpa cupiditate sed nobis quae vitae excepturi aspernatur modi aliquam suscipit, distinctio voluptatibus quo fugiat. Adipisci, laborum laudantium?',
            background: require('../herocover.jpg')
        },
        {
            header1: 'Leader',
            header2: 'In Newest Naval Technologies',
            text: 'Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.',
            background: require('../herocover2.jpg')
        },
        {
            header1: 'Heading For',
            header2: 'Always Beyond Our Limits',
            text: 'No seria cosa neguna en lo món, senyor, per fort que fos, que yo no manifestàs a la majestat vostra per la molta amor e voluntat que tinch de servir-vos. Per bé que sia cosa de gran dolor, yo vull obeir lo manament que·m fa la altesa vostra.',
            background: require('../herocover3.jpg')
        }
    ]
    return (
        <div className="herocontainer">
            <Navbar />
            <div className="carousel">
                <Carousel
                    activeIndicatorIconButtonProps={{
                        style: {
                            color: '#009FE3',
                            backgroundColor: 'white' // 2
                        }
                    }}
                >
                    {
                        heros.map((hero, i) =>
                            <Hero key={i}
                                header1={hero.header1}
                                header2={hero.header2}
                                text={hero.text}
                                background={hero.background}
                            />)
                    }
                </Carousel>
            </div>
            <Statistics />
            <References />
            <Events />
            <Profile />
            <News />
            <RefMap />
        </div>
    )
}