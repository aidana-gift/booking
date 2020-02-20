import React from 'react';
import Filter from './room-filter/room-filter';
import RoomSlider from './room-slider/room-slider';
import Calendar from './room-calendar/calendar';
import './room.css'
import './room-slider/room-slider.css';
const heading = "Одноместный номер"
const Room = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 room-heading">{heading}</div>
                <div className="col-6"><RoomSlider /></div>
                <div className="col-12"><Calendar /></div>
                <div className="col-12"><Filter /></div>
                
            </div>
        </div>
    )
}

export default Room;