import React from 'react';
import Header from '../header/header';
import Main from '../pages/main/main';
import About from '../pages/about/about';
import Contacts from  '../pages/contacts/contacts';
import Room from '../pages/room/room';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import './app.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
          <div>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path='/about' component={About} />
              <Route path='/contacts' component={Contacts} />
              <Route path='/room' component={Room} />
              <Redirect  to='/' />
            </Switch>
          </div>
      </div>
    </Router>
  );
};

export default App;