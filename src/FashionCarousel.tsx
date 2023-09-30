import React from "react";
import './FashionCarousel.css';
import CarouselItem
 from "./CarouselItem";
export default function FashionCarousel(){
    const items = [
        {
            description: "test",
            icons: require("./Media/example1.svg"),
        },
        {
            description: "test",
            icons: require("./Media/example2.svg"),
        }, 
        {
            description: "test",
            icons: require("./Media/example3.svg"),
        },
    ]
return <div className="carousel">
    <div className="inner">
        {items.map((item, index) => {
        return <CarouselItem item={item} key={index}/>;
        })}
    </div>
    Carousel
    </div>
}