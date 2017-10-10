import axios from 'axios';


// INITIAL STATE

const initialState = {
    user: {},
    products: [],
    cart: []
}

// CONSTANTS  THE ACTION

const GET_PRODUCTS ='GET_PRODUCTS';                                             
const GET_USER = 'GET_USER';
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";


// ACTION CREATORS 

export function getUser() {
    const user = axios.get('/auth/user').then(res => {                           
        return res.data;
    })
}

export function addToCart(product) {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

// const newOrder =[...this.state.order, order];

// axios.post("http://localhost:3080/api/order", {order: order}).then((res) => {
//     this.setState({
//         order: res.data
//     })
// })

export function removeFromCart(productIndex) {
    console.log(productIndex)
    return {
        type: REMOVE_FROM_CART,
        payload: productIndex
    }
}

export function getProducts() {
    const products = axios.get('/api/all_products').then(res => {
        return res.data;
    }).catch(err=>console.log(err))
    return {
        type: GET_PRODUCTS,
        payload: products
    }
}

// REDUCER

export default function reducer(state = initialState, action) {                
    switch(action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})                 // The Action Payload
        case GET_PRODUCTS + '_FULFILLED':
            return Object.assign({}, state, {products: action.payload} )
        case ADD_TO_CART:
            return Object.assign({}, state, {
                cart:[...state.cart, action.payload]});
        case REMOVE_FROM_CART:
                let newArray = state.cart.slice();
                newArray.splice(action.payload, 1);
                return Object.assign({}, state, {
                    cart: newArray});
        default:
            return state;
    }
}


