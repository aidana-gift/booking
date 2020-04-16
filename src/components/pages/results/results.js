import React from 'react';
import CardItem from '../../card/card';
import Filter from '../../filter/filter';
import { withRouter } from 'react-router-dom';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';

const Results = (props) => {
  console.log(props)
  return (
      <div className="container">
        <ScrollToTopControlller />
          <Filter/>
          <h3 className="card-label">Результаты поиска</h3>
        <CardItem results={props.location.state}/>
      </div>
  );
};

export default withRouter(Results);