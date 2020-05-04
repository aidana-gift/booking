import React, {useState, useEffect} from 'react';
import Filter from '../room-filter/room-filter';
import RoomSlider from '../room-slider/room-slider';
import Calendar from '../room-calendar/calendar';
import Info from '../room-info/room-info';
import ScrollToTopControlller from '../../../sroll-to-top/scroll-to-top';
import './room.css'
import '../room-slider/room-slider';
import axios from 'axios'

const calendarLabel = "Проверьте наличие мест на Вашу дату";
const Room = (props) => {

const [state, setState] = useState([]);
const [loading, setloading] = useState(false);
const id = props.match.params.id;
 
useEffect(()=>{
    async function getRoom(){
        await axios.get("https://neobis-booking.herokuapp.com/rooms/").then(function(res){
    //setState(res.data);
      res.data.map(function(item){
      if(item.id == id){
          setloading(true)
           setState(item);
      }
  })
  });}
  
  getRoom()
  }, []);



    console.log(state);
  
  console.log(id);
    return (
        <div className="container">
            {(() => {
        if (loading != false) {
          return (
            <div className="row">
            <ScrollToTopControlller />
           <div className="col-12 room-heading">{state.name}</div>
            <div className="col-12 room-post-heading">{state.price} сомов</div>
            <div className="col-8"><RoomSlider roomId={id}/></div>
            <div className="col-4"><Info room={state}/></div>
            <div className="col-12 cal-label">{calendarLabel}</div>
            <div className="col-10 room-calendar"><Calendar room = {state.name}/></div>
            <div className="col-12"><Filter room={state}/></div>
        </div>
          )
          
        }  else {
          return (
            
            <div>Loading...</div>
          )
        }
      })()}
           
        </div>
    )
}

export default Room;