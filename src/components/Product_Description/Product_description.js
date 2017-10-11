import React, { Component } from 'react';
import './product_description.css';

class Product_description extends Component {
    render() {
    return (
        <div>


            {/* CONTROLLER */}

{/* checkuser(){
        const db = req.app.get('db');
        db.get_cart([1]).then((cart)=>{
          if(cart[0]){
            console.log('found cart!')
          } else{
              console.log('not found')
          } 
          
        })
    },
    addToCart(req,res){
        const db = req.app.get('db');
        const {user_id, product_id} = req.body;
        db.get_cart([user_id]).then((cart)=>{
            if(cart[0]){
                // console.log(cart[0])
             db.check_duplicates([product_id, cart[0].id]).then((dup)=>{
                if(dup[0]){
                    console.log(dup[0].qty)
                    db.update_quantity([dup[0].qty + 1, dup[0].product_id]).then(()=>{
                     db.return_cart([cart[0].id]).then((cartItems)=>{
                         res.send(cartItems)
                     })
                       
                    })
                    console.log("duplicate!")
                } else {
                    db.add_to_cart([product_id, cart[0].id]).then(()=>{
                        db.return_cart([cart[0].id]).then((cartItems)=>{
                            res.send(cartItems)
                        })
                    })
                }
             })
            } else{
                db.make_order([user_id]).then(()=>{
                    db.get_cart([user_id]).then((cart)=>{
                        db.add_to_cart([product_id, cart[0].id]).then(()=>{
                            db.return_cart([cart[0].id]).then((cartItems)=>{
                                res.send(cartItems)
                            })
                        })
                    })
                })
            } 
        })
    }
} */}



{/*get_cart */}
{/* select *
from orders
where userid =$1 and fufilled = 'false' */}


{/* check duplicates */}
{/* select *
from lineItems
where product_id =$1 and order_id=$2 */}

{/* update quantity */}
{/* update lineItems
set qty = $1
where product_id = $2 */}

{/* return cart */}
{/* select *
from lineItems
join items on lineItems.product_id = items.id 
where order_id = $1 */}

{/* add to cart
insert into lineItems
(product_id, order_id, qty)
values
($1, $2, 1) */}

{/* make order
insert into orders
(userid)
VALUES
($1); */}

{/* -- create table lineItems(
-- id Serial Primary Key,
-- product_id INT REFERENCES items (id),
-- order_id INT REFERENCES orders (id),
-- Qty INT
-- );
-- create table orders (
-- id serial primary key,
-- shipping VARCHAR(500),
-- billing VARCHAR(500),
-- order_date DATE,
-- total int,
-- userid int REFERENCES users (id)
-- );
-- create table users(
-- id serial primary key,
-- firstname VARCHAR(40),
-- lastname VARCHAR(40),
-- email VARCHAR(300),
-- password VARCHAR (20)
-- ) */}

{/* reducer */}

{/* import axios from 'axios'
const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART";
const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART";
let initialState = {
    shoppingCart: []
}
export default function reducer(state=initialState, action) {
    switch(action.type) {
      
        case ADD_TO_SHOPPING_CART + "_FULFILLED":
        console.log("shoppingcart", action.payload)
        console.log("inside reducer", state)
            return Object.assign({}, state, {shoppingCart:  action.payload});
        case REMOVE_FROM_SHOPPING_CART:
            let newArray = state.shoppingCart.slice();
            newArray.splice(action.payload, 1);
            return Object.assign({}, state, {shoppingCart: newArray});
            
        default:
            return state;
    }
}
export function addToShoppingCart(product) {
    return {
        type: ADD_TO_SHOPPING_CART,
        payload: axios.post('/api/cart', {product_id: product.id, user_id: 1}).then((cart)=>{
            return cart.data
        })
    }
}
export function removeFromShoppingCart(productIndex) {
    return {
        type: REMOVE_FROM_SHOPPING_CART,
        payload: productIndex
    }
} */}










        </div>
    )
}
}
export default Product_description;