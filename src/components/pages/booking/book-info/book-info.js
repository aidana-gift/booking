import React, { useEffect, useState } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
import dateformat from 'dateformat';
import './book-info.css';

const Aside = (props) => {
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")
    const [room, setRoom] = useState("")
    //const [roomName, setRoomName] = useState("")
   let checkin = new Date(dateFrom);
   let checkout = new Date(dateTo)
   let diff = (checkout.getTime() - checkin.getTime())/(1000 * 3600 * 24)
   console.log(props.info)
    useEffect(()=>{
        const date_from = dateformat(props.info.date_from, 'yyyy-mm-dd')
        const date_to = dateformat(props.info.date_to, 'yyyy-mm-dd')
        setDateFrom(date_from);
        setDateTo(date_to);
        setRoom(props.info.room);
        console.log(props.info.date_from);
      }, []);
    return (
        <div>
            <Card className="card-item">
                <CardBody>
                    <div className="top-info">
                        <div className="reserv-aside">
                            <CardTitle className="checks">Прибытие</CardTitle>
                            <CardSubtitle className="reserv-date">{dateFrom}</CardSubtitle>
                            <CardText className="checks">от 12:00</CardText>
                        </div>
                        <div className="reserv-aside">
                            <CardTitle className="checks">Отъезд</CardTitle>
                            <CardSubtitle className="reserv-date">{dateTo}</CardSubtitle>
                            <CardText className="checks">до 12:00</CardText>
                        </div>
                    </div>

                    <div className="reserv-aside">
                            <CardTitle>Номер</CardTitle>
                            <CardTitle>Количество</CardTitle>
                            <CardTitle>Цена номера</CardTitle>
                    </div>

                    <div className="reserv-aside">
                            <CardTitle>{room.name}, {props.info.room.category.name}</CardTitle>
                            <CardTitle>{diff} ночей, {props.info.room.volume.id} гостей</CardTitle>
                            <CardTitle>{room.price} сомов</CardTitle>
                    </div>

                    <div className="final">
                        <div className="reserv-aside">
                                <CardTitle>Итого: </CardTitle>
                        </div>

                        <div className="reserv-aside">
                                <CardTitle>{room.price} сомов</CardTitle>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Aside;
