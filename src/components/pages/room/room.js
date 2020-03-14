import React from 'react';
import Filter from './room-filter/room-filter';
import RoomSlider from './room-slider/room-slider';
import Calendar from './room-calendar/calendar';
import Info from './room-info/room-info';
import Table from './room-table/room-table';
import './room.css'
import './room-slider/room-slider.css';
const heading = "Одноместный номер"
const postHeading = "2500 сом/ночь"
const calendarLabel = "Проверьте наличие мест на Вашу дату";
const Room = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 room-heading">{heading}</div>
                <div className="col-12 room-post-heading">{postHeading}</div>
                <div className="col-6"><RoomSlider /></div>
                <div className="col-6"><Info /></div>
                <div className="col-12 cal-label">{calendarLabel}</div>
                <div className="col-12 cal-label"><Table /></div>
                <div className="col-12 room-calendar"><Calendar /></div>
                <div className="col-12"><Filter /></div>
                
            </div>
        </div>
    )
}

export default Room;