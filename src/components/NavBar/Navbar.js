import React, { Component } from 'react';
import './navbar.css';
import {HashRouter, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>

                <div className="navbar">    
                    <div className="navParent">
                        <div className="logoTitle"><span>W</span>olf Creek <span>R</span>esort
                        <img className="logo" src='https://openclipart.org/image/2400px/svg_to_png/252707/Chrome-Tribal-Wolf-No-Background.png'/></div>
                        <div className="navLink"><Link className="Link" to='/'> HOME </Link></div>
                        <div className="navLink"><Link className="Link" to='/events'> EVENTS </Link></div>                      
                        <div className="navLink"><Link className="Link" to='/vacation'> VACATION </Link></div>
                        <div className="navLink"><Link className="Link" to='/pricing'> PRICING </Link></div>
                        <div className="navLink"><Link className="Link" to='/store'> STORE </Link></div>
                        <div className="navLink1"><a className="auth1" href={process.env.REACT_APP_LOGIN}>Login</a></div>
                        <div className ="navLink2"><a className="auth2" href={process.env.REACT_APP_LOGOUT}>Logout</a></div>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Navbar;