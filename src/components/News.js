import React from "react";
import Carousel from "react-grid-carousel";
import NewsCard from "./NewsCard";
import '../styles/news.css';

export default function News() {
    return (
        <div className="news_container">
            <h1 className="news_header">News</h1>
            <Carousel cols={2} rows={1} gap={10} loop>
                <Carousel.Item>
                    <NewsCard
                        header={`Lorem Ipsum`}
                        date={'01.01.2024'}
                        info={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make 
                            a type specimen book. It has survived not only five centuries, but also the leap
                             into electronic typesetting, remaining essentially unchanged.`}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <NewsCard
                        header={`Sed ut perspiciatis`}
                        date={'01.01.2024'}
                        info={`Sed ut perspiciatis, unde omnis iste natus error sit 
                            voluptatem accusantium doloremque laudantium, 
                            totam rem aperiam eaque ipsa, quae ab illo inventore 
                            veritatis et quasi architecto beatae vitae dicta sunt, 
                            explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, 
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos`}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <NewsCard
                        header={`Qui ratione voluptatem`}
                        date={'01.01.2024'}
                        info={`Qui ratione voluptatem sequi nesciunt, neque porro quisquam est, 
                            qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, 
                            sed quia non numquam [do] eius modi tempora inci[di]dunt, 
                            ut labore et dolore magnam aliquam quaerat voluptatem. 
                            Ut enim ad minima veniam, quis nostrum[d] exercitationem 
                            ullam corporis suscipit laboriosam, nisi ut aliquid ex ea 
                            commodi consequatur?`}
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
    )
}