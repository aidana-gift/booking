import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';


const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const markedData = ['2020-03-20','2017-11-16']
  // markedDates= {{
  //   [this.state.markedData]: {selected: true, marked: true},
  //   }}
  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": [
        subDays(new Date(), 6),
        subDays(new Date(), 7),
        subDays(new Date(), 8)
      ]
    },
    {
      "react-datepicker__day--highlighted-custom-2": [
        addDays(new Date(), 1),
        addDays(new Date(), 2),
        addDays(new Date(), 3),
        addDays(new Date(), 4)
      ]
    }
  ];
  return (
    <div className="room-calendar">
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        highlightDates={highlightWithRanges}
        inline
        dateFormat="yyyy-mm-dd"
      />
    </div>
  );
};

export default Calendar;


