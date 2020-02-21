import React from 'react';
import FormUser from './user-form/user-form';
import './booking.css';
// import {BrowserRouter as Router, Route} from 'react-router-dom'

const Booking = () => {
  return (
      <div className="container row">
        <div className="col-8 form"><FormUser /></div>
      </div>
  );
};

export default Booking;