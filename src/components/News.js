import React from "react";
import Carousel from "react-grid-carousel";
import NewsCard from "./NewsCard";
import '../styles/news.css';
import Header from './Header.js';

export default function News() {
    return (
        <div id="news_container">
            <div id="news_header_container">
                <Header header={'News'} />
            </div>
            <div id="news_carousel_container">
                <Carousel cols={2} rows={1} gap={0} loop>
                    <Carousel.Item>
                        <NewsCard
                            header={`elkon's voluntary companion: Tesla!`}
                            date={'01.01.2024'}
                            info={`have you met with elkon's new, voluntary companion, Tesla? our new friend Tesla has it's mission as
                            giving us inspirations about anything, no matter in-office or out-office. welcome to the elkon family!
                            good luck with your job! 🎉`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <NewsCard
                            header={`International Tug & Salvage Convention, Exhibition & Awards`}
                            date={'01.01.2024'}
                            info={`Coming soon to Istanbul. The city of water and seas... 
                            #elkon`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <NewsCard
                            header={`Qui ratione voluptatem`}
                            date={'01.01.2024'}
                            info={`Qui ratione voluptatem sequi nesciunt, neque porro quisquam est, 
                            qui dolorem ipsum`}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <NewsCard
                            header={`Nam libero tempore`}
                            date={'01.01.2024'}
                            info={`Nam libero tempore, cum soluta nobis est eligendi optio, 
                            cumque nihil impedit, quo minus id, quod maxime placeat facere 
                            possimus, omnis voluptas assumenda est, omnis dolor repellend[a]us.`}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}