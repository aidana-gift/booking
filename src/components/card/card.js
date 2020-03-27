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
import { Link } from 'react-router-dom';
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
                    <CardText>{item.price}</CardText>
                    <Link to='/room' id={item.id}><Button className="card-btn">{"Забронировать"}</Button></Link>
                </CardBody></Card></div>)}
        </div>
      </div>
    </div>
  );
}

{/* <Card className="card-item">
                  <CardImg src={i.image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{i.name}</CardTitle>
                    <CardSubtitle><i className="fa fas fa-user">{i.capacity}</i></CardSubtitle>
                    <CardText>{props.cards[0].price}</CardText>
                    <Link to='/room1'><Button className="card-btn">{Забронировать}</Button></Link>
                  </CardBody>
                </Card>  */}
        {/* // <div className="col-md">
        //   <Card className="card-item">
        //     <CardImg src={props.cards[1].src} alt="Card image cap" />
        //     <CardBody>
        //       <CardTitle>{props.cards[1].title}</CardTitle>
        //       <CardSubtitle><i className="fa fas fa-user">{props.cards[1].volume}</i></CardSubtitle>
        //       <CardText>{props.cards[1].price}</CardText>
        //       <Link to='/room2'><Button className="card-btn">{props.cards[1].btnText}</Button></Link>
        //     </CardBody>
        //   </Card>
        // </div>
        // <div className="col-md">
        //   <Card className="card-item">
        //     <CardImg src={props.cards[2].src} alt="Card image cap" />
        //     <CardBody>
        //       <CardTitle>{props.cards[2].title}</CardTitle>
        //       <CardSubtitle><i className="fa fas fa-user">{props.cards[2].volume}</i></CardSubtitle>
        //       <CardText>{props.cards[2].price}</CardText>
        //       <Link to='/room2bed'><Button className="card-btn">{props.cards[2].btnText}</Button></Link>
        //     </CardBody>
        //   </Card>
        // </div>
 */}



export default CardItem;