import React, {useState, useEffect} from 'react';
import CardItem from '../../card/card';
import Filter from '../../filter/filter';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';
import RenderRooms from '../../renderRooms/renderRooms';

const Results = (props) => {
  console.log(props)
  return (
      <div className="container">
        <ScrollToTopControlller />
          <Filter/>
          <h3 className="card-label">Результаты поиска</h3>
        <RenderRooms />
      </div>
  );
};

export default withRouter(Results);