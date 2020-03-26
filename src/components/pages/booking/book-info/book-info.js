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

const Aside = () => {
  return (
      <div>
          <Card className="card-item container">
            <CardBody>
                <div className="col-4">
                    <span>Прибытие</span>
                    <span>27 Марта 2020</span>
                    <span>от 12:00</span>
                </div>

                <div className="col-4">
                    <CardTitle>Прибытие</CardTitle>
                    <CardSubtitle>27 Марта 2020</CardSubtitle>
                    <CardText>от 12:00</CardText>
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