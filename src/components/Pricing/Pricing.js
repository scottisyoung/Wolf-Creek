import React, { Component } from 'react';
import './pricing.css';
import {HashRouter, Route} from 'react-router-dom';


class Pricing extends Component {
    render() {
    return (

        <div>
            <div className="logParent">
                <div className="log">
                    <div><a className="auth" href={process.env.REACT_APP_LOGIN}><div>Login to Store</div></a></div>
                </div>
            </div>

       </div>
    )
}
}
export default Pricing;

