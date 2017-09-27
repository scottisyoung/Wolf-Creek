import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios';

import Navbar from

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
