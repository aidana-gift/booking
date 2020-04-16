import React from 'react';
import FormUser from './user-form/user-form';
import { withRouter } from 'react-router-dom';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';
import Aside from './book-info/book-info';
import './booking.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom'

const Booking = (props) => {
  console.log(props.location.state)
  console.log(props)
  const info = props.location.state
  return (
      <div>
        <div className="row">
        <ScrollToTopControlller />
        <div className="col-5 form"><FormUser info={info}/></div>
        <div className="col-4 form"><Aside /></div>
        </div> 
      </div>
  );
};

export default withRouter(Booking);