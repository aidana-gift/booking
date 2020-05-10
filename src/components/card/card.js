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
import { useTranslation } from 'react-i18next';
import './card.css';


const CardItem = (props) => {
  const [state, setState] = useState([]);
  
  const { t } = useTranslation();
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
          {state.map((item) => 
        <div key={item.id} className="col-3">
               <Card className="card-item">
               <CardImg src={item.images[0]} alt="Card image cap" className="card-img"/>
                   <CardBody>
                       <CardTitle>{item.name}</CardTitle>
                        <CardSubtitle >{item.category.name}</CardSubtitle>
                       <CardSubtitle><i className="fa fas fa-user font-margin"> {item.volume.volume_name}</i></CardSubtitle>
                       <CardText>{item.price} сомов</CardText>
                       <Link to={`room/${item.id}`} ><Button className="card-btn">{t("bookbtn")}</Button></Link>
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