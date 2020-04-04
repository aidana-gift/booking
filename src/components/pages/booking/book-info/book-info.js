import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

import './book-info.css';

const Aside = () => {
    return (
        <div>
            <Card className="card-item">
                <CardBody>
                    <div className="top-info">
                        <div className="reserv-aside">
                            <CardTitle className="checks">Прибытие</CardTitle>
                            <CardSubtitle className="reserv-date">27 Марта 2020</CardSubtitle>
                            <CardText className="checks">от 12:00</CardText>
                        </div>
                        <div className="reserv-aside">
                            <CardTitle className="checks">Отъезд</CardTitle>
                            <CardSubtitle className="reserv-date">28 Марта 2020</CardSubtitle>
                            <CardText className="checks">до 12:00</CardText>
                        </div>
                    </div>

                    <div className="reserv-aside">
                            <CardTitle>Номер</CardTitle>
                            <CardTitle>Количество</CardTitle>
                            <CardTitle>Цена номера</CardTitle>
                    </div>

                    <div className="reserv-aside">
                            <CardTitle>Номер с 2 кроватями</CardTitle>
                            <CardTitle>2 ночи, 1 взрослый</CardTitle>
                            <CardTitle>2500 сомов</CardTitle>
                    </div>

                    <div className="final">
                        <div className="reserv-aside">
                                <CardTitle>Итого(1 ночь, 1 взрослый): </CardTitle>
                        </div>

                        <div className="reserv-aside">
                                <CardTitle>2500 сомов</CardTitle>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default Aside;



/*
<div className="container">
          <aside className="reservation-aside">
              <div className="reservation">
                  <div className="reservation-section reservation-section-dates">
                      <div className="reservation-dates">
                          <div className="reservation-date reservation-date-checkin">
                              <span className="reservation-date__title">Прибытие</span>
                              <div className="reservation-date__date">
                                  <span className="reservation-date__day" data-date-format="d">27</span>
                                  <span className="reservation-date__week" data-date-format="l">Пятница</span>
                                  <span className="reservation-date__year" data-date-format="M Y">Март 2020</span>
                              </div>
                              <span className="reservation-date__time">от 12:00</span>
                          </div>
                      </div>
                  </div>
                  <div className="reservation-section reservation-section-room"></div>
                  <div className="reservation-section reservation-section-totals"></div>
              </div>
          </aside>
      </div>
*/