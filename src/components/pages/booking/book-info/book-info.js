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
import { useTranslation } from 'react-i18next';

const Aside = (props) => {
    const [dateFrom, setDateFrom] = useState("")
    const [dateTo, setDateTo] = useState("")
    const [room, setRoom] = useState("")
    const { t } = useTranslation();

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
                            <CardTitle className="checks">{t("checkin")}</CardTitle>
                            <CardSubtitle className="reserv-date">{dateFrom}</CardSubtitle>
                            <CardText className="checks">{t("from12")}</CardText>
                        </div>
                        <div className="reserv-aside">
                            <CardTitle className="checks">{t("checkout")}</CardTitle>
                            <CardSubtitle className="reserv-date">{dateTo}</CardSubtitle>
                            <CardText className="checks">{t("to12")}</CardText>
                        </div>
                    </div>

                    <div className="reserv-aside">
                            <CardTitle>{t("room")}</CardTitle>
                            <CardTitle>{t("quantity")}</CardTitle>
                            <CardTitle>{t("price")}</CardTitle>
                    </div>

                    <div className="reserv-aside">
                            <CardTitle>{room.name}, {props.info.room.category.name}</CardTitle>
                            <CardTitle>{diff} {t("nights")}, {props.info.room.volume.volume_name} {t("guests")}</CardTitle>
                            <CardTitle>{room.price} {t("soms")}</CardTitle>
                    </div>

                    <div className="final">
                        <div className="reserv-aside">
                                <CardTitle>{t("total")}: </CardTitle>
                        </div>

                        <div className="reserv-aside">
                                <CardTitle>{room.price} {t("soms")}</CardTitle>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Aside;
