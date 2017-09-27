import React, { Component } from 'react';
import './navbar.css';
import {HashRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div><img className="logo" src= "https://wolfcreekski.com/images/wolfcreek-logo-blues.png"/>
                <div className="logoTitle"><span>W</span>olf Creek <span>R</span>esort</div></div>
                <div className="navLink"><Link className="Link" to='/'> Home </Link></div>
                <div className="navLink"><Link className="Link" to='/pricing'> Pricing </Link></div>
                <div className="navLink"><Link className="Link" to='/events'> Events </Link></div>                      
                <div className="navLink"><Link className="Link" to='/vacation'> Vacation </Link></div>
                <div className="navLink"><Link className="Link" to='/Shop'> Shop </Link></div>
            </div>
        )
    }
}

export default Navbar;