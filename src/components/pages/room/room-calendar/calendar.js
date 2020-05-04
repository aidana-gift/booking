import React, {useState, useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './calendar.css';
import axios from 'axios'


const Calendar = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [roomName, setRoomName] = useState("blank");
  let [busyDates, setBusyDates] = useState([]);
  const [book, setBook] = useState();
  const [load, setLoad] = useState(false);
  let busyDatesMapped;
  const url = "https://neobis-booking.herokuapp.com/bookings/"

  useEffect(()=>{
    let mount = true;
    async function getRooms(roomName){
      await axios.get(url).then(function(res){
        if(mount){
        setRoomName(props.room);
        setBook(res.data)
        setLoad(true);
    //     res.data.map(function(item){
    //     if(item.room == roomName){
    //        setBusyDates(item.date_mass);  
    //     }
    // })
  }
    });
  }
  
    getRooms()
    
    return () => {
      mount = false;
    }
    // getRooms(roomName);
    
  }, [url]);

  console.log(props);
if(load != false){
  book.map(function(item){
    if(item.room == props.room){
      item.date_mass.map(function(date){
        busyDates.push(date)
      })
    }
  })
  //busyDatesMapped = busyDates.map(item => new Date(item));
}
console.log(book);
// if(props.room){
//   getRooms();
// }

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": 
      busyDates.map(item => new Date(item))
    }
  ];

console.log(busyDates)

  return (
    <div className="room-calendar">
      <DatePicker
        dateFormat="YYYY-MM-DD"
        selected={startDate}
        //onChange={date => setStartDate(date)}
        highlightDates={highlightWithRanges}
        inline
      />
    </div>
  );
};

export default Calendar;


