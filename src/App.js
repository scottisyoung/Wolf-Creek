import React, { Component } from 'react';
import './App.css';
import {HashRouter, Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';

// Import all Components
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';
import Pricing from './components/Pricing/Pricing.js';
import Events from './components/Events/Events.js';
import Vacation from './components/Vacation/Vacation.js';
import Shop from './components/Shop/Shop.js';
import Shop_items from './components/Shop_items/Shop_items.js';
import Product_Description from './components/Product_Description/Product_description.js';
import Cart from './components/Cart/Cart.js';
import Checkout from './components/Checkout/Checkout.js';

class App extends Component {
      constructor(props) {
        super(props)
        this.state = {
          products: []
        }
      }

componentDidMount() {
  axios.get('http://localhost:3080/api/all_products').then(res => {
    this.setState({
      products: res.data
    })
  })
}


  render() {

    const products = this.state.products.map(function(product,i){
      return(
        <div key={i}>
        <li>{product.name}</li>
        <li>{product.price}</li>
        </div>
      )
    })

    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pricing' component={Pricing} />
          <Route path='/events' component={Events} />
          <Route path='/vacation' component={Vacation} />
          <Route path='/shop' component={Shop} />
        </Switch>


        <h1>Wolf Creek Ski Resort</h1>
        <div><img className="App-logo" src= "https://wolfcreekski.com/images/wolfcreek-logo-blues.png"/></div>

        <div className="dbtest"><h3>Lift Tickets</h3>
        <p>{products}</p>
        </div>



      </div>
    );
  }
}

export default App;
