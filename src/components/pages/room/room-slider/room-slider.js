import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import './room-slider.css';
import axios from 'axios';

const RoomSlider = (props) => {
  const [state, setState] = useState();
  let images = [];
  const [load, setLoad] = useState(false);

    useEffect(()=>{

    requestRooms();

  }, []);

  if(load){
  state.map((item) => {
    if(item.id == props.roomId){
      images = item.images;
    }
  })
}

  async function requestRooms(){
    await axios.get("https://neobis-booking.herokuapp.com/rooms/").then(function(res){
    setState(res.data);
    setLoad(true);
    console.log(res.data);
  });
}


console.log(props);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }
console.log(images)
  const slides = images.map((item) => {
    return (
      <CarouselItem
        className="custom-tag-img"
        tag="div"
        key={item}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item} />
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
        <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default RoomSlider;