import React from 'react';
import Filter from './room-filter/room-filter';
import RoomSlider from './room-slider/room-slider';
import Calendar from './room-calendar/calendar';
import Info from './room-info/room-info';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';
import './room.css'
import './room-slider/room-slider.css';
const heading = "Одноместный номер"
const postHeading = "2500 сом/ночь"
const calendarLabel = "Проверьте наличие мест на Вашу дату";
const Room = () => {
    return (
        <div className="container">
            <div className="row">
                <ScrollToTopControlller />
                <div className="col-12 room-heading">{heading}</div>
                <div className="col-12 room-post-heading">{postHeading}</div>
                <div className="col-8"><RoomSlider /></div>
                <div className="col-4"><Info /></div>
                <div className="col-12 cal-label">{calendarLabel}</div>
                {/* <div className="col-12"><Table /></div> */}
                <div className="col-10 room-calendar"><Calendar /></div>
                <div className="col-12"><Filter /></div>
                
            </div>
        </div>
    )
}

export default Room;