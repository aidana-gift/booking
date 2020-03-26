import React from 'react';
import Header from '../header/header';
import Main from '../pages/main/main';
import About from '../pages/about/about';
import Contacts from '../pages/contacts/contacts';
import Room1 from '../pages/room/room1/room1';
import Room2 from '../pages/room/room2/room2';
import Room2bed from '../pages/room/room2bed/room2bed';
import Booking from '../pages/booking/booking';
import Results from '../pages/results/results';
import Admin from '../pages/admin/admin';
import Edit from '../pages/admin/edit/edit';
import Footer from '../footer/footer';
import NoMatch from '../pages/noMatch/noMatch';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
            <Route exact path='/room1' 
                  render={() => <Room1 
                                    cards={props.state.cards}/>}/>
            <Route exact path='/room2' 
                  render={() => <Room2 
                                    cards={props.state.cards}/>}/>
            <Route exact path='/room2bed' 
                  render={() => <Room2bed 
                                    cards={props.state.cards}/>}/>
            <Route exact path='/booking' 
                  render={() => <Booking />}/>
            <Route exact path='/results' 
                  render={() => <Results 
                        cards={props.state.cards} />} />
            <Route exact path='/admin' 
                  render={() => <Admin />} />
            <Route exact path='/edit' 
                  render={() => <Edit />} />
            <Route component={NoMatch} />

          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;