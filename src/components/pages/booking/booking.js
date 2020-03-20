import React from 'react';
import FormUser from './user-form/user-form';
import ScrollToTopControlller from '../../sroll-to-top/scroll-to-top';
import './booking.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom'

const Booking = () => {
  return (
      <div className="container row">
        <ScrollToTopControlller />
        <div className="col-8 form"><FormUser /></div>
      </div>
  );
};

export default Booking;