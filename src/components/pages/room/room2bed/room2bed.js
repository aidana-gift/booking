import React from 'react';
import Filter from '../room-filter/room-filter';
import RoomSlider from '../room-slider/room-slider';
import Calendar from '../room-calendar/calendar';
import Info from '../room-info/room-info';
import ScrollToTopControlller from '../../../sroll-to-top/scroll-to-top';
import '../room1/room.css';
import '../room-slider/room-slider';

const calendarLabel = "Проверьте наличие мест на Вашу дату";
const Room2bed = (props) => {
    return (
        <div className="container">
            <div className="row">
                <ScrollToTopControlller />
                <div className="col-12 room-heading">{props.cards[2].title}</div>
                <div className="col-12 room-post-heading">{props.cards[2].price}</div>
                <div className="col-8"><RoomSlider /></div>
                <div className="col-4"><Info /></div>
                <div className="col-12 cal-label">{calendarLabel}</div>
                <div className="col-10 room-calendar"><Calendar /></div>
                <div className="col-12"><Filter /></div>
                
            </div>
        </div>
    )
}

export default Room2bed;