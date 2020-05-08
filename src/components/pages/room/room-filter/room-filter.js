import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import {  Button, Form } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../../filter/filter.css';
import 'react-datepicker/dist/react-datepicker.css';


const Filter = (props) => {
  
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [adults, setAdults] = useState(" ");
    const { t } = useTranslation();
    console.log(props)
    async function handleClick(){
      if((startDate && endDate)){
           await props.history.push({
             pathname: '/booking',
             state: {date_from: startDate,
                     date_to: endDate,
                     room: props.room,
                     }})
      }
      else return alert("Заполните поля дат");
    }

    return (
      <div className="filter row">
        <div>
        <DatePicker
          placeholderText={t("checkin")}
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
          placeholderText={t("checkout")}
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
      
      {/* <div className="filter-item">
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
  */}
      <div className="filter-item">
            <Form>
            <Button outline color="info" className="search-btn" type="button" onClick={handleClick}>
              <span>{t("bookbtn")}</span>
            </Button>
            </Form>
        </div>
       
      </div>
    );
  };

  export default withRouter(Filter);