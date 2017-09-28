import React, { Component } from 'react';
import './store.css';
import {HashRouter, Route} from 'react-router-dom';
import axios from 'axios';

class Store extends Component {
   
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
export default Store;