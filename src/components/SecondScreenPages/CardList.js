import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import MyCards from "./MyCards";

function CardList(){
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            partialVisibilityGutter: 5 // this is needed to tell the amount of px that should be visible.
        }
    };
    return(

    <Carousel partialVisible={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
    >
        <div className="card-des"><MyCards/></div>
        <div className="card-des"><MyCards/></div>
        <div className="card-des"><MyCards/></div>
        <div className="card-des"><MyCards/></div>
        <div className="card-add"><p className="item-1"><FontAwesomeIcon icon={faPlus} /></p></div>



    </Carousel>
    )
}

export default CardList