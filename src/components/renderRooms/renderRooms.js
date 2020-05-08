import React, {useState, useEffect, useRef} from 'react';
import CardItem from '../card/card';
import Filter from '../filter/filter';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import ScrollToTopControlller from '../sroll-to-top/scroll-to-top';

const RenderRooms = (props) => {
  let [resultMap, setResultMap] = useState([]);
  let roomMap = [];
  const [dateFrom, setDateFrom] = useState(props.location.state);
  const [dateTo, setDateTo] = useState(props.location.state);
  const [bookState, setBookingState] = useState([]);
  const [state, setState] = useState([]);
  const [loadRooms, setLoadRooms] = useState(false);
  const [capacity, setCapacity] = useState(props.location.state);
  const isMountedRef = useRef(null);

console.log(props);

useEffect(()=>{
  isMountedRef.current = true;
  requestRooms();

  if(props.location.state){
    setDateTo(dateTo.date_to)
    setDateFrom(dateFrom.date_from )
    
    setCapacity(capacity.adults)
    //searchRooms()
  }
  
 console.log(dateFrom, dateTo)

  return () => isMountedRef.current = false;

}, []);

  async function requestRooms(){
    await axios.get("https://neobis-booking.herokuapp.com/front").then(function(res){
    setState(res.data.results.Room);
    setBookingState(res.data.results.Booking);
    setLoadRooms(true);
    console.log(res.data);
  });
}
  
 function searchRooms(){

    if(dateFrom && dateTo){
      resultMap = bookState.filter(book => dateFrom <= book.date_from && dateTo >= book.date_from ||
                              dateFrom >= book.date_from && dateTo <= book.date_to ||
                              dateFrom <= book.date_to && dateTo >= book.date_to ||
                              dateFrom <= book.date_from && dateTo >= book.date_to )
                              console.log(resultMap)
    if(resultMap.length != 0){
      resultMap.map(item => {
        console.log(item)
        state.map(el => {
          console.log(el)
          if(capacity){
            if(item.room != el.name && capacity == el.volume.id){
              roomMap.length = 0
              roomMap.push(el);
            }
            
          }
          else{
            if(item.room != el.name){
              roomMap.length = 0
            return roomMap.push(el);
            }
            
          }
          
        })
      })
      console.log(roomMap)
    }
    else{
      state.map(el => {
        if(capacity == el.volume.id)
        roomMap.push(el);
      })
    }
                             
    } 
}
if(dateFrom){
  searchRooms()
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
console.log(resultMap);
console.log(roomMap, capacity);
  console.log(loadRooms)
  console.log(dateFrom, dateTo)
  return (
      <div className="container">
        <Choose isFull={roomMap} />
      </div>
  );
};

export default withRouter(RenderRooms);