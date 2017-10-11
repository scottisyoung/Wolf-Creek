import React, { Component } from 'react';
import './cart.css';
import { connect } from 'react-redux';
import {getUser} from './../../ducks/users.js';
// import axios from 'axios';
import {removeFromCart} from '../../ducks/users.js';

class Cart extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state={
    //         user:{}
    //     }
    // }

    
    // componentDidMount() {
    //     axios.get('http://localhost:3080/api/auth/user').then(res => {
    //         this.setState({
    //         products: res.data
    //         })
    //     })

    //     // this.props.getUser();

    // }



    render() {
                
        let shoppingCartDisplay = this.props.cart.map((product, i) => {
            return (
                <div key={i} className='item-display'>

               <div className="CartParent"> 
                    <div className="CartName"><div><span className="itemspan">Item Name:</span><br /> {product.name}</div></div>
                    <div className="CartDescription"><div><span className="itemspan">Item Description:</span><br /> {product.description}</div></div>
                    <div className="CartPrice"><div><span className="itemspan">Price:</span><br />{product.price}<br /></div></div>
                    <div className="QuantityCart"><div>Quantity <input type="number" placeholder="1" name="quantity" min="1" max='999'/></div></div>
                    <div className ="RemoveCart" onClick={(e) => this.props.removeFromCart(i)}><div className="remove">REMOVE</div></div>
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