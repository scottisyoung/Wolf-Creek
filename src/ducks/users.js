import axios from 'axios';

const initialState = {
    user: {},
    products: []
}

const GET_PRODUCTS ='GET_PRODUCTS';                                             // The Action
const GET_USER = 'GET_USER';

export function getUser() {
    const user = axios.get('/auth/user').then(res => {                          // Action Creator    
        return res.data;
    })

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

export default function reducer(state = initialState, action) {                 // The Reducer
    switch(action.type) {
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {user: action.payload})             // The Action Payload
        case GET_PRODUCTS + '_FULFILLED':
            return Object.assign({}, state, {products: action.payload} )
        default:
            return state;
    }
}