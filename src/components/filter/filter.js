import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './filter.css';
import 'react-datepicker/dist/react-datepicker.css';


const Filter = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="container">
      <div className="filter row">
        <div>
          <DatePicker
            placeholderText="Въезд"
            selected={startDate}
            onChange={date => setStartDate(date)}
            selectsStart
            minDate={new Date()}
            startDate={startDate}
            endDate={endDate}
            className="filter-item"
          />
        </div>

        <div>
          <DatePicker
            placeholderText="Выезд"
            selected={endDate}
            onChange={date => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="filter-item"
          />
        </div>

        <div className="filter-item">
          <input type="number" name="minSize" min="1" id="size" className="size-input filter-item" placeholder="взрослые" />
        </div>

        <div>
          <Link to='/results'>
            <Button outline color="info" className="search-btn">
              <span>Поиск</span>
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Filter;