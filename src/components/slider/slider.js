import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './slider.css';

const items = [
  {
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: "https://servetechno.org/web/uploads/3.jpg",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: "https://servetechno.org/web/uploads/3.jpg",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Slider = () => {
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
        className="custom-tag"
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

export default Slider;