import React, { Component } from 'react';
import './equipment.css';
// import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';

class Equipment extends Component {
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
                <div><h1>EQUIPMENT RENTAL</h1></div>
                </div>

                <div className="LTCategories">

                    <div className="Rent"><h2>ADULT SKI / SNOWBOARD RENTALS</h2><div className="productsLT">{allproducts}</div></div>

                    <div className="Rent"><h2>CHILD SKI / SNOWBOARD RENTALS</h2></div>
                    <div className="Rent"><h2>UNIQUE RENTALS</h2></div>
                </div>

        </div>
        )
    }
}
export default Equipment;