import React, { Component } from 'react';
import "./category.css";
import {connect} from 'react-redux';
import {addToCart} from '../../../ducks/users.js';

class Category extends Component {
 

      render() {

        const products = this.props.products
        .filter((product) => {
            console.log(product.category , this.props.category)
            return product.category === this.props.category && product.subcategory === this.props.subcategory    
        })
        .map((product) => {
            return(
            <div key={product.id}>
                <div className="productParent">
                        <div className="products">{product.name}</div> 
                        <div className="products2">$ {product.price}</div> 
                        <div className="products3"><div className = "clickMe" onClick={(e) => {this.props.addToCart(product)}}>Add to Cart</div></div>  
                </div>
            </div>
            )
        })

        return(

            <div>
                <div>
                    {products}
                </div>
            </div>
        )   
    }
}

function mapStateToProps(state) {
    return {
      products: state.products,
    }
  }
  
  export default connect(mapStateToProps, {addToCart})(Category)

