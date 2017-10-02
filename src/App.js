import React, { Component } from 'react';
import './App.css';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import promiseMiddleware from 'redux-promise-middleware';
import axios from 'axios';

// Import all Components
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Pricing from './components/Pricing/Pricing.js';
import Events from './components/Events/Events.js';
import Vacation from './components/Vacation/Vacation.js';
import Store from './components/Store/Store.js';
import Shop_items from './components/Shop_items/Shop_items.js';
import Product_Description from './components/Product_Description/Product_description.js';
import Cart from './components/Cart/Cart.js';
import Checkout from './components/Checkout/Checkout.js';
import Gmap from './components/Map/Gmap.js';
import Skimap from './components/Map/Skimap.js';


class App extends Component {
      constructor(props) {
        super(props)
        this.state = {
        }
      }

  render() {

      return(

      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/events' component={Events} />
          <Route path='/vacation' component={Vacation} />
          <Route path='/store' component={Store} />
          <Route path='/gmap' component={Gmap} />
          <Route path='/skimap' component={Skimap} />

        </Switch>
        
        <Footer />
      </div>

    );
  }
}

export default App;
