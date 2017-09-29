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
                        <div><div className="logoTitle"><span>W</span>olf Creek <span>R</span>esort
                        <img className="logo" src= "https://wolfcreekski.com/images/wolfcreek-logo-blues.png"/></div></div>
                        <div className="navLink"><Link className="Link" to='/'> Home </Link></div>
                        <div className="navLink"><Link className="Link" to='/events'> Events </Link></div>                      
                        <div className="navLink"><Link className="Link" to='/vacation'> Vacation </Link></div>
                        <div className="navLink"><Link className="Link" to='/pricing'> Pricing </Link></div>
                        <div className="navLink"><Link className="Link" to='/store'> Store </Link></div>
                        <div className="navLink1"><a className="auth1" href={process.env.REACT_APP_LOGIN}>Store Login</a></div>
                        <div className ="navLink2"><a className="auth2" href={process.env.REACT_APP_LOGOUT}>Logout</a></div>
                    </div>
                </div>   

            </div>
        )
    }
}

export default Navbar;