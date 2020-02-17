import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import {  Button } from 'reactstrap';
import './filter.css';
require('react-datepicker/dist/react-datepicker.css');


const Filter = () => {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    return (
      <div className="row filter">
        <div>
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          className="filter-item"
        />
        </div>
       
       <div>
       <DatePicker
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
        <input type="number" name="minSize" id="size" className="size-input filter-item" placeholder="взрослые"/>
      </div>
        
      <div className="filter-item">
        <input type="number" name="minSize" id="size" className="size-input filter-item" placeholder="дети"/>
      </div>
        
      <div className="filter-item">
        <Button outline color="info" className="search-btn filter-item">
            <span className="search-btn">Поиск</span>
          </Button>
      </div>
       
      </div>
    );
  };

  export default Filter;