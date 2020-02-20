import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import {  Button } from 'reactstrap';
import '../../../filter/filter.css';
require('react-datepicker/dist/react-datepicker.css');


const Filter = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    return (
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
        <input type="number" name="minSize" min="1" id="size" className="size-input filter-item" placeholder="взрослые"/>
      </div>
        
      <div className="filter-item">
        <input type="number" name="minSize" min="0" id="size" className="size-input filter-item" placeholder="дети"/>
      </div>
        
      <div className="filter-item">
        <Button outline color="info" className="search-btn filter-item">
            <span className="search-btn">Забронировать</span>
          </Button>
      </div>
       
      </div>
    );
  };

  export default Filter;