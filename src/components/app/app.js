import React from 'react';
import Header from '../header/header';
import Main from '../pages/main/main';
import About from '../pages/about/about';
import Contacts from '../pages/contacts/contacts';
import Room from '../pages/room/room';
import Booking from '../pages/booking/booking';
import Results from '../pages/results/results';
import Admin from '../pages/admin/admin';
import Edit from '../pages/admin/edit/edit';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './app.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path='/about' component={About} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/room' component={Room} />
            <Route path='/booking' component={Booking} />
            <Route path='/results' component={Results} />
            <Route path='/admin' component={Admin} />
            <Route path='/edit' component={Edit} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;