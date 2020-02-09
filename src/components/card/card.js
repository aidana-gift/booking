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
import './card.css';

const CardItem = (props) => {
  return (
    <div>
        <h3 className="label" >Наши номера</h3>
      <Card className="card-item">
        <CardImg src="https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Номер с кроватью King size</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>2500 сом/ночь</CardText>
          <Button className="card-btn">Забронировать</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardItem;