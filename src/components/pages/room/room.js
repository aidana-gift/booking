import React from 'react';
import Filter from '../../filter/filter';
import RoomSlider from './room-slider/room-slider';
import './room-slider/room-slider.css';
const heading = "Одноместный номер"
const Room = () => {
    return (
        <div className="contaner">
            <div className="row">
                <div className="col-12">{heading}</div>
                <div className="col-6"><RoomSlider /></div>
                <div className="col-12"><Filter /></div>
            </div>
        </div>
    )
}

export default Room;