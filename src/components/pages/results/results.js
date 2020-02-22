import React from 'react';
import CardItem from '../../card/card';
import Filter from '../../filter/filter';

const Results = () => {
  return (
      <div className="container">
          <Filter />
          <h3 className="card-label">Результаты поиска</h3>
        <CardItem />
      </div>
  );
};

export default Results;