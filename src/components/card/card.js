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
import { Link } from 'react-router-dom';
import './card.css';

const CardItem = (props) => {
  console.log(props);
  return (
    <div className="cards" className="container">
      <div className="row">
        <div className="col-md">
          <Card className="card-item">
            <CardImg src={props.cards[0].src} alt="Card image cap" />
            <CardBody>
              <CardTitle>{props.cards[0].title}</CardTitle>
              <CardSubtitle><i className="fa fas fa-user">{props.cards[0].volume}</i></CardSubtitle>
              <CardText>{props.cards[0].price}</CardText>
              <Link to='/room1'><Button className="card-btn">{props.cards[0].btnText}</Button></Link>
            </CardBody>
          </Card>
        </div>
        <div className="col-md">
          <Card className="card-item">
            <CardImg src={props.cards[1].src} alt="Card image cap" />
            <CardBody>
              <CardTitle>{props.cards[1].title}</CardTitle>
              <CardSubtitle><i className="fa fas fa-user">{props.cards[1].volume}</i></CardSubtitle>
              <CardText>{props.cards[1].price}</CardText>
              <Link to='/room2'><Button className="card-btn">{props.cards[1].btnText}</Button></Link>
            </CardBody>
          </Card>
        </div>
        <div className="col-md">
          <Card className="card-item">
            <CardImg src={props.cards[2].src} alt="Card image cap" />
            <CardBody>
              <CardTitle>{props.cards[2].title}</CardTitle>
              <CardSubtitle><i className="fa fas fa-user">{props.cards[2].volume}</i></CardSubtitle>
              <CardText>{props.cards[2].price}</CardText>
              <Link to='/room2bed'><Button className="card-btn">{props.cards[2].btnText}</Button></Link>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}



export default CardItem;