import React, { Component } from 'react';
import './shop_items.css';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';

class Shop_items extends Component {
    constructor(props) {
        super(props)
        this.state={
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
              <li className="dblist">{product.name}</li>
              <li className="dblist">${product.price}</li>
              </div>
            )
          })


        return(
            <div>
                <div className="dbTest"> <h3>Lift Tickets</h3>{products}</div>
            </div>
        )
    }
}
export default Shop_items;