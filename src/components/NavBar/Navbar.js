import React, { Component } from 'react';
import './navbar.css';
import {HashRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
    return (
        <div>
            <Link to='/'> Home </Link>
            <Link to='/pricing'> Pricing </Link>
            <Link to='/events'> Events </Link>                      
            <Link to='/vacation'> Vacation </Link>
            <Link to='/Shop'> Shop </Link>
        </div>
    )
}
}
export default Navbar;