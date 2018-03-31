import React, { Component } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import image from '../../Images/Icons/shopping-cart-24.ico';
import { connect } from 'react-redux';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">    
                    <div className="navParent">
                        <Link className="Link" to='/'>
                            <div className="logoTitle">
                                <span>W</span>olf Creek <span>R</span>esort
                                <img className="logo" src='https://openclipart.org/image/2400px/svg_to_png/252707/Chrome-Tribal-Wolf-No-Background.png' alt="Wolf Creek Logo"/>
                            </div>
                        </Link>
                    <div className="navLinkParent">
                        <div className="navLink"><Link className="Link" to='/'> HOME </Link></div>
                        <div className="navLink"><Link className="Link" to='/events'> EVENTS </Link></div>                      
                        <div className="navLink"><Link className="Link" to='/vacation'> VACATION </Link></div>
                        <div className="navLink"><Link className="Link" to='/pricing'> PRICING </Link></div>
                        <div className="navLink"><Link className="Link" to='/store'> STORE </Link></div>
                        <div className="navLink1"><a className="auth1" href={process.env.REACT_APP_LOGIN}>Login</a></div>
                        <div className ="navLink2"><a className="auth2" href={process.env.REACT_APP_LOGOUT}>Logout</a></div>
                    </div>
                        <div className ="cart"><Link className="cart2" to='/cart'><img src={image}/>
                            <div className="badgenumber">
                                <div>
                                {
                                        this.props.cart.reduce((sum, items) => {
                                        return sum + (items.qty)
                                        },0)
                                    }
                                </div>
                            </div></Link>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(Navbar)