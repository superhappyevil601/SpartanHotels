import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import HotelSearch from './HotelSearch/HotelSearch';
import HotelSearchDemo from './HotelSearchDemo/HotelSearchDemo';
import UserProfile from './UserProfile/UserProfile';
import Reservations from './Reservations/Reservations'
import Checkout from './Checkout/Checkout';
import RoomPage from './RoomPage/RoomPage';
import Recoverage from './Recoverage/Recoverage';
import Accesscode from './Recoverage/Accesscode';
import Confirmation from './Confirmation/Confirmation';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/UserProfile" component={UserProfile}/>
          <Route exact path="/Reservations" component={Reservations}/>
          <Route path="/HotelSearchDemo" component={HotelSearchDemo}/>
          <Route path="/HotelSearch" component={HotelSearch}/>
          <Route exact path="/Checkout" component={Checkout}/>
          <Route path="/RoomPage" component={RoomPage}/>
          <Route exact path="/Recoverage" component={Recoverage} />
          <Route exact path="/Accesscode" component={Accesscode} />
          <Route exact path="/Confirmation" component={Confirmation} />



        </div>
      </Router>

    );
  }
}

export default App;
