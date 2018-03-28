import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import {getUser} from './../../ducks/users.js';
import axios from 'axios';
import {removeFromCart} from '../../ducks/users.js';
import StripeCheckout from 'react-stripe-checkout';
// import stripe from './StripeKey/stripeKey.js';


class Cart extends Component {
        constructor(props) {
            super(props) 
            this.state = {
            }

        this.onToken=this.onToken.bind(this);
        }

        onToken(token) {
                  token.card = void 0;
                  console.log('token', this.state);
                  axios.post('/api/payment', { token, amount: 0.00, options: this.state} ).then(response => {
                    alert('we are in business')
                  });
                }
 
    render() {
                
        let shoppingCartDisplay = this.props.cart.map((product, i) => {
            return (
                <div key={i} className='item-display'>

               <div className="spaceKeeper"></div>
               <div className="CartParent"> 
                    <div className="CartName"><div><span className="itemspan">Item Name:</span><br /> {product.name}</div></div>
                    <div className="CartDescription"><div><span className="itemspan">Item Description:</span><br /> {product.description}</div></div>
                    <div className="CartPrice"><div><span className="itemspan">Price:</span><br />{product.price}<br /></div></div>
                    <div className="QuantityCart"> Quantity 
                            <div>
                            <input className="number" 
                                   type="number" 
                                   value= {product.qty} 
                                   name="quantity" 
                                   min="1" 
                                   max='999' 
                                   onChange={(e) => {}}>
                            </input></div>
                    </div>
                    <div className ="RemoveCart" onClick={(e) => this.props.removeFromCart(product.id)}><div className="remove">REMOVE</div></div>
                </div>
                
                </div>
            )
        })


        let total =    this.props.cart.reduce((sum, item) => {
                        return sum + (item.price * item.qty)
                        },0.00)
        

    return (
        <div>
                <div className="CartBackground"> 
    
                        <div className="emptyParent">
                            {shoppingCartDisplay[0] ? shoppingCartDisplay:
                            <div className="emptyCart"><div>Your Cart is Currently Empty</div></div>}
                        </div>

            <div className="TotalParent">
                <div className="CartTotal"> Total:</div>
                <div className="cartTotal"> $&nbsp;
                {
                    this.props.cart.reduce((sum, item) => {
                        return sum + (item.price * item.qty)
                    },0.00)
                }
                </div>
                <div className="total">
     
                    <div>
                        <StripeCheckout
                            token={this.onToken}
                            stripeKey={process.env.REACT_APP_STRIPE_PUBLIC }
                            amount={total * 100}
                        />
                    </div>

                </div>
                        <div className="spaceKeeper"></div>
            
            
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





