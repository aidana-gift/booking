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
    src: "https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: "https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg",
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
    <div> 
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