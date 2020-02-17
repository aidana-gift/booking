import React from 'react';
import Filter from '../../filter/filter';
import RoomSlider from './room-slider/room-slider';
import './room-slider/room-slider.css';

const Room = () => {
    return (
        <div className="contaner">
            <div className="row">
                <div className="col-8"><RoomSlider /></div>
                <div className="col-4"><Filter /></div>
            </div>
        </div>
    )
}

export default Room;