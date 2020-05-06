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


const CardItem = (props) => {
  let [resultMap, setResultMap] = useState([]);
  let [roomMap, setRoomMap] = useState([]);
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [bookState, setBookingState] = useState([]);
  const [state, setState] = useState([]);
  const [roomsArray, setRoomsArray] = useState([]);
  const [loadRooms, setLoadRooms] = useState(false);
  const [loadBook, setloadBook] = useState(false);
  
  useEffect(()=>{
      if(props.rooms){
    setState(props.rooms)
    }
    else{
      setState(props.roomsRender)
    }
  }, []);

console.log(props);
  return (
    <div className="cards" className="container">
      <div>
        <div className="row">
          {state.map(item => 
        <div key={item.id} className="col-md">
               <Card className="card-item">
               <CardImg src={item.images[0]} alt="Card image cap"/>
                   <CardBody>
                       <CardTitle>{item.name}</CardTitle>
                       <CardSubtitle><i className="fa fas fa-user">{item.volume.volume_name}</i></CardSubtitle>
                       <CardText>{item.price} сомов</CardText>
                       <Link to={`room/${item.id}`} ><Button className="card-btn">{"Забронировать"}</Button></Link>
                   </CardBody>
                 </Card>
               </div>
             )
          }
        </div>
      </div>
    </div>
  );
}

export default withRouter(CardItem);