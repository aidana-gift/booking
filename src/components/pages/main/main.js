import React from 'react';
import Slider from '../../slider/slider';
import CardItem from '../../card/card';
import Filter from '../../filter/filter';
// import {BrowserRouter as Router, Route} from 'react-router-dom'

const Main = () => {
  return (
      <div>
        <Slider />
        <Filter />
        <CardItem />
      </div>
  );
};

export default Main;