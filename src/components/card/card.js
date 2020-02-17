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
import {Link} from 'react-router-dom';
import './card.css';


const CardItem = (props) => {
  return (
    <div className="cards" className="container">
        <h3 className="label" >Наши номера</h3>
    <div className="row">
        <div className="col-md">
            <Card className="card-item">
                <CardImg src="https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Двухместный номер с кроватью King size</CardTitle>
                        <CardSubtitle></CardSubtitle>
                    <CardText>2500 сом/ночь</CardText>
                    <Link to='/room'><Button className="card-btn">Забронировать</Button></Link>
                </CardBody>
            </Card>
        </div>
        <div className="col-md">
        <Card className="card-item">
        <CardImg src="https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Одноместный номер</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>2500 сом/ночь</CardText>
          <Link to='/room'><Button className="card-btn">Забронировать</Button></Link>
        </CardBody>
      </Card>
        </div>
        <div className="col-md">
        <Card className="card-item">
        <CardImg src="https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Двухместный номер с 2 кроватями</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText>2500 сом/ночь</CardText>
          <Link to='/room'><Button className="card-btn">Забронировать</Button></Link>
        </CardBody>
      </Card>
        </div>
      </div>
    </div>
  );
};

export default CardItem;