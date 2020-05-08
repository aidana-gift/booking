import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Form } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import dateformat from 'dateformat';
import { useTranslation } from 'react-i18next';
import './filter.css';
import 'react-datepicker/dist/react-datepicker.css';

const Filter = (props) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(" ");

  const { t } = useTranslation();

  async function handleClick(e){
    e.preventDefault();
    
     if((startDate && endDate)){
       if(props.location.pathname != "/results"){
        props.history.push({
          pathname: '/results',
          state: { date_from: dateformat(startDate, 'yyyy-mm-dd'),
                   date_to: dateformat(endDate,  'yyyy-mm-dd'),
                   adults: adults }
        })
       }
       else{
          window.location.reload()
          props.history.push({
          state: { date_from: dateformat(startDate, 'yyyy-mm-dd'),
                   date_to: dateformat(endDate,  'yyyy-mm-dd'),
                   adults: adults }
        })
          
       }
    }

    else alert("Заполните поля дат");
  }
  
  return (
    <div className="container">
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

        

        <div className="filter-item">
          <input
              type="number" 
              name="minSize" 
              min="1" 
              id="size" 
              className="size-input filter-item" 
              placeholder={t("adults")}
              value={adults}
              onChange={e => setAdults(e.target.value)}
              />
        </div>
        

        <div>
            <Form>
            <Button outline color="info" className="search-btn" type="submit" onClick={((e) => handleClick(e))}>
              <span>{t("search")}</span>
            </Button>
            </Form>
        </div>

      </div>
    </div>
  );
};

export default withRouter(Filter);