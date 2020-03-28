import React, {useState, useEffect} from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import './card.css';
import axios from 'axios';

const CardItem = (props) => {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [volume, setVolume] = useState();
  const [img, setImg] = useState();
  const [state, setState] = useState([]);
  
  useEffect(()=>{
    axios.get("https://cors-anywhere.herokuapp.com/https://radiant-fjord-27627.herokuapp.com/rooms").then(function(res){
    setState(res.data);
  });
  }, []);

  return (
    <div className="cards" className="container">
      <div>
        <div className="row">
           { state.map(item => <div key={item.id} className="col-md">

             <Card className="card-item">
             <CardImg src={"https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg"} alt="Card image cap"/>
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardSubtitle><i className="fa fas fa-user">{item.capacity}</i></CardSubtitle>
                    <CardText>{item.price} сомов</CardText>
                    <Link to={`room/${item.id}`} ><Button className="card-btn">{"Забронировать"}</Button></Link>
                </CardBody></Card></div>)}
        </div>
      </div>
    </div>
  );
}

export default withRouter(CardItem);