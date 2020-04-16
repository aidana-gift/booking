import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Form } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import './filter.css';
import 'react-datepicker/dist/react-datepicker.css';

const Filter = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(" ");

  async function handleClick(){
     if((startDate && endDate)){
      await props.history.push({
          pathname: '/results',
          state: { date_from: startDate,
                   date_to: endDate,
                   adults: adults }
        })
    }
    else alert("Заполните поля дат");
  }
  
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
            required
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
            required
          />
        </div>

        

        <div className="filter-item">
          <input
              type="number" 
              name="minSize" 
              min="1" 
              id="size" 
              className="size-input filter-item" 
              placeholder="взрослые" 
              value={adults}
              onChange={e => setAdults(e.target.value)}
              />
        </div>
        

        <div>
            <Form>
            <Button outline color="info" className="search-btn" type="button" onClick={handleClick}>
              <span>{"Поиск"}</span>
            </Button>
            </Form>
        </div>

      </div>
    </div>
  );
};

export default withRouter(Filter);