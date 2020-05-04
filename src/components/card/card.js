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

// { bookState.map(itm => (state.map(item => {if(dateFrom < itm.date_from && dateTo > itm.date_to && item.name === itm.room){
//   return  <div key={item.id} className="col-md">
//            <Card className="card-item">
//            <CardImg src={"https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg"} alt="Card image cap"/>
//                <CardBody>
//                    <CardTitle>{item.name}</CardTitle>
//                    <CardSubtitle><i className="fa fas fa-user">{item.volume.volume_name}</i></CardSubtitle>
//                    <CardText>{item.price} сомов</CardText>
//                    <Link to={`room/${item.id}`} ><Button className="card-btn">{"Забронировать"}</Button></Link>
//                </CardBody>
//              </Card>
//            </div>
//  }
//  else return}
//  )))}

//        {(() => {
//   if (loadBook && loadRooms) {
//     if(bookState.length != 0 && dateFrom && dateTo){
//       bookState.map(item => {
//         state.map(val =>{
//           if(val.name == item.room){
//             if(dateFrom < item.date_from && dateTo < item.date_from || dateFrom > item.date_to && dateTo > item.date_to){
//             //console.log(val.name);
//             return (
//               <div key={val.id} className="col-md">
//               <Card className="card-item">
//               <CardImg src={"https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg"} alt="Card image cap"/>
//                   <CardBody>
//                       <CardTitle>{val.name}</CardTitle>
//                       <CardSubtitle><i className="fa fas fa-user">{val.volume.volume_name}</i></CardSubtitle>
//                       <CardText>{val.price} сомов</CardText>
//                       <Link to={`room/${val.id}`} ><Button className="card-btn">{"Забронировать"}</Button></Link>
//                   </CardBody>
//                 </Card>
//               </div>
//             )
//            }
//           }
//         })
//       })
//     }
//     else{
//       return(
    //    state.map(item => 
    //     <div key={item.id} className="col-md">
    //            <Card className="card-item">
    //            <CardImg src={"https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg"} alt="Card image cap"/>
    //                <CardBody>
    //                    <CardTitle>{item.name}</CardTitle>
    //                    <CardSubtitle><i className="fa fas fa-user">{item.volume.volume_name}</i></CardSubtitle>
    //                    <CardText>{item.price} сомов</CardText>
    //                    <Link to={`room/${item.id}`} ><Button className="card-btn">{"Забронировать"}</Button></Link>
    //                </CardBody>
    //              </Card>
    //            </div>
    //  )
    //   )}
    
//   } 
//   else{
//     return(
//     state.map(item => 
//       <div key={item.id} className="col-md">
//              <Card className="card-item">
//              <CardImg src={"https://q-cf.bstatic.com/images/hotel/max1024x768/112/112644291.jpg"} alt="Card image cap"/>
//                  <CardBody>
//                      <CardTitle>{item.name}</CardTitle>
//                      <CardSubtitle><i className="fa fas fa-user">{item.volume.volume_name}</i></CardSubtitle>
//                      <CardText>{item.price} сомов</CardText>
//                      <Link to={`room/${item.id}`} ><Button className="card-btn">{"Забронировать"}</Button></Link>
//                  </CardBody>
//                </Card>
//              </div>
//             )
//      ) }
// })()}