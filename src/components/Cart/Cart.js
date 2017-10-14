import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import {getUser} from './../../ducks/users.js';
// import axios from 'axios';
import {removeFromCart} from '../../ducks/users.js';

class Cart extends Component {
 
    render() {
                
        let shoppingCartDisplay = this.props.cart.map((product, i) => {
            return (
                <div key={i} className='item-display'>

               <div className="CartParent"> 
                    <div className="CartName"><div><span className="itemspan">Item Name:</span><br /> {product.name}</div></div>
                    <div className="CartDescription"><div><span className="itemspan">Item Description:</span><br /> {product.description}</div></div>
                    <div className="CartPrice"><div><span className="itemspan">Price:</span><br />{product.price}<br /></div></div>
                    <div className="QuantityCart"><div>Quantity <input type="number" placeholder="1" name="quantity" min="1" max='999'/></div></div>
                    <div className ="RemoveCart" onClick={(e) => this.props.removeFromCart(product.id)}><div className="remove">REMOVE</div></div>
                </div>
                
                </div>
            )
        })



    return (
        <div>
            <div>
                <div className="CartBackground"> 
    
                        <div className="emptyParent">
                            {shoppingCartDisplay[0] ? shoppingCartDisplay:
                            <div className="emptyCart"><div>Your Cart is Currently Empty</div></div>}
                        </div>
                
                <div className="cartTotal">
                {
                    this.props.cart.reduce((sum, item) =>{
                        return sum + (item.price * item.qty)
                    },0)
                }
                </div>
                <div>
                {
                    this.props.cart.reduce((sum, items) => {
                        return sum + (items.qty)
                    },0)
                }
                </div>


                </div>
            </div>
        </div>
    )
}
}
function mapStateToProps(state) {
    return {
        user: state.user,
        cart: state.cart
    }
}
export default connect(mapStateToProps, {getUser, removeFromCart})(Cart)