import React from 'react';
import Slider from '../../slider/slider';
import CardItem from '../../card/card';
import Filter from '../../filter/filter';
import './main.css';

const Main = () => {
  return (
    <div>
      <Slider />
      <div className="container">
        <Filter />
        <h3 className="card-label" >Наши номера</h3>
        <CardItem />
      </div>

    </div>
  );
};

export default Main;