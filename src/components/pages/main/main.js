import React, {useState, useEffect} from 'react';
import Slider from '../../slider/slider';
import CardItem from '../../card/card';
import Filter from '../../filter/filter';
import axios from 'axios';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';
import RenderRooms from '../../renderRooms/renderRooms';
import './main.css';

const Main = (props) => {
  const [state, setState] = useState([]);
    useEffect(()=>{
    async function requestRooms(){
        await axios.get("https://neobis-booking.herokuapp.com/rooms/").then(function(res){
        setState(res.data);
      });
    }

  }, []);

  console.log(state);
  return (
    
    <div>
      <ScrollToTopControlller/>
      <Slider items={props.items}/>
      <div className="container">
        <Filter/>
        <h3 className="card-label" >Наши номера</h3>
        <RenderRooms />
      </div>

    </div>
  );
};

export default Main;