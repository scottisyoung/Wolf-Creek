import React, { Component } from 'react';
import './cart.css';
import {HashRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import {getUser} from './../../ducks/users.js';
import axios from 'axios';

class Cart extends Component {
    constructor(props) {
        super(props)
        this.state={
            user:{}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3080/api/auth/user').then(res => {
            this.setState({
            products: res.data
            })
        })

        this.props.getUser();
    }
    render() {
    return (
        <div>
        </div>
    )
}
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Cart)