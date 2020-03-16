import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'
import subDays from 'date-fns/subDays';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';


const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const busyData = ['2020-03-25','2020-03-27'];
  const bookedData = ['2020-03-19','2020-03-20'];
  const busyDataMapped = busyData.map(item => new Date(item));
  const bookedDataMapped = bookedData.map(item => new Date(item));

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": 
      busyDataMapped
    },
    {
      "react-datepicker__day--highlighted-custom-2": 
      bookedDataMapped
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


