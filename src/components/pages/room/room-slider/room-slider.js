import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './room-slider.css';

const items = [
  {
    src: "https://lh3.googleusercontent.com/proxy/_LvUyobNQ3EVQvQWGCCM4S8NHxYADV74Wi70JwK2ju8zCHcIIhaMzVHJb8SB4-5wsXPSU7yLzxb7-Igkv-Q-IziDe2GQV0ex7B6s3ym7EDf4hnU",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: "https://www.bohle.com/media/image/87/f3/ec/BO_5215089-91_PF1_C_zoom6lL5xQ75jUz4C_600x600.jpg",
    altText: 'Slide 2',
    caption: 'Slide 2'
  }
];

const RoomSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag-img"
        tag="div"
        key={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} />
        {/* <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} /> */}
      </CarouselItem>
    );
  });

  return (
    <div className="container room-slider"> 
      <Carousel
        activeIndex={activeIndex}
        previous={previous}
        next={next}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default RoomSlider;