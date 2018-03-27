import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';


// Import all Components

import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Pricing from './components/Pricing/Pricing.js';
import Events from './components/Events/Events.js';
import Vacation from './components/Vacation/Vacation.js';
import Store from './components/Store/Store.js';
import Lift_tickets from "./components/Shop_items/Lift_tickets/Lift_tickets.js";
import Season_passes from "./components/Shop_items/Season_passes/Season_passes.js";
// import Equipment from "./components/Shop_items/Equipment/Equipment.js";
// import School from "./components/Shop_items/School/School.js";
import Cart from './components/Cart/Cart.js';
// import Checkout from './components/Checkout/Checkout.js';
import Gmap from './components/Map/Gmap.js';
import Skimap from './components/Map/Skimap.js';




class App extends Component {
      
  render() {

      return(

      <div className="App">
          <div>
              <Navbar/>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/pricing' component={Pricing} />
                  <Route path='/events' component={Events} />
                  <Route path='/vacation' component={Vacation} />
                  <Route path='/store' component={Store} />
                  <Route path='/gmap' component={Gmap} />
                  <Route path='/skimap' component={Skimap} />
                  <Route path='/lift_tickets' component={Lift_tickets}/>
                  <Route path='/season_passes' component={Season_passes}/>
                  <Route path='/cart' component={Cart}/>
                </Switch>
              <Footer />
          </div>
      </div>


    );
  }
}

export default App
