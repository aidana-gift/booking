import React from 'react';
import Header from '../header/header';
import Slider from '../slider/slider';
import CardItem from '../card/card';
import './app.css';

const App = () => {
  return (
    <div>
      <Header />
      <Slider />
      <CardItem />
    </div>
  );
};

export default App;