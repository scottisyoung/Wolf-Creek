import React, { Component } from 'react';
import './store_private.css';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';

export default class Store_private extends Component {
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


        return(
            <div>
                <div className="dbtest"> <h3>Lift Tickets</h3> <p>{products}</p></div>
            </div>
        )
    }
}
