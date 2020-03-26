import React from 'react';
import CardItem from '../../card/card';
import Filter from '../../filter/filter';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';

const Results = (props) => {
  return (
      <div className="container">
        <ScrollToTopControlller />
          <Filter/>
          <h3 className="card-label">Результаты поиска</h3>
        <CardItem cards={props.cards}/>
      </div>
  );
};

export default Results;