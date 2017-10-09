import React, { Component } from 'react';
import {connect} from 'react-redux';

class Category extends Component {

      render() {

        const products = this.props.products
        .filter((product) => {
            console.log(product.category , this.props.category)
            return product.category === this.props.category && product.subcategory === this.props.subcategory    
        })
        .map((product) => {
            return(
            <div>
                        <div key={product.id}></div>
                        <div className="products">{product.name} ${product.price}</div> 
                        <div className="products2">Add to Cart</div>
            </div>
            )
        })

        return(
            <div>
                {products}
            </div>
        )   
    }
}

function mapStateToProps(state) {
    return {
      products: state.products
    }
  }
  
  export default connect(mapStateToProps, {})(Category)