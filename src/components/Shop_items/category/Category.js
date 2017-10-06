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
              <div key={product.id}>
                    <div className="LTParent">
                        <div className="LTPname"><div className="LTname">{product.name}</div></div>
                        <div className="LTPprice"><li className="LTPrice">${product.price}</li></div>
                        <div className="ATcart"> Add to Cart</div>
                    </div>
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