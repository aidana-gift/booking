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
import Footer from '../footer/footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './app.css';

const App = () => {

  console.log(Header);
  return (
    <Router>
      <div className="app">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contacts' component={Contacts} />
            <Route exact path='/room' component={Room} />
            <Route exact path='/booking' component={Booking} />
            <Route exact path='/results' component={Results} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/edit' component={Edit} />
            <Redirect to='/' />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;