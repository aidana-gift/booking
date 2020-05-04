import React, {useState, useEffect} from 'react';
import CardItem from '../card/card';
import Filter from '../filter/filter';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ScrollToTopControlller from '../sroll-to-top/scroll-to-top';

const RenderRooms = (props) => {
  let [resultMap, setResultMap] = useState([]);
  let [roomMap, setRoomMap] = useState([]);
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [bookState, setBookingState] = useState([]);
  const [state, setState] = useState([]);
  const [roomsArray, setRoomsArray] = useState([]);
  const [loadRooms, setLoadRooms] = useState(false);
  const [loadBook, setloadBook] = useState(false);
  const [capacity, setCapacity] = useState();

console.log(props);
  useEffect(()=>{

    requestRooms();
    requestBooking();

    if(props.location.state){
    setDateFrom(props.location.state.date_from)
    setDateTo(props.location.state.date_to)
    setCapacity(props.location.state.adults)
   console.log(dateFrom)
    }

  }, []);

  async function requestRooms(){
    await axios.get("https://neobis-booking.herokuapp.com/rooms/").then(function(res){
    setState(res.data);
    setLoadRooms(true);
    console.log(res.data);
  });
}
async function requestBooking(){
  await axios.get("https://neobis-booking.herokuapp.com/bookings/").then(function(res){
    setBookingState(res.data);
    console.log(res.data)
    setloadBook(true);
});
}
  
async function searchRooms(){
    if(dateFrom && dateTo){
      resultMap = bookState.filter(book => dateFrom <= book.date_from && dateTo >= book.date_from ||
                              dateFrom >= book.date_from && dateTo <= book.date_to ||
                              dateFrom <= book.date_to && dateTo >= book.date_to ||
                              dateFrom <= book.date_from && dateTo >= book.date_to )
    if(resultMap.length != 0){
      resultMap.map(item => {
        state.map(el => {
          if(item.room != el.name && capacity == el.volume.volum_name)
          roomMap.push(el);
        })
      })
    }
    else{
      state.map(el => {
        if(capacity == el.volume.id)
        roomMap.push(el);
      })
    }
                             
    } 
}

// function callback(book){
//   return state.filter(el => el.name != book.room);
// }

if(loadRooms && loadBook){
    searchRooms();
    console.log(resultMap);
    console.log(roomMap, capacity);
    setLoadRooms(false);
    setResultMap(false); 
}

function Choose(props){
  const isFull = props.isFull;
  if(isFull.length != 0){
    return <CardItem rooms={isFull}/>
  }
  else if(dateFrom == undefined){
    return <CardItem rooms={state}/>
  }
  else{
    return "No such rooms"
  }
  
}
  console.log(dateFrom != true)
  return (
      <div className="container">
        <Choose isFull={roomMap} />
      </div>
  );
};

export default withRouter(RenderRooms);