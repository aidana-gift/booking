import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';


const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const busyData = ['2020-04-26', '2020-04-28'];
  // const busyDataFrom = ['2020-04-26'];
  // const busyDataTo= ['2020-04-28'];
  const bookedData = ['2020-05-01','2020-05-5'];
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

//   function dataPick(){
//     let dataArray = [];
//   while(busyDataFrom < busyDataTo){
    
//     dataArray.push(busyDataFrom.getData()+1)
//   }
//   return dataArray;
// }
// dataPick();
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


