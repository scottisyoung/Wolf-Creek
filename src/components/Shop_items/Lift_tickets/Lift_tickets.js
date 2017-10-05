import React, { Component } from 'react';
import './lift_tickets.css';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';

class Shop_items extends Component {
    constructor(props) {
        super(props)
        this.state={
            products: [],
            adultLT: []
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
        
        const allproducts = this.state.products.map(function(product,i){
            
            return(
              <div key={i}>
                    <div className="LTParent">
                        <div className="LTPname"><div className="LTname">{product.name}</div></div>
                        <div className="LTPprice"><li className="LTPrice">${product.price}</li></div>
                        <div className="ATcart">Add to Cart</div>
                    </div>
              </div>
            )
          })    
          

        return(
        <div>
                <div className="lifttickets">
                <div><h1>LIFT TICKETS</h1></div>
                </div>

                <div className="LTCategories">

                    <div className="LT"><h2>ADULT LIFT TICKETS</h2><div className="productsLT">{allproducts}</div></div>

                    <div className="LT"><h2>SENIOR LIFT TICKETS</h2></div>
                    <div className="LT"><h2>CHILD LIFT TICKETS</h2></div>
                    <div className="LT"><h2>TOT LIFT TICKETS</h2></div>
                    <div className="LT"><h2>MILITARY LIFT TICKETS</h2></div>
                    <div className="LT"><h2>BEGINNER LIFT TICKETS</h2></div>
                </div>

        </div>
        )
    }
}
export default Shop_items;