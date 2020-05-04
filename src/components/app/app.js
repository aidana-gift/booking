import React from 'react';
import Header from '../header/header';
import Main from '../pages/main/main';
import About from '../pages/about/about';
import Contacts from '../pages/contacts/contacts';
import Room from '../pages/room/room1/room1';
import Booking from '../pages/booking/booking';
import Results from '../pages/results/results';
import Footer from '../footer/footer';
import NoMatch from '../pages/noMatch/noMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withTranslation } from 'react-i18next';
import './app.css';


const App = (props) => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div>
          <Switch>
            <Route exact path="/" 
                  render={() => <Main 
                      items={props.state.items} 
                      cards={props.state.cards} />} />
            <Route exact path='/about' 
                  render={() => <About />} />
            <Route exact path='/contacts' 
                  render={() => <Contacts />} />
            <Route exact path={'/room/:id'} 
                  render={(props) => <Room {...props} key={props.location.key}
                                    />}/>
            <Route exact path='/booking' 
                  render={(props) => <Booking  {...props} />}/>
            <Route exact path={'/results'} 
                  render={() => <Results 
                         />} />
            <Route component={NoMatch} />

          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default withTranslation()(App);